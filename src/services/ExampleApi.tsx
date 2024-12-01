import apiService from '@src/store/apiService';
import { PartialDeep } from 'type-fest';

export const addTagTypes = ['survey_save', 'survey_get'] as const;
const ExampleApi = apiService
	.enhanceEndpoints({
		addTagTypes
	})
	.injectEndpoints({
		endpoints: (build) => ({
			getSurvey: build.query<GetExampleApiResponse, GetExampleApiArg>({
				query: () => ({ url: `/mock-api/survey` }),
				providesTags: ['survey_get']
			}),
			saveSurvey: build.mutation<SaveExampleApiResponse, SaveExampleApiArg>({
				query: (data) => ({
					url: `/mock-api/survey`,
					method: 'POST',
					data: data,
				}),
			}),
		}),
		overrideExisting: false,
	});

export default ExampleApi;
export type GetExampleApiResponse = Survey;
export type GetExampleApiArg = void;
export type SaveExampleApiResponse = Survey;
export type SaveExampleApiArg = PartialDeep<Survey>;
export type InventoryType = {
	id: number,
	name: string,
	bin: number,
	bottle: number,
	quantity: number,
	inventory: number,
	warning: string
}
export type CurrentDataType = {
	id: number,
	name: string,
	quantity: number,
}
export type Survey = {
	inventory: InventoryType[];
	dataCurrent: CurrentDataType[];
};

export const {
	useSaveSurveyMutation,
	useGetSurveyQuery
} = ExampleApi;
export type ExampleApiType = {
	[ExampleApi.reducerPath]: ReturnType<typeof ExampleApi.reducer>;
};