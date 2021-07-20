import cookie from 'cookie';
import type { Handle, GetSession } from '@sveltejs/kit';
import jwtDecode from 'jwt-decode';

export const handle: Handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	if (cookies.jwt) {
		const user = jwtDecode(cookies.jwt);
		request.locals.user = user;
	}
	return await resolve(request);
};

export const getSession: GetSession = async ({ locals }) => {
	const session = {
		user: locals.user && {
			username: locals.user.username,
			type: locals.user.type
		}
	};
	return session;
};

export async function serverFetch(request: Request): Promise<Response> {
	return fetch(request);
}
