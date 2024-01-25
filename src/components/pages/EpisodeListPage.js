import { useMemo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import Season from '../Season'
import { selectEpisodes } from '../../slices/episodesSlice'

/*
    Main page, displays all episodes, divided by seasons.
*/

const splitArrayByCategory = (arr, getCategory) => {
    let splitted = {};
    arr.forEach(obj => {
        let category = getCategory(obj);
        if (splitted[category] === undefined)
            splitted[category] = [obj];
        else
            splitted[category].push(obj);
    });
    return splitted;
};

const getSeasonNumber = episodeObj => {
    const episode_season = episodeObj.episode;
    return Number(episode_season.substr(episode_season.search('S') + 1,episode_season.search('E') - 1));
};

export default function EpisodeListPage() {
    const episodes = useSelector(selectEpisodes, shallowEqual);
    const episodesBySeasons = useMemo(() => splitArrayByCategory(episodes, getSeasonNumber), [episodes]);

    return (
        <div>
            <div className="center-text">
                <h1>All Rick and Morty episodes:</h1>
            </div>
            <div className="flex-container">
                {
                    Object.entries(episodesBySeasons).map(entry => {
                        const [season, list] = entry
                        return <Season key={season} season={season} episodeList={list}/>
                    })
                }
            </div>
        </div>
    );    
}