import {useLocation, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addLink} from '../../redux/videos';

import fetchContent from './FetchContent';
import AddEvents from '../Videos/AddEvents';

const Videos = () => {
    var series = ""; //Used as the search criteria for fetchContent
    
    const dispatch = useDispatch();

    const location = useLocation(); //Uses location object from react-router
    var path = window.location.pathname; //In case the user is directly visiting a page, use the url path to search.

    if (typeof location.state === 'undefined') {
        series = path.substring((path.lastIndexOf("/")+1), path.length);
    } else {
        series = location.state.series;
    }

    const content = fetchContent(series); //Searches the database for videos that have the same 'series' value as the input.

    return (
        <>
            <div className="row row-cols-2 g-4 episodes">
                {content.map((item) => (
                    <div className="col" key={item._id} onClick={() => {dispatch(addLink(item.url))}}>
                        <div className="card h-100">
                            <div className="card-body">{item.title}</div>
                        </div>
                    </div>
                ))}
            </div>

            <Link to="/videos">
                <div className="card mt-4">
                    <div className="card-body return">Return to Main Menu</div>
                </div>
            </Link>
            {AddEvents(content) /*Adds JQuery event listeners to the necessary elements.*/}
        </>
    );
}
 
export default Videos;