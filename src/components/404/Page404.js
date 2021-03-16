import './styles.css';
import bb from "../../img/bb_wince.png";

const Page404 = () => {
    return (
    <main id="error404" className="container-fluid">
    <div className="character d-none d-md-block">
        <img src={bb} alt="BB Exasperated"/>	
    </div>

        <div id="message404" className="col-6">
            <h1>404 Not Found</h1>
            <h2>
                Senpai, this page doesn't exist!
                <br/>
                Even BB can't help you here...
            </h2>
        </div>
    </main>
    );
}
 
export default Page404;