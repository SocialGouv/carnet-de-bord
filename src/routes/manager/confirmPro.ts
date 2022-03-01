import type { RequestHandler } from '@sveltejs/kit';
import send from '$lib/emailing';
import { getAppUrl, getHasuraAdminSecret } from '$lib/config/variables/private';
import { createClient } from '@urql/core';
import { getGraphqlAPI } from '$lib/config/variables/public';
import {
	ConfirmAccountByIdDocument,
	GetAccountByIdDocument,
} from '$lib/graphql/_gen/typed-document-nodes';
import type {
	ConfirmAccountByIdMutation,
	GetAccountByIdQuery,
} from '$lib/graphql/_gen/typed-document-nodes';
import { authorizeOnly } from '$lib/utils/security';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

const client = createClient({
	fetch,
	fetchOptions: {
		headers: {
			'Content-Type': 'application/json',
			'x-hasura-admin-secret': getHasuraAdminSecret(),
		},
	},
	requestPolicy: 'network-only',
	url: getGraphqlAPI(),
});

const confirmProSchema = yup.object().shape({
	id: yup.string().uuid().required(),
});
type ConfirmPro = yup.InferType<typeof confirmProSchema>;

const validateBody = (body: unknown): body is ConfirmPro => {
	return confirmProSchema.isType(body);
};

export const post: RequestHandler<Record<string, unknown>, Record<string, unknown>> = async (
	request
) => {
	try {
		authorizeOnly(['manager'])(request);
	} catch (e) {
		return {
			status: 403,
		};
	}

	const body = request.body;
	if (!validateBody(body)) {
		return {
			status: 400,
			body: {
				errors: 'INVALID_BODY',
			},
		};
	}

	const { id } = body;

	const appUrl = getAppUrl();

	const { error, data } = await client
		.query<GetAccountByIdQuery>(GetAccountByIdDocument, { id })
		.toPromise();

	if (error) {
		console.error('confirmPro', error);
		return {
			status: 500,
			body: {
				errors: 'SERVER_ERROR',
			},
		};
	}

	if (!data.account) {
		return {
			status: 404,
			body: {
				errors: 'Account not found',
			},
		};
	}

	if (!data.account.professional) {
		return {
			status: 404,
			body: {
				errors: 'Professional not found',
			},
		};
	}

	const { email, lastname, firstname } = data.account.professional;

	const result = await client
		.mutation<ConfirmAccountByIdMutation>(ConfirmAccountByIdDocument, {
			id,
			accessKey: uuidv4(),
			accessKeyDate: new Date().toISOString(),
		})
		.toPromise();

	if (result.error) {
		console.error('Could not confirm pro', { id, email, firstname, lastname, error: result.error });
		return {
			status: 500,
			body: {
				errors: 'SERVER_ERROR',
			},
		};
	}

	const accessKey = result.data.account.accessKey;

	// send email
	send({
		options: {
			to: email,
			subject: "Votre demande d'inscription à Carnet de Bord est validée",
		},
		template: 'accountRequestValidate',
		params: [
			{
				pro: {
					firstname,
					lastname,
				},
				url: {
					accessKey,
					appUrl,
				},
			},
		],
	}).catch((emailError) => {
		console.error(emailError);
	});

	return {
		status: 200,
		body: {},
	};
};
