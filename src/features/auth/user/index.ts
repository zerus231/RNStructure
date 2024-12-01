/**
 * The type definition for a user object.
 */
export type User = {
	id: string;
	role: string[] | string | null;
	data: {
		displayName: string;
		photoURL?: string;
		email?: string;
		shortcuts?: string[];
		loginRedirectUrl?: string; // The URL to redirect to after login.
	};
	username: string;
	name: string;
	email: string;
	password: string;
	avatar: string;
	dateOfBirth: string;
	status: string;
	createAt: string;
	phoneNumber: string;
	cartId: string;
	outlet: {
		id: string;
		code: string;
		name: string;
		region: string;
	}
};
