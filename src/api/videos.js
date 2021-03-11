import axios from 'axios'; //Used for routing.

const url = 'http://localhost:5000/videos/';

export const getVideos = (series) => {
    return axios.get(`${url}${series}`);
}

export const getNames = () => {
    return axios.get(`${url}names`);
}

