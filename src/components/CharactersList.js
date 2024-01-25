import CharacterListEntry from './CharacterListEntry'

/*
    Display for a list of characters, each links to the respective character page.
*/

export default function CharactersList({ characters })
{
    return (
        <div>
            <h4 className="center-text">Characters appearing in this episode:</h4>
            <div className="character-list">
                { characters.map(character => <CharacterListEntry key={character.id} character={character}/>) }
            </div>
        </div>
    );
}
