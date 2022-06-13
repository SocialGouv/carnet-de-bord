from datetime import datetime
from typing import List
from uuid import UUID, uuid4

from asyncpg import Record
from asyncpg.connection import Connection
from dateutil.relativedelta import relativedelta

from api.db.models.account import AccountDB
from api.db.models.role import RoleEnum


def parse_account_from_record(record: Record) -> AccountDB:
    return AccountDB(
        id=record["id"],
        username=record["username"],
        type=record["type"],
        access_key=record["access_key"],
        access_key_date=record["access_key_date"],
        last_login=record["last_login"],
        admin_id=record["admin_id"],
        manager_id=record["manager_id"],
        orientation_manager_id=record["orientation_manager_id"],
        admin_structure_id=record["admin_structure_id"],
        professional_id=record["professional_id"],
        beneficiary_id=record["beneficiary_id"],
        confirmed=record["confirmed"],
        onboarding_done=record["onboarding_done"],
        created_at=record["created_at"],
        updated_at=record["updated_at"],
    )


async def insert_account(
    connection: Connection,
    username: str,
    type: RoleEnum,
    confirmed: bool,
    foreign_key_id: UUID,
) -> AccountDB | None:

    access_key = uuid4()
    access_key_date = datetime.now() + relativedelta(months=+1)
    role_id_key = "admin_id" if type == RoleEnum.ADMIN_CDB else f"{type}_id"
    record = await connection.fetchrow(
        """
            INSERT INTO public.account(username, type, confirmed, {role_id_key}, access_key, access_key_date)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, username, type, access_key, access_key_date, last_login, admin_id, manager_id, orientation_manager_id, admin_structure_id, professional_id, beneficiary_id, confirmed, onboarding_done, created_at, updated_at
        """.format(
            role_id_key=role_id_key
        ),
        username,
        type,
        confirmed,
        foreign_key_id,
        # access_key in DB has type character varying so we need to cast to str before
        str(access_key),
        access_key_date,
    )

    if record:
        return parse_account_from_record(record)


async def insert_orientation_manager_account(
    connection: Connection,
    username: str,
    confirmed: bool,
    orientation_manager_id: UUID,
) -> AccountDB | None:
    record = await insert_account(
        connection=connection,
        username=username,
        type=RoleEnum.ORIENTATION_MANAGER,
        confirmed=confirmed,
        foreign_key_id=orientation_manager_id,
    )
    return record


async def get_account_from_email(
    connection: Connection, email: str
) -> AccountDB | None:
    accounts = await get_account_with_query(
        connection,
        """
        LEFT JOIN admin_cdb ON admin_cdb.id = account.admin_id
        LEFT JOIN manager ON manager.id = account.manager_id
        LEFT JOIN professional ON professional.id = account.professional_id
        LEFT JOIN admin_structure ON admin_structure.id = account.admin_structure_id
        LEFT JOIN orientation_manager ON orientation_manager.id = account.orientation_manager_id
        LEFT JOIN beneficiary ON beneficiary.id = account.beneficiary_id
        WHERE manager.email like $1
        OR beneficiary.email like $1
        OR professional.email like $1
        OR admin_structure.email like $1
        OR orientation_manager.email like $1
        OR admin_cdb.email like $1
        """,
        email,
    )
    if len(accounts) == 1:
        return accounts[0]


async def get_account_with_query(
    connection: Connection, query: str, *args
) -> List[AccountDB] | None:

    records: List[Record] = await connection.fetch(
        """
        SELECT account.* FROM public.account {query}
        """.format(
            query=query
        ),
        *args,
    )
    accounts: List[AccountDB] = []

    for record in records:
        accounts.append(parse_account_from_record(record))

    return accounts
