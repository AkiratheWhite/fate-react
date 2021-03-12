import fetchSeries from './FetchSeries';
import ClearContent from './ClearContent';
import {Link} from 'react-router-dom';

const Series = () => {
    
    const series = fetchSeries(); //Gets all of the series stored within the database.
    
    /*If the user has returned to the Series Component
    AKA main menu, we want to reset the state so that 
    when the user clicks a new series, the old series
    stored in the state won't be visible for a split second. */
    ClearContent();

    return ( 
        <div className="row row-cols-2 g-4">
            {series.map((item) => (
                <Link key={item._id} to={{pathname :`/videos/${item.seriesID}`, state: {series: item.seriesID}}}><div className="col" >
                    <div className="card h-100">
                        <div className="card-body">{item.name}</div>
                    </div>
                </div>
                </Link>
            ))}
        </div>
     );
}
 
export default Series;