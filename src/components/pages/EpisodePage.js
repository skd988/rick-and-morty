import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectEpisodes } from '../../slices/episodesSlice'
import { EPISODE_NOT_FOUND } from '../../errors'
import ErrorPage from './ErrorPage'
import EpisodeDisplay from '../EpisodeDisplay'

/*
    Display for a specific episode. If there is no such episode, displays an error page.
*/

export default function EpisodePage(){
    const episodeNumber = Number(useParams()['number']);
    const episode = useSelector(selectEpisodes)[episodeNumber-1];
   
    return (
        episode === undefined? <ErrorPage message={EPISODE_NOT_FOUND}/> : 
        <EpisodeDisplay episode={episode}/>
    );
}
