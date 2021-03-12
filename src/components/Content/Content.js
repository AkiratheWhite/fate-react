import waver from '../../img/waver_grin.png';
import './styles.css';

/*** VERY IMPORTANT
 * Components don't know their children ahead of time -- they may be generic wrappers or boxes of content that vary.
 * These kinds of components use the special children prop to pass children elements directly into their output.
 * This requires props to be added as a parameter, and props.children to be added to the function.
 * ***/
const Content = (props) => {
    return (
        <main id="videos" className="container-fluid">
        <div className="character portrait d-none d-md-block">
            <img src={waver} alt="Waver"/>	
        </div>
        {props.children}{/*Required to allow other components to pass children to them.*/}
        </main>
    );
}
 
export default Content;