import { createSlice } from '@reduxjs/toolkit'

/*
    Characters slice, used to store the characters fetched from the api.
*/

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: {}
    },
    reducers: {
        addCharacter: (state, action) => {
            state.characters[action.payload.id] = action.payload;
        },
        addMultipleCharacters: (state, action) => {
            state.characters = {...state.characters, 
            ...Object.fromEntries(action.payload.map((character => [character.id, character])))};
        }
    },
    selectors: {
        selectCharacters: state => state.charactersReducer.characters
    }
});

export const { addCharacter, addMultipleCharacters } = charactersSlice.actions;
export const { selectCharacters } = charactersSlice.getSelectors();

export default charactersSlice.reducer;