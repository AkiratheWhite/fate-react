//Makes the states/reducers available to any component that needs to use it.
import {configureStore} from '@reduxjs/toolkit';
import videoReducer from './videos';
import greetingReducer from './greetings';

const store = configureStore ({
    reducer: {
        videos: videoReducer,
        greetings: greetingReducer
    }
});

export default store;