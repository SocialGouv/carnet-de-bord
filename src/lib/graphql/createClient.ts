/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@urql/svelte';
import { getGraphqlAPI } from '$lib/config/variables/public';

function getToken(session: { token?: string }) {
	return session.token;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (session: any) => {
	const graphqlAPI = session.graphqlAPI ? session.graphqlAPI : getGraphqlAPI();
	console.log('createClient', { graphqlAPI, session, fn: getGraphqlAPI() });
	return createClient({
		url: graphqlAPI,
		fetch,
		fetchOptions: () => {
			const token = getToken(session);
			if (token) {
				return {
					headers: { authorization: token ? `Bearer ${token}` : '' },
				};
			}
			return {
				headers: { 'X-Hasura-Role': 'anonymous' },
			};
		},
	});
};
