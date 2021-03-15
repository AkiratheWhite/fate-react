import './styles.css';
import jeanne from '../../img/jeanne_smile.png'

const About = () => {
    return (
        <main id="about" className="container-fluid">
		<div className="character d-none d-md-block">
			<img src={jeanne}/>	
		</div>

		<div id="about-container" className="col-12 col-md-6">
            <h1>Welcome, humanity's final Master.</h1>
            <p>Visions of the Everdistant is a fan-site created by Akira the White. Here, you will find all manners of fan-written stories created by Akira and his team. These are stories written by fans for fans.</p>
            <p>Whether you are a long time fan of the Fate series or a newcomer, we hope that you enjoy the stories that we have woven together.</p>
		</div>
	</main>
    );
}
 
export default About;