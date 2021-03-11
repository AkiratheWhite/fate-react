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
            content: []
        },
        reducers: {},
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

export default videoSlice.reducer;