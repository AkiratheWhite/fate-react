import axios from 'axios'; //Used for routing.

//const url = 'http://localhost:5000/videos/';

const url = 'https://fate-visions-node.herokuapp.com/videos/';

export const getVideos = (series) => {
    return axios.get(`${url}${series}`);
}

export const getNames = () => {
    return axios.get(`${url}names`);
}

export const getLatest = (series) => {
    return axios.get(`${url}${series}/latest`);
}

export const postVideo = (addVideo) => {
    return axios.post(`${url}addVideo`, addVideo);
}
