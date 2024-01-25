import { createSlice } from '@reduxjs/toolkit'

/*
    Error slice, used to define a global error for the whole app.
*/

export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        hasError: false,
        error: ''
    },
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
            state.hasError = true;
        },
    },
    selectors: {
        selectError: state => state.errorReducer.error,
        selectHasError: state => state.errorReducer.hasError
    }
});

export const { setError } = errorSlice.actions;
export const { selectError, selectHasError } = errorSlice.getSelectors();

export default errorSlice.reducer;