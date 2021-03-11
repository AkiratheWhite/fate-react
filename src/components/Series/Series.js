import fetchSeries from './FetchSeries';
import {Link} from 'react-router-dom';

const Series = () => {
    const series = fetchSeries();
   
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