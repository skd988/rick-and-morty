import { Link } from 'react-router-dom'
import { CHARACTER_PAGE } from '../routes'

/*
    List entry of a character, Displays the name of a character and a link to the character page. 
*/

export default function CharactersListEntry({ character })
{
    return (
        <Link className="character-list-entry" to={CHARACTER_PAGE + character.id}>
            <p>{character.name}</p>
        </Link>
    );
}