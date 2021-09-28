import type { OperationStore } from '@urql/svelte';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	date: string;
	jsonb: any;
	timestamptz: any;
	uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
	_eq?: Maybe<Scalars['Boolean']>;
	_gt?: Maybe<Scalars['Boolean']>;
	_gte?: Maybe<Scalars['Boolean']>;
	_in?: Maybe<Array<Scalars['Boolean']>>;
	_is_null?: Maybe<Scalars['Boolean']>;
	_lt?: Maybe<Scalars['Boolean']>;
	_lte?: Maybe<Scalars['Boolean']>;
	_neq?: Maybe<Scalars['Boolean']>;
	_nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
	_eq?: Maybe<Scalars['String']>;
	_gt?: Maybe<Scalars['String']>;
	_gte?: Maybe<Scalars['String']>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: Maybe<Scalars['String']>;
	_in?: Maybe<Array<Scalars['String']>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: Maybe<Scalars['String']>;
	_is_null?: Maybe<Scalars['Boolean']>;
	/** does the column match the given pattern */
	_like?: Maybe<Scalars['String']>;
	_lt?: Maybe<Scalars['String']>;
	_lte?: Maybe<Scalars['String']>;
	_neq?: Maybe<Scalars['String']>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: Maybe<Scalars['String']>;
	_nin?: Maybe<Array<Scalars['String']>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: Maybe<Scalars['String']>;
	/** does the column NOT match the given pattern */
	_nlike?: Maybe<Scalars['String']>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: Maybe<Scalars['String']>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: Maybe<Scalars['String']>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: Maybe<Scalars['String']>;
	/** does the column match the given SQL regular expression */
	_similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "account" */
export type Account = {
	__typename?: 'account';
	accessKey?: Maybe<Scalars['String']>;
	accessKeyDate?: Maybe<Scalars['timestamptz']>;
	/** An object relationship */
	admin?: Maybe<Admin>;
	adminId?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	beneficiary?: Maybe<Beneficiary>;
	beneficiaryId?: Maybe<Scalars['uuid']>;
	confirmed: Scalars['Boolean'];
	id: Scalars['uuid'];
	lastLogin?: Maybe<Scalars['timestamptz']>;
	onboardingDone?: Maybe<Scalars['Boolean']>;
	/** An object relationship */
	professional?: Maybe<Professional>;
	professionalId?: Maybe<Scalars['uuid']>;
	type: Scalars['String'];
	username: Scalars['String'];
};

/** aggregated selection of "account" */
export type AccountAggregate = {
	__typename?: 'account_aggregate';
	aggregate?: Maybe<AccountAggregateFields>;
	nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type AccountAggregateFields = {
	__typename?: 'account_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<AccountMaxFields>;
	min?: Maybe<AccountMinFields>;
};

/** aggregate fields of "account" */
export type AccountAggregateFieldsCountArgs = {
	columns?: Maybe<Array<AccountSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "account" */
export type AccountAggregateOrderBy = {
	count?: Maybe<OrderBy>;
	max?: Maybe<AccountMaxOrderBy>;
	min?: Maybe<AccountMinOrderBy>;
};

/** input type for inserting array relation for remote table "account" */
export type AccountArrRelInsertInput = {
	data: Array<AccountInsertInput>;
	/** on conflict condition */
	on_conflict?: Maybe<AccountOnConflict>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type AccountBoolExp = {
	_and?: Maybe<Array<AccountBoolExp>>;
	_not?: Maybe<AccountBoolExp>;
	_or?: Maybe<Array<AccountBoolExp>>;
	accessKey?: Maybe<StringComparisonExp>;
	accessKeyDate?: Maybe<TimestamptzComparisonExp>;
	admin?: Maybe<AdminBoolExp>;
	adminId?: Maybe<UuidComparisonExp>;
	beneficiary?: Maybe<BeneficiaryBoolExp>;
	beneficiaryId?: Maybe<UuidComparisonExp>;
	confirmed?: Maybe<BooleanComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	lastLogin?: Maybe<TimestamptzComparisonExp>;
	onboardingDone?: Maybe<BooleanComparisonExp>;
	professional?: Maybe<ProfessionalBoolExp>;
	professionalId?: Maybe<UuidComparisonExp>;
	type?: Maybe<StringComparisonExp>;
	username?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "account" */
export enum AccountConstraint {
	/** unique or primary key constraint */
	AccountPkey = 'account_pkey',
	/** unique or primary key constraint */
	AccountUsernameUnique = 'account_username_unique',
}

/** input type for inserting data into table "account" */
export type AccountInsertInput = {
	accessKey?: Maybe<Scalars['String']>;
	accessKeyDate?: Maybe<Scalars['timestamptz']>;
	admin?: Maybe<AdminObjRelInsertInput>;
	adminId?: Maybe<Scalars['uuid']>;
	beneficiary?: Maybe<BeneficiaryObjRelInsertInput>;
	beneficiaryId?: Maybe<Scalars['uuid']>;
	confirmed?: Maybe<Scalars['Boolean']>;
	id?: Maybe<Scalars['uuid']>;
	lastLogin?: Maybe<Scalars['timestamptz']>;
	onboardingDone?: Maybe<Scalars['Boolean']>;
	professional?: Maybe<ProfessionalObjRelInsertInput>;
	professionalId?: Maybe<Scalars['uuid']>;
	type?: Maybe<Scalars['String']>;
	username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AccountMaxFields = {
	__typename?: 'account_max_fields';
	accessKey?: Maybe<Scalars['String']>;
	accessKeyDate?: Maybe<Scalars['timestamptz']>;
	adminId?: Maybe<Scalars['uuid']>;
	beneficiaryId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	lastLogin?: Maybe<Scalars['timestamptz']>;
	professionalId?: Maybe<Scalars['uuid']>;
	type?: Maybe<Scalars['String']>;
	username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "account" */
export type AccountMaxOrderBy = {
	accessKey?: Maybe<OrderBy>;
	accessKeyDate?: Maybe<OrderBy>;
	adminId?: Maybe<OrderBy>;
	beneficiaryId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	lastLogin?: Maybe<OrderBy>;
	professionalId?: Maybe<OrderBy>;
	type?: Maybe<OrderBy>;
	username?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type AccountMinFields = {
	__typename?: 'account_min_fields';
	accessKey?: Maybe<Scalars['String']>;
	accessKeyDate?: Maybe<Scalars['timestamptz']>;
	adminId?: Maybe<Scalars['uuid']>;
	beneficiaryId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	lastLogin?: Maybe<Scalars['timestamptz']>;
	professionalId?: Maybe<Scalars['uuid']>;
	type?: Maybe<Scalars['String']>;
	username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "account" */
export type AccountMinOrderBy = {
	accessKey?: Maybe<OrderBy>;
	accessKeyDate?: Maybe<OrderBy>;
	adminId?: Maybe<OrderBy>;
	beneficiaryId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	lastLogin?: Maybe<OrderBy>;
	professionalId?: Maybe<OrderBy>;
	type?: Maybe<OrderBy>;
	username?: Maybe<OrderBy>;
};

/** response of any mutation on the table "account" */
export type AccountMutationResponse = {
	__typename?: 'account_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Account>;
};

/** on conflict condition type for table "account" */
export type AccountOnConflict = {
	constraint: AccountConstraint;
	update_columns?: Array<AccountUpdateColumn>;
	where?: Maybe<AccountBoolExp>;
};

/** Ordering options when selecting data from "account". */
export type AccountOrderBy = {
	accessKey?: Maybe<OrderBy>;
	accessKeyDate?: Maybe<OrderBy>;
	admin?: Maybe<AdminOrderBy>;
	adminId?: Maybe<OrderBy>;
	beneficiary?: Maybe<BeneficiaryOrderBy>;
	beneficiaryId?: Maybe<OrderBy>;
	confirmed?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	lastLogin?: Maybe<OrderBy>;
	onboardingDone?: Maybe<OrderBy>;
	professional?: Maybe<ProfessionalOrderBy>;
	professionalId?: Maybe<OrderBy>;
	type?: Maybe<OrderBy>;
	username?: Maybe<OrderBy>;
};

/** primary key columns input for table: account */
export type AccountPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "account" */
export enum AccountSelectColumn {
	/** column name */
	AccessKey = 'accessKey',
	/** column name */
	AccessKeyDate = 'accessKeyDate',
	/** column name */
	AdminId = 'adminId',
	/** column name */
	BeneficiaryId = 'beneficiaryId',
	/** column name */
	Confirmed = 'confirmed',
	/** column name */
	Id = 'id',
	/** column name */
	LastLogin = 'lastLogin',
	/** column name */
	OnboardingDone = 'onboardingDone',
	/** column name */
	ProfessionalId = 'professionalId',
	/** column name */
	Type = 'type',
	/** column name */
	Username = 'username',
}

/** input type for updating data in table "account" */
export type AccountSetInput = {
	accessKey?: Maybe<Scalars['String']>;
	accessKeyDate?: Maybe<Scalars['timestamptz']>;
	adminId?: Maybe<Scalars['uuid']>;
	beneficiaryId?: Maybe<Scalars['uuid']>;
	confirmed?: Maybe<Scalars['Boolean']>;
	id?: Maybe<Scalars['uuid']>;
	lastLogin?: Maybe<Scalars['timestamptz']>;
	onboardingDone?: Maybe<Scalars['Boolean']>;
	professionalId?: Maybe<Scalars['uuid']>;
	type?: Maybe<Scalars['String']>;
	username?: Maybe<Scalars['String']>;
};

/** update columns of table "account" */
export enum AccountUpdateColumn {
	/** column name */
	AccessKey = 'accessKey',
	/** column name */
	AccessKeyDate = 'accessKeyDate',
	/** column name */
	AdminId = 'adminId',
	/** column name */
	BeneficiaryId = 'beneficiaryId',
	/** column name */
	Confirmed = 'confirmed',
	/** column name */
	Id = 'id',
	/** column name */
	LastLogin = 'lastLogin',
	/** column name */
	OnboardingDone = 'onboardingDone',
	/** column name */
	ProfessionalId = 'professionalId',
	/** column name */
	Type = 'type',
	/** column name */
	Username = 'username',
}

/** columns and relationships of "admin" */
export type Admin = {
	__typename?: 'admin';
	/** An array relationship */
	accounts: Array<Account>;
	/** An aggregate relationship */
	accounts_aggregate: AccountAggregate;
	email: Scalars['String'];
	firstname: Scalars['String'];
	id: Scalars['uuid'];
	lastname: Scalars['String'];
};

/** columns and relationships of "admin" */
export type AdminAccountsArgs = {
	distinct_on?: Maybe<Array<AccountSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AccountOrderBy>>;
	where?: Maybe<AccountBoolExp>;
};

/** columns and relationships of "admin" */
export type AdminAccountsAggregateArgs = {
	distinct_on?: Maybe<Array<AccountSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AccountOrderBy>>;
	where?: Maybe<AccountBoolExp>;
};

/** aggregated selection of "admin" */
export type AdminAggregate = {
	__typename?: 'admin_aggregate';
	aggregate?: Maybe<AdminAggregateFields>;
	nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type AdminAggregateFields = {
	__typename?: 'admin_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<AdminMaxFields>;
	min?: Maybe<AdminMinFields>;
};

/** aggregate fields of "admin" */
export type AdminAggregateFieldsCountArgs = {
	columns?: Maybe<Array<AdminSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type AdminBoolExp = {
	_and?: Maybe<Array<AdminBoolExp>>;
	_not?: Maybe<AdminBoolExp>;
	_or?: Maybe<Array<AdminBoolExp>>;
	accounts?: Maybe<AccountBoolExp>;
	email?: Maybe<StringComparisonExp>;
	firstname?: Maybe<StringComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	lastname?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "admin" */
export enum AdminConstraint {
	/** unique or primary key constraint */
	AdminEmailUnique = 'admin_email_unique',
	/** unique or primary key constraint */
	AdminPkey = 'admin_pkey',
}

/** input type for inserting data into table "admin" */
export type AdminInsertInput = {
	accounts?: Maybe<AccountArrRelInsertInput>;
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AdminMaxFields = {
	__typename?: 'admin_max_fields';
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AdminMinFields = {
	__typename?: 'admin_min_fields';
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "admin" */
export type AdminMutationResponse = {
	__typename?: 'admin_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Admin>;
};

/** input type for inserting object relation for remote table "admin" */
export type AdminObjRelInsertInput = {
	data: AdminInsertInput;
	/** on conflict condition */
	on_conflict?: Maybe<AdminOnConflict>;
};

/** on conflict condition type for table "admin" */
export type AdminOnConflict = {
	constraint: AdminConstraint;
	update_columns?: Array<AdminUpdateColumn>;
	where?: Maybe<AdminBoolExp>;
};

/** Ordering options when selecting data from "admin". */
export type AdminOrderBy = {
	accounts_aggregate?: Maybe<AccountAggregateOrderBy>;
	email?: Maybe<OrderBy>;
	firstname?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	lastname?: Maybe<OrderBy>;
};

/** primary key columns input for table: admin */
export type AdminPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "admin" */
export enum AdminSelectColumn {
	/** column name */
	Email = 'email',
	/** column name */
	Firstname = 'firstname',
	/** column name */
	Id = 'id',
	/** column name */
	Lastname = 'lastname',
}

/** input type for updating data in table "admin" */
export type AdminSetInput = {
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
};

/** update columns of table "admin" */
export enum AdminUpdateColumn {
	/** column name */
	Email = 'email',
	/** column name */
	Firstname = 'firstname',
	/** column name */
	Id = 'id',
	/** column name */
	Lastname = 'lastname',
}

/** columns and relationships of "beneficiary" */
export type Beneficiary = {
	__typename?: 'beneficiary';
	/** An array relationship */
	accounts: Array<Account>;
	/** An aggregate relationship */
	accounts_aggregate: AccountAggregate;
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	cafNumber?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	dateOfBirth: Scalars['date'];
	email: Scalars['String'];
	firstname: Scalars['String'];
	id: Scalars['uuid'];
	lastname: Scalars['String'];
	mobileNumber?: Maybe<Scalars['String']>;
	/** An object relationship */
	notebook: Notebook;
	peNumber?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
};

/** columns and relationships of "beneficiary" */
export type BeneficiaryAccountsArgs = {
	distinct_on?: Maybe<Array<AccountSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AccountOrderBy>>;
	where?: Maybe<AccountBoolExp>;
};

/** columns and relationships of "beneficiary" */
export type BeneficiaryAccountsAggregateArgs = {
	distinct_on?: Maybe<Array<AccountSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AccountOrderBy>>;
	where?: Maybe<AccountBoolExp>;
};

/** aggregated selection of "beneficiary" */
export type BeneficiaryAggregate = {
	__typename?: 'beneficiary_aggregate';
	aggregate?: Maybe<BeneficiaryAggregateFields>;
	nodes: Array<Beneficiary>;
};

/** aggregate fields of "beneficiary" */
export type BeneficiaryAggregateFields = {
	__typename?: 'beneficiary_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<BeneficiaryMaxFields>;
	min?: Maybe<BeneficiaryMinFields>;
};

/** aggregate fields of "beneficiary" */
export type BeneficiaryAggregateFieldsCountArgs = {
	columns?: Maybe<Array<BeneficiarySelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "beneficiary". All fields are combined with a logical 'AND'. */
export type BeneficiaryBoolExp = {
	_and?: Maybe<Array<BeneficiaryBoolExp>>;
	_not?: Maybe<BeneficiaryBoolExp>;
	_or?: Maybe<Array<BeneficiaryBoolExp>>;
	accounts?: Maybe<AccountBoolExp>;
	address1?: Maybe<StringComparisonExp>;
	address2?: Maybe<StringComparisonExp>;
	cafNumber?: Maybe<StringComparisonExp>;
	city?: Maybe<StringComparisonExp>;
	dateOfBirth?: Maybe<DateComparisonExp>;
	email?: Maybe<StringComparisonExp>;
	firstname?: Maybe<StringComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	lastname?: Maybe<StringComparisonExp>;
	mobileNumber?: Maybe<StringComparisonExp>;
	notebook?: Maybe<NotebookBoolExp>;
	peNumber?: Maybe<StringComparisonExp>;
	postalCode?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "beneficiary" */
export enum BeneficiaryConstraint {
	/** unique or primary key constraint */
	BeneficiaryEmailUnique = 'beneficiary_email_unique',
	/** unique or primary key constraint */
	BeneficiaryPkey = 'beneficiary_pkey',
}

/** input type for inserting data into table "beneficiary" */
export type BeneficiaryInsertInput = {
	accounts?: Maybe<AccountArrRelInsertInput>;
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	cafNumber?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	dateOfBirth?: Maybe<Scalars['date']>;
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
	mobileNumber?: Maybe<Scalars['String']>;
	notebook?: Maybe<NotebookObjRelInsertInput>;
	peNumber?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type BeneficiaryMaxFields = {
	__typename?: 'beneficiary_max_fields';
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	cafNumber?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	dateOfBirth?: Maybe<Scalars['date']>;
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
	mobileNumber?: Maybe<Scalars['String']>;
	peNumber?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type BeneficiaryMinFields = {
	__typename?: 'beneficiary_min_fields';
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	cafNumber?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	dateOfBirth?: Maybe<Scalars['date']>;
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
	mobileNumber?: Maybe<Scalars['String']>;
	peNumber?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "beneficiary" */
export type BeneficiaryMutationResponse = {
	__typename?: 'beneficiary_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Beneficiary>;
};

/** input type for inserting object relation for remote table "beneficiary" */
export type BeneficiaryObjRelInsertInput = {
	data: BeneficiaryInsertInput;
	/** on conflict condition */
	on_conflict?: Maybe<BeneficiaryOnConflict>;
};

/** on conflict condition type for table "beneficiary" */
export type BeneficiaryOnConflict = {
	constraint: BeneficiaryConstraint;
	update_columns?: Array<BeneficiaryUpdateColumn>;
	where?: Maybe<BeneficiaryBoolExp>;
};

/** Ordering options when selecting data from "beneficiary". */
export type BeneficiaryOrderBy = {
	accounts_aggregate?: Maybe<AccountAggregateOrderBy>;
	address1?: Maybe<OrderBy>;
	address2?: Maybe<OrderBy>;
	cafNumber?: Maybe<OrderBy>;
	city?: Maybe<OrderBy>;
	dateOfBirth?: Maybe<OrderBy>;
	email?: Maybe<OrderBy>;
	firstname?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	lastname?: Maybe<OrderBy>;
	mobileNumber?: Maybe<OrderBy>;
	notebook?: Maybe<NotebookOrderBy>;
	peNumber?: Maybe<OrderBy>;
	postalCode?: Maybe<OrderBy>;
};

/** primary key columns input for table: beneficiary */
export type BeneficiaryPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "beneficiary" */
export enum BeneficiarySelectColumn {
	/** column name */
	Address1 = 'address1',
	/** column name */
	Address2 = 'address2',
	/** column name */
	CafNumber = 'cafNumber',
	/** column name */
	City = 'city',
	/** column name */
	DateOfBirth = 'dateOfBirth',
	/** column name */
	Email = 'email',
	/** column name */
	Firstname = 'firstname',
	/** column name */
	Id = 'id',
	/** column name */
	Lastname = 'lastname',
	/** column name */
	MobileNumber = 'mobileNumber',
	/** column name */
	PeNumber = 'peNumber',
	/** column name */
	PostalCode = 'postalCode',
}

/** input type for updating data in table "beneficiary" */
export type BeneficiarySetInput = {
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	cafNumber?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	dateOfBirth?: Maybe<Scalars['date']>;
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
	mobileNumber?: Maybe<Scalars['String']>;
	peNumber?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
};

/** update columns of table "beneficiary" */
export enum BeneficiaryUpdateColumn {
	/** column name */
	Address1 = 'address1',
	/** column name */
	Address2 = 'address2',
	/** column name */
	CafNumber = 'cafNumber',
	/** column name */
	City = 'city',
	/** column name */
	DateOfBirth = 'dateOfBirth',
	/** column name */
	Email = 'email',
	/** column name */
	Firstname = 'firstname',
	/** column name */
	Id = 'id',
	/** column name */
	Lastname = 'lastname',
	/** column name */
	MobileNumber = 'mobileNumber',
	/** column name */
	PeNumber = 'peNumber',
	/** column name */
	PostalCode = 'postalCode',
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
	_eq?: Maybe<Scalars['date']>;
	_gt?: Maybe<Scalars['date']>;
	_gte?: Maybe<Scalars['date']>;
	_in?: Maybe<Array<Scalars['date']>>;
	_is_null?: Maybe<Scalars['Boolean']>;
	_lt?: Maybe<Scalars['date']>;
	_lte?: Maybe<Scalars['date']>;
	_neq?: Maybe<Scalars['date']>;
	_nin?: Maybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
	/** is the column contained in the given json value */
	_contained_in?: Maybe<Scalars['jsonb']>;
	/** does the column contain the given json value at the top level */
	_contains?: Maybe<Scalars['jsonb']>;
	_eq?: Maybe<Scalars['jsonb']>;
	_gt?: Maybe<Scalars['jsonb']>;
	_gte?: Maybe<Scalars['jsonb']>;
	/** does the string exist as a top-level key in the column */
	_has_key?: Maybe<Scalars['String']>;
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?: Maybe<Array<Scalars['String']>>;
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?: Maybe<Array<Scalars['String']>>;
	_in?: Maybe<Array<Scalars['jsonb']>>;
	_is_null?: Maybe<Scalars['Boolean']>;
	_lt?: Maybe<Scalars['jsonb']>;
	_lte?: Maybe<Scalars['jsonb']>;
	_neq?: Maybe<Scalars['jsonb']>;
	_nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type MutationRoot = {
	__typename?: 'mutation_root';
	/** delete data from the table: "account" */
	delete_account?: Maybe<AccountMutationResponse>;
	/** delete single row from the table: "account" */
	delete_account_by_pk?: Maybe<Account>;
	/** delete data from the table: "admin" */
	delete_admin?: Maybe<AdminMutationResponse>;
	/** delete single row from the table: "admin" */
	delete_admin_by_pk?: Maybe<Admin>;
	/** delete data from the table: "beneficiary" */
	delete_beneficiary?: Maybe<BeneficiaryMutationResponse>;
	/** delete single row from the table: "beneficiary" */
	delete_beneficiary_by_pk?: Maybe<Beneficiary>;
	/** delete data from the table: "notebook" */
	delete_notebook?: Maybe<NotebookMutationResponse>;
	/** delete data from the table: "notebook_action" */
	delete_notebook_action?: Maybe<NotebookActionMutationResponse>;
	/** delete single row from the table: "notebook_action" */
	delete_notebook_action_by_pk?: Maybe<NotebookAction>;
	/** delete single row from the table: "notebook" */
	delete_notebook_by_pk?: Maybe<Notebook>;
	/** delete data from the table: "notebook_event" */
	delete_notebook_event?: Maybe<NotebookEventMutationResponse>;
	/** delete single row from the table: "notebook_event" */
	delete_notebook_event_by_pk?: Maybe<NotebookEvent>;
	/** delete data from the table: "notebook_focus" */
	delete_notebook_focus?: Maybe<NotebookFocusMutationResponse>;
	/** delete single row from the table: "notebook_focus" */
	delete_notebook_focus_by_pk?: Maybe<NotebookFocus>;
	/** delete data from the table: "notebook_member" */
	delete_notebook_member?: Maybe<NotebookMemberMutationResponse>;
	/** delete single row from the table: "notebook_member" */
	delete_notebook_member_by_pk?: Maybe<NotebookMember>;
	/** delete data from the table: "notebook_target" */
	delete_notebook_target?: Maybe<NotebookTargetMutationResponse>;
	/** delete single row from the table: "notebook_target" */
	delete_notebook_target_by_pk?: Maybe<NotebookTarget>;
	/** delete data from the table: "professional" */
	delete_professional?: Maybe<ProfessionalMutationResponse>;
	/** delete single row from the table: "professional" */
	delete_professional_by_pk?: Maybe<Professional>;
	/** delete data from the table: "ref_action" */
	delete_ref_action?: Maybe<RefActionMutationResponse>;
	/** delete single row from the table: "ref_action" */
	delete_ref_action_by_pk?: Maybe<RefAction>;
	/** delete data from the table: "ref_situation" */
	delete_ref_situation?: Maybe<RefSituationMutationResponse>;
	/** delete single row from the table: "ref_situation" */
	delete_ref_situation_by_pk?: Maybe<RefSituation>;
	/** delete data from the table: "ref_target" */
	delete_ref_target?: Maybe<RefTargetMutationResponse>;
	/** delete single row from the table: "ref_target" */
	delete_ref_target_by_pk?: Maybe<RefTarget>;
	/** delete data from the table: "structure" */
	delete_structure?: Maybe<StructureMutationResponse>;
	/** delete single row from the table: "structure" */
	delete_structure_by_pk?: Maybe<Structure>;
	/** insert data into the table: "account" */
	insert_account?: Maybe<AccountMutationResponse>;
	/** insert a single row into the table: "account" */
	insert_account_one?: Maybe<Account>;
	/** insert data into the table: "admin" */
	insert_admin?: Maybe<AdminMutationResponse>;
	/** insert a single row into the table: "admin" */
	insert_admin_one?: Maybe<Admin>;
	/** insert data into the table: "beneficiary" */
	insert_beneficiary?: Maybe<BeneficiaryMutationResponse>;
	/** insert a single row into the table: "beneficiary" */
	insert_beneficiary_one?: Maybe<Beneficiary>;
	/** insert data into the table: "notebook" */
	insert_notebook?: Maybe<NotebookMutationResponse>;
	/** insert data into the table: "notebook_action" */
	insert_notebook_action?: Maybe<NotebookActionMutationResponse>;
	/** insert a single row into the table: "notebook_action" */
	insert_notebook_action_one?: Maybe<NotebookAction>;
	/** insert data into the table: "notebook_event" */
	insert_notebook_event?: Maybe<NotebookEventMutationResponse>;
	/** insert a single row into the table: "notebook_event" */
	insert_notebook_event_one?: Maybe<NotebookEvent>;
	/** insert data into the table: "notebook_focus" */
	insert_notebook_focus?: Maybe<NotebookFocusMutationResponse>;
	/** insert a single row into the table: "notebook_focus" */
	insert_notebook_focus_one?: Maybe<NotebookFocus>;
	/** insert data into the table: "notebook_member" */
	insert_notebook_member?: Maybe<NotebookMemberMutationResponse>;
	/** insert a single row into the table: "notebook_member" */
	insert_notebook_member_one?: Maybe<NotebookMember>;
	/** insert a single row into the table: "notebook" */
	insert_notebook_one?: Maybe<Notebook>;
	/** insert data into the table: "notebook_target" */
	insert_notebook_target?: Maybe<NotebookTargetMutationResponse>;
	/** insert a single row into the table: "notebook_target" */
	insert_notebook_target_one?: Maybe<NotebookTarget>;
	/** insert data into the table: "professional" */
	insert_professional?: Maybe<ProfessionalMutationResponse>;
	/** insert a single row into the table: "professional" */
	insert_professional_one?: Maybe<Professional>;
	/** insert data into the table: "ref_action" */
	insert_ref_action?: Maybe<RefActionMutationResponse>;
	/** insert a single row into the table: "ref_action" */
	insert_ref_action_one?: Maybe<RefAction>;
	/** insert data into the table: "ref_situation" */
	insert_ref_situation?: Maybe<RefSituationMutationResponse>;
	/** insert a single row into the table: "ref_situation" */
	insert_ref_situation_one?: Maybe<RefSituation>;
	/** insert data into the table: "ref_target" */
	insert_ref_target?: Maybe<RefTargetMutationResponse>;
	/** insert a single row into the table: "ref_target" */
	insert_ref_target_one?: Maybe<RefTarget>;
	/** insert data into the table: "structure" */
	insert_structure?: Maybe<StructureMutationResponse>;
	/** insert a single row into the table: "structure" */
	insert_structure_one?: Maybe<Structure>;
	/** update data of the table: "account" */
	update_account?: Maybe<AccountMutationResponse>;
	/** update single row of the table: "account" */
	update_account_by_pk?: Maybe<Account>;
	/** update data of the table: "admin" */
	update_admin?: Maybe<AdminMutationResponse>;
	/** update single row of the table: "admin" */
	update_admin_by_pk?: Maybe<Admin>;
	/** update data of the table: "beneficiary" */
	update_beneficiary?: Maybe<BeneficiaryMutationResponse>;
	/** update single row of the table: "beneficiary" */
	update_beneficiary_by_pk?: Maybe<Beneficiary>;
	/** update data of the table: "notebook" */
	update_notebook?: Maybe<NotebookMutationResponse>;
	/** update data of the table: "notebook_action" */
	update_notebook_action?: Maybe<NotebookActionMutationResponse>;
	/** update single row of the table: "notebook_action" */
	update_notebook_action_by_pk?: Maybe<NotebookAction>;
	/** update single row of the table: "notebook" */
	update_notebook_by_pk?: Maybe<Notebook>;
	/** update data of the table: "notebook_event" */
	update_notebook_event?: Maybe<NotebookEventMutationResponse>;
	/** update single row of the table: "notebook_event" */
	update_notebook_event_by_pk?: Maybe<NotebookEvent>;
	/** update data of the table: "notebook_focus" */
	update_notebook_focus?: Maybe<NotebookFocusMutationResponse>;
	/** update single row of the table: "notebook_focus" */
	update_notebook_focus_by_pk?: Maybe<NotebookFocus>;
	/** update data of the table: "notebook_member" */
	update_notebook_member?: Maybe<NotebookMemberMutationResponse>;
	/** update single row of the table: "notebook_member" */
	update_notebook_member_by_pk?: Maybe<NotebookMember>;
	/** update data of the table: "notebook_target" */
	update_notebook_target?: Maybe<NotebookTargetMutationResponse>;
	/** update single row of the table: "notebook_target" */
	update_notebook_target_by_pk?: Maybe<NotebookTarget>;
	/** update data of the table: "professional" */
	update_professional?: Maybe<ProfessionalMutationResponse>;
	/** update single row of the table: "professional" */
	update_professional_by_pk?: Maybe<Professional>;
	/** update data of the table: "ref_action" */
	update_ref_action?: Maybe<RefActionMutationResponse>;
	/** update single row of the table: "ref_action" */
	update_ref_action_by_pk?: Maybe<RefAction>;
	/** update data of the table: "ref_situation" */
	update_ref_situation?: Maybe<RefSituationMutationResponse>;
	/** update single row of the table: "ref_situation" */
	update_ref_situation_by_pk?: Maybe<RefSituation>;
	/** update data of the table: "ref_target" */
	update_ref_target?: Maybe<RefTargetMutationResponse>;
	/** update single row of the table: "ref_target" */
	update_ref_target_by_pk?: Maybe<RefTarget>;
	/** update data of the table: "structure" */
	update_structure?: Maybe<StructureMutationResponse>;
	/** update single row of the table: "structure" */
	update_structure_by_pk?: Maybe<Structure>;
};

/** mutation root */
export type MutationRootDeleteAccountArgs = {
	where: AccountBoolExp;
};

/** mutation root */
export type MutationRootDeleteAccountByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteAdminArgs = {
	where: AdminBoolExp;
};

/** mutation root */
export type MutationRootDeleteAdminByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteBeneficiaryArgs = {
	where: BeneficiaryBoolExp;
};

/** mutation root */
export type MutationRootDeleteBeneficiaryByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteNotebookArgs = {
	where: NotebookBoolExp;
};

/** mutation root */
export type MutationRootDeleteNotebookActionArgs = {
	where: NotebookActionBoolExp;
};

/** mutation root */
export type MutationRootDeleteNotebookActionByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteNotebookByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteNotebookEventArgs = {
	where: NotebookEventBoolExp;
};

/** mutation root */
export type MutationRootDeleteNotebookEventByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteNotebookFocusArgs = {
	where: NotebookFocusBoolExp;
};

/** mutation root */
export type MutationRootDeleteNotebookFocusByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteNotebookMemberArgs = {
	where: NotebookMemberBoolExp;
};

/** mutation root */
export type MutationRootDeleteNotebookMemberByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteNotebookTargetArgs = {
	where: NotebookTargetBoolExp;
};

/** mutation root */
export type MutationRootDeleteNotebookTargetByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteProfessionalArgs = {
	where: ProfessionalBoolExp;
};

/** mutation root */
export type MutationRootDeleteProfessionalByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteRefActionArgs = {
	where: RefActionBoolExp;
};

/** mutation root */
export type MutationRootDeleteRefActionByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteRefSituationArgs = {
	where: RefSituationBoolExp;
};

/** mutation root */
export type MutationRootDeleteRefSituationByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteRefTargetArgs = {
	where: RefTargetBoolExp;
};

/** mutation root */
export type MutationRootDeleteRefTargetByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteStructureArgs = {
	where: StructureBoolExp;
};

/** mutation root */
export type MutationRootDeleteStructureByPkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootInsertAccountArgs = {
	objects: Array<AccountInsertInput>;
	on_conflict?: Maybe<AccountOnConflict>;
};

/** mutation root */
export type MutationRootInsertAccountOneArgs = {
	object: AccountInsertInput;
	on_conflict?: Maybe<AccountOnConflict>;
};

/** mutation root */
export type MutationRootInsertAdminArgs = {
	objects: Array<AdminInsertInput>;
	on_conflict?: Maybe<AdminOnConflict>;
};

/** mutation root */
export type MutationRootInsertAdminOneArgs = {
	object: AdminInsertInput;
	on_conflict?: Maybe<AdminOnConflict>;
};

/** mutation root */
export type MutationRootInsertBeneficiaryArgs = {
	objects: Array<BeneficiaryInsertInput>;
	on_conflict?: Maybe<BeneficiaryOnConflict>;
};

/** mutation root */
export type MutationRootInsertBeneficiaryOneArgs = {
	object: BeneficiaryInsertInput;
	on_conflict?: Maybe<BeneficiaryOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookArgs = {
	objects: Array<NotebookInsertInput>;
	on_conflict?: Maybe<NotebookOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookActionArgs = {
	objects: Array<NotebookActionInsertInput>;
	on_conflict?: Maybe<NotebookActionOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookActionOneArgs = {
	object: NotebookActionInsertInput;
	on_conflict?: Maybe<NotebookActionOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookEventArgs = {
	objects: Array<NotebookEventInsertInput>;
	on_conflict?: Maybe<NotebookEventOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookEventOneArgs = {
	object: NotebookEventInsertInput;
	on_conflict?: Maybe<NotebookEventOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookFocusArgs = {
	objects: Array<NotebookFocusInsertInput>;
	on_conflict?: Maybe<NotebookFocusOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookFocusOneArgs = {
	object: NotebookFocusInsertInput;
	on_conflict?: Maybe<NotebookFocusOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookMemberArgs = {
	objects: Array<NotebookMemberInsertInput>;
	on_conflict?: Maybe<NotebookMemberOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookMemberOneArgs = {
	object: NotebookMemberInsertInput;
	on_conflict?: Maybe<NotebookMemberOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookOneArgs = {
	object: NotebookInsertInput;
	on_conflict?: Maybe<NotebookOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookTargetArgs = {
	objects: Array<NotebookTargetInsertInput>;
	on_conflict?: Maybe<NotebookTargetOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotebookTargetOneArgs = {
	object: NotebookTargetInsertInput;
	on_conflict?: Maybe<NotebookTargetOnConflict>;
};

/** mutation root */
export type MutationRootInsertProfessionalArgs = {
	objects: Array<ProfessionalInsertInput>;
	on_conflict?: Maybe<ProfessionalOnConflict>;
};

/** mutation root */
export type MutationRootInsertProfessionalOneArgs = {
	object: ProfessionalInsertInput;
	on_conflict?: Maybe<ProfessionalOnConflict>;
};

/** mutation root */
export type MutationRootInsertRefActionArgs = {
	objects: Array<RefActionInsertInput>;
	on_conflict?: Maybe<RefActionOnConflict>;
};

/** mutation root */
export type MutationRootInsertRefActionOneArgs = {
	object: RefActionInsertInput;
	on_conflict?: Maybe<RefActionOnConflict>;
};

/** mutation root */
export type MutationRootInsertRefSituationArgs = {
	objects: Array<RefSituationInsertInput>;
	on_conflict?: Maybe<RefSituationOnConflict>;
};

/** mutation root */
export type MutationRootInsertRefSituationOneArgs = {
	object: RefSituationInsertInput;
	on_conflict?: Maybe<RefSituationOnConflict>;
};

/** mutation root */
export type MutationRootInsertRefTargetArgs = {
	objects: Array<RefTargetInsertInput>;
	on_conflict?: Maybe<RefTargetOnConflict>;
};

/** mutation root */
export type MutationRootInsertRefTargetOneArgs = {
	object: RefTargetInsertInput;
	on_conflict?: Maybe<RefTargetOnConflict>;
};

/** mutation root */
export type MutationRootInsertStructureArgs = {
	objects: Array<StructureInsertInput>;
	on_conflict?: Maybe<StructureOnConflict>;
};

/** mutation root */
export type MutationRootInsertStructureOneArgs = {
	object: StructureInsertInput;
	on_conflict?: Maybe<StructureOnConflict>;
};

/** mutation root */
export type MutationRootUpdateAccountArgs = {
	_set?: Maybe<AccountSetInput>;
	where: AccountBoolExp;
};

/** mutation root */
export type MutationRootUpdateAccountByPkArgs = {
	_set?: Maybe<AccountSetInput>;
	pk_columns: AccountPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateAdminArgs = {
	_set?: Maybe<AdminSetInput>;
	where: AdminBoolExp;
};

/** mutation root */
export type MutationRootUpdateAdminByPkArgs = {
	_set?: Maybe<AdminSetInput>;
	pk_columns: AdminPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateBeneficiaryArgs = {
	_set?: Maybe<BeneficiarySetInput>;
	where: BeneficiaryBoolExp;
};

/** mutation root */
export type MutationRootUpdateBeneficiaryByPkArgs = {
	_set?: Maybe<BeneficiarySetInput>;
	pk_columns: BeneficiaryPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateNotebookArgs = {
	_set?: Maybe<NotebookSetInput>;
	where: NotebookBoolExp;
};

/** mutation root */
export type MutationRootUpdateNotebookActionArgs = {
	_set?: Maybe<NotebookActionSetInput>;
	where: NotebookActionBoolExp;
};

/** mutation root */
export type MutationRootUpdateNotebookActionByPkArgs = {
	_set?: Maybe<NotebookActionSetInput>;
	pk_columns: NotebookActionPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateNotebookByPkArgs = {
	_set?: Maybe<NotebookSetInput>;
	pk_columns: NotebookPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateNotebookEventArgs = {
	_set?: Maybe<NotebookEventSetInput>;
	where: NotebookEventBoolExp;
};

/** mutation root */
export type MutationRootUpdateNotebookEventByPkArgs = {
	_set?: Maybe<NotebookEventSetInput>;
	pk_columns: NotebookEventPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateNotebookFocusArgs = {
	_append?: Maybe<NotebookFocusAppendInput>;
	_delete_at_path?: Maybe<NotebookFocusDeleteAtPathInput>;
	_delete_elem?: Maybe<NotebookFocusDeleteElemInput>;
	_delete_key?: Maybe<NotebookFocusDeleteKeyInput>;
	_prepend?: Maybe<NotebookFocusPrependInput>;
	_set?: Maybe<NotebookFocusSetInput>;
	where: NotebookFocusBoolExp;
};

/** mutation root */
export type MutationRootUpdateNotebookFocusByPkArgs = {
	_append?: Maybe<NotebookFocusAppendInput>;
	_delete_at_path?: Maybe<NotebookFocusDeleteAtPathInput>;
	_delete_elem?: Maybe<NotebookFocusDeleteElemInput>;
	_delete_key?: Maybe<NotebookFocusDeleteKeyInput>;
	_prepend?: Maybe<NotebookFocusPrependInput>;
	_set?: Maybe<NotebookFocusSetInput>;
	pk_columns: NotebookFocusPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateNotebookMemberArgs = {
	_set?: Maybe<NotebookMemberSetInput>;
	where: NotebookMemberBoolExp;
};

/** mutation root */
export type MutationRootUpdateNotebookMemberByPkArgs = {
	_set?: Maybe<NotebookMemberSetInput>;
	pk_columns: NotebookMemberPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateNotebookTargetArgs = {
	_set?: Maybe<NotebookTargetSetInput>;
	where: NotebookTargetBoolExp;
};

/** mutation root */
export type MutationRootUpdateNotebookTargetByPkArgs = {
	_set?: Maybe<NotebookTargetSetInput>;
	pk_columns: NotebookTargetPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateProfessionalArgs = {
	_set?: Maybe<ProfessionalSetInput>;
	where: ProfessionalBoolExp;
};

/** mutation root */
export type MutationRootUpdateProfessionalByPkArgs = {
	_set?: Maybe<ProfessionalSetInput>;
	pk_columns: ProfessionalPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateRefActionArgs = {
	_set?: Maybe<RefActionSetInput>;
	where: RefActionBoolExp;
};

/** mutation root */
export type MutationRootUpdateRefActionByPkArgs = {
	_set?: Maybe<RefActionSetInput>;
	pk_columns: RefActionPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateRefSituationArgs = {
	_set?: Maybe<RefSituationSetInput>;
	where: RefSituationBoolExp;
};

/** mutation root */
export type MutationRootUpdateRefSituationByPkArgs = {
	_set?: Maybe<RefSituationSetInput>;
	pk_columns: RefSituationPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateRefTargetArgs = {
	_set?: Maybe<RefTargetSetInput>;
	where: RefTargetBoolExp;
};

/** mutation root */
export type MutationRootUpdateRefTargetByPkArgs = {
	_set?: Maybe<RefTargetSetInput>;
	pk_columns: RefTargetPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateStructureArgs = {
	_set?: Maybe<StructureSetInput>;
	where: StructureBoolExp;
};

/** mutation root */
export type MutationRootUpdateStructureByPkArgs = {
	_set?: Maybe<StructureSetInput>;
	pk_columns: StructurePkColumnsInput;
};

/** columns and relationships of "notebook" */
export type Notebook = {
	__typename?: 'notebook';
	/** An object relationship */
	beneficiary: Beneficiary;
	beneficiaryId: Scalars['uuid'];
	contractSignDate?: Maybe<Scalars['date']>;
	contractType?: Maybe<Scalars['String']>;
	creationDate: Scalars['timestamptz'];
	educationLevel?: Maybe<Scalars['String']>;
	/** An array relationship */
	events: Array<NotebookEvent>;
	/** An aggregate relationship */
	events_aggregate: NotebookEventAggregate;
	/** An array relationship */
	focuses: Array<NotebookFocus>;
	/** An aggregate relationship */
	focuses_aggregate: NotebookFocusAggregate;
	geographicalArea?: Maybe<Scalars['String']>;
	id: Scalars['uuid'];
	job?: Maybe<Scalars['String']>;
	/** An array relationship */
	members: Array<NotebookMember>;
	/** An aggregate relationship */
	members_aggregate: NotebookMemberAggregate;
	rightAre: Scalars['Boolean'];
	rightAss?: Maybe<Scalars['Boolean']>;
	rightBonus: Scalars['Boolean'];
	rightRqth: Scalars['Boolean'];
	rightRsa?: Maybe<Scalars['String']>;
	workSituation?: Maybe<Scalars['String']>;
	workSituationDate?: Maybe<Scalars['date']>;
};

/** columns and relationships of "notebook" */
export type NotebookEventsArgs = {
	distinct_on?: Maybe<Array<NotebookEventSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookEventOrderBy>>;
	where?: Maybe<NotebookEventBoolExp>;
};

/** columns and relationships of "notebook" */
export type NotebookEventsAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookEventSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookEventOrderBy>>;
	where?: Maybe<NotebookEventBoolExp>;
};

/** columns and relationships of "notebook" */
export type NotebookFocusesArgs = {
	distinct_on?: Maybe<Array<NotebookFocusSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookFocusOrderBy>>;
	where?: Maybe<NotebookFocusBoolExp>;
};

/** columns and relationships of "notebook" */
export type NotebookFocusesAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookFocusSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookFocusOrderBy>>;
	where?: Maybe<NotebookFocusBoolExp>;
};

/** columns and relationships of "notebook" */
export type NotebookMembersArgs = {
	distinct_on?: Maybe<Array<NotebookMemberSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookMemberOrderBy>>;
	where?: Maybe<NotebookMemberBoolExp>;
};

/** columns and relationships of "notebook" */
export type NotebookMembersAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookMemberSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookMemberOrderBy>>;
	where?: Maybe<NotebookMemberBoolExp>;
};

/** columns and relationships of "notebook_action" */
export type NotebookAction = {
	__typename?: 'notebook_action';
	action: Scalars['String'];
	creationDate: Scalars['timestamptz'];
	/** An object relationship */
	creator: Professional;
	creatorId: Scalars['uuid'];
	id: Scalars['uuid'];
	status: Scalars['String'];
	/** An object relationship */
	structure: Structure;
	structureId: Scalars['uuid'];
	/** An object relationship */
	target: NotebookTarget;
	targetId: Scalars['uuid'];
};

/** aggregated selection of "notebook_action" */
export type NotebookActionAggregate = {
	__typename?: 'notebook_action_aggregate';
	aggregate?: Maybe<NotebookActionAggregateFields>;
	nodes: Array<NotebookAction>;
};

/** aggregate fields of "notebook_action" */
export type NotebookActionAggregateFields = {
	__typename?: 'notebook_action_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<NotebookActionMaxFields>;
	min?: Maybe<NotebookActionMinFields>;
};

/** aggregate fields of "notebook_action" */
export type NotebookActionAggregateFieldsCountArgs = {
	columns?: Maybe<Array<NotebookActionSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notebook_action" */
export type NotebookActionAggregateOrderBy = {
	count?: Maybe<OrderBy>;
	max?: Maybe<NotebookActionMaxOrderBy>;
	min?: Maybe<NotebookActionMinOrderBy>;
};

/** input type for inserting array relation for remote table "notebook_action" */
export type NotebookActionArrRelInsertInput = {
	data: Array<NotebookActionInsertInput>;
	/** on conflict condition */
	on_conflict?: Maybe<NotebookActionOnConflict>;
};

/** Boolean expression to filter rows from the table "notebook_action". All fields are combined with a logical 'AND'. */
export type NotebookActionBoolExp = {
	_and?: Maybe<Array<NotebookActionBoolExp>>;
	_not?: Maybe<NotebookActionBoolExp>;
	_or?: Maybe<Array<NotebookActionBoolExp>>;
	action?: Maybe<StringComparisonExp>;
	creationDate?: Maybe<TimestamptzComparisonExp>;
	creator?: Maybe<ProfessionalBoolExp>;
	creatorId?: Maybe<UuidComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	status?: Maybe<StringComparisonExp>;
	structure?: Maybe<StructureBoolExp>;
	structureId?: Maybe<UuidComparisonExp>;
	target?: Maybe<NotebookTargetBoolExp>;
	targetId?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "notebook_action" */
export enum NotebookActionConstraint {
	/** unique or primary key constraint */
	NotebookActionPkey = 'notebook_action_pkey',
}

/** input type for inserting data into table "notebook_action" */
export type NotebookActionInsertInput = {
	action?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	creator?: Maybe<ProfessionalObjRelInsertInput>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	status?: Maybe<Scalars['String']>;
	structure?: Maybe<StructureObjRelInsertInput>;
	structureId?: Maybe<Scalars['uuid']>;
	target?: Maybe<NotebookTargetObjRelInsertInput>;
	targetId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type NotebookActionMaxFields = {
	__typename?: 'notebook_action_max_fields';
	action?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	status?: Maybe<Scalars['String']>;
	structureId?: Maybe<Scalars['uuid']>;
	targetId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "notebook_action" */
export type NotebookActionMaxOrderBy = {
	action?: Maybe<OrderBy>;
	creationDate?: Maybe<OrderBy>;
	creatorId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	status?: Maybe<OrderBy>;
	structureId?: Maybe<OrderBy>;
	targetId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type NotebookActionMinFields = {
	__typename?: 'notebook_action_min_fields';
	action?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	status?: Maybe<Scalars['String']>;
	structureId?: Maybe<Scalars['uuid']>;
	targetId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "notebook_action" */
export type NotebookActionMinOrderBy = {
	action?: Maybe<OrderBy>;
	creationDate?: Maybe<OrderBy>;
	creatorId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	status?: Maybe<OrderBy>;
	structureId?: Maybe<OrderBy>;
	targetId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "notebook_action" */
export type NotebookActionMutationResponse = {
	__typename?: 'notebook_action_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<NotebookAction>;
};

/** on conflict condition type for table "notebook_action" */
export type NotebookActionOnConflict = {
	constraint: NotebookActionConstraint;
	update_columns?: Array<NotebookActionUpdateColumn>;
	where?: Maybe<NotebookActionBoolExp>;
};

/** Ordering options when selecting data from "notebook_action". */
export type NotebookActionOrderBy = {
	action?: Maybe<OrderBy>;
	creationDate?: Maybe<OrderBy>;
	creator?: Maybe<ProfessionalOrderBy>;
	creatorId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	status?: Maybe<OrderBy>;
	structure?: Maybe<StructureOrderBy>;
	structureId?: Maybe<OrderBy>;
	target?: Maybe<NotebookTargetOrderBy>;
	targetId?: Maybe<OrderBy>;
};

/** primary key columns input for table: notebook_action */
export type NotebookActionPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "notebook_action" */
export enum NotebookActionSelectColumn {
	/** column name */
	Action = 'action',
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	CreatorId = 'creatorId',
	/** column name */
	Id = 'id',
	/** column name */
	Status = 'status',
	/** column name */
	StructureId = 'structureId',
	/** column name */
	TargetId = 'targetId',
}

/** input type for updating data in table "notebook_action" */
export type NotebookActionSetInput = {
	action?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	status?: Maybe<Scalars['String']>;
	structureId?: Maybe<Scalars['uuid']>;
	targetId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "notebook_action" */
export enum NotebookActionUpdateColumn {
	/** column name */
	Action = 'action',
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	CreatorId = 'creatorId',
	/** column name */
	Id = 'id',
	/** column name */
	Status = 'status',
	/** column name */
	StructureId = 'structureId',
	/** column name */
	TargetId = 'targetId',
}

/** aggregated selection of "notebook" */
export type NotebookAggregate = {
	__typename?: 'notebook_aggregate';
	aggregate?: Maybe<NotebookAggregateFields>;
	nodes: Array<Notebook>;
};

/** aggregate fields of "notebook" */
export type NotebookAggregateFields = {
	__typename?: 'notebook_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<NotebookMaxFields>;
	min?: Maybe<NotebookMinFields>;
};

/** aggregate fields of "notebook" */
export type NotebookAggregateFieldsCountArgs = {
	columns?: Maybe<Array<NotebookSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "notebook". All fields are combined with a logical 'AND'. */
export type NotebookBoolExp = {
	_and?: Maybe<Array<NotebookBoolExp>>;
	_not?: Maybe<NotebookBoolExp>;
	_or?: Maybe<Array<NotebookBoolExp>>;
	beneficiary?: Maybe<BeneficiaryBoolExp>;
	beneficiaryId?: Maybe<UuidComparisonExp>;
	contractSignDate?: Maybe<DateComparisonExp>;
	contractType?: Maybe<StringComparisonExp>;
	creationDate?: Maybe<TimestamptzComparisonExp>;
	educationLevel?: Maybe<StringComparisonExp>;
	events?: Maybe<NotebookEventBoolExp>;
	focuses?: Maybe<NotebookFocusBoolExp>;
	geographicalArea?: Maybe<StringComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	job?: Maybe<StringComparisonExp>;
	members?: Maybe<NotebookMemberBoolExp>;
	rightAre?: Maybe<BooleanComparisonExp>;
	rightAss?: Maybe<BooleanComparisonExp>;
	rightBonus?: Maybe<BooleanComparisonExp>;
	rightRqth?: Maybe<BooleanComparisonExp>;
	rightRsa?: Maybe<StringComparisonExp>;
	workSituation?: Maybe<StringComparisonExp>;
	workSituationDate?: Maybe<DateComparisonExp>;
};

/** unique or primary key constraints on table "notebook" */
export enum NotebookConstraint {
	/** unique or primary key constraint */
	NotebookBeneficiaryIdKey = 'notebook_beneficiary_id_key',
	/** unique or primary key constraint */
	NotebookPkey = 'notebook_pkey',
}

/** columns and relationships of "notebook_event" */
export type NotebookEvent = {
	__typename?: 'notebook_event';
	creationDate: Scalars['timestamptz'];
	event?: Maybe<Scalars['String']>;
	eventDate: Scalars['date'];
	id: Scalars['uuid'];
	/** An object relationship */
	notebook: Notebook;
	notebookId: Scalars['uuid'];
	/** An object relationship */
	professional: Professional;
	professionalId: Scalars['uuid'];
	structure?: Maybe<Scalars['String']>;
};

/** aggregated selection of "notebook_event" */
export type NotebookEventAggregate = {
	__typename?: 'notebook_event_aggregate';
	aggregate?: Maybe<NotebookEventAggregateFields>;
	nodes: Array<NotebookEvent>;
};

/** aggregate fields of "notebook_event" */
export type NotebookEventAggregateFields = {
	__typename?: 'notebook_event_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<NotebookEventMaxFields>;
	min?: Maybe<NotebookEventMinFields>;
};

/** aggregate fields of "notebook_event" */
export type NotebookEventAggregateFieldsCountArgs = {
	columns?: Maybe<Array<NotebookEventSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notebook_event" */
export type NotebookEventAggregateOrderBy = {
	count?: Maybe<OrderBy>;
	max?: Maybe<NotebookEventMaxOrderBy>;
	min?: Maybe<NotebookEventMinOrderBy>;
};

/** input type for inserting array relation for remote table "notebook_event" */
export type NotebookEventArrRelInsertInput = {
	data: Array<NotebookEventInsertInput>;
	/** on conflict condition */
	on_conflict?: Maybe<NotebookEventOnConflict>;
};

/** Boolean expression to filter rows from the table "notebook_event". All fields are combined with a logical 'AND'. */
export type NotebookEventBoolExp = {
	_and?: Maybe<Array<NotebookEventBoolExp>>;
	_not?: Maybe<NotebookEventBoolExp>;
	_or?: Maybe<Array<NotebookEventBoolExp>>;
	creationDate?: Maybe<TimestamptzComparisonExp>;
	event?: Maybe<StringComparisonExp>;
	eventDate?: Maybe<DateComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	notebook?: Maybe<NotebookBoolExp>;
	notebookId?: Maybe<UuidComparisonExp>;
	professional?: Maybe<ProfessionalBoolExp>;
	professionalId?: Maybe<UuidComparisonExp>;
	structure?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "notebook_event" */
export enum NotebookEventConstraint {
	/** unique or primary key constraint */
	NotebookEventPkey = 'notebook_event_pkey',
}

/** input type for inserting data into table "notebook_event" */
export type NotebookEventInsertInput = {
	creationDate?: Maybe<Scalars['timestamptz']>;
	event?: Maybe<Scalars['String']>;
	eventDate?: Maybe<Scalars['date']>;
	id?: Maybe<Scalars['uuid']>;
	notebook?: Maybe<NotebookObjRelInsertInput>;
	notebookId?: Maybe<Scalars['uuid']>;
	professional?: Maybe<ProfessionalObjRelInsertInput>;
	professionalId?: Maybe<Scalars['uuid']>;
	structure?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type NotebookEventMaxFields = {
	__typename?: 'notebook_event_max_fields';
	creationDate?: Maybe<Scalars['timestamptz']>;
	event?: Maybe<Scalars['String']>;
	eventDate?: Maybe<Scalars['date']>;
	id?: Maybe<Scalars['uuid']>;
	notebookId?: Maybe<Scalars['uuid']>;
	professionalId?: Maybe<Scalars['uuid']>;
	structure?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "notebook_event" */
export type NotebookEventMaxOrderBy = {
	creationDate?: Maybe<OrderBy>;
	event?: Maybe<OrderBy>;
	eventDate?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	notebookId?: Maybe<OrderBy>;
	professionalId?: Maybe<OrderBy>;
	structure?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type NotebookEventMinFields = {
	__typename?: 'notebook_event_min_fields';
	creationDate?: Maybe<Scalars['timestamptz']>;
	event?: Maybe<Scalars['String']>;
	eventDate?: Maybe<Scalars['date']>;
	id?: Maybe<Scalars['uuid']>;
	notebookId?: Maybe<Scalars['uuid']>;
	professionalId?: Maybe<Scalars['uuid']>;
	structure?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "notebook_event" */
export type NotebookEventMinOrderBy = {
	creationDate?: Maybe<OrderBy>;
	event?: Maybe<OrderBy>;
	eventDate?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	notebookId?: Maybe<OrderBy>;
	professionalId?: Maybe<OrderBy>;
	structure?: Maybe<OrderBy>;
};

/** response of any mutation on the table "notebook_event" */
export type NotebookEventMutationResponse = {
	__typename?: 'notebook_event_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<NotebookEvent>;
};

/** on conflict condition type for table "notebook_event" */
export type NotebookEventOnConflict = {
	constraint: NotebookEventConstraint;
	update_columns?: Array<NotebookEventUpdateColumn>;
	where?: Maybe<NotebookEventBoolExp>;
};

/** Ordering options when selecting data from "notebook_event". */
export type NotebookEventOrderBy = {
	creationDate?: Maybe<OrderBy>;
	event?: Maybe<OrderBy>;
	eventDate?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	notebook?: Maybe<NotebookOrderBy>;
	notebookId?: Maybe<OrderBy>;
	professional?: Maybe<ProfessionalOrderBy>;
	professionalId?: Maybe<OrderBy>;
	structure?: Maybe<OrderBy>;
};

/** primary key columns input for table: notebook_event */
export type NotebookEventPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "notebook_event" */
export enum NotebookEventSelectColumn {
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	Event = 'event',
	/** column name */
	EventDate = 'eventDate',
	/** column name */
	Id = 'id',
	/** column name */
	NotebookId = 'notebookId',
	/** column name */
	ProfessionalId = 'professionalId',
	/** column name */
	Structure = 'structure',
}

/** input type for updating data in table "notebook_event" */
export type NotebookEventSetInput = {
	creationDate?: Maybe<Scalars['timestamptz']>;
	event?: Maybe<Scalars['String']>;
	eventDate?: Maybe<Scalars['date']>;
	id?: Maybe<Scalars['uuid']>;
	notebookId?: Maybe<Scalars['uuid']>;
	professionalId?: Maybe<Scalars['uuid']>;
	structure?: Maybe<Scalars['String']>;
};

/** update columns of table "notebook_event" */
export enum NotebookEventUpdateColumn {
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	Event = 'event',
	/** column name */
	EventDate = 'eventDate',
	/** column name */
	Id = 'id',
	/** column name */
	NotebookId = 'notebookId',
	/** column name */
	ProfessionalId = 'professionalId',
	/** column name */
	Structure = 'structure',
}

/** columns and relationships of "notebook_focus" */
export type NotebookFocus = {
	__typename?: 'notebook_focus';
	creationDate: Scalars['timestamptz'];
	creatorId: Scalars['uuid'];
	id: Scalars['uuid'];
	linkedTo?: Maybe<Scalars['String']>;
	/** An object relationship */
	notebook: Notebook;
	notebookId: Scalars['uuid'];
	/** An object relationship */
	professional: Professional;
	situations?: Maybe<Scalars['jsonb']>;
	/** An array relationship */
	targets: Array<NotebookTarget>;
	/** An aggregate relationship */
	targets_aggregate: NotebookTargetAggregate;
	theme: Scalars['String'];
};

/** columns and relationships of "notebook_focus" */
export type NotebookFocusSituationsArgs = {
	path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "notebook_focus" */
export type NotebookFocusTargetsArgs = {
	distinct_on?: Maybe<Array<NotebookTargetSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookTargetOrderBy>>;
	where?: Maybe<NotebookTargetBoolExp>;
};

/** columns and relationships of "notebook_focus" */
export type NotebookFocusTargetsAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookTargetSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookTargetOrderBy>>;
	where?: Maybe<NotebookTargetBoolExp>;
};

/** aggregated selection of "notebook_focus" */
export type NotebookFocusAggregate = {
	__typename?: 'notebook_focus_aggregate';
	aggregate?: Maybe<NotebookFocusAggregateFields>;
	nodes: Array<NotebookFocus>;
};

/** aggregate fields of "notebook_focus" */
export type NotebookFocusAggregateFields = {
	__typename?: 'notebook_focus_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<NotebookFocusMaxFields>;
	min?: Maybe<NotebookFocusMinFields>;
};

/** aggregate fields of "notebook_focus" */
export type NotebookFocusAggregateFieldsCountArgs = {
	columns?: Maybe<Array<NotebookFocusSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notebook_focus" */
export type NotebookFocusAggregateOrderBy = {
	count?: Maybe<OrderBy>;
	max?: Maybe<NotebookFocusMaxOrderBy>;
	min?: Maybe<NotebookFocusMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type NotebookFocusAppendInput = {
	situations?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "notebook_focus" */
export type NotebookFocusArrRelInsertInput = {
	data: Array<NotebookFocusInsertInput>;
	/** on conflict condition */
	on_conflict?: Maybe<NotebookFocusOnConflict>;
};

/** Boolean expression to filter rows from the table "notebook_focus". All fields are combined with a logical 'AND'. */
export type NotebookFocusBoolExp = {
	_and?: Maybe<Array<NotebookFocusBoolExp>>;
	_not?: Maybe<NotebookFocusBoolExp>;
	_or?: Maybe<Array<NotebookFocusBoolExp>>;
	creationDate?: Maybe<TimestamptzComparisonExp>;
	creatorId?: Maybe<UuidComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	linkedTo?: Maybe<StringComparisonExp>;
	notebook?: Maybe<NotebookBoolExp>;
	notebookId?: Maybe<UuidComparisonExp>;
	professional?: Maybe<ProfessionalBoolExp>;
	situations?: Maybe<JsonbComparisonExp>;
	targets?: Maybe<NotebookTargetBoolExp>;
	theme?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "notebook_focus" */
export enum NotebookFocusConstraint {
	/** unique or primary key constraint */
	NotebookFocusPkey = 'notebook_focus_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type NotebookFocusDeleteAtPathInput = {
	situations?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type NotebookFocusDeleteElemInput = {
	situations?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type NotebookFocusDeleteKeyInput = {
	situations?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "notebook_focus" */
export type NotebookFocusInsertInput = {
	creationDate?: Maybe<Scalars['timestamptz']>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	linkedTo?: Maybe<Scalars['String']>;
	notebook?: Maybe<NotebookObjRelInsertInput>;
	notebookId?: Maybe<Scalars['uuid']>;
	professional?: Maybe<ProfessionalObjRelInsertInput>;
	situations?: Maybe<Scalars['jsonb']>;
	targets?: Maybe<NotebookTargetArrRelInsertInput>;
	theme?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type NotebookFocusMaxFields = {
	__typename?: 'notebook_focus_max_fields';
	creationDate?: Maybe<Scalars['timestamptz']>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	linkedTo?: Maybe<Scalars['String']>;
	notebookId?: Maybe<Scalars['uuid']>;
	theme?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "notebook_focus" */
export type NotebookFocusMaxOrderBy = {
	creationDate?: Maybe<OrderBy>;
	creatorId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	linkedTo?: Maybe<OrderBy>;
	notebookId?: Maybe<OrderBy>;
	theme?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type NotebookFocusMinFields = {
	__typename?: 'notebook_focus_min_fields';
	creationDate?: Maybe<Scalars['timestamptz']>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	linkedTo?: Maybe<Scalars['String']>;
	notebookId?: Maybe<Scalars['uuid']>;
	theme?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "notebook_focus" */
export type NotebookFocusMinOrderBy = {
	creationDate?: Maybe<OrderBy>;
	creatorId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	linkedTo?: Maybe<OrderBy>;
	notebookId?: Maybe<OrderBy>;
	theme?: Maybe<OrderBy>;
};

/** response of any mutation on the table "notebook_focus" */
export type NotebookFocusMutationResponse = {
	__typename?: 'notebook_focus_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<NotebookFocus>;
};

/** input type for inserting object relation for remote table "notebook_focus" */
export type NotebookFocusObjRelInsertInput = {
	data: NotebookFocusInsertInput;
	/** on conflict condition */
	on_conflict?: Maybe<NotebookFocusOnConflict>;
};

/** on conflict condition type for table "notebook_focus" */
export type NotebookFocusOnConflict = {
	constraint: NotebookFocusConstraint;
	update_columns?: Array<NotebookFocusUpdateColumn>;
	where?: Maybe<NotebookFocusBoolExp>;
};

/** Ordering options when selecting data from "notebook_focus". */
export type NotebookFocusOrderBy = {
	creationDate?: Maybe<OrderBy>;
	creatorId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	linkedTo?: Maybe<OrderBy>;
	notebook?: Maybe<NotebookOrderBy>;
	notebookId?: Maybe<OrderBy>;
	professional?: Maybe<ProfessionalOrderBy>;
	situations?: Maybe<OrderBy>;
	targets_aggregate?: Maybe<NotebookTargetAggregateOrderBy>;
	theme?: Maybe<OrderBy>;
};

/** primary key columns input for table: notebook_focus */
export type NotebookFocusPkColumnsInput = {
	id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type NotebookFocusPrependInput = {
	situations?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "notebook_focus" */
export enum NotebookFocusSelectColumn {
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	CreatorId = 'creatorId',
	/** column name */
	Id = 'id',
	/** column name */
	LinkedTo = 'linkedTo',
	/** column name */
	NotebookId = 'notebookId',
	/** column name */
	Situations = 'situations',
	/** column name */
	Theme = 'theme',
}

/** input type for updating data in table "notebook_focus" */
export type NotebookFocusSetInput = {
	creationDate?: Maybe<Scalars['timestamptz']>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	linkedTo?: Maybe<Scalars['String']>;
	notebookId?: Maybe<Scalars['uuid']>;
	situations?: Maybe<Scalars['jsonb']>;
	theme?: Maybe<Scalars['String']>;
};

/** update columns of table "notebook_focus" */
export enum NotebookFocusUpdateColumn {
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	CreatorId = 'creatorId',
	/** column name */
	Id = 'id',
	/** column name */
	LinkedTo = 'linkedTo',
	/** column name */
	NotebookId = 'notebookId',
	/** column name */
	Situations = 'situations',
	/** column name */
	Theme = 'theme',
}

/** input type for inserting data into table "notebook" */
export type NotebookInsertInput = {
	beneficiary?: Maybe<BeneficiaryObjRelInsertInput>;
	beneficiaryId?: Maybe<Scalars['uuid']>;
	contractSignDate?: Maybe<Scalars['date']>;
	contractType?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	educationLevel?: Maybe<Scalars['String']>;
	events?: Maybe<NotebookEventArrRelInsertInput>;
	focuses?: Maybe<NotebookFocusArrRelInsertInput>;
	geographicalArea?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	job?: Maybe<Scalars['String']>;
	members?: Maybe<NotebookMemberArrRelInsertInput>;
	rightAre?: Maybe<Scalars['Boolean']>;
	rightAss?: Maybe<Scalars['Boolean']>;
	rightBonus?: Maybe<Scalars['Boolean']>;
	rightRqth?: Maybe<Scalars['Boolean']>;
	rightRsa?: Maybe<Scalars['String']>;
	workSituation?: Maybe<Scalars['String']>;
	workSituationDate?: Maybe<Scalars['date']>;
};

/** aggregate max on columns */
export type NotebookMaxFields = {
	__typename?: 'notebook_max_fields';
	beneficiaryId?: Maybe<Scalars['uuid']>;
	contractSignDate?: Maybe<Scalars['date']>;
	contractType?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	educationLevel?: Maybe<Scalars['String']>;
	geographicalArea?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	job?: Maybe<Scalars['String']>;
	rightRsa?: Maybe<Scalars['String']>;
	workSituation?: Maybe<Scalars['String']>;
	workSituationDate?: Maybe<Scalars['date']>;
};

/** columns and relationships of "notebook_member" */
export type NotebookMember = {
	__typename?: 'notebook_member';
	creationDate: Scalars['timestamptz'];
	/** An object relationship */
	creator?: Maybe<Professional>;
	creatorId?: Maybe<Scalars['uuid']>;
	id: Scalars['uuid'];
	invitationSendDate?: Maybe<Scalars['timestamptz']>;
	memberType: Scalars['String'];
	/** An object relationship */
	notebook: Notebook;
	notebookId: Scalars['uuid'];
	notebookModificationDate?: Maybe<Scalars['timestamptz']>;
	notebookVisitDate?: Maybe<Scalars['timestamptz']>;
	/** An object relationship */
	professional: Professional;
	professionalId: Scalars['uuid'];
};

/** aggregated selection of "notebook_member" */
export type NotebookMemberAggregate = {
	__typename?: 'notebook_member_aggregate';
	aggregate?: Maybe<NotebookMemberAggregateFields>;
	nodes: Array<NotebookMember>;
};

/** aggregate fields of "notebook_member" */
export type NotebookMemberAggregateFields = {
	__typename?: 'notebook_member_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<NotebookMemberMaxFields>;
	min?: Maybe<NotebookMemberMinFields>;
};

/** aggregate fields of "notebook_member" */
export type NotebookMemberAggregateFieldsCountArgs = {
	columns?: Maybe<Array<NotebookMemberSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notebook_member" */
export type NotebookMemberAggregateOrderBy = {
	count?: Maybe<OrderBy>;
	max?: Maybe<NotebookMemberMaxOrderBy>;
	min?: Maybe<NotebookMemberMinOrderBy>;
};

/** input type for inserting array relation for remote table "notebook_member" */
export type NotebookMemberArrRelInsertInput = {
	data: Array<NotebookMemberInsertInput>;
	/** on conflict condition */
	on_conflict?: Maybe<NotebookMemberOnConflict>;
};

/** Boolean expression to filter rows from the table "notebook_member". All fields are combined with a logical 'AND'. */
export type NotebookMemberBoolExp = {
	_and?: Maybe<Array<NotebookMemberBoolExp>>;
	_not?: Maybe<NotebookMemberBoolExp>;
	_or?: Maybe<Array<NotebookMemberBoolExp>>;
	creationDate?: Maybe<TimestamptzComparisonExp>;
	creator?: Maybe<ProfessionalBoolExp>;
	creatorId?: Maybe<UuidComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	invitationSendDate?: Maybe<TimestamptzComparisonExp>;
	memberType?: Maybe<StringComparisonExp>;
	notebook?: Maybe<NotebookBoolExp>;
	notebookId?: Maybe<UuidComparisonExp>;
	notebookModificationDate?: Maybe<TimestamptzComparisonExp>;
	notebookVisitDate?: Maybe<TimestamptzComparisonExp>;
	professional?: Maybe<ProfessionalBoolExp>;
	professionalId?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "notebook_member" */
export enum NotebookMemberConstraint {
	/** unique or primary key constraint */
	NotebookMemberNotebookIdProfessionalIdKey = 'notebook_member_notebook_id_professional_id_key',
	/** unique or primary key constraint */
	NotebookMemberPkey = 'notebook_member_pkey',
}

/** input type for inserting data into table "notebook_member" */
export type NotebookMemberInsertInput = {
	creationDate?: Maybe<Scalars['timestamptz']>;
	creator?: Maybe<ProfessionalObjRelInsertInput>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	invitationSendDate?: Maybe<Scalars['timestamptz']>;
	memberType?: Maybe<Scalars['String']>;
	notebook?: Maybe<NotebookObjRelInsertInput>;
	notebookId?: Maybe<Scalars['uuid']>;
	notebookModificationDate?: Maybe<Scalars['timestamptz']>;
	notebookVisitDate?: Maybe<Scalars['timestamptz']>;
	professional?: Maybe<ProfessionalObjRelInsertInput>;
	professionalId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type NotebookMemberMaxFields = {
	__typename?: 'notebook_member_max_fields';
	creationDate?: Maybe<Scalars['timestamptz']>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	invitationSendDate?: Maybe<Scalars['timestamptz']>;
	memberType?: Maybe<Scalars['String']>;
	notebookId?: Maybe<Scalars['uuid']>;
	notebookModificationDate?: Maybe<Scalars['timestamptz']>;
	notebookVisitDate?: Maybe<Scalars['timestamptz']>;
	professionalId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "notebook_member" */
export type NotebookMemberMaxOrderBy = {
	creationDate?: Maybe<OrderBy>;
	creatorId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	invitationSendDate?: Maybe<OrderBy>;
	memberType?: Maybe<OrderBy>;
	notebookId?: Maybe<OrderBy>;
	notebookModificationDate?: Maybe<OrderBy>;
	notebookVisitDate?: Maybe<OrderBy>;
	professionalId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type NotebookMemberMinFields = {
	__typename?: 'notebook_member_min_fields';
	creationDate?: Maybe<Scalars['timestamptz']>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	invitationSendDate?: Maybe<Scalars['timestamptz']>;
	memberType?: Maybe<Scalars['String']>;
	notebookId?: Maybe<Scalars['uuid']>;
	notebookModificationDate?: Maybe<Scalars['timestamptz']>;
	notebookVisitDate?: Maybe<Scalars['timestamptz']>;
	professionalId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "notebook_member" */
export type NotebookMemberMinOrderBy = {
	creationDate?: Maybe<OrderBy>;
	creatorId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	invitationSendDate?: Maybe<OrderBy>;
	memberType?: Maybe<OrderBy>;
	notebookId?: Maybe<OrderBy>;
	notebookModificationDate?: Maybe<OrderBy>;
	notebookVisitDate?: Maybe<OrderBy>;
	professionalId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "notebook_member" */
export type NotebookMemberMutationResponse = {
	__typename?: 'notebook_member_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<NotebookMember>;
};

/** on conflict condition type for table "notebook_member" */
export type NotebookMemberOnConflict = {
	constraint: NotebookMemberConstraint;
	update_columns?: Array<NotebookMemberUpdateColumn>;
	where?: Maybe<NotebookMemberBoolExp>;
};

/** Ordering options when selecting data from "notebook_member". */
export type NotebookMemberOrderBy = {
	creationDate?: Maybe<OrderBy>;
	creator?: Maybe<ProfessionalOrderBy>;
	creatorId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	invitationSendDate?: Maybe<OrderBy>;
	memberType?: Maybe<OrderBy>;
	notebook?: Maybe<NotebookOrderBy>;
	notebookId?: Maybe<OrderBy>;
	notebookModificationDate?: Maybe<OrderBy>;
	notebookVisitDate?: Maybe<OrderBy>;
	professional?: Maybe<ProfessionalOrderBy>;
	professionalId?: Maybe<OrderBy>;
};

/** primary key columns input for table: notebook_member */
export type NotebookMemberPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "notebook_member" */
export enum NotebookMemberSelectColumn {
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	CreatorId = 'creatorId',
	/** column name */
	Id = 'id',
	/** column name */
	InvitationSendDate = 'invitationSendDate',
	/** column name */
	MemberType = 'memberType',
	/** column name */
	NotebookId = 'notebookId',
	/** column name */
	NotebookModificationDate = 'notebookModificationDate',
	/** column name */
	NotebookVisitDate = 'notebookVisitDate',
	/** column name */
	ProfessionalId = 'professionalId',
}

/** input type for updating data in table "notebook_member" */
export type NotebookMemberSetInput = {
	creationDate?: Maybe<Scalars['timestamptz']>;
	creatorId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	invitationSendDate?: Maybe<Scalars['timestamptz']>;
	memberType?: Maybe<Scalars['String']>;
	notebookId?: Maybe<Scalars['uuid']>;
	notebookModificationDate?: Maybe<Scalars['timestamptz']>;
	notebookVisitDate?: Maybe<Scalars['timestamptz']>;
	professionalId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "notebook_member" */
export enum NotebookMemberUpdateColumn {
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	CreatorId = 'creatorId',
	/** column name */
	Id = 'id',
	/** column name */
	InvitationSendDate = 'invitationSendDate',
	/** column name */
	MemberType = 'memberType',
	/** column name */
	NotebookId = 'notebookId',
	/** column name */
	NotebookModificationDate = 'notebookModificationDate',
	/** column name */
	NotebookVisitDate = 'notebookVisitDate',
	/** column name */
	ProfessionalId = 'professionalId',
}

/** aggregate min on columns */
export type NotebookMinFields = {
	__typename?: 'notebook_min_fields';
	beneficiaryId?: Maybe<Scalars['uuid']>;
	contractSignDate?: Maybe<Scalars['date']>;
	contractType?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	educationLevel?: Maybe<Scalars['String']>;
	geographicalArea?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	job?: Maybe<Scalars['String']>;
	rightRsa?: Maybe<Scalars['String']>;
	workSituation?: Maybe<Scalars['String']>;
	workSituationDate?: Maybe<Scalars['date']>;
};

/** response of any mutation on the table "notebook" */
export type NotebookMutationResponse = {
	__typename?: 'notebook_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Notebook>;
};

/** input type for inserting object relation for remote table "notebook" */
export type NotebookObjRelInsertInput = {
	data: NotebookInsertInput;
	/** on conflict condition */
	on_conflict?: Maybe<NotebookOnConflict>;
};

/** on conflict condition type for table "notebook" */
export type NotebookOnConflict = {
	constraint: NotebookConstraint;
	update_columns?: Array<NotebookUpdateColumn>;
	where?: Maybe<NotebookBoolExp>;
};

/** Ordering options when selecting data from "notebook". */
export type NotebookOrderBy = {
	beneficiary?: Maybe<BeneficiaryOrderBy>;
	beneficiaryId?: Maybe<OrderBy>;
	contractSignDate?: Maybe<OrderBy>;
	contractType?: Maybe<OrderBy>;
	creationDate?: Maybe<OrderBy>;
	educationLevel?: Maybe<OrderBy>;
	events_aggregate?: Maybe<NotebookEventAggregateOrderBy>;
	focuses_aggregate?: Maybe<NotebookFocusAggregateOrderBy>;
	geographicalArea?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	job?: Maybe<OrderBy>;
	members_aggregate?: Maybe<NotebookMemberAggregateOrderBy>;
	rightAre?: Maybe<OrderBy>;
	rightAss?: Maybe<OrderBy>;
	rightBonus?: Maybe<OrderBy>;
	rightRqth?: Maybe<OrderBy>;
	rightRsa?: Maybe<OrderBy>;
	workSituation?: Maybe<OrderBy>;
	workSituationDate?: Maybe<OrderBy>;
};

/** primary key columns input for table: notebook */
export type NotebookPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "notebook" */
export enum NotebookSelectColumn {
	/** column name */
	BeneficiaryId = 'beneficiaryId',
	/** column name */
	ContractSignDate = 'contractSignDate',
	/** column name */
	ContractType = 'contractType',
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	EducationLevel = 'educationLevel',
	/** column name */
	GeographicalArea = 'geographicalArea',
	/** column name */
	Id = 'id',
	/** column name */
	Job = 'job',
	/** column name */
	RightAre = 'rightAre',
	/** column name */
	RightAss = 'rightAss',
	/** column name */
	RightBonus = 'rightBonus',
	/** column name */
	RightRqth = 'rightRqth',
	/** column name */
	RightRsa = 'rightRsa',
	/** column name */
	WorkSituation = 'workSituation',
	/** column name */
	WorkSituationDate = 'workSituationDate',
}

/** input type for updating data in table "notebook" */
export type NotebookSetInput = {
	beneficiaryId?: Maybe<Scalars['uuid']>;
	contractSignDate?: Maybe<Scalars['date']>;
	contractType?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	educationLevel?: Maybe<Scalars['String']>;
	geographicalArea?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	job?: Maybe<Scalars['String']>;
	rightAre?: Maybe<Scalars['Boolean']>;
	rightAss?: Maybe<Scalars['Boolean']>;
	rightBonus?: Maybe<Scalars['Boolean']>;
	rightRqth?: Maybe<Scalars['Boolean']>;
	rightRsa?: Maybe<Scalars['String']>;
	workSituation?: Maybe<Scalars['String']>;
	workSituationDate?: Maybe<Scalars['date']>;
};

/** columns and relationships of "notebook_target" */
export type NotebookTarget = {
	__typename?: 'notebook_target';
	/** An array relationship */
	actions: Array<NotebookAction>;
	/** An aggregate relationship */
	actions_aggregate: NotebookActionAggregate;
	creationDate: Scalars['timestamptz'];
	/** An object relationship */
	focus: NotebookFocus;
	focusId: Scalars['uuid'];
	id: Scalars['uuid'];
	target: Scalars['String'];
};

/** columns and relationships of "notebook_target" */
export type NotebookTargetActionsArgs = {
	distinct_on?: Maybe<Array<NotebookActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookActionOrderBy>>;
	where?: Maybe<NotebookActionBoolExp>;
};

/** columns and relationships of "notebook_target" */
export type NotebookTargetActionsAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookActionOrderBy>>;
	where?: Maybe<NotebookActionBoolExp>;
};

/** aggregated selection of "notebook_target" */
export type NotebookTargetAggregate = {
	__typename?: 'notebook_target_aggregate';
	aggregate?: Maybe<NotebookTargetAggregateFields>;
	nodes: Array<NotebookTarget>;
};

/** aggregate fields of "notebook_target" */
export type NotebookTargetAggregateFields = {
	__typename?: 'notebook_target_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<NotebookTargetMaxFields>;
	min?: Maybe<NotebookTargetMinFields>;
};

/** aggregate fields of "notebook_target" */
export type NotebookTargetAggregateFieldsCountArgs = {
	columns?: Maybe<Array<NotebookTargetSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notebook_target" */
export type NotebookTargetAggregateOrderBy = {
	count?: Maybe<OrderBy>;
	max?: Maybe<NotebookTargetMaxOrderBy>;
	min?: Maybe<NotebookTargetMinOrderBy>;
};

/** input type for inserting array relation for remote table "notebook_target" */
export type NotebookTargetArrRelInsertInput = {
	data: Array<NotebookTargetInsertInput>;
	/** on conflict condition */
	on_conflict?: Maybe<NotebookTargetOnConflict>;
};

/** Boolean expression to filter rows from the table "notebook_target". All fields are combined with a logical 'AND'. */
export type NotebookTargetBoolExp = {
	_and?: Maybe<Array<NotebookTargetBoolExp>>;
	_not?: Maybe<NotebookTargetBoolExp>;
	_or?: Maybe<Array<NotebookTargetBoolExp>>;
	actions?: Maybe<NotebookActionBoolExp>;
	creationDate?: Maybe<TimestamptzComparisonExp>;
	focus?: Maybe<NotebookFocusBoolExp>;
	focusId?: Maybe<UuidComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	target?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "notebook_target" */
export enum NotebookTargetConstraint {
	/** unique or primary key constraint */
	NotebookTargetPkey = 'notebook_target_pkey',
}

/** input type for inserting data into table "notebook_target" */
export type NotebookTargetInsertInput = {
	actions?: Maybe<NotebookActionArrRelInsertInput>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	focus?: Maybe<NotebookFocusObjRelInsertInput>;
	focusId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	target?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type NotebookTargetMaxFields = {
	__typename?: 'notebook_target_max_fields';
	creationDate?: Maybe<Scalars['timestamptz']>;
	focusId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	target?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "notebook_target" */
export type NotebookTargetMaxOrderBy = {
	creationDate?: Maybe<OrderBy>;
	focusId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	target?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type NotebookTargetMinFields = {
	__typename?: 'notebook_target_min_fields';
	creationDate?: Maybe<Scalars['timestamptz']>;
	focusId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	target?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "notebook_target" */
export type NotebookTargetMinOrderBy = {
	creationDate?: Maybe<OrderBy>;
	focusId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	target?: Maybe<OrderBy>;
};

/** response of any mutation on the table "notebook_target" */
export type NotebookTargetMutationResponse = {
	__typename?: 'notebook_target_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<NotebookTarget>;
};

/** input type for inserting object relation for remote table "notebook_target" */
export type NotebookTargetObjRelInsertInput = {
	data: NotebookTargetInsertInput;
	/** on conflict condition */
	on_conflict?: Maybe<NotebookTargetOnConflict>;
};

/** on conflict condition type for table "notebook_target" */
export type NotebookTargetOnConflict = {
	constraint: NotebookTargetConstraint;
	update_columns?: Array<NotebookTargetUpdateColumn>;
	where?: Maybe<NotebookTargetBoolExp>;
};

/** Ordering options when selecting data from "notebook_target". */
export type NotebookTargetOrderBy = {
	actions_aggregate?: Maybe<NotebookActionAggregateOrderBy>;
	creationDate?: Maybe<OrderBy>;
	focus?: Maybe<NotebookFocusOrderBy>;
	focusId?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	target?: Maybe<OrderBy>;
};

/** primary key columns input for table: notebook_target */
export type NotebookTargetPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "notebook_target" */
export enum NotebookTargetSelectColumn {
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	FocusId = 'focusId',
	/** column name */
	Id = 'id',
	/** column name */
	Target = 'target',
}

/** input type for updating data in table "notebook_target" */
export type NotebookTargetSetInput = {
	creationDate?: Maybe<Scalars['timestamptz']>;
	focusId?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	target?: Maybe<Scalars['String']>;
};

/** update columns of table "notebook_target" */
export enum NotebookTargetUpdateColumn {
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	FocusId = 'focusId',
	/** column name */
	Id = 'id',
	/** column name */
	Target = 'target',
}

/** update columns of table "notebook" */
export enum NotebookUpdateColumn {
	/** column name */
	BeneficiaryId = 'beneficiaryId',
	/** column name */
	ContractSignDate = 'contractSignDate',
	/** column name */
	ContractType = 'contractType',
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	EducationLevel = 'educationLevel',
	/** column name */
	GeographicalArea = 'geographicalArea',
	/** column name */
	Id = 'id',
	/** column name */
	Job = 'job',
	/** column name */
	RightAre = 'rightAre',
	/** column name */
	RightAss = 'rightAss',
	/** column name */
	RightBonus = 'rightBonus',
	/** column name */
	RightRqth = 'rightRqth',
	/** column name */
	RightRsa = 'rightRsa',
	/** column name */
	WorkSituation = 'workSituation',
	/** column name */
	WorkSituationDate = 'workSituationDate',
}

/** column ordering options */
export enum OrderBy {
	/** in ascending order, nulls last */
	Asc = 'asc',
	/** in ascending order, nulls first */
	AscNullsFirst = 'asc_nulls_first',
	/** in ascending order, nulls last */
	AscNullsLast = 'asc_nulls_last',
	/** in descending order, nulls first */
	Desc = 'desc',
	/** in descending order, nulls first */
	DescNullsFirst = 'desc_nulls_first',
	/** in descending order, nulls last */
	DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "professional" */
export type Professional = {
	__typename?: 'professional';
	/** An array relationship */
	accounts: Array<Account>;
	/** An aggregate relationship */
	accounts_aggregate: AccountAggregate;
	email: Scalars['String'];
	firstname: Scalars['String'];
	id: Scalars['uuid'];
	lastname: Scalars['String'];
	mobileNumber?: Maybe<Scalars['String']>;
	/** An array relationship */
	notebookMembersByProfessionalId: Array<NotebookMember>;
	/** An aggregate relationship */
	notebookMembersByProfessionalId_aggregate: NotebookMemberAggregate;
	position?: Maybe<Scalars['String']>;
	/** An object relationship */
	structure: Structure;
	structureId: Scalars['uuid'];
};

/** columns and relationships of "professional" */
export type ProfessionalAccountsArgs = {
	distinct_on?: Maybe<Array<AccountSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AccountOrderBy>>;
	where?: Maybe<AccountBoolExp>;
};

/** columns and relationships of "professional" */
export type ProfessionalAccountsAggregateArgs = {
	distinct_on?: Maybe<Array<AccountSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AccountOrderBy>>;
	where?: Maybe<AccountBoolExp>;
};

/** columns and relationships of "professional" */
export type ProfessionalNotebookMembersByProfessionalIdArgs = {
	distinct_on?: Maybe<Array<NotebookMemberSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookMemberOrderBy>>;
	where?: Maybe<NotebookMemberBoolExp>;
};

/** columns and relationships of "professional" */
export type ProfessionalNotebookMembersByProfessionalIdAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookMemberSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookMemberOrderBy>>;
	where?: Maybe<NotebookMemberBoolExp>;
};

/** aggregated selection of "professional" */
export type ProfessionalAggregate = {
	__typename?: 'professional_aggregate';
	aggregate?: Maybe<ProfessionalAggregateFields>;
	nodes: Array<Professional>;
};

/** aggregate fields of "professional" */
export type ProfessionalAggregateFields = {
	__typename?: 'professional_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<ProfessionalMaxFields>;
	min?: Maybe<ProfessionalMinFields>;
};

/** aggregate fields of "professional" */
export type ProfessionalAggregateFieldsCountArgs = {
	columns?: Maybe<Array<ProfessionalSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "professional" */
export type ProfessionalAggregateOrderBy = {
	count?: Maybe<OrderBy>;
	max?: Maybe<ProfessionalMaxOrderBy>;
	min?: Maybe<ProfessionalMinOrderBy>;
};

/** input type for inserting array relation for remote table "professional" */
export type ProfessionalArrRelInsertInput = {
	data: Array<ProfessionalInsertInput>;
	/** on conflict condition */
	on_conflict?: Maybe<ProfessionalOnConflict>;
};

/** Boolean expression to filter rows from the table "professional". All fields are combined with a logical 'AND'. */
export type ProfessionalBoolExp = {
	_and?: Maybe<Array<ProfessionalBoolExp>>;
	_not?: Maybe<ProfessionalBoolExp>;
	_or?: Maybe<Array<ProfessionalBoolExp>>;
	accounts?: Maybe<AccountBoolExp>;
	email?: Maybe<StringComparisonExp>;
	firstname?: Maybe<StringComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	lastname?: Maybe<StringComparisonExp>;
	mobileNumber?: Maybe<StringComparisonExp>;
	notebookMembersByProfessionalId?: Maybe<NotebookMemberBoolExp>;
	position?: Maybe<StringComparisonExp>;
	structure?: Maybe<StructureBoolExp>;
	structureId?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "professional" */
export enum ProfessionalConstraint {
	/** unique or primary key constraint */
	ProfessionalEmailUnique = 'professional_email_unique',
	/** unique or primary key constraint */
	ProfessionalPkey = 'professional_pkey',
}

/** input type for inserting data into table "professional" */
export type ProfessionalInsertInput = {
	accounts?: Maybe<AccountArrRelInsertInput>;
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
	mobileNumber?: Maybe<Scalars['String']>;
	notebookMembersByProfessionalId?: Maybe<NotebookMemberArrRelInsertInput>;
	position?: Maybe<Scalars['String']>;
	structure?: Maybe<StructureObjRelInsertInput>;
	structureId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ProfessionalMaxFields = {
	__typename?: 'professional_max_fields';
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
	mobileNumber?: Maybe<Scalars['String']>;
	position?: Maybe<Scalars['String']>;
	structureId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "professional" */
export type ProfessionalMaxOrderBy = {
	email?: Maybe<OrderBy>;
	firstname?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	lastname?: Maybe<OrderBy>;
	mobileNumber?: Maybe<OrderBy>;
	position?: Maybe<OrderBy>;
	structureId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ProfessionalMinFields = {
	__typename?: 'professional_min_fields';
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
	mobileNumber?: Maybe<Scalars['String']>;
	position?: Maybe<Scalars['String']>;
	structureId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "professional" */
export type ProfessionalMinOrderBy = {
	email?: Maybe<OrderBy>;
	firstname?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	lastname?: Maybe<OrderBy>;
	mobileNumber?: Maybe<OrderBy>;
	position?: Maybe<OrderBy>;
	structureId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "professional" */
export type ProfessionalMutationResponse = {
	__typename?: 'professional_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Professional>;
};

/** input type for inserting object relation for remote table "professional" */
export type ProfessionalObjRelInsertInput = {
	data: ProfessionalInsertInput;
	/** on conflict condition */
	on_conflict?: Maybe<ProfessionalOnConflict>;
};

/** on conflict condition type for table "professional" */
export type ProfessionalOnConflict = {
	constraint: ProfessionalConstraint;
	update_columns?: Array<ProfessionalUpdateColumn>;
	where?: Maybe<ProfessionalBoolExp>;
};

/** Ordering options when selecting data from "professional". */
export type ProfessionalOrderBy = {
	accounts_aggregate?: Maybe<AccountAggregateOrderBy>;
	email?: Maybe<OrderBy>;
	firstname?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	lastname?: Maybe<OrderBy>;
	mobileNumber?: Maybe<OrderBy>;
	notebookMembersByProfessionalId_aggregate?: Maybe<NotebookMemberAggregateOrderBy>;
	position?: Maybe<OrderBy>;
	structure?: Maybe<StructureOrderBy>;
	structureId?: Maybe<OrderBy>;
};

/** primary key columns input for table: professional */
export type ProfessionalPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "professional" */
export enum ProfessionalSelectColumn {
	/** column name */
	Email = 'email',
	/** column name */
	Firstname = 'firstname',
	/** column name */
	Id = 'id',
	/** column name */
	Lastname = 'lastname',
	/** column name */
	MobileNumber = 'mobileNumber',
	/** column name */
	Position = 'position',
	/** column name */
	StructureId = 'structureId',
}

/** input type for updating data in table "professional" */
export type ProfessionalSetInput = {
	email?: Maybe<Scalars['String']>;
	firstname?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	lastname?: Maybe<Scalars['String']>;
	mobileNumber?: Maybe<Scalars['String']>;
	position?: Maybe<Scalars['String']>;
	structureId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "professional" */
export enum ProfessionalUpdateColumn {
	/** column name */
	Email = 'email',
	/** column name */
	Firstname = 'firstname',
	/** column name */
	Id = 'id',
	/** column name */
	Lastname = 'lastname',
	/** column name */
	MobileNumber = 'mobileNumber',
	/** column name */
	Position = 'position',
	/** column name */
	StructureId = 'structureId',
}

export type QueryRoot = {
	__typename?: 'query_root';
	/** fetch data from the table: "account" */
	account: Array<Account>;
	/** fetch aggregated fields from the table: "account" */
	account_aggregate: AccountAggregate;
	/** fetch data from the table: "account" using primary key columns */
	account_by_pk?: Maybe<Account>;
	/** fetch data from the table: "admin" */
	admin: Array<Admin>;
	/** fetch aggregated fields from the table: "admin" */
	admin_aggregate: AdminAggregate;
	/** fetch data from the table: "admin" using primary key columns */
	admin_by_pk?: Maybe<Admin>;
	/** fetch data from the table: "beneficiary" */
	beneficiary: Array<Beneficiary>;
	/** fetch aggregated fields from the table: "beneficiary" */
	beneficiary_aggregate: BeneficiaryAggregate;
	/** fetch data from the table: "beneficiary" using primary key columns */
	beneficiary_by_pk?: Maybe<Beneficiary>;
	/** fetch data from the table: "notebook" */
	notebook: Array<Notebook>;
	/** fetch data from the table: "notebook_action" */
	notebook_action: Array<NotebookAction>;
	/** fetch aggregated fields from the table: "notebook_action" */
	notebook_action_aggregate: NotebookActionAggregate;
	/** fetch data from the table: "notebook_action" using primary key columns */
	notebook_action_by_pk?: Maybe<NotebookAction>;
	/** fetch aggregated fields from the table: "notebook" */
	notebook_aggregate: NotebookAggregate;
	/** fetch data from the table: "notebook" using primary key columns */
	notebook_by_pk?: Maybe<Notebook>;
	/** fetch data from the table: "notebook_event" */
	notebook_event: Array<NotebookEvent>;
	/** fetch aggregated fields from the table: "notebook_event" */
	notebook_event_aggregate: NotebookEventAggregate;
	/** fetch data from the table: "notebook_event" using primary key columns */
	notebook_event_by_pk?: Maybe<NotebookEvent>;
	/** fetch data from the table: "notebook_focus" */
	notebook_focus: Array<NotebookFocus>;
	/** fetch aggregated fields from the table: "notebook_focus" */
	notebook_focus_aggregate: NotebookFocusAggregate;
	/** fetch data from the table: "notebook_focus" using primary key columns */
	notebook_focus_by_pk?: Maybe<NotebookFocus>;
	/** fetch data from the table: "notebook_member" */
	notebook_member: Array<NotebookMember>;
	/** fetch aggregated fields from the table: "notebook_member" */
	notebook_member_aggregate: NotebookMemberAggregate;
	/** fetch data from the table: "notebook_member" using primary key columns */
	notebook_member_by_pk?: Maybe<NotebookMember>;
	/** fetch data from the table: "notebook_target" */
	notebook_target: Array<NotebookTarget>;
	/** fetch aggregated fields from the table: "notebook_target" */
	notebook_target_aggregate: NotebookTargetAggregate;
	/** fetch data from the table: "notebook_target" using primary key columns */
	notebook_target_by_pk?: Maybe<NotebookTarget>;
	/** fetch data from the table: "professional" */
	professional: Array<Professional>;
	/** fetch aggregated fields from the table: "professional" */
	professional_aggregate: ProfessionalAggregate;
	/** fetch data from the table: "professional" using primary key columns */
	professional_by_pk?: Maybe<Professional>;
	/** fetch data from the table: "ref_action" */
	ref_action: Array<RefAction>;
	/** fetch aggregated fields from the table: "ref_action" */
	ref_action_aggregate: RefActionAggregate;
	/** fetch data from the table: "ref_action" using primary key columns */
	ref_action_by_pk?: Maybe<RefAction>;
	/** fetch data from the table: "ref_situation" */
	ref_situation: Array<RefSituation>;
	/** fetch aggregated fields from the table: "ref_situation" */
	ref_situation_aggregate: RefSituationAggregate;
	/** fetch data from the table: "ref_situation" using primary key columns */
	ref_situation_by_pk?: Maybe<RefSituation>;
	/** fetch data from the table: "ref_target" */
	ref_target: Array<RefTarget>;
	/** fetch aggregated fields from the table: "ref_target" */
	ref_target_aggregate: RefTargetAggregate;
	/** fetch data from the table: "ref_target" using primary key columns */
	ref_target_by_pk?: Maybe<RefTarget>;
	/** fetch data from the table: "structure" */
	structure: Array<Structure>;
	/** fetch aggregated fields from the table: "structure" */
	structure_aggregate: StructureAggregate;
	/** fetch data from the table: "structure" using primary key columns */
	structure_by_pk?: Maybe<Structure>;
};

export type QueryRootAccountArgs = {
	distinct_on?: Maybe<Array<AccountSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AccountOrderBy>>;
	where?: Maybe<AccountBoolExp>;
};

export type QueryRootAccountAggregateArgs = {
	distinct_on?: Maybe<Array<AccountSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AccountOrderBy>>;
	where?: Maybe<AccountBoolExp>;
};

export type QueryRootAccountByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootAdminArgs = {
	distinct_on?: Maybe<Array<AdminSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AdminOrderBy>>;
	where?: Maybe<AdminBoolExp>;
};

export type QueryRootAdminAggregateArgs = {
	distinct_on?: Maybe<Array<AdminSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AdminOrderBy>>;
	where?: Maybe<AdminBoolExp>;
};

export type QueryRootAdminByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootBeneficiaryArgs = {
	distinct_on?: Maybe<Array<BeneficiarySelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<BeneficiaryOrderBy>>;
	where?: Maybe<BeneficiaryBoolExp>;
};

export type QueryRootBeneficiaryAggregateArgs = {
	distinct_on?: Maybe<Array<BeneficiarySelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<BeneficiaryOrderBy>>;
	where?: Maybe<BeneficiaryBoolExp>;
};

export type QueryRootBeneficiaryByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootNotebookArgs = {
	distinct_on?: Maybe<Array<NotebookSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookOrderBy>>;
	where?: Maybe<NotebookBoolExp>;
};

export type QueryRootNotebookActionArgs = {
	distinct_on?: Maybe<Array<NotebookActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookActionOrderBy>>;
	where?: Maybe<NotebookActionBoolExp>;
};

export type QueryRootNotebookActionAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookActionOrderBy>>;
	where?: Maybe<NotebookActionBoolExp>;
};

export type QueryRootNotebookActionByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootNotebookAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookOrderBy>>;
	where?: Maybe<NotebookBoolExp>;
};

export type QueryRootNotebookByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootNotebookEventArgs = {
	distinct_on?: Maybe<Array<NotebookEventSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookEventOrderBy>>;
	where?: Maybe<NotebookEventBoolExp>;
};

export type QueryRootNotebookEventAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookEventSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookEventOrderBy>>;
	where?: Maybe<NotebookEventBoolExp>;
};

export type QueryRootNotebookEventByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootNotebookFocusArgs = {
	distinct_on?: Maybe<Array<NotebookFocusSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookFocusOrderBy>>;
	where?: Maybe<NotebookFocusBoolExp>;
};

export type QueryRootNotebookFocusAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookFocusSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookFocusOrderBy>>;
	where?: Maybe<NotebookFocusBoolExp>;
};

export type QueryRootNotebookFocusByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootNotebookMemberArgs = {
	distinct_on?: Maybe<Array<NotebookMemberSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookMemberOrderBy>>;
	where?: Maybe<NotebookMemberBoolExp>;
};

export type QueryRootNotebookMemberAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookMemberSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookMemberOrderBy>>;
	where?: Maybe<NotebookMemberBoolExp>;
};

export type QueryRootNotebookMemberByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootNotebookTargetArgs = {
	distinct_on?: Maybe<Array<NotebookTargetSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookTargetOrderBy>>;
	where?: Maybe<NotebookTargetBoolExp>;
};

export type QueryRootNotebookTargetAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookTargetSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookTargetOrderBy>>;
	where?: Maybe<NotebookTargetBoolExp>;
};

export type QueryRootNotebookTargetByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootProfessionalArgs = {
	distinct_on?: Maybe<Array<ProfessionalSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<ProfessionalOrderBy>>;
	where?: Maybe<ProfessionalBoolExp>;
};

export type QueryRootProfessionalAggregateArgs = {
	distinct_on?: Maybe<Array<ProfessionalSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<ProfessionalOrderBy>>;
	where?: Maybe<ProfessionalBoolExp>;
};

export type QueryRootProfessionalByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootRefActionArgs = {
	distinct_on?: Maybe<Array<RefActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefActionOrderBy>>;
	where?: Maybe<RefActionBoolExp>;
};

export type QueryRootRefActionAggregateArgs = {
	distinct_on?: Maybe<Array<RefActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefActionOrderBy>>;
	where?: Maybe<RefActionBoolExp>;
};

export type QueryRootRefActionByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootRefSituationArgs = {
	distinct_on?: Maybe<Array<RefSituationSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefSituationOrderBy>>;
	where?: Maybe<RefSituationBoolExp>;
};

export type QueryRootRefSituationAggregateArgs = {
	distinct_on?: Maybe<Array<RefSituationSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefSituationOrderBy>>;
	where?: Maybe<RefSituationBoolExp>;
};

export type QueryRootRefSituationByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootRefTargetArgs = {
	distinct_on?: Maybe<Array<RefTargetSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefTargetOrderBy>>;
	where?: Maybe<RefTargetBoolExp>;
};

export type QueryRootRefTargetAggregateArgs = {
	distinct_on?: Maybe<Array<RefTargetSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefTargetOrderBy>>;
	where?: Maybe<RefTargetBoolExp>;
};

export type QueryRootRefTargetByPkArgs = {
	id: Scalars['uuid'];
};

export type QueryRootStructureArgs = {
	distinct_on?: Maybe<Array<StructureSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<StructureOrderBy>>;
	where?: Maybe<StructureBoolExp>;
};

export type QueryRootStructureAggregateArgs = {
	distinct_on?: Maybe<Array<StructureSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<StructureOrderBy>>;
	where?: Maybe<StructureBoolExp>;
};

export type QueryRootStructureByPkArgs = {
	id: Scalars['uuid'];
};

/** columns and relationships of "ref_action" */
export type RefAction = {
	__typename?: 'ref_action';
	description: Scalars['String'];
	id: Scalars['uuid'];
	/** An object relationship */
	target: RefTarget;
	target_id: Scalars['uuid'];
};

/** aggregated selection of "ref_action" */
export type RefActionAggregate = {
	__typename?: 'ref_action_aggregate';
	aggregate?: Maybe<RefActionAggregateFields>;
	nodes: Array<RefAction>;
};

/** aggregate fields of "ref_action" */
export type RefActionAggregateFields = {
	__typename?: 'ref_action_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<RefActionMaxFields>;
	min?: Maybe<RefActionMinFields>;
};

/** aggregate fields of "ref_action" */
export type RefActionAggregateFieldsCountArgs = {
	columns?: Maybe<Array<RefActionSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ref_action" */
export type RefActionAggregateOrderBy = {
	count?: Maybe<OrderBy>;
	max?: Maybe<RefActionMaxOrderBy>;
	min?: Maybe<RefActionMinOrderBy>;
};

/** input type for inserting array relation for remote table "ref_action" */
export type RefActionArrRelInsertInput = {
	data: Array<RefActionInsertInput>;
	/** on conflict condition */
	on_conflict?: Maybe<RefActionOnConflict>;
};

/** Boolean expression to filter rows from the table "ref_action". All fields are combined with a logical 'AND'. */
export type RefActionBoolExp = {
	_and?: Maybe<Array<RefActionBoolExp>>;
	_not?: Maybe<RefActionBoolExp>;
	_or?: Maybe<Array<RefActionBoolExp>>;
	description?: Maybe<StringComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	target?: Maybe<RefTargetBoolExp>;
	target_id?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "ref_action" */
export enum RefActionConstraint {
	/** unique or primary key constraint */
	RefActionPkey = 'ref_action_pkey',
}

/** input type for inserting data into table "ref_action" */
export type RefActionInsertInput = {
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	target?: Maybe<RefTargetObjRelInsertInput>;
	target_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type RefActionMaxFields = {
	__typename?: 'ref_action_max_fields';
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	target_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "ref_action" */
export type RefActionMaxOrderBy = {
	description?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	target_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type RefActionMinFields = {
	__typename?: 'ref_action_min_fields';
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	target_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "ref_action" */
export type RefActionMinOrderBy = {
	description?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	target_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "ref_action" */
export type RefActionMutationResponse = {
	__typename?: 'ref_action_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<RefAction>;
};

/** on conflict condition type for table "ref_action" */
export type RefActionOnConflict = {
	constraint: RefActionConstraint;
	update_columns?: Array<RefActionUpdateColumn>;
	where?: Maybe<RefActionBoolExp>;
};

/** Ordering options when selecting data from "ref_action". */
export type RefActionOrderBy = {
	description?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	target?: Maybe<RefTargetOrderBy>;
	target_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: ref_action */
export type RefActionPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "ref_action" */
export enum RefActionSelectColumn {
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	TargetId = 'target_id',
}

/** input type for updating data in table "ref_action" */
export type RefActionSetInput = {
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	target_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "ref_action" */
export enum RefActionUpdateColumn {
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	TargetId = 'target_id',
}

/** columns and relationships of "ref_situation" */
export type RefSituation = {
	__typename?: 'ref_situation';
	description: Scalars['String'];
	id: Scalars['uuid'];
	theme: Scalars['String'];
};

/** aggregated selection of "ref_situation" */
export type RefSituationAggregate = {
	__typename?: 'ref_situation_aggregate';
	aggregate?: Maybe<RefSituationAggregateFields>;
	nodes: Array<RefSituation>;
};

/** aggregate fields of "ref_situation" */
export type RefSituationAggregateFields = {
	__typename?: 'ref_situation_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<RefSituationMaxFields>;
	min?: Maybe<RefSituationMinFields>;
};

/** aggregate fields of "ref_situation" */
export type RefSituationAggregateFieldsCountArgs = {
	columns?: Maybe<Array<RefSituationSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_situation". All fields are combined with a logical 'AND'. */
export type RefSituationBoolExp = {
	_and?: Maybe<Array<RefSituationBoolExp>>;
	_not?: Maybe<RefSituationBoolExp>;
	_or?: Maybe<Array<RefSituationBoolExp>>;
	description?: Maybe<StringComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	theme?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "ref_situation" */
export enum RefSituationConstraint {
	/** unique or primary key constraint */
	RefSituationPkey = 'ref_situation_pkey',
}

/** input type for inserting data into table "ref_situation" */
export type RefSituationInsertInput = {
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	theme?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RefSituationMaxFields = {
	__typename?: 'ref_situation_max_fields';
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	theme?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type RefSituationMinFields = {
	__typename?: 'ref_situation_min_fields';
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	theme?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_situation" */
export type RefSituationMutationResponse = {
	__typename?: 'ref_situation_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<RefSituation>;
};

/** on conflict condition type for table "ref_situation" */
export type RefSituationOnConflict = {
	constraint: RefSituationConstraint;
	update_columns?: Array<RefSituationUpdateColumn>;
	where?: Maybe<RefSituationBoolExp>;
};

/** Ordering options when selecting data from "ref_situation". */
export type RefSituationOrderBy = {
	description?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	theme?: Maybe<OrderBy>;
};

/** primary key columns input for table: ref_situation */
export type RefSituationPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "ref_situation" */
export enum RefSituationSelectColumn {
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Theme = 'theme',
}

/** input type for updating data in table "ref_situation" */
export type RefSituationSetInput = {
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	theme?: Maybe<Scalars['String']>;
};

/** update columns of table "ref_situation" */
export enum RefSituationUpdateColumn {
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Theme = 'theme',
}

/** columns and relationships of "ref_target" */
export type RefTarget = {
	__typename?: 'ref_target';
	/** An array relationship */
	actions: Array<RefAction>;
	/** An aggregate relationship */
	actions_aggregate: RefActionAggregate;
	description: Scalars['String'];
	id: Scalars['uuid'];
	theme?: Maybe<Scalars['String']>;
};

/** columns and relationships of "ref_target" */
export type RefTargetActionsArgs = {
	distinct_on?: Maybe<Array<RefActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefActionOrderBy>>;
	where?: Maybe<RefActionBoolExp>;
};

/** columns and relationships of "ref_target" */
export type RefTargetActionsAggregateArgs = {
	distinct_on?: Maybe<Array<RefActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefActionOrderBy>>;
	where?: Maybe<RefActionBoolExp>;
};

/** aggregated selection of "ref_target" */
export type RefTargetAggregate = {
	__typename?: 'ref_target_aggregate';
	aggregate?: Maybe<RefTargetAggregateFields>;
	nodes: Array<RefTarget>;
};

/** aggregate fields of "ref_target" */
export type RefTargetAggregateFields = {
	__typename?: 'ref_target_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<RefTargetMaxFields>;
	min?: Maybe<RefTargetMinFields>;
};

/** aggregate fields of "ref_target" */
export type RefTargetAggregateFieldsCountArgs = {
	columns?: Maybe<Array<RefTargetSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_target". All fields are combined with a logical 'AND'. */
export type RefTargetBoolExp = {
	_and?: Maybe<Array<RefTargetBoolExp>>;
	_not?: Maybe<RefTargetBoolExp>;
	_or?: Maybe<Array<RefTargetBoolExp>>;
	actions?: Maybe<RefActionBoolExp>;
	description?: Maybe<StringComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	theme?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "ref_target" */
export enum RefTargetConstraint {
	/** unique or primary key constraint */
	RefTargetPkey = 'ref_target_pkey',
}

/** input type for inserting data into table "ref_target" */
export type RefTargetInsertInput = {
	actions?: Maybe<RefActionArrRelInsertInput>;
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	theme?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RefTargetMaxFields = {
	__typename?: 'ref_target_max_fields';
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	theme?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type RefTargetMinFields = {
	__typename?: 'ref_target_min_fields';
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	theme?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_target" */
export type RefTargetMutationResponse = {
	__typename?: 'ref_target_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<RefTarget>;
};

/** input type for inserting object relation for remote table "ref_target" */
export type RefTargetObjRelInsertInput = {
	data: RefTargetInsertInput;
	/** on conflict condition */
	on_conflict?: Maybe<RefTargetOnConflict>;
};

/** on conflict condition type for table "ref_target" */
export type RefTargetOnConflict = {
	constraint: RefTargetConstraint;
	update_columns?: Array<RefTargetUpdateColumn>;
	where?: Maybe<RefTargetBoolExp>;
};

/** Ordering options when selecting data from "ref_target". */
export type RefTargetOrderBy = {
	actions_aggregate?: Maybe<RefActionAggregateOrderBy>;
	description?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	theme?: Maybe<OrderBy>;
};

/** primary key columns input for table: ref_target */
export type RefTargetPkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "ref_target" */
export enum RefTargetSelectColumn {
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Theme = 'theme',
}

/** input type for updating data in table "ref_target" */
export type RefTargetSetInput = {
	description?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	theme?: Maybe<Scalars['String']>;
};

/** update columns of table "ref_target" */
export enum RefTargetUpdateColumn {
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Theme = 'theme',
}

/** columns and relationships of "structure" */
export type Structure = {
	__typename?: 'structure';
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	email?: Maybe<Scalars['String']>;
	id: Scalars['uuid'];
	modificationDate?: Maybe<Scalars['timestamptz']>;
	name?: Maybe<Scalars['String']>;
	phone?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
	/** An array relationship */
	professionals: Array<Professional>;
	/** An aggregate relationship */
	professionals_aggregate: ProfessionalAggregate;
	shortDesc?: Maybe<Scalars['String']>;
	siret?: Maybe<Scalars['String']>;
	website?: Maybe<Scalars['String']>;
};

/** columns and relationships of "structure" */
export type StructureProfessionalsArgs = {
	distinct_on?: Maybe<Array<ProfessionalSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<ProfessionalOrderBy>>;
	where?: Maybe<ProfessionalBoolExp>;
};

/** columns and relationships of "structure" */
export type StructureProfessionalsAggregateArgs = {
	distinct_on?: Maybe<Array<ProfessionalSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<ProfessionalOrderBy>>;
	where?: Maybe<ProfessionalBoolExp>;
};

/** aggregated selection of "structure" */
export type StructureAggregate = {
	__typename?: 'structure_aggregate';
	aggregate?: Maybe<StructureAggregateFields>;
	nodes: Array<Structure>;
};

/** aggregate fields of "structure" */
export type StructureAggregateFields = {
	__typename?: 'structure_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<StructureMaxFields>;
	min?: Maybe<StructureMinFields>;
};

/** aggregate fields of "structure" */
export type StructureAggregateFieldsCountArgs = {
	columns?: Maybe<Array<StructureSelectColumn>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "structure". All fields are combined with a logical 'AND'. */
export type StructureBoolExp = {
	_and?: Maybe<Array<StructureBoolExp>>;
	_not?: Maybe<StructureBoolExp>;
	_or?: Maybe<Array<StructureBoolExp>>;
	address1?: Maybe<StringComparisonExp>;
	address2?: Maybe<StringComparisonExp>;
	city?: Maybe<StringComparisonExp>;
	creationDate?: Maybe<TimestamptzComparisonExp>;
	email?: Maybe<StringComparisonExp>;
	id?: Maybe<UuidComparisonExp>;
	modificationDate?: Maybe<TimestamptzComparisonExp>;
	name?: Maybe<StringComparisonExp>;
	phone?: Maybe<StringComparisonExp>;
	postalCode?: Maybe<StringComparisonExp>;
	professionals?: Maybe<ProfessionalBoolExp>;
	shortDesc?: Maybe<StringComparisonExp>;
	siret?: Maybe<StringComparisonExp>;
	website?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "structure" */
export enum StructureConstraint {
	/** unique or primary key constraint */
	StructurePkey = 'structure_pkey',
}

/** input type for inserting data into table "structure" */
export type StructureInsertInput = {
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	email?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	modificationDate?: Maybe<Scalars['timestamptz']>;
	name?: Maybe<Scalars['String']>;
	phone?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
	professionals?: Maybe<ProfessionalArrRelInsertInput>;
	shortDesc?: Maybe<Scalars['String']>;
	siret?: Maybe<Scalars['String']>;
	website?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type StructureMaxFields = {
	__typename?: 'structure_max_fields';
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	email?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	modificationDate?: Maybe<Scalars['timestamptz']>;
	name?: Maybe<Scalars['String']>;
	phone?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
	shortDesc?: Maybe<Scalars['String']>;
	siret?: Maybe<Scalars['String']>;
	website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type StructureMinFields = {
	__typename?: 'structure_min_fields';
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	email?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	modificationDate?: Maybe<Scalars['timestamptz']>;
	name?: Maybe<Scalars['String']>;
	phone?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
	shortDesc?: Maybe<Scalars['String']>;
	siret?: Maybe<Scalars['String']>;
	website?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "structure" */
export type StructureMutationResponse = {
	__typename?: 'structure_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Structure>;
};

/** input type for inserting object relation for remote table "structure" */
export type StructureObjRelInsertInput = {
	data: StructureInsertInput;
	/** on conflict condition */
	on_conflict?: Maybe<StructureOnConflict>;
};

/** on conflict condition type for table "structure" */
export type StructureOnConflict = {
	constraint: StructureConstraint;
	update_columns?: Array<StructureUpdateColumn>;
	where?: Maybe<StructureBoolExp>;
};

/** Ordering options when selecting data from "structure". */
export type StructureOrderBy = {
	address1?: Maybe<OrderBy>;
	address2?: Maybe<OrderBy>;
	city?: Maybe<OrderBy>;
	creationDate?: Maybe<OrderBy>;
	email?: Maybe<OrderBy>;
	id?: Maybe<OrderBy>;
	modificationDate?: Maybe<OrderBy>;
	name?: Maybe<OrderBy>;
	phone?: Maybe<OrderBy>;
	postalCode?: Maybe<OrderBy>;
	professionals_aggregate?: Maybe<ProfessionalAggregateOrderBy>;
	shortDesc?: Maybe<OrderBy>;
	siret?: Maybe<OrderBy>;
	website?: Maybe<OrderBy>;
};

/** primary key columns input for table: structure */
export type StructurePkColumnsInput = {
	id: Scalars['uuid'];
};

/** select columns of table "structure" */
export enum StructureSelectColumn {
	/** column name */
	Address1 = 'address1',
	/** column name */
	Address2 = 'address2',
	/** column name */
	City = 'city',
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	Email = 'email',
	/** column name */
	Id = 'id',
	/** column name */
	ModificationDate = 'modificationDate',
	/** column name */
	Name = 'name',
	/** column name */
	Phone = 'phone',
	/** column name */
	PostalCode = 'postalCode',
	/** column name */
	ShortDesc = 'shortDesc',
	/** column name */
	Siret = 'siret',
	/** column name */
	Website = 'website',
}

/** input type for updating data in table "structure" */
export type StructureSetInput = {
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	creationDate?: Maybe<Scalars['timestamptz']>;
	email?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	modificationDate?: Maybe<Scalars['timestamptz']>;
	name?: Maybe<Scalars['String']>;
	phone?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
	shortDesc?: Maybe<Scalars['String']>;
	siret?: Maybe<Scalars['String']>;
	website?: Maybe<Scalars['String']>;
};

/** update columns of table "structure" */
export enum StructureUpdateColumn {
	/** column name */
	Address1 = 'address1',
	/** column name */
	Address2 = 'address2',
	/** column name */
	City = 'city',
	/** column name */
	CreationDate = 'creationDate',
	/** column name */
	Email = 'email',
	/** column name */
	Id = 'id',
	/** column name */
	ModificationDate = 'modificationDate',
	/** column name */
	Name = 'name',
	/** column name */
	Phone = 'phone',
	/** column name */
	PostalCode = 'postalCode',
	/** column name */
	ShortDesc = 'shortDesc',
	/** column name */
	Siret = 'siret',
	/** column name */
	Website = 'website',
}

export type SubscriptionRoot = {
	__typename?: 'subscription_root';
	/** fetch data from the table: "account" */
	account: Array<Account>;
	/** fetch aggregated fields from the table: "account" */
	account_aggregate: AccountAggregate;
	/** fetch data from the table: "account" using primary key columns */
	account_by_pk?: Maybe<Account>;
	/** fetch data from the table: "admin" */
	admin: Array<Admin>;
	/** fetch aggregated fields from the table: "admin" */
	admin_aggregate: AdminAggregate;
	/** fetch data from the table: "admin" using primary key columns */
	admin_by_pk?: Maybe<Admin>;
	/** fetch data from the table: "beneficiary" */
	beneficiary: Array<Beneficiary>;
	/** fetch aggregated fields from the table: "beneficiary" */
	beneficiary_aggregate: BeneficiaryAggregate;
	/** fetch data from the table: "beneficiary" using primary key columns */
	beneficiary_by_pk?: Maybe<Beneficiary>;
	/** fetch data from the table: "notebook" */
	notebook: Array<Notebook>;
	/** fetch data from the table: "notebook_action" */
	notebook_action: Array<NotebookAction>;
	/** fetch aggregated fields from the table: "notebook_action" */
	notebook_action_aggregate: NotebookActionAggregate;
	/** fetch data from the table: "notebook_action" using primary key columns */
	notebook_action_by_pk?: Maybe<NotebookAction>;
	/** fetch aggregated fields from the table: "notebook" */
	notebook_aggregate: NotebookAggregate;
	/** fetch data from the table: "notebook" using primary key columns */
	notebook_by_pk?: Maybe<Notebook>;
	/** fetch data from the table: "notebook_event" */
	notebook_event: Array<NotebookEvent>;
	/** fetch aggregated fields from the table: "notebook_event" */
	notebook_event_aggregate: NotebookEventAggregate;
	/** fetch data from the table: "notebook_event" using primary key columns */
	notebook_event_by_pk?: Maybe<NotebookEvent>;
	/** fetch data from the table: "notebook_focus" */
	notebook_focus: Array<NotebookFocus>;
	/** fetch aggregated fields from the table: "notebook_focus" */
	notebook_focus_aggregate: NotebookFocusAggregate;
	/** fetch data from the table: "notebook_focus" using primary key columns */
	notebook_focus_by_pk?: Maybe<NotebookFocus>;
	/** fetch data from the table: "notebook_member" */
	notebook_member: Array<NotebookMember>;
	/** fetch aggregated fields from the table: "notebook_member" */
	notebook_member_aggregate: NotebookMemberAggregate;
	/** fetch data from the table: "notebook_member" using primary key columns */
	notebook_member_by_pk?: Maybe<NotebookMember>;
	/** fetch data from the table: "notebook_target" */
	notebook_target: Array<NotebookTarget>;
	/** fetch aggregated fields from the table: "notebook_target" */
	notebook_target_aggregate: NotebookTargetAggregate;
	/** fetch data from the table: "notebook_target" using primary key columns */
	notebook_target_by_pk?: Maybe<NotebookTarget>;
	/** fetch data from the table: "professional" */
	professional: Array<Professional>;
	/** fetch aggregated fields from the table: "professional" */
	professional_aggregate: ProfessionalAggregate;
	/** fetch data from the table: "professional" using primary key columns */
	professional_by_pk?: Maybe<Professional>;
	/** fetch data from the table: "ref_action" */
	ref_action: Array<RefAction>;
	/** fetch aggregated fields from the table: "ref_action" */
	ref_action_aggregate: RefActionAggregate;
	/** fetch data from the table: "ref_action" using primary key columns */
	ref_action_by_pk?: Maybe<RefAction>;
	/** fetch data from the table: "ref_situation" */
	ref_situation: Array<RefSituation>;
	/** fetch aggregated fields from the table: "ref_situation" */
	ref_situation_aggregate: RefSituationAggregate;
	/** fetch data from the table: "ref_situation" using primary key columns */
	ref_situation_by_pk?: Maybe<RefSituation>;
	/** fetch data from the table: "ref_target" */
	ref_target: Array<RefTarget>;
	/** fetch aggregated fields from the table: "ref_target" */
	ref_target_aggregate: RefTargetAggregate;
	/** fetch data from the table: "ref_target" using primary key columns */
	ref_target_by_pk?: Maybe<RefTarget>;
	/** fetch data from the table: "structure" */
	structure: Array<Structure>;
	/** fetch aggregated fields from the table: "structure" */
	structure_aggregate: StructureAggregate;
	/** fetch data from the table: "structure" using primary key columns */
	structure_by_pk?: Maybe<Structure>;
};

export type SubscriptionRootAccountArgs = {
	distinct_on?: Maybe<Array<AccountSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AccountOrderBy>>;
	where?: Maybe<AccountBoolExp>;
};

export type SubscriptionRootAccountAggregateArgs = {
	distinct_on?: Maybe<Array<AccountSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AccountOrderBy>>;
	where?: Maybe<AccountBoolExp>;
};

export type SubscriptionRootAccountByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootAdminArgs = {
	distinct_on?: Maybe<Array<AdminSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AdminOrderBy>>;
	where?: Maybe<AdminBoolExp>;
};

export type SubscriptionRootAdminAggregateArgs = {
	distinct_on?: Maybe<Array<AdminSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<AdminOrderBy>>;
	where?: Maybe<AdminBoolExp>;
};

export type SubscriptionRootAdminByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootBeneficiaryArgs = {
	distinct_on?: Maybe<Array<BeneficiarySelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<BeneficiaryOrderBy>>;
	where?: Maybe<BeneficiaryBoolExp>;
};

export type SubscriptionRootBeneficiaryAggregateArgs = {
	distinct_on?: Maybe<Array<BeneficiarySelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<BeneficiaryOrderBy>>;
	where?: Maybe<BeneficiaryBoolExp>;
};

export type SubscriptionRootBeneficiaryByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootNotebookArgs = {
	distinct_on?: Maybe<Array<NotebookSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookOrderBy>>;
	where?: Maybe<NotebookBoolExp>;
};

export type SubscriptionRootNotebookActionArgs = {
	distinct_on?: Maybe<Array<NotebookActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookActionOrderBy>>;
	where?: Maybe<NotebookActionBoolExp>;
};

export type SubscriptionRootNotebookActionAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookActionOrderBy>>;
	where?: Maybe<NotebookActionBoolExp>;
};

export type SubscriptionRootNotebookActionByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootNotebookAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookOrderBy>>;
	where?: Maybe<NotebookBoolExp>;
};

export type SubscriptionRootNotebookByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootNotebookEventArgs = {
	distinct_on?: Maybe<Array<NotebookEventSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookEventOrderBy>>;
	where?: Maybe<NotebookEventBoolExp>;
};

export type SubscriptionRootNotebookEventAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookEventSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookEventOrderBy>>;
	where?: Maybe<NotebookEventBoolExp>;
};

export type SubscriptionRootNotebookEventByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootNotebookFocusArgs = {
	distinct_on?: Maybe<Array<NotebookFocusSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookFocusOrderBy>>;
	where?: Maybe<NotebookFocusBoolExp>;
};

export type SubscriptionRootNotebookFocusAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookFocusSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookFocusOrderBy>>;
	where?: Maybe<NotebookFocusBoolExp>;
};

export type SubscriptionRootNotebookFocusByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootNotebookMemberArgs = {
	distinct_on?: Maybe<Array<NotebookMemberSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookMemberOrderBy>>;
	where?: Maybe<NotebookMemberBoolExp>;
};

export type SubscriptionRootNotebookMemberAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookMemberSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookMemberOrderBy>>;
	where?: Maybe<NotebookMemberBoolExp>;
};

export type SubscriptionRootNotebookMemberByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootNotebookTargetArgs = {
	distinct_on?: Maybe<Array<NotebookTargetSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookTargetOrderBy>>;
	where?: Maybe<NotebookTargetBoolExp>;
};

export type SubscriptionRootNotebookTargetAggregateArgs = {
	distinct_on?: Maybe<Array<NotebookTargetSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<NotebookTargetOrderBy>>;
	where?: Maybe<NotebookTargetBoolExp>;
};

export type SubscriptionRootNotebookTargetByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootProfessionalArgs = {
	distinct_on?: Maybe<Array<ProfessionalSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<ProfessionalOrderBy>>;
	where?: Maybe<ProfessionalBoolExp>;
};

export type SubscriptionRootProfessionalAggregateArgs = {
	distinct_on?: Maybe<Array<ProfessionalSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<ProfessionalOrderBy>>;
	where?: Maybe<ProfessionalBoolExp>;
};

export type SubscriptionRootProfessionalByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootRefActionArgs = {
	distinct_on?: Maybe<Array<RefActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefActionOrderBy>>;
	where?: Maybe<RefActionBoolExp>;
};

export type SubscriptionRootRefActionAggregateArgs = {
	distinct_on?: Maybe<Array<RefActionSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefActionOrderBy>>;
	where?: Maybe<RefActionBoolExp>;
};

export type SubscriptionRootRefActionByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootRefSituationArgs = {
	distinct_on?: Maybe<Array<RefSituationSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefSituationOrderBy>>;
	where?: Maybe<RefSituationBoolExp>;
};

export type SubscriptionRootRefSituationAggregateArgs = {
	distinct_on?: Maybe<Array<RefSituationSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefSituationOrderBy>>;
	where?: Maybe<RefSituationBoolExp>;
};

export type SubscriptionRootRefSituationByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootRefTargetArgs = {
	distinct_on?: Maybe<Array<RefTargetSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefTargetOrderBy>>;
	where?: Maybe<RefTargetBoolExp>;
};

export type SubscriptionRootRefTargetAggregateArgs = {
	distinct_on?: Maybe<Array<RefTargetSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<RefTargetOrderBy>>;
	where?: Maybe<RefTargetBoolExp>;
};

export type SubscriptionRootRefTargetByPkArgs = {
	id: Scalars['uuid'];
};

export type SubscriptionRootStructureArgs = {
	distinct_on?: Maybe<Array<StructureSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<StructureOrderBy>>;
	where?: Maybe<StructureBoolExp>;
};

export type SubscriptionRootStructureAggregateArgs = {
	distinct_on?: Maybe<Array<StructureSelectColumn>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<StructureOrderBy>>;
	where?: Maybe<StructureBoolExp>;
};

export type SubscriptionRootStructureByPkArgs = {
	id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
	_eq?: Maybe<Scalars['timestamptz']>;
	_gt?: Maybe<Scalars['timestamptz']>;
	_gte?: Maybe<Scalars['timestamptz']>;
	_in?: Maybe<Array<Scalars['timestamptz']>>;
	_is_null?: Maybe<Scalars['Boolean']>;
	_lt?: Maybe<Scalars['timestamptz']>;
	_lte?: Maybe<Scalars['timestamptz']>;
	_neq?: Maybe<Scalars['timestamptz']>;
	_nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
	_eq?: Maybe<Scalars['uuid']>;
	_gt?: Maybe<Scalars['uuid']>;
	_gte?: Maybe<Scalars['uuid']>;
	_in?: Maybe<Array<Scalars['uuid']>>;
	_is_null?: Maybe<Scalars['Boolean']>;
	_lt?: Maybe<Scalars['uuid']>;
	_lte?: Maybe<Scalars['uuid']>;
	_neq?: Maybe<Scalars['uuid']>;
	_nin?: Maybe<Array<Scalars['uuid']>>;
};

export type AddNotebookActionMutationVariables = Exact<{
	action: Scalars['String'];
	targetId: Scalars['uuid'];
	structureId: Scalars['uuid'];
	status: Scalars['String'];
}>;

export type AddNotebookActionMutation = {
	__typename?: 'mutation_root';
	insert_notebook_action_one?: Maybe<{
		__typename?: 'notebook_action';
		id: string;
		target: { __typename?: 'notebook_target'; id: string };
	}>;
};

export type GetRefActionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetRefActionsQuery = {
	__typename?: 'query_root';
	refActions: Array<{
		__typename?: 'ref_action';
		id: string;
		description: string;
		target: { __typename?: 'ref_target'; id: string; description: string };
	}>;
};

export type UpdateNotebookContractMutationVariables = Exact<{
	id: Scalars['uuid'];
	contractType: Scalars['String'];
	contractSignDate?: Maybe<Scalars['date']>;
}>;

export type UpdateNotebookContractMutation = {
	__typename?: 'mutation_root';
	update_notebook_by_pk?: Maybe<{ __typename?: 'notebook'; id: string }>;
};

export type AddNotebookFocusMutationVariables = Exact<{
	notebookId: Scalars['uuid'];
	situations?: Maybe<Scalars['jsonb']>;
	theme: Scalars['String'];
	linkedTo: Scalars['String'];
}>;

export type AddNotebookFocusMutation = {
	__typename?: 'mutation_root';
	insert_notebook_focus_one?: Maybe<{ __typename?: 'notebook_focus'; id: string }>;
};

export type UpdateNotebookFocusMutationVariables = Exact<{
	id: Scalars['uuid'];
	situations?: Maybe<Scalars['jsonb']>;
	linkedTo: Scalars['String'];
}>;

export type UpdateNotebookFocusMutation = {
	__typename?: 'mutation_root';
	update_notebook_focus_by_pk?: Maybe<{ __typename?: 'notebook_focus'; id: string }>;
};

export type GetNotebookFocusByIdQueryVariables = Exact<{
	id: Scalars['uuid'];
}>;

export type GetNotebookFocusByIdQuery = {
	__typename?: 'query_root';
	focus?: Maybe<{
		__typename?: 'notebook_focus';
		id: string;
		situations?: Maybe<any>;
		linkedTo?: Maybe<string>;
		theme: string;
		creationDate: any;
		targets: Array<{
			__typename?: 'notebook_target';
			target: string;
			id: string;
			actions: Array<{
				__typename?: 'notebook_action';
				id: string;
				creationDate: any;
				status: string;
				action: string;
				structure: {
					__typename?: 'structure';
					id: string;
					name?: Maybe<string>;
					phone?: Maybe<string>;
					address1?: Maybe<string>;
					address2?: Maybe<string>;
					city?: Maybe<string>;
					postalCode?: Maybe<string>;
					website?: Maybe<string>;
				};
				creator: { __typename?: 'professional'; id: string; lastname: string; firstname: string };
			}>;
		}>;
		professional: {
			__typename?: 'professional';
			id: string;
			position?: Maybe<string>;
			firstname: string;
			lastname: string;
			mobileNumber?: Maybe<string>;
			structureId: string;
			structure: {
				__typename?: 'structure';
				id: string;
				name?: Maybe<string>;
				phone?: Maybe<string>;
				address1?: Maybe<string>;
				address2?: Maybe<string>;
				city?: Maybe<string>;
				postalCode?: Maybe<string>;
				website?: Maybe<string>;
			};
		};
	}>;
};

export type GetRefSituationsQueryVariables = Exact<{ [key: string]: never }>;

export type GetRefSituationsQuery = {
	__typename?: 'query_root';
	refSituations: Array<{
		__typename?: 'ref_situation';
		id: string;
		description: string;
		theme: string;
	}>;
};

export type GetRefSituationsByThemeQueryVariables = Exact<{
	theme: Scalars['String'];
}>;

export type GetRefSituationsByThemeQuery = {
	__typename?: 'query_root';
	refSituations: Array<{
		__typename?: 'ref_situation';
		id: string;
		description: string;
		theme: string;
	}>;
};

export type AddNotebookMemberMutationVariables = Exact<{
	creatorId: Scalars['uuid'];
	professionalId: Scalars['uuid'];
	notebookId: Scalars['uuid'];
}>;

export type AddNotebookMemberMutation = {
	__typename?: 'mutation_root';
	newMember?: Maybe<{ __typename?: 'notebook_member'; id: string }>;
};

export type SearchProfessionalQueryVariables = Exact<{
	search?: Maybe<Scalars['String']>;
	professionalIds?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;

export type SearchProfessionalQuery = {
	__typename?: 'query_root';
	professionals: Array<{
		__typename?: 'professional';
		id: string;
		firstname: string;
		lastname: string;
		structure: {
			__typename?: 'structure';
			id: string;
			name?: Maybe<string>;
			postalCode?: Maybe<string>;
			phone?: Maybe<string>;
		};
	}>;
	count: {
		__typename?: 'professional_aggregate';
		aggregate?: Maybe<{ __typename?: 'professional_aggregate_fields'; count: number }>;
	};
};

export type UpdateBeneficiaryPersonalInfoMutationVariables = Exact<{
	id: Scalars['uuid'];
	firstname?: Maybe<Scalars['String']>;
	lastname?: Maybe<Scalars['String']>;
	dateOfBirth?: Maybe<Scalars['date']>;
	mobileNumber?: Maybe<Scalars['String']>;
	email?: Maybe<Scalars['String']>;
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	peNumber?: Maybe<Scalars['String']>;
	cafNumber?: Maybe<Scalars['String']>;
}>;

export type UpdateBeneficiaryPersonalInfoMutation = {
	__typename?: 'mutation_root';
	update?: Maybe<{ __typename?: 'beneficiary'; id: string }>;
};

export type UpdateSocioProMutationVariables = Exact<{
	id: Scalars['uuid'];
	workSituation?: Maybe<Scalars['String']>;
	workSituationDate?: Maybe<Scalars['date']>;
	rightRsa?: Maybe<Scalars['String']>;
	rightAre?: Maybe<Scalars['Boolean']>;
	rightAss?: Maybe<Scalars['Boolean']>;
	rightRqth?: Maybe<Scalars['Boolean']>;
	rightBonus?: Maybe<Scalars['Boolean']>;
	job?: Maybe<Scalars['String']>;
	geographicalArea?: Maybe<Scalars['String']>;
	educationLevel?: Maybe<Scalars['String']>;
}>;

export type UpdateSocioProMutation = {
	__typename?: 'mutation_root';
	update?: Maybe<{ __typename?: 'notebook'; id: string }>;
};

export type AddNotebookTargetMutationVariables = Exact<{
	focusId: Scalars['uuid'];
	target?: Maybe<Scalars['String']>;
}>;

export type AddNotebookTargetMutation = {
	__typename?: 'mutation_root';
	insert_notebook_target_one?: Maybe<{ __typename?: 'notebook_target'; id: string }>;
};

export type GetRefTargetByFocusQueryVariables = Exact<{
	theme: Scalars['String'];
}>;

export type GetRefTargetByFocusQuery = {
	__typename?: 'query_root';
	refTargets: Array<{ __typename?: 'ref_target'; id: string; description: string }>;
};

export type GetAccountQueryVariables = Exact<{
	accountId: Scalars['uuid'];
}>;

export type GetAccountQuery = {
	__typename?: 'query_root';
	account_by_pk?: Maybe<{
		__typename?: 'account';
		id: string;
		onboardingDone?: Maybe<boolean>;
		confirmed: boolean;
		username: string;
		beneficiary?: Maybe<{
			__typename?: 'beneficiary';
			firstname: string;
			lastname: string;
			email: string;
			mobileNumber?: Maybe<string>;
			dateOfBirth: string;
		}>;
		professional?: Maybe<{
			__typename?: 'professional';
			firstname: string;
			lastname: string;
			mobileNumber?: Maybe<string>;
			email: string;
			position?: Maybe<string>;
		}>;
	}>;
};

export type InsertStructureMutationVariables = Exact<{
	name?: Maybe<Scalars['String']>;
	phone?: Maybe<Scalars['String']>;
	email?: Maybe<Scalars['String']>;
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	website?: Maybe<Scalars['String']>;
	siret?: Maybe<Scalars['String']>;
	shortDesc?: Maybe<Scalars['String']>;
}>;

export type InsertStructureMutation = {
	__typename?: 'mutation_root';
	structure?: Maybe<{
		__typename?: 'structure';
		id: string;
		name?: Maybe<string>;
		phone?: Maybe<string>;
		email?: Maybe<string>;
		address1?: Maybe<string>;
		address2?: Maybe<string>;
		postalCode?: Maybe<string>;
		city?: Maybe<string>;
		website?: Maybe<string>;
		siret?: Maybe<string>;
		shortDesc?: Maybe<string>;
	}>;
};

export type UpdateStructureMutationVariables = Exact<{
	id: Scalars['uuid'];
	name?: Maybe<Scalars['String']>;
	phone?: Maybe<Scalars['String']>;
	email?: Maybe<Scalars['String']>;
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	website?: Maybe<Scalars['String']>;
	siret?: Maybe<Scalars['String']>;
	shortDesc?: Maybe<Scalars['String']>;
}>;

export type UpdateStructureMutation = {
	__typename?: 'mutation_root';
	structure?: Maybe<{
		__typename?: 'structure';
		id: string;
		name?: Maybe<string>;
		phone?: Maybe<string>;
		email?: Maybe<string>;
		address1?: Maybe<string>;
		address2?: Maybe<string>;
		postalCode?: Maybe<string>;
		city?: Maybe<string>;
		website?: Maybe<string>;
		siret?: Maybe<string>;
		shortDesc?: Maybe<string>;
	}>;
};

export type StructureFieldsFragment = {
	__typename?: 'structure';
	id: string;
	name?: Maybe<string>;
	phone?: Maybe<string>;
	email?: Maybe<string>;
	address1?: Maybe<string>;
	address2?: Maybe<string>;
	postalCode?: Maybe<string>;
	city?: Maybe<string>;
	website?: Maybe<string>;
	siret?: Maybe<string>;
	shortDesc?: Maybe<string>;
};

export type GetAccountsSummaryQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountsSummaryQuery = {
	__typename?: 'query_root';
	accounts: Array<{
		__typename?: 'account';
		id: string;
		confirmed: boolean;
		professional?: Maybe<{
			__typename?: 'professional';
			id: string;
			firstname: string;
			lastname: string;
			position?: Maybe<string>;
			mobileNumber?: Maybe<string>;
			structure: { __typename?: 'structure'; id: string; name?: Maybe<string> };
		}>;
	}>;
};

export type GetStructuresQueryVariables = Exact<{ [key: string]: never }>;

export type GetStructuresQuery = {
	__typename?: 'query_root';
	structure: Array<{
		__typename?: 'structure';
		id: string;
		siret?: Maybe<string>;
		name?: Maybe<string>;
		shortDesc?: Maybe<string>;
		phone?: Maybe<string>;
		email?: Maybe<string>;
		postalCode?: Maybe<string>;
		city?: Maybe<string>;
		address1?: Maybe<string>;
		address2?: Maybe<string>;
	}>;
};

export type GetNotebookByBeneficiaryIdQueryVariables = Exact<{
	id: Scalars['uuid'];
}>;

export type GetNotebookByBeneficiaryIdQuery = {
	__typename?: 'query_root';
	notebook: Array<{
		__typename?: 'notebook';
		id: string;
		workSituation?: Maybe<string>;
		beneficiary: {
			__typename?: 'beneficiary';
			address1?: Maybe<string>;
			address2?: Maybe<string>;
			cafNumber?: Maybe<string>;
			city?: Maybe<string>;
			dateOfBirth: string;
			email: string;
			firstname: string;
			id: string;
			lastname: string;
			mobileNumber?: Maybe<string>;
			peNumber?: Maybe<string>;
			postalCode?: Maybe<string>;
		};
		members: Array<{
			__typename?: 'notebook_member';
			id: string;
			memberType: string;
			notebookModificationDate?: Maybe<any>;
			notebookVisitDate?: Maybe<any>;
			professional: {
				__typename?: 'professional';
				id: string;
				lastname: string;
				firstname: string;
				position?: Maybe<string>;
				email: string;
				mobileNumber?: Maybe<string>;
				structure: {
					__typename?: 'structure';
					id: string;
					name?: Maybe<string>;
					address1?: Maybe<string>;
					address2?: Maybe<string>;
					postalCode?: Maybe<string>;
					city?: Maybe<string>;
				};
			};
		}>;
	}>;
};

export type GetLastVisitedOrUpdatedQueryVariables = Exact<{
	professionalId: Scalars['uuid'];
}>;

export type GetLastVisitedOrUpdatedQuery = {
	__typename?: 'query_root';
	lastVisited: Array<{
		__typename?: 'notebook_member';
		notebook: {
			__typename?: 'notebook';
			id: string;
			beneficiary: {
				__typename?: 'beneficiary';
				id: string;
				firstname: string;
				lastname: string;
				mobileNumber?: Maybe<string>;
				dateOfBirth: string;
			};
		};
	}>;
	lastUpdated: Array<{
		__typename?: 'notebook_member';
		notebook: {
			__typename?: 'notebook';
			id: string;
			beneficiary: {
				__typename?: 'beneficiary';
				id: string;
				firstname: string;
				lastname: string;
				mobileNumber?: Maybe<string>;
				dateOfBirth: string;
			};
		};
	}>;
};

export type CreateBeneficiaryMutationVariables = Exact<{
	firstname: Scalars['String'];
	lastname: Scalars['String'];
	dateOfBirth: Scalars['date'];
	mobileNumber?: Maybe<Scalars['String']>;
	email: Scalars['String'];
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	workSituation?: Maybe<Scalars['String']>;
	professionalId?: Maybe<Scalars['uuid']>;
	cafNumber?: Maybe<Scalars['String']>;
	peNumber?: Maybe<Scalars['String']>;
}>;

export type CreateBeneficiaryMutation = {
	__typename?: 'mutation_root';
	newNotebook?: Maybe<{ __typename?: 'notebook'; id: string }>;
};

export type SearchNotebookMemberQueryVariables = Exact<{
	professionalId: Scalars['uuid'];
	filter?: Maybe<Scalars['String']>;
	visitDateStart?: Maybe<Scalars['timestamptz']>;
	visitDateEnd?: Maybe<Scalars['timestamptz']>;
}>;

export type SearchNotebookMemberQuery = {
	__typename?: 'query_root';
	notebook_member: Array<{
		__typename?: 'notebook_member';
		id: string;
		notebook: {
			__typename?: 'notebook';
			id: string;
			beneficiary: {
				__typename?: 'beneficiary';
				dateOfBirth: string;
				firstname: string;
				id: string;
				lastname: string;
				mobileNumber?: Maybe<string>;
			};
		};
	}>;
};

export type UpdateNotebookVisitDateMutationVariables = Exact<{
	notebookId: Scalars['uuid'];
	notebookVisitDate: Scalars['timestamptz'];
}>;

export type UpdateNotebookVisitDateMutation = {
	__typename?: 'mutation_root';
	update_notebook_member?: Maybe<{
		__typename?: 'notebook_member_mutation_response';
		returning: Array<{ __typename?: 'notebook_member'; id: string }>;
	}>;
};

export type GetNotebookQueryVariables = Exact<{
	id: Scalars['uuid'];
	eventsStart?: Maybe<Scalars['date']>;
	eventsEnd?: Maybe<Scalars['date']>;
}>;

export type GetNotebookQuery = {
	__typename?: 'query_root';
	notebook?: Maybe<{
		__typename?: 'notebook';
		id: string;
		workSituationDate?: Maybe<string>;
		workSituation?: Maybe<string>;
		rightRsa?: Maybe<string>;
		rightRqth: boolean;
		rightAre: boolean;
		rightAss?: Maybe<boolean>;
		rightBonus: boolean;
		geographicalArea?: Maybe<string>;
		job?: Maybe<string>;
		educationLevel?: Maybe<string>;
		contractType?: Maybe<string>;
		contractSignDate?: Maybe<string>;
		beneficiary: {
			__typename?: 'beneficiary';
			address1?: Maybe<string>;
			address2?: Maybe<string>;
			cafNumber?: Maybe<string>;
			city?: Maybe<string>;
			dateOfBirth: string;
			email: string;
			firstname: string;
			id: string;
			lastname: string;
			mobileNumber?: Maybe<string>;
			peNumber?: Maybe<string>;
			postalCode?: Maybe<string>;
		};
		focuses: Array<{
			__typename?: 'notebook_focus';
			id: string;
			theme: string;
			situations?: Maybe<any>;
			linkedTo?: Maybe<string>;
			targets: Array<{ __typename?: 'notebook_target'; id: string; target: string }>;
		}>;
		members: Array<{
			__typename?: 'notebook_member';
			id: string;
			memberType: string;
			notebookModificationDate?: Maybe<any>;
			notebookVisitDate?: Maybe<any>;
			professional: {
				__typename?: 'professional';
				id: string;
				lastname: string;
				firstname: string;
				position?: Maybe<string>;
				email: string;
				mobileNumber?: Maybe<string>;
				structure: {
					__typename?: 'structure';
					id: string;
					name?: Maybe<string>;
					address1?: Maybe<string>;
					address2?: Maybe<string>;
					postalCode?: Maybe<string>;
					city?: Maybe<string>;
				};
			};
		}>;
		events: Array<{
			__typename?: 'notebook_event';
			id: string;
			eventDate: string;
			event?: Maybe<string>;
			structure?: Maybe<string>;
			professionalId: string;
			professional: {
				__typename?: 'professional';
				structureId: string;
				structure: { __typename?: 'structure'; name?: Maybe<string> };
			};
		}>;
	}>;
};

export type GetNotebookEventsQueryVariables = Exact<{
	eventsStart?: Maybe<Scalars['date']>;
	eventsEnd?: Maybe<Scalars['date']>;
	notebookId: Scalars['uuid'];
}>;

export type GetNotebookEventsQuery = {
	__typename?: 'query_root';
	notebook_event: Array<{
		__typename?: 'notebook_event';
		id: string;
		eventDate: string;
		event?: Maybe<string>;
		structure?: Maybe<string>;
		professionalId: string;
		professional: {
			__typename?: 'professional';
			structureId: string;
			structure: { __typename?: 'structure'; name?: Maybe<string> };
		};
	}>;
};

export type EventFieldsFragment = {
	__typename?: 'notebook_event';
	id: string;
	eventDate: string;
	event?: Maybe<string>;
	structure?: Maybe<string>;
	professionalId: string;
	professional: {
		__typename?: 'professional';
		structureId: string;
		structure: { __typename?: 'structure'; name?: Maybe<string> };
	};
};

export type UpdateProfessionalProfileMutationVariables = Exact<{
	firstname: Scalars['String'];
	lastname: Scalars['String'];
	mobileNumber: Scalars['String'];
	position: Scalars['String'];
	professionalId: Scalars['uuid'];
}>;

export type UpdateProfessionalProfileMutation = {
	__typename?: 'mutation_root';
	updateProfessional?: Maybe<{
		__typename?: 'professional_mutation_response';
		affected_rows: number;
	}>;
	updateAccount?: Maybe<{
		__typename?: 'account_mutation_response';
		returning: Array<{
			__typename?: 'account';
			id: string;
			onboardingDone?: Maybe<boolean>;
			confirmed: boolean;
			username: string;
			professional?: Maybe<{
				__typename?: 'professional';
				firstname: string;
				lastname: string;
				mobileNumber?: Maybe<string>;
				email: string;
				position?: Maybe<string>;
			}>;
		}>;
	}>;
};

export const StructureFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'structureFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'structure' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'phone' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'address1' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'address2' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'city' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'website' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'siret' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'shortDesc' } },
				],
			},
		},
	],
} as unknown as DocumentNode<StructureFieldsFragment, unknown>;
export const EventFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'eventFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'notebook_event' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eventDate' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'event' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'structure' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'professionalId' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'professional' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'structureId' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'structure' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<EventFieldsFragment, unknown>;
export const AddNotebookActionDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'AddNotebookAction' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'action' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'targetId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'structureId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'status' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'insert_notebook_action_one' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'object' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'action' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'action' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'structureId' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'structureId' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'targetId' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'targetId' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'status' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'status' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'target' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<AddNotebookActionMutation, AddNotebookActionMutationVariables>;
export const GetRefActionsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetRefActions' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'refActions' },
						name: { kind: 'Name', value: 'ref_action' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'order_by' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'description' },
											value: { kind: 'EnumValue', value: 'asc_nulls_first' },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'target' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetRefActionsQuery, GetRefActionsQueryVariables>;
export const UpdateNotebookContractDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateNotebookContract' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'contractType' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'contractSignDate' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'update_notebook_by_pk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: '_set' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'contractSignDate' },
											value: {
												kind: 'Variable',
												name: { kind: 'Name', value: 'contractSignDate' },
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'contractType' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'contractType' } },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'pk_columns' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'id' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	UpdateNotebookContractMutation,
	UpdateNotebookContractMutationVariables
>;
export const AddNotebookFocusDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'AddNotebookFocus' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'notebookId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'situations' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'jsonb' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'theme' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'linkedTo' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'insert_notebook_focus_one' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'object' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebookId' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'notebookId' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'situations' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'situations' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'theme' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'theme' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'linkedTo' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'linkedTo' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<AddNotebookFocusMutation, AddNotebookFocusMutationVariables>;
export const UpdateNotebookFocusDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateNotebookFocus' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'situations' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'jsonb' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'linkedTo' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'update_notebook_focus_by_pk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'pk_columns' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'id' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: '_set' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'situations' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'situations' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'linkedTo' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'linkedTo' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<UpdateNotebookFocusMutation, UpdateNotebookFocusMutationVariables>;
export const GetNotebookFocusByIdDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetNotebookFocusById' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'focus' },
						name: { kind: 'Name', value: 'notebook_focus_by_pk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'id' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'situations' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'linkedTo' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'targets' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'order_by' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'creationDate' },
														value: { kind: 'EnumValue', value: 'desc' },
													},
												],
											},
										},
									],
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'target' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'actions' },
												arguments: [
													{
														kind: 'Argument',
														name: { kind: 'Name', value: 'order_by' },
														value: {
															kind: 'ObjectValue',
															fields: [
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'creationDate' },
																	value: { kind: 'EnumValue', value: 'desc' },
																},
															],
														},
													},
												],
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'creationDate' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'status' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'action' } },
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'structure' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'phone' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'address1' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'address2' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'city' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'website' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'creator' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
																],
															},
														},
													],
												},
											},
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'professional' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'position' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'structureId' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'structure' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'phone' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'address1' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'address2' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'city' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'website' } },
													],
												},
											},
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'creationDate' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetNotebookFocusByIdQuery, GetNotebookFocusByIdQueryVariables>;
export const GetRefSituationsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetRefSituations' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'refSituations' },
						name: { kind: 'Name', value: 'ref_situation' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetRefSituationsQuery, GetRefSituationsQueryVariables>;
export const GetRefSituationsByThemeDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetRefSituationsByTheme' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'theme' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'refSituations' },
						name: { kind: 'Name', value: 'ref_situation' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'theme' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_eq' },
														value: { kind: 'Variable', name: { kind: 'Name', value: 'theme' } },
													},
												],
											},
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'order_by' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'description' },
											value: { kind: 'EnumValue', value: 'asc' },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetRefSituationsByThemeQuery, GetRefSituationsByThemeQueryVariables>;
export const AddNotebookMemberDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'AddNotebookMember' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'creatorId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'professionalId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'notebookId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'newMember' },
						name: { kind: 'Name', value: 'insert_notebook_member_one' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'object' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'creatorId' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'creatorId' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'professionalId' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'professionalId' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebookId' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'notebookId' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'memberType' },
											value: { kind: 'StringValue', value: 'no_referent', block: false },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<AddNotebookMemberMutation, AddNotebookMemberMutationVariables>;
export const SearchProfessionalDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'SearchProfessional' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'search' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'professionalIds' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
						},
					},
					defaultValue: { kind: 'ListValue', values: [] },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'professionals' },
						name: { kind: 'Name', value: 'professional' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: '_or' },
											value: {
												kind: 'ListValue',
												values: [
													{
														kind: 'ObjectValue',
														fields: [
															{
																kind: 'ObjectField',
																name: { kind: 'Name', value: 'firstname' },
																value: {
																	kind: 'ObjectValue',
																	fields: [
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: '_ilike' },
																			value: {
																				kind: 'Variable',
																				name: { kind: 'Name', value: 'search' },
																			},
																		},
																	],
																},
															},
														],
													},
													{
														kind: 'ObjectValue',
														fields: [
															{
																kind: 'ObjectField',
																name: { kind: 'Name', value: 'lastname' },
																value: {
																	kind: 'ObjectValue',
																	fields: [
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: '_ilike' },
																			value: {
																				kind: 'Variable',
																				name: { kind: 'Name', value: 'search' },
																			},
																		},
																	],
																},
															},
														],
													},
													{
														kind: 'ObjectValue',
														fields: [
															{
																kind: 'ObjectField',
																name: { kind: 'Name', value: 'structure' },
																value: {
																	kind: 'ObjectValue',
																	fields: [
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: 'name' },
																			value: {
																				kind: 'ObjectValue',
																				fields: [
																					{
																						kind: 'ObjectField',
																						name: { kind: 'Name', value: '_ilike' },
																						value: {
																							kind: 'Variable',
																							name: { kind: 'Name', value: 'search' },
																						},
																					},
																				],
																			},
																		},
																	],
																},
															},
														],
													},
													{
														kind: 'ObjectValue',
														fields: [
															{
																kind: 'ObjectField',
																name: { kind: 'Name', value: 'structure' },
																value: {
																	kind: 'ObjectValue',
																	fields: [
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: 'postalCode' },
																			value: {
																				kind: 'ObjectValue',
																				fields: [
																					{
																						kind: 'ObjectField',
																						name: { kind: 'Name', value: '_ilike' },
																						value: {
																							kind: 'Variable',
																							name: { kind: 'Name', value: 'search' },
																						},
																					},
																				],
																			},
																		},
																	],
																},
															},
														],
													},
												],
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: '_not' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'id' },
														value: {
															kind: 'ObjectValue',
															fields: [
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: '_in' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'professionalIds' },
																	},
																},
															],
														},
													},
												],
											},
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'limit' },
								value: { kind: 'IntValue', value: '5' },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'structure' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'phone' } },
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'count' },
						name: { kind: 'Name', value: 'professional_aggregate' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: '_or' },
											value: {
												kind: 'ListValue',
												values: [
													{
														kind: 'ObjectValue',
														fields: [
															{
																kind: 'ObjectField',
																name: { kind: 'Name', value: 'firstname' },
																value: {
																	kind: 'ObjectValue',
																	fields: [
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: '_ilike' },
																			value: {
																				kind: 'Variable',
																				name: { kind: 'Name', value: 'search' },
																			},
																		},
																	],
																},
															},
														],
													},
													{
														kind: 'ObjectValue',
														fields: [
															{
																kind: 'ObjectField',
																name: { kind: 'Name', value: 'lastname' },
																value: {
																	kind: 'ObjectValue',
																	fields: [
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: '_ilike' },
																			value: {
																				kind: 'Variable',
																				name: { kind: 'Name', value: 'search' },
																			},
																		},
																	],
																},
															},
														],
													},
													{
														kind: 'ObjectValue',
														fields: [
															{
																kind: 'ObjectField',
																name: { kind: 'Name', value: 'structure' },
																value: {
																	kind: 'ObjectValue',
																	fields: [
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: 'name' },
																			value: {
																				kind: 'ObjectValue',
																				fields: [
																					{
																						kind: 'ObjectField',
																						name: { kind: 'Name', value: '_ilike' },
																						value: {
																							kind: 'Variable',
																							name: { kind: 'Name', value: 'search' },
																						},
																					},
																				],
																			},
																		},
																	],
																},
															},
														],
													},
													{
														kind: 'ObjectValue',
														fields: [
															{
																kind: 'ObjectField',
																name: { kind: 'Name', value: 'structure' },
																value: {
																	kind: 'ObjectValue',
																	fields: [
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: 'postalCode' },
																			value: {
																				kind: 'ObjectValue',
																				fields: [
																					{
																						kind: 'ObjectField',
																						name: { kind: 'Name', value: '_ilike' },
																						value: {
																							kind: 'Variable',
																							name: { kind: 'Name', value: 'search' },
																						},
																					},
																				],
																			},
																		},
																	],
																},
															},
														],
													},
												],
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: '_not' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'id' },
														value: {
															kind: 'ObjectValue',
															fields: [
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: '_in' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'professionalIds' },
																	},
																},
															],
														},
													},
												],
											},
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'aggregate' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'count' },
												arguments: [
													{
														kind: 'Argument',
														name: { kind: 'Name', value: 'distinct' },
														value: { kind: 'BooleanValue', value: false },
													},
												],
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<SearchProfessionalQuery, SearchProfessionalQueryVariables>;
export const UpdateBeneficiaryPersonalInfoDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateBeneficiaryPersonalInfo' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'firstname' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'lastname' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'dateOfBirth' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'mobileNumber' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'address1' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'address2' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'postalCode' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'peNumber' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'cafNumber' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'update' },
						name: { kind: 'Name', value: 'update_beneficiary_by_pk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'pk_columns' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'id' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: '_set' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'firstname' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'firstname' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'lastname' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'lastname' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'dateOfBirth' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'dateOfBirth' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'mobileNumber' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'mobileNumber' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'email' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'address1' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'address1' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'address2' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'address2' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'postalCode' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'postalCode' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'city' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'peNumber' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'peNumber' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'cafNumber' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'cafNumber' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	UpdateBeneficiaryPersonalInfoMutation,
	UpdateBeneficiaryPersonalInfoMutationVariables
>;
export const UpdateSocioProDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateSocioPro' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'workSituation' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'workSituationDate' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'rightRsa' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'rightAre' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'rightAss' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'rightRqth' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'rightBonus' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'job' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'geographicalArea' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'educationLevel' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'update' },
						name: { kind: 'Name', value: 'update_notebook_by_pk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'pk_columns' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'id' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: '_set' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'workSituation' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'workSituation' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'workSituationDate' },
											value: {
												kind: 'Variable',
												name: { kind: 'Name', value: 'workSituationDate' },
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'rightRsa' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'rightRsa' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'rightAre' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'rightAre' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'rightAss' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'rightAss' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'rightRqth' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'rightRqth' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'rightBonus' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'rightBonus' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'job' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'job' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'geographicalArea' },
											value: {
												kind: 'Variable',
												name: { kind: 'Name', value: 'geographicalArea' },
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'educationLevel' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'educationLevel' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<UpdateSocioProMutation, UpdateSocioProMutationVariables>;
export const AddNotebookTargetDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'AddNotebookTarget' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'focusId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'target' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'insert_notebook_target_one' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'object' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'focusId' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'focusId' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'target' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'target' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<AddNotebookTargetMutation, AddNotebookTargetMutationVariables>;
export const GetRefTargetByFocusDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetRefTargetByFocus' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'theme' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'refTargets' },
						name: { kind: 'Name', value: 'ref_target' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'theme' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_eq' },
														value: { kind: 'Variable', name: { kind: 'Name', value: 'theme' } },
													},
												],
											},
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'order_by' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'description' },
											value: { kind: 'EnumValue', value: 'asc' },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetRefTargetByFocusQuery, GetRefTargetByFocusQueryVariables>;
export const GetAccountDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetAccount' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'accountId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'account_by_pk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'id' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'accountId' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'onboardingDone' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'confirmed' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'username' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'beneficiary' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'dateOfBirth' } },
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'professional' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'position' } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetAccountQuery, GetAccountQueryVariables>;
export const InsertStructureDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'InsertStructure' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'phone' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'address1' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'address2' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'postalCode' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'website' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'siret' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'shortDesc' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'structure' },
						name: { kind: 'Name', value: 'insert_structure_one' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'object' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'name' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'phone' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'phone' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'email' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'address1' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'address1' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'address2' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'address2' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'postalCode' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'postalCode' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'city' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'website' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'website' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'siret' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'siret' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'shortDesc' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'shortDesc' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'structureFields' } },
							],
						},
					},
				],
			},
		},
		...StructureFieldsFragmentDoc.definitions,
	],
} as unknown as DocumentNode<InsertStructureMutation, InsertStructureMutationVariables>;
export const UpdateStructureDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateStructure' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'phone' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'address1' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'address2' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'postalCode' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'website' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'siret' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'shortDesc' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'structure' },
						name: { kind: 'Name', value: 'update_structure_by_pk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'pk_columns' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'id' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: '_set' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'name' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'phone' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'phone' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'email' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'address1' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'address1' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'address2' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'address2' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'postalCode' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'postalCode' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'city' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'website' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'website' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'siret' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'siret' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'shortDesc' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'shortDesc' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'structureFields' } },
							],
						},
					},
				],
			},
		},
		...StructureFieldsFragmentDoc.definitions,
	],
} as unknown as DocumentNode<UpdateStructureMutation, UpdateStructureMutationVariables>;
export const GetAccountsSummaryDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetAccountsSummary' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'accounts' },
						name: { kind: 'Name', value: 'account' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'type' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_eq' },
														value: { kind: 'StringValue', value: 'professional', block: false },
													},
												],
											},
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'order_by' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'confirmed' },
											value: { kind: 'EnumValue', value: 'asc' },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'confirmed' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'professional' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'position' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'structure' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetAccountsSummaryQuery, GetAccountsSummaryQueryVariables>;
export const GetStructuresDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetStructures' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'structure' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'siret' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'shortDesc' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'phone' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'city' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'address1' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'address2' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetStructuresQuery, GetStructuresQueryVariables>;
export const GetNotebookByBeneficiaryIdDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'getNotebookByBeneficiaryId' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'notebook' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'beneficiaryId' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_eq' },
														value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
													},
												],
											},
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'workSituation' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'beneficiary' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'address1' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'address2' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'cafNumber' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'city' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'dateOfBirth' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'peNumber' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'members' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'order_by' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'notebookModificationDate' },
														value: { kind: 'EnumValue', value: 'desc_nulls_last' },
													},
												],
											},
										},
									],
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'memberType' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'notebookModificationDate' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'notebookVisitDate' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'professional' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'position' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'structure' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'address1' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'address2' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'city' } },
																],
															},
														},
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	GetNotebookByBeneficiaryIdQuery,
	GetNotebookByBeneficiaryIdQueryVariables
>;
export const GetLastVisitedOrUpdatedDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetLastVisitedOrUpdated' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'professionalId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'lastVisited' },
						name: { kind: 'Name', value: 'notebook_member' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'order_by' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebookVisitDate' },
											value: { kind: 'EnumValue', value: 'desc_nulls_last' },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'limit' },
								value: { kind: 'IntValue', value: '3' },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'professionalId' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_eq' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'professionalId' },
														},
													},
												],
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebookVisitDate' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_is_null' },
														value: { kind: 'BooleanValue', value: false },
													},
												],
											},
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'notebook' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'beneficiary' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'dateOfBirth' } },
													],
												},
											},
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'lastUpdated' },
						name: { kind: 'Name', value: 'notebook_member' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'order_by' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebookModificationDate' },
											value: { kind: 'EnumValue', value: 'desc_nulls_last' },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'limit' },
								value: { kind: 'IntValue', value: '3' },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'professionalId' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_neq' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'professionalId' },
														},
													},
												],
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebookModificationDate' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_is_null' },
														value: { kind: 'BooleanValue', value: false },
													},
												],
											},
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'notebook' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'beneficiary' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'dateOfBirth' } },
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetLastVisitedOrUpdatedQuery, GetLastVisitedOrUpdatedQueryVariables>;
export const CreateBeneficiaryDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'CreateBeneficiary' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'firstname' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'lastname' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'dateOfBirth' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'mobileNumber' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'address1' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'address2' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'postalCode' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'workSituation' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'professionalId' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'cafNumber' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'peNumber' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'newNotebook' },
						name: { kind: 'Name', value: 'insert_notebook_one' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'object' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'beneficiary' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'data' },
														value: {
															kind: 'ObjectValue',
															fields: [
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'firstname' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'firstname' },
																	},
																},
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'lastname' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'lastname' },
																	},
																},
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'dateOfBirth' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'dateOfBirth' },
																	},
																},
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'mobileNumber' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'mobileNumber' },
																	},
																},
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'email' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'email' },
																	},
																},
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'address1' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'address1' },
																	},
																},
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'address2' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'address2' },
																	},
																},
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'postalCode' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'postalCode' },
																	},
																},
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'city' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'city' },
																	},
																},
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'cafNumber' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'cafNumber' },
																	},
																},
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: 'peNumber' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'peNumber' },
																	},
																},
															],
														},
													},
												],
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'events' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'data' },
														value: { kind: 'ListValue', values: [] },
													},
												],
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'members' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'data' },
														value: {
															kind: 'ListValue',
															values: [
																{
																	kind: 'ObjectValue',
																	fields: [
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: 'memberType' },
																			value: {
																				kind: 'StringValue',
																				value: 'referent',
																				block: false,
																			},
																		},
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: 'professionalId' },
																			value: {
																				kind: 'Variable',
																				name: { kind: 'Name', value: 'professionalId' },
																			},
																		},
																	],
																},
															],
														},
													},
												],
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'workSituation' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'workSituation' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<CreateBeneficiaryMutation, CreateBeneficiaryMutationVariables>;
export const SearchNotebookMemberDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'SearchNotebookMember' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'professionalId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'visitDateStart' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'timestamptz' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'visitDateEnd' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'timestamptz' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'notebook_member' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'professionalId' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_eq' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'professionalId' },
														},
													},
												],
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebook' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'beneficiary' },
														value: {
															kind: 'ObjectValue',
															fields: [
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: '_or' },
																	value: {
																		kind: 'ListValue',
																		values: [
																			{
																				kind: 'ObjectValue',
																				fields: [
																					{
																						kind: 'ObjectField',
																						name: { kind: 'Name', value: 'peNumber' },
																						value: {
																							kind: 'ObjectValue',
																							fields: [
																								{
																									kind: 'ObjectField',
																									name: { kind: 'Name', value: '_ilike' },
																									value: {
																										kind: 'Variable',
																										name: { kind: 'Name', value: 'filter' },
																									},
																								},
																							],
																						},
																					},
																				],
																			},
																			{
																				kind: 'ObjectValue',
																				fields: [
																					{
																						kind: 'ObjectField',
																						name: { kind: 'Name', value: 'cafNumber' },
																						value: {
																							kind: 'ObjectValue',
																							fields: [
																								{
																									kind: 'ObjectField',
																									name: { kind: 'Name', value: '_ilike' },
																									value: {
																										kind: 'Variable',
																										name: { kind: 'Name', value: 'filter' },
																									},
																								},
																							],
																						},
																					},
																				],
																			},
																			{
																				kind: 'ObjectValue',
																				fields: [
																					{
																						kind: 'ObjectField',
																						name: { kind: 'Name', value: 'lastname' },
																						value: {
																							kind: 'ObjectValue',
																							fields: [
																								{
																									kind: 'ObjectField',
																									name: { kind: 'Name', value: '_ilike' },
																									value: {
																										kind: 'Variable',
																										name: { kind: 'Name', value: 'filter' },
																									},
																								},
																							],
																						},
																					},
																				],
																			},
																			{
																				kind: 'ObjectValue',
																				fields: [
																					{
																						kind: 'ObjectField',
																						name: { kind: 'Name', value: 'mobileNumber' },
																						value: {
																							kind: 'ObjectValue',
																							fields: [
																								{
																									kind: 'ObjectField',
																									name: { kind: 'Name', value: '_ilike' },
																									value: {
																										kind: 'Variable',
																										name: { kind: 'Name', value: 'filter' },
																									},
																								},
																							],
																						},
																					},
																				],
																			},
																		],
																	},
																},
															],
														},
													},
												],
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebookVisitDate' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_gt' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'visitDateStart' },
														},
													},
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_lt' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'visitDateEnd' },
														},
													},
												],
											},
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'order_by' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebookModificationDate' },
											value: { kind: 'EnumValue', value: 'desc_nulls_first' },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'notebook' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'beneficiary' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'dateOfBirth' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<SearchNotebookMemberQuery, SearchNotebookMemberQueryVariables>;
export const UpdateNotebookVisitDateDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateNotebookVisitDate' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'notebookId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'notebookVisitDate' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'timestamptz' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'update_notebook_member' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebook' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'id' },
														value: {
															kind: 'ObjectValue',
															fields: [
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: '_eq' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'notebookId' },
																	},
																},
															],
														},
													},
												],
											},
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: '_set' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebookVisitDate' },
											value: {
												kind: 'Variable',
												name: { kind: 'Name', value: 'notebookVisitDate' },
											},
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'returning' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	UpdateNotebookVisitDateMutation,
	UpdateNotebookVisitDateMutationVariables
>;
export const GetNotebookDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetNotebook' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'eventsStart' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'eventsEnd' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'notebook' },
						name: { kind: 'Name', value: 'notebook_by_pk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'id' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'workSituationDate' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'workSituation' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'rightRsa' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'rightRqth' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'rightAre' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'rightAss' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'rightBonus' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'geographicalArea' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'job' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'educationLevel' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'contractType' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'contractSignDate' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'beneficiary' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'address1' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'address2' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'cafNumber' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'city' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'dateOfBirth' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'peNumber' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'focuses' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'order_by' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'theme' },
														value: { kind: 'EnumValue', value: 'asc_nulls_last' },
													},
												],
											},
										},
									],
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'situations' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'linkedTo' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'targets' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'target' } },
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'members' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'order_by' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'notebookModificationDate' },
														value: { kind: 'EnumValue', value: 'desc_nulls_last' },
													},
												],
											},
										},
									],
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'memberType' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'notebookModificationDate' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'notebookVisitDate' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'professional' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'position' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'structure' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'address1' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'address2' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'city' } },
																],
															},
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'events' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'order_by' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'eventDate' },
														value: { kind: 'EnumValue', value: 'desc_nulls_first' },
													},
												],
											},
										},
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'where' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'eventDate' },
														value: {
															kind: 'ObjectValue',
															fields: [
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: '_gte' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'eventsStart' },
																	},
																},
																{
																	kind: 'ObjectField',
																	name: { kind: 'Name', value: '_lte' },
																	value: {
																		kind: 'Variable',
																		name: { kind: 'Name', value: 'eventsEnd' },
																	},
																},
															],
														},
													},
												],
											},
										},
									],
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'eventFields' } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
		...EventFieldsFragmentDoc.definitions,
	],
} as unknown as DocumentNode<GetNotebookQuery, GetNotebookQueryVariables>;
export const GetNotebookEventsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetNotebookEvents' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'eventsStart' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'eventsEnd' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'notebookId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'notebook_event' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'order_by' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'eventDate' },
											value: { kind: 'EnumValue', value: 'desc_nulls_last' },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'eventDate' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_gte' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'eventsStart' },
														},
													},
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_lte' },
														value: { kind: 'Variable', name: { kind: 'Name', value: 'eventsEnd' } },
													},
												],
											},
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'notebookId' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_eq' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'notebookId' },
														},
													},
												],
											},
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'eventFields' } },
							],
						},
					},
				],
			},
		},
		...EventFieldsFragmentDoc.definitions,
	],
} as unknown as DocumentNode<GetNotebookEventsQuery, GetNotebookEventsQueryVariables>;
export const UpdateProfessionalProfileDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateProfessionalProfile' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'firstname' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'lastname' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'mobileNumber' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'position' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'professionalId' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'updateProfessional' },
						name: { kind: 'Name', value: 'update_professional' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: '_set' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'firstname' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'firstname' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'lastname' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'lastname' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'position' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'position' } },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'mobileNumber' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'mobileNumber' } },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'id' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_eq' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'professionalId' },
														},
													},
												],
											},
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'affected_rows' } }],
						},
					},
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'updateAccount' },
						name: { kind: 'Name', value: 'update_account' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'professionalId' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: '_eq' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'professionalId' },
														},
													},
												],
											},
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: '_set' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'onboardingDone' },
											value: { kind: 'BooleanValue', value: true },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'returning' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'onboardingDone' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'confirmed' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'username' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'professional' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'mobileNumber' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'position' } },
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	UpdateProfessionalProfileMutation,
	UpdateProfessionalProfileMutationVariables
>;
export type AddNotebookActionMutationStore = OperationStore<
	AddNotebookActionMutation,
	AddNotebookActionMutationVariables
>;
export type GetRefActionsQueryStore = OperationStore<
	GetRefActionsQuery,
	GetRefActionsQueryVariables
>;
export type UpdateNotebookContractMutationStore = OperationStore<
	UpdateNotebookContractMutation,
	UpdateNotebookContractMutationVariables
>;
export type AddNotebookFocusMutationStore = OperationStore<
	AddNotebookFocusMutation,
	AddNotebookFocusMutationVariables
>;
export type UpdateNotebookFocusMutationStore = OperationStore<
	UpdateNotebookFocusMutation,
	UpdateNotebookFocusMutationVariables
>;
export type GetNotebookFocusByIdQueryStore = OperationStore<
	GetNotebookFocusByIdQuery,
	GetNotebookFocusByIdQueryVariables
>;
export type GetRefSituationsQueryStore = OperationStore<
	GetRefSituationsQuery,
	GetRefSituationsQueryVariables
>;
export type GetRefSituationsByThemeQueryStore = OperationStore<
	GetRefSituationsByThemeQuery,
	GetRefSituationsByThemeQueryVariables
>;
export type AddNotebookMemberMutationStore = OperationStore<
	AddNotebookMemberMutation,
	AddNotebookMemberMutationVariables
>;
export type SearchProfessionalQueryStore = OperationStore<
	SearchProfessionalQuery,
	SearchProfessionalQueryVariables
>;
export type UpdateBeneficiaryPersonalInfoMutationStore = OperationStore<
	UpdateBeneficiaryPersonalInfoMutation,
	UpdateBeneficiaryPersonalInfoMutationVariables
>;
export type UpdateSocioProMutationStore = OperationStore<
	UpdateSocioProMutation,
	UpdateSocioProMutationVariables
>;
export type AddNotebookTargetMutationStore = OperationStore<
	AddNotebookTargetMutation,
	AddNotebookTargetMutationVariables
>;
export type GetRefTargetByFocusQueryStore = OperationStore<
	GetRefTargetByFocusQuery,
	GetRefTargetByFocusQueryVariables
>;
export type GetAccountQueryStore = OperationStore<GetAccountQuery, GetAccountQueryVariables>;
export type InsertStructureMutationStore = OperationStore<
	InsertStructureMutation,
	InsertStructureMutationVariables
>;
export type UpdateStructureMutationStore = OperationStore<
	UpdateStructureMutation,
	UpdateStructureMutationVariables
>;
export type GetAccountsSummaryQueryStore = OperationStore<
	GetAccountsSummaryQuery,
	GetAccountsSummaryQueryVariables
>;
export type GetStructuresQueryStore = OperationStore<
	GetStructuresQuery,
	GetStructuresQueryVariables
>;
export type GetNotebookByBeneficiaryIdQueryStore = OperationStore<
	GetNotebookByBeneficiaryIdQuery,
	GetNotebookByBeneficiaryIdQueryVariables
>;
export type GetLastVisitedOrUpdatedQueryStore = OperationStore<
	GetLastVisitedOrUpdatedQuery,
	GetLastVisitedOrUpdatedQueryVariables
>;
export type CreateBeneficiaryMutationStore = OperationStore<
	CreateBeneficiaryMutation,
	CreateBeneficiaryMutationVariables
>;
export type SearchNotebookMemberQueryStore = OperationStore<
	SearchNotebookMemberQuery,
	SearchNotebookMemberQueryVariables
>;
export type UpdateNotebookVisitDateMutationStore = OperationStore<
	UpdateNotebookVisitDateMutation,
	UpdateNotebookVisitDateMutationVariables
>;
export type GetNotebookQueryStore = OperationStore<GetNotebookQuery, GetNotebookQueryVariables>;
export type GetNotebookEventsQueryStore = OperationStore<
	GetNotebookEventsQuery,
	GetNotebookEventsQueryVariables
>;
export type UpdateProfessionalProfileMutationStore = OperationStore<
	UpdateProfessionalProfileMutation,
	UpdateProfessionalProfileMutationVariables
>;
