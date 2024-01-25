import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../../api'
import { setError } from '../../slices/errorSlice'
import { addCharacter, selectCharacters } from '../../slices/charactersSlice'
import { setIsLoadingCharacters, selectIsLoadingCharacters } from '../../slices/loadingSlice'
import { CHARACTER_NOT_FOUND, getErrorMessage } from '../../errors'
import LoadSpinner from '../LoadSpinner'
import CharacterDisplay from '../CharacterDisplay'
import ErrorPage from './ErrorPage'

/*
    Display for a specific character. If there is no such character, displays an error page.
*/

export default function CharacterPage()
{
    const id = useParams()['id'];
    const character = useSelector(selectCharacters)[id];
    const wasCharacterAlreadyFetched = character !== undefined;
    const dispatch = useDispatch();
    useEffect(() => {
        if (!wasCharacterAlreadyFetched && !Number.isNaN(Number(id)))
        {
            dispatch(setIsLoadingCharacters(true));
            getCharacter(id)
            .then(character => dispatch(addCharacter(character)))
            .catch(error => {
                if (error.status !== 404)
                    dispatch(setError(getErrorMessage(error)));
            })
            .finally(() => dispatch(setIsLoadingCharacters(false)));
        }
    }, []);

    const loading = useSelector(selectIsLoadingCharacters);
    return (
        loading? <LoadSpinner/> :
        character === undefined? <ErrorPage message={CHARACTER_NOT_FOUND}/> :
        <CharacterDisplay character={character}/>
    );
}