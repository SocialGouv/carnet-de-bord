import knex from '$lib/config/db/knex';
import { sendEmail } from '$lib/utils/sendEmail';
import { emailLoginRequest } from '$lib/utils/emailLoginRequest';
import type { RequestHandler } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import { getAppUrl } from '$lib/config/variables/private';

export const post: RequestHandler = async (request) => {
	const { username } = request.body as unknown as {
		username: string;
	};

	type Acc = {
		id: string;
		type: 'professional' | 'beneficiary' | 'admin' | 'manager';
		beneficiary_id: string;
		professional_id: string;
		manager_id: string;
		admin_id: string;
		confirmed: boolean;
	};

	let account = (await knex('account').where({ username }).first()) as Acc;

	if (!account) {
		account = (await knex('account')
			.select([
				'account.id as id',
				'account.type as type',
				'account.beneficiary_id as beneficiary_id',
				'account.professional_id as professional_id',
				'account.admin_id as admin_id',
				'account.manager_id as manager_id',
				'account.confirmed as confirmed',
			])
			.leftJoin('professional', 'professional.id', 'account.professional_id')
			.leftJoin('admin', 'admin.id', 'account.admin_id')
			.leftJoin('manager', 'manager.id', 'account.manager_id')
			.where('admin.email', username)
			.orWhere('professional.email', username)
			.orWhere('manager.email', username)
			.first()) as Acc;
		if (!account) {
			return {
				status: 401,
				body: {
					errors: 'USER_NOT_FOUND',
				},
			};
		}
	}

	if (!account.confirmed) {
		return {
			status: 403,
			body: {
				errors: 'ACCOUNT_NOT_CONFIRMED',
			},
		};
	}

	const { id, type, beneficiary_id, professional_id, admin_id, manager_id } = account;

	const accessKey = uuidv4();

	await knex('account')
		.update({ access_key: accessKey, access_key_date: new Date() })
		.where({ id });

	const { email, firstname, lastname } = (await knex(`${type}`)
		.where({
			id: beneficiary_id || professional_id || admin_id || manager_id,
		})
		.first()) as unknown as {
		email: string;
		firstname: string;
		lastname: string;
	};

	const appUrl = getAppUrl();

	// send email
	try {
		await sendEmail({
			to: email,
			subject: 'Accédez à Carnet de bord',
			html: emailLoginRequest({ firstname, lastname, accessKey, appUrl }),
		});
	} catch (e) {
		console.log(e);
	}

	return {
		status: 200,
		body: {
			email,
			...{ accessUrl: process.env['SANDBOX_LOGIN'] ? `/auth/jwt/${accessKey}` : null },
		},
	};
};
