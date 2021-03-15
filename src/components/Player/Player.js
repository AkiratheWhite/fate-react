import './styles.css';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

const Player = () => {
    //Gets 'url' from the redux store.
    const url = useSelector(state => {
        return state.videos.url;
    });

    //We assume the 'url' has not been obtained.
    const [isLoading, setIsLoading] = useState(true);

    //This useEffect executes whenever url changes.
    useEffect(()=> {
        //If the url is undefined or empty, do nothing.
        if (typeof url === "undefined" || !url) {
        } else {
        //If the url is valid, we can remove the spinner.
            setIsLoading(isLoading => false);
        }
    }, [url]);

    return (
        <>     
        <div className="player container-fluid">   
            <button className="btn btn-primary close-btn"></button>
                {   
                    isLoading && 
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
            {
            !isLoading && 
            <div className="container ratio ratio-16x9">
                <iframe src={url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            </div>
            }
        </div>
        </>
    );
}
 
export default Player;