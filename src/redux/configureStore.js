//Makes the states/reducers available to any component that needs to use it.
import {configureStore} from '@reduxjs/toolkit';
import videoReducer from './videos';

export default configureStore({
    reducer: {
        videos: videoReducer
    }
});