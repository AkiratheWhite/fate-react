import {reset} from '../../redux/videos';

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const ClearContent = () => { //Used to clear the content state in redux.
    const dispatch = useDispatch();
    useEffect(() => {//Gets all the videos on first render of the page.
        dispatch(reset());
    }, [dispatch]);
}

export default ClearContent;



