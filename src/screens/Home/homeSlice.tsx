import { WithSlice, createSlice } from '@reduxjs/toolkit';
import { rootReducer } from '@src/store/lazyLoadedSlices';

const initialState: {
	isProcessing: boolean,
} = {
	isProcessing: false,
};

/**
 * The Notes App slice.
 */
export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setIsProcessing: (state, action) => {
			state.isProcessing = action.payload as boolean
		},
	},
	selectors: {
		selectIsProcessing: (state) => state.isProcessing,
	}
});

/**
 * Lazy load
 * */
rootReducer.inject(homeSlice);
const injectedSlice = homeSlice.injectInto(rootReducer);
declare module 'src/store/lazyLoadedSlices' {
	export interface LazyLoadedSlices extends WithSlice<typeof homeSlice> { }
}

export const {
	setIsProcessing,
} = homeSlice.actions;

export const {
	selectIsProcessing,
} =
	injectedSlice.selectors;

export type homeSliceType = typeof homeSlice;

export default homeSlice.reducer;
