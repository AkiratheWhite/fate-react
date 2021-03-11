import {fetchSeries} from '../../redux/videos';

import {useSelector, useDispatch} from 'react-redux';
import { useEffect} from 'react';

const FetchContent = (title) => {
        //Gets the 'content' state from the redux 'videos' store.
        const content = useSelector(state => {
            return state.videos.content;
        });
        
        const dispatch = useDispatch();
    
        useEffect(() => {//Gets all the videos on first render of the page.
                dispatch(fetchSeries(title));
        }, [title, dispatch]);

    return content;
}

export default FetchContent;