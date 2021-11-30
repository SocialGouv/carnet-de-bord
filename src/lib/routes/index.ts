export type Segment = {
	name: string;
	path: string;
	label: string;
};

export type Route = {
	path: string;
};

const login: Route = {
	path: '/auth/login',
};
const proHome: Route = {
	path: '/pro/accueil',
};
const adminHome: Route = {
	path: '/admin',
};

const managerHome: Route = {
	path: '/manager/utilisateurs',
};

const beneficiaryHome: Route = {
	path: '/particulier',
};

type AppRoles = 'professional' | 'admin_cdb' | 'beneficiary' | 'manager';

const homes: Record<AppRoles, Route> = {
	professional: proHome,
	admin_cdb: adminHome,
	beneficiary: beneficiaryHome,
	manager: managerHome,
};

export const homeForRole = (role: AppRoles): string => {
	return (homes[role] || login).path;
};

export const baseUrlForRole = (role: AppRoles): string => {
	if (!role) {
		return '/';
	}
	if (role === 'professional') {
		return '/pro';
	} else if (role === 'admin_cdb') {
		return '/admin';
	} else if (role === 'beneficiary') {
		return '/particulier';
	} else if (role === 'manager') {
		return '/manager';
	}
	console.log({ role });
	throw new Error(`role ${role} is not handled!`);
};

export const isCurrentRoute = (currentPath: string, route: string): boolean => {
	if (route === currentPath) {
		return true;
	}
	if (route === '/pro/annuaire' && currentPath.startsWith('/pro/benefici')) {
		return true;
	}
	if (route === '/pro/accueil' && currentPath === '/pro/accueil') {
		return true;
	}
};
