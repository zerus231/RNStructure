import { JwtAuthConfig } from "./JwtAuthProvider";
import { VITE_API_BASE_URL } from 'react-native-dotenv';

const jwtAuthConfig: JwtAuthConfig = {
	tokenStorageKey: 'jwt_access_token',
	// signInUrl: VITE_API_BASE_URL + 'api/auth',
	// getUserUrl: VITE_API_BASE_URL + 'api/auth/sign-in-with-token',
	signInUrl: VITE_API_BASE_URL + 'auth/login',
	getUserUrl: VITE_API_BASE_URL + 'auth/me',
	signUpUrl: VITE_API_BASE_URL + 'api/auth/sign-up',
	tokenRefreshUrl: 'mock-api/auth/refresh',
	updateUserUrl: VITE_API_BASE_URL + 'api/auth/user',
	updateTokenFromHeader: true
};

export default jwtAuthConfig;
