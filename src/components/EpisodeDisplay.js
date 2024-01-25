import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import CharactersList from './CharactersList'
import { getMultipleCharacters, getIdFromUrl } from '../api'
import { selectCharacters, addMultipleCharacters } from '../slices/charactersSlice'
import { selectIsLoadingCharacters, setIsLoadingCharacters } from '../slices/loadingSlice'
import { setError } from '../slices/errorSlice'
import { getErrorMessage } from '../errors'
import LoadSpinner from './LoadSpinner'
import BackButton from './BackButton'

/*
    Display for the episode page. 
    Contains title, air date and a list of characters, each links to the respective character page. 
*/

export default function EpisodeDisplay({ episode })
{
    const dispatch = useDispatch();
    const allCharacters = useSelector(selectCharacters, shallowEqual);
    const charactersIds = episode.characters.map(getIdFromUrl);
    const charactersFetched = useMemo(() => Object.keys(allCharacters), [allCharacters]);
    const charactersToAdd = charactersIds?.filter(id => !(id in charactersFetched));

    useEffect(() => {
        if (charactersToAdd.length > 0)
        {
            dispatch(setIsLoadingCharacters(true));
            getMultipleCharacters(charactersToAdd)
            .then(characters => dispatch(addMultipleCharacters(characters)))
            .catch(reason => dispatch(setError(getErrorMessage(reason))))
            .finally(() => { dispatch(setIsLoadingCharacters(false))});
        }
    }, []);
    
    const characters = charactersIds.map(id => allCharacters[id]).filter(character => character);
    const loading = useSelector(selectIsLoadingCharacters);

    return (
        loading? <LoadSpinner/> :
        <div>
            <div className="button-episode">
                <BackButton/>
            </div>
            <div className="center-text">
                <h1>{episode.name}</h1>
                <h2>Air date: {episode.air_date}</h2>
                <CharactersList characters={characters}/>
            </div>     
        </div>
    );
}