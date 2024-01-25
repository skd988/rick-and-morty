import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEpisodes } from '../api'
import EpisodeListPage from './pages/EpisodeListPage'
import EpisodePage from './pages/EpisodePage'
import CharacterPage from './pages/CharacterPage'
import ErrorPage from './pages/ErrorPage'
import Navbar from './Navbar'
import LoadSpinner from './LoadSpinner'
import { selectIsLoadingEpisodes, setIsLoadingEpisodes } from '../slices/loadingSlice'
import { setEpisodes } from '../slices/episodesSlice'
import { selectHasError, setError } from '../slices/errorSlice'
import * as routes from '../routes'
import { PAGE_NOT_FOUND, getErrorMessage } from '../errors'
import './App.css'

/*
    App component, fetches episodes and the router to the app pages.
    Displays a loading spinner while fetching and an error page if there is a global error.
*/

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setIsLoadingEpisodes(true));
        getAllEpisodes()
        .then(episodes => Array.isArray(episodes) ? dispatch(setEpisodes(episodes)) : Promise.reject("Episodes were not loading"))
        .catch(reason => dispatch(setError(getErrorMessage(reason))))
        .finally(() => dispatch(setIsLoadingEpisodes(false))); 
    }, []);

    const loading = useSelector(selectIsLoadingEpisodes);
    const hasError = useSelector(selectHasError);
  
    return (
        <BrowserRouter>
            <Navbar/>
            {loading? <LoadSpinner/> :
            hasError? <ErrorPage/> :
            <Routes>
                <Route exact path={routes.EPISODE_LIST_PAGE} element={<EpisodeListPage/>}/>
                <Route path={routes.EPISODE_PAGE + ':number'} element={<EpisodePage/>}/>
                <Route path={routes.CHARACTER_PAGE + ':id'} element={<CharacterPage/>}/>
                <Route path={'*'} element={<ErrorPage message={PAGE_NOT_FOUND}/>}/>
            </Routes>}
        </BrowserRouter>
    );
}