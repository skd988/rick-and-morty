import { createSlice } from '@reduxjs/toolkit'

/*
    Episodes slice, used to store the episodes fetched from the api.
*/

export const episodesSlice = createSlice({
    name: 'episodes',
    initialState: {
        episodes: []
    },
    reducers: {
        setEpisodes: (state, action) => {
            state.episodes = action.payload;
        },
    },
    selectors: {
        selectEpisodes: state => state.episodesReducer.episodes
    }
});

export const { setEpisodes } = episodesSlice.actions;
export const { selectEpisodes } = episodesSlice.getSelectors();

export default episodesSlice.reducer;