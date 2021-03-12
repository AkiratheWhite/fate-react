import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as api from '../api/videos';

//Creating thunk for async requests.
export const fetchSeries = createAsyncThunk('videos/', async(seriesID, thunkAPI) => {
    const response = await api.getVideos(seriesID); //Sends GET request to back end, returns a response object.
    return response.data; //Gets the response object's data, which is a JSON object.
});

export const videoSlice = createSlice(
    {
        name: 'videos',
        initialState: {
            content: [], //Array to hold objects with information for videos.
            url: null //Used to hold the url of the currently selected video.
        },
        reducers: {
            reset: state => {//Action to reset state.
                state.content = []; //Clears the array.
            },
            nullLink: state => {
                /*This action is used to send a null value to the url.
                The aim is to be able to clear the state so that the user does 
                not see the previous video they clicked on when clicking a new video.*/
                state.url = null;
            },
            addLink: (state, action) => {
                state.url = action.payload; //Changes the iframe url to the video selected by the user.
            }
        },
        extraReducers: {
            [fetchSeries.fulfilled]: (state, action) => {
                state.content = []; //Clears the array before adding new data.
                state.content.push(...action.payload); //Adds entries to state array.
                //If we push without the spread operator, the entire JSON object is added as the first index of an array.
                //We use the spread operator (...) so that each of the items in the JSON object is added properly.
            }
        }
    }
);

export const {reset, addLink, nullLink} = videoSlice.actions;
export default videoSlice.reducer;