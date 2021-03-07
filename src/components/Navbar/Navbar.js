import './styles.css';

//Navbar component for webapp.
const Navbar = () => {
    return (
        <div className="navbar px-3">
            <div id="banner" className="col-12 col-lg-9 col-xl-7">
                <div id="logo" className="d-none d-md-block"></div>
                <a id="logo_header" href="/"></a>
            </div>

            <div id="links" className="col-12 col-lg-3 col-xl-5">
                <ul className="row">
                        <a href="/about" className="col-6"><li>About</li></a>
                        <a href="/videos" className="col-6"><li>Videos</li></a>
                        <a href="/contact" className="col-6"><li>Requests & Contact</li></a>
                        <a href="https://fate-go.us/" target="_blank" className="col-6"><li>Official F/GO Website</li></a>
                </ul>			
            </div>
        </div>
    );
}
 
export default Navbar;