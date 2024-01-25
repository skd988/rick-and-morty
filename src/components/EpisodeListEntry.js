import { Link } from 'react-router-dom'
import { EPISODE_PAGE } from '../routes'

/*
    List entry of an episode, with the title, aired on and a link to the episode page.
*/

export default function EpisodeListEntry({ episode } ) {
    return (
    <li>
        <h3><Link to={EPISODE_PAGE + episode.id}>{episode.name}</Link></h3>
        <p>Aired on: {episode.air_date}</p>
    </li>);
}