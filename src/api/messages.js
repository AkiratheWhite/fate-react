import axios from 'axios'; //Used for routing.

const url = "http://localhost:5000/messages/";

// const url = "https://fate-visions-node.herokuapp.com/messages/";

export const postMessage = (message) => {
    return axios.post(`${url}newMessage`, message);
}