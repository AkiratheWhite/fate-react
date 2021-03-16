import {useState, useEffect} from 'react';
import {postVideo, getLatest} from '../../api/videos';

import fetchSeries from '../Series/FetchSeries';
import './styles.css';

const CreateVideo = () => {

    const [latest, setLatest] = useState(0); //Uses a value to hold the most recent episode.
    const [submitted, setSubmitted] = useState(false);
    
    const [videoData, setVideoData] = useState({
        title: '',
        series: '',
        order: 0,
        url: ''
    });
    
    const series = fetchSeries(); //Gets all of the series stored within the database.

    //Function to automatically populate the episode order table by retreiving information from MongoDB.
    /*After extensive testing, the decision was made so that the below code can only be executed after
    the application has retrieved data from MongoDB. This code will trigger null value TypeErrors otherwise.*/
    const getLatestEpisode = async () => {
        try {//Put into a try catch statement so that it will not throw an error if getElementById returns a null.
            const selectInput = document.getElementById("series");
            
            var series = selectInput.value; //Gets the current value of the select element.
            var response = await getLatest(series);//Makes GET request to server.
            if (response.data) {
                var episode = response.data.order; //Gets the latest episodes in the series.
                if(!isNaN(episode)) {
                    setLatest(latest => (episode +1));
                }
            }
        }
        catch (err) {
            console.log(err.messsage);
        }
    }

    const submitVideoForm = (e) => {
        e.preventDefault();
        postVideo(videoData);
        setSubmitted(submitted => true);
    }

    //Runs whenever the fetchSeries command completes, so that a blank select box is shown for the user.
    useEffect(()=> {
        document.getElementById("series").selectedIndex = -1;
    },[series]);

    //Runs whenever the state 'latest' is updated. Adjusts the video data property 'order' for POST requests.
    useEffect(()=> {
        var orderValue = parseInt(document.getElementById("order").value)
        setVideoData({...videoData, order: orderValue})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [latest])

    return (
        <div id="submission">
            {submitted === false && 
            <form onSubmit={submitVideoForm} id="videoForm" className="col-12 col-md-6 py-4 px-2">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Episode Title:</label>
                    <input type="text" id="title" className="form-control" placeholder="Episode Title" required onChange={(e) => setVideoData({...videoData, title: e.target.value})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="series" className="form-label">Series:</label>
                    <select name="series" id="series" className="form-select" required onChange={(e)=> {
                        setVideoData({...videoData, series: e.target.value});
                        getLatestEpisode();
                        }}>
                        {series.map((item) => (
                            <option key={item._id} value={item.seriesID}>{item.name}</option>))
                        }
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="order" className="form-label">Episode Order:</label>
                    <input value={latest} type="text" id="order" className="form-control" placeholder="Order" required pattern="^[0-9]+$" disabled/>
                </div>

                <div className="mb-3">
                    <label htmlFor="url" className="form-label">Episode URL:</label>
                    <input type="text" id="url" className="form-control" placeholder="Episode URL" required onChange={(e) => setVideoData({...videoData, url: e.target.value})}/>
                </div>

                <button type="submit" className="btn btn-primary">Add Video</button>
            </form>}
            
            {
                submitted === true &&
                <div className="confirmation text-center col-12 col-md-6 py-4 px-2">
                    New video added!
                </div>
            }
        </div>
    );
}
 
export default CreateVideo;