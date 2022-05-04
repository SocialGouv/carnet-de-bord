from uuid import UUID

from asyncpg import Record
from asyncpg.connection import Connection

from api.db.crud.rome_code import get_rome_code_by_description_and_code
from api.db.models.beneficiary import Beneficiary
from api.db.models.notebook import Notebook
from api.db.models.rome_code import RomeCode
from api.db.models.wanted_job import WantedJob


async def find_wanted_job_for_notebook(
    notebook: Notebook, rome_code_id: str, description: str
) -> WantedJob | None:
    for wanted_job in notebook.wanted_jobs:
        if (
            wanted_job.rome_code.code == rome_code_id
            and wanted_job.rome_code.description == description
        ):
            return wanted_job


async def find_wanted_job_for_beneficiary(
    beneficiary: Beneficiary, rome_code_id: str, description: str
) -> WantedJob | None:
    if beneficiary.notebook is not None:
        return await find_wanted_job_for_notebook(
            beneficiary.notebook, rome_code_id, description
        )


async def insert_wanted_job_for_notebook(
    connection: Connection,
    notebook: Notebook,
    rome_code_id: str,
    description: str,
) -> WantedJob | None:

    rome_code: RomeCode | None = await get_rome_code_by_description_and_code(
        connection, description, rome_code_id
    )

    if rome_code:
        await connection.execute(
            """
            INSERT INTO public.wanted_job (notebook_id, rome_code_id)
            VALUES ($1, $2)
            """,
            notebook.id,
            rome_code.id,
        )
