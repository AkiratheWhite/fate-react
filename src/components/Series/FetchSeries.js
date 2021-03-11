import {useState, useEffect} from 'react';
import { getNames } from '../../api/videos';

const FetchSeries = () => {
    const [series, setSeries] = useState([]); //Declaring state.

    useEffect(() => {
        const abortController = new AbortController(); //Used to deal with aborted requests.

        //Use Axios GET request, then push that data to state 'series'
        getNames().then((res) => {
            const names = res.data; //Gets the name of all series in the database.
            setSeries(series => [...names]); //Appends the names to the state.
        }).catch((error) => {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted.');
            }
            console.log(error.message);
        });

        return () => abortController.abort();
    }, []); //Empty array argument added so useEffect only occurs on first render.

    return series;
}

export default FetchSeries;