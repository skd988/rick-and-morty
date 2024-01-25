import { selectEpisodes } from '../slices/episodesSlice'
import { getIdFromUrl } from '../api'
import { useSelector } from 'react-redux'
import BackButton from './BackButton'

/*
    Display for the character page, 
    contains the name, status, species, first seen in, last known location, image, and a list of episodes numbers.
*/

export default function CharacterDisplay({ character })
{
    const episodes = character?.episode?.map(getIdFromUrl);
    const firstSeenIn = episodes?.length > 0? useSelector(selectEpisodes)[episodes[0]-1].name : "Unknown";
    return (
        <div className="card-container character-display">
            <div className="card character-card">
                <div className="card-title character-title center-text">
                    <h2>{character.name}</h2>
                </div>
                <div className="flex-container">
                    <div>
                        <p><b>Status: </b>{character.status}</p>
                        <p><b>Species: </b>{character.species}</p>
                        <p><b>First seen in: </b>{firstSeenIn}</p>
                        <p><b>Last known location: </b>{character.location.name}</p>
                        <div className="episodes-numbers-list">
                            <div>
                                <h4>Appears in the following episodes:</h4>
                                <ul>
                                    {episodes.map(num => <li key={num}>{num}</li>)}
                                </ul>
                            </div>
                        </div>
                        <BackButton/>
                    </div>
                    <img className="character-img" src={character.image}/>
                </div>
            </div>
        </div>
    );
}