import EpisodeListEntry from "./EpisodeListEntry"

/*
    Displays a list of episodes of a specific season.
*/

export default function Season({ season, episodeList}) {
    return (
        <div className="card season-card">
            <h1 className="card-title season-title center-text">Season {season}</h1>
            <div className="episode-list">
                <ol>
                    {episodeList.map(episode => <EpisodeListEntry key={episode.id} episode={episode}/>)}
                </ol>
            </div>
        </div>
    );
}