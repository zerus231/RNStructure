import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
const PREFIX_API = process.env.VITE_API_BASE_URL || ""

const axiosBaseQuery =
	(): BaseQueryFn<AxiosRequestConfig<unknown>, unknown, AxiosError> =>
	async ({ url, method, data, params }) => {
		try {
			Axios.defaults.baseURL = '/api';
			const result = await Axios({
				url: PREFIX_API + url,
				method,
				data,
				params
			});
			return { data: result };
		} catch (axiosError) {
			const error = axiosError as AxiosError;
			return {
				error
			};
		}
	};

export const apiService = createApi({
	baseQuery: axiosBaseQuery(),
	endpoints: () => ({}),
	reducerPath: 'apiService'
});

export default apiService;
