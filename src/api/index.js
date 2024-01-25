
import axios from 'axios'
import { API_EPISODES, API_CHARACTERS } from './consts'

/*
    Api handling, functions for fetching from the api.
*/

const FORMAT_ERROR = {message: "Format error: data has unexpected format"};

const get = url =>
{
    return axios.get(url, {validateStatus: status => 200 <= status && status < 300})
    .catch(axiosError => {
        const message = axiosError?.response?.data?.error;
        return Promise.reject({message: message? message : axiosError.message, status: axiosError?.response?.status});
    })
    .then(response => response?.data);
};

const getPagesData = (url, pages_data=[]) =>
{
    return get(url)
    .then(data => {
        if (data?.info?.next === undefined || data?.results === undefined)
            return Promise.reject(FORMAT_ERROR);

        pages_data.push(data.results);
        return data.info.next;
    })
    .then(next => next !== null ? getPagesData(next, pages_data) : pages_data)
};

export const getAllEpisodes = () => {
    return getPagesData(API_EPISODES)
    .then(pagesData => pagesData.flat());
};

export const getCharacter = id => {
    return get(API_CHARACTERS + id);
};

export const getMultipleCharacters = ids => {
    return get(API_CHARACTERS + ids);
}

export const getIdFromUrl = url =>
{
    return url.split("/").pop();
}