import {createSlice} from '@reduxjs/toolkit';

export const greetingSlice = createSlice(
    {
        name: 'greetings',
        initialState: {
            greetingViewed: false //Tests to see if the user has seen the webpage's greeting or not.
        },
        reducers: {
            seen: state => {//Action to permanently remove the greeting.
                state.greetingViewed = true; //Sets test boolean to true.
            }
        }
    }
);

export const {seen} = greetingSlice.actions;
export default greetingSlice.reducer;