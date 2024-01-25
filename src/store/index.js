import { configureStore } from '@reduxjs/toolkit'
import episodesReducer from '../slices/episodesSlice'
import charactersReducer from '../slices/charactersSlice'
import loadingReducer from '../slices/loadingSlice'
import errorReducer from '../slices/errorSlice'

/*
    Initiates the Redux store.
*/

const store = configureStore({reducer: { episodesReducer, charactersReducer, loadingReducer, errorReducer }});

export default store;