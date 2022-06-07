import logging

import dask.dataframe as dd
from asyncpg.connection import Connection
from pandas.core.series import Series

from api.core.db import get_connection_pool
from api.core.settings import settings
from api.db.crud.beneficiary import get_beneficiary_from_csv
from api.db.crud.external_data import (
    get_last_external_data_by_beneficiary_id_and_source,
    insert_external_data_for_beneficiary,
    update_external_data,
)
from api.db.crud.wanted_job import (
    find_wanted_job_for_notebook,
    insert_wanted_job_for_notebook,
)
from api.db.models.beneficiary import Beneficiary
from api.db.models.external_data import ExternalData, ExternalDataUpdate, ExternalSource
from api.db.models.notebook import Notebook
from api.db.models.wanted_job import WantedJob
from cdb_csv.csv_row import PrincipalCsvRow

FORMAT = "[%(asctime)s:%(filename)s:%(lineno)s - %(funcName)20s() ] %(message)s"
logging.basicConfig(level=logging.INFO, format=FORMAT)


async def parse_principal_csv_with_db(connection: Connection, principal_csv: str):

    df = dd.read_csv(
        principal_csv,
        sep=";",
        dtype={"adresse_ligne3": "object", "adresse_ligne5": "object"},
    )

    row: Series
    for _, row in df.iterrows():

        logging.info(
            "{id} - Trying to import main row {id}".format(
                id=row["identifiant_unique_de"]
            )
        )

        csv_row: PrincipalCsvRow = await map_principal_row(row)

        if csv_row.brsa:

            beneficiary: Beneficiary | None = await get_beneficiary_from_csv(
                connection, csv_row
            )

            if beneficiary and beneficiary.notebook is not None:

                logging.info(
                    "{} - Found matching beneficiary {}}".format(
                        row["identifiant_unique_de"], beneficiary.id
                    )
                )

                # Keep track of the data we want to insert
                await check_existing_external_data(connection, beneficiary)

                await check_wanted_jobs_for_csv_row(
                    connection,
                    csv_row,
                    beneficiary.notebook,
                    row["identifiant_unique_de"],
                )

            else:
                logging.info(
                    "{} - No matching beneficiary with notebook found".format(
                        row["identifiant_unique_de"]
                    )
                )
        else:
            logging.info(
                "{} - Skipping, BRSA field is No for".format(
                    row["identifiant_unique_de"]
                )
            )


async def check_existing_external_data(
    connection: Connection, beneficiary: Beneficiary
) -> ExternalData | None:

    # Do we already have some external data for this beneficiary?
    external_data: ExternalData | None = (
        await get_last_external_data_by_beneficiary_id_and_source(
            connection, beneficiary.id, ExternalSource.PE
        )
    )

    if external_data is None:
        # If not, we should insert it

        logging.info("No external_data for {}".format(beneficiary.id))
        external_data: ExternalData | None = await insert_external_data_for_beneficiary(
            connection, beneficiary, ExternalSource.PE
        )
    else:
        # If we have some, let's update it.
        # @TODO: check MD5 to avoid double imports

        logging.info("Found external_data for {}".format(beneficiary.id))
        logging.info(external_data)

        external_data.data = beneficiary.dict()
        updated_external_data: ExternalData | None = await update_external_data(
            connection, external_data
        )

        external_data = updated_external_data

    return external_data


async def parse_principal_csv(principal_csv: str):
    pool = await get_connection_pool(settings.hasura_graphql_database_url)

    # Take a connection from the pool.
    if pool:
        async with pool.acquire() as connection:
            # Open a transaction.

            await parse_principal_csv_with_db(connection, principal_csv)
    else:
        logging.error("Unable to acquire connection from DB pool")


async def check_wanted_jobs_for_csv_row(
    connection: Connection,
    csv_row: PrincipalCsvRow,
    notebook: Notebook,
    unique_identifier: str,
):
    for (rome_code, rome_label) in [
        (csv_row.rome_1, csv_row.rome_1_label),
        (csv_row.rome_2, csv_row.rome_2_label),
    ]:
        wanted_job: WantedJob | None = await check_and_insert_wanted_job(
            connection,
            notebook,
            rome_code,
            rome_label,
        )
        if wanted_job:
            logging.info(
                "{} - Wanted job {} inserted".format(unique_identifier, wanted_job)
            )
        else:
            logging.info("{} - NO Wanted job inserted".format(unique_identifier))


async def check_and_insert_wanted_job(
    connection: Connection, notebook: Notebook, rome_code: str, rome_label: str
) -> WantedJob | None:
    """
    Returns the inserted WantedJob or None if the job was not inserted
    """

    wanted_job: WantedJob | None = await find_wanted_job_for_notebook(
        notebook, rome_code, rome_label
    )

    if not wanted_job:
        return await insert_wanted_job_for_notebook(
            connection, notebook, rome_code, rome_label
        )


async def map_principal_row(row: Series) -> PrincipalCsvRow:
    return PrincipalCsvRow(
        unique_id=row["identifiant_unique_de"],
        title=row["civilite"],
        first_name=row["prenom"],
        last_name=row["nom"],
        place_of_birth=row["lieu_naissance"],
        date_of_birth=row["date_naissance"],
        rome_1=row["rome_1"],
        rome_1_label=row["appelation_rome_1"],
        rome_2=row["rome_2"],
        rome_2_label=row["appelation_rome_2"],
        brsa=row["brsa"],
    )
