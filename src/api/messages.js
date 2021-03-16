import axios from 'axios'; //Used for routing.

const url = "http://localhost:5000/messages/";

export const postMessage = (message) => {
    return axios.post(`${url}newMessage`, message);
}