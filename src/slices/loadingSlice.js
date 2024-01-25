import { createSlice } from '@reduxjs/toolkit'

/*
    Loading slice, used to toggle the loading state - whether the app is currently fetching from the API.
    Has two loading states, one for episodes fetching and the other for character fetching.
*/

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isLoadingEpisodes: true, 
        isLoadingCharacters: false
    },
    reducers: {
        setIsLoadingEpisodes: (state, action) => {
            state.isLoadingEpisodes = action.payload;
        },
        setIsLoadingCharacters: (state, action) => {
            state.isLoadingCharacters = action.payload;
        }
    },
    selectors: {
        selectIsLoadingEpisodes: state => state.loadingReducer.isLoadingEpisodes,
        selectIsLoadingCharacters: state => state.loadingReducer.isLoadingCharacters
    }
});

export const { setIsLoadingEpisodes, setIsLoadingCharacters } = loadingSlice.actions;
export const { selectIsLoadingEpisodes, selectIsLoadingCharacters } = loadingSlice.getSelectors();

export default loadingSlice.reducer;