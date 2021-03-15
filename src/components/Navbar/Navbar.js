import './styles.css';
import {Link} from 'react-router-dom';

//Navbar component for webapp.
const Navbar = () => {
    return (
        <div className="navbar px-3">
            <div id="banner" className="col-12 col-lg-9 col-xl-7">
                <div id="logo" className="d-none d-md-block"></div>
                <Link to="/" id="logo_header"></Link>
            </div>

            <div id="links" className="col-12 col-lg-3 col-xl-5">
                <ul className="row">
                        <Link to="/about" className="col-6"><li>About</li></Link>
                        <Link to="/videos" className="col-6"><li>Videos</li></Link>
                        <Link to="/contact" className="col-6"><li>Requests & Contact</li></Link>
                        <Link to="https://fate-go.us/" target="_blank" className="col-6"><li>Official F/GO Website</li></Link>
                </ul>			
            </div>
        </div>
    );
}
 
export default Navbar;