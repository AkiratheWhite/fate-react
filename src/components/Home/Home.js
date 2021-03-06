import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import './styles.css';

import emiya from '../../img/emiya.webp';
import mhxa from '../../img/mhxa.webp';
import entity from '../../img/entity.png';
import waver from '../../img/waver.webp';

import AddEvents from './AddEvents'
import Greeting from './Greeting';

const Home = () => {
	
	/*Using a redux state to test if a user has seen the greeting before.
	If they have, don't show the greeting again until the page is completely refreshed.*/
	const greetingViewed = useSelector(state => {
		return state.greetings.greetingViewed;
	});

    return (
        <>
		{
			//Only show the greeting if the user hasn't seen it already.
			greetingViewed === false &&
			<Greeting/>
		}

        <main id="homepage-main" className="container-fluid">
		
        <div className ="chaldea row pb-3">
			<div className="col-12 col-sm-4">
				<span id="disclaimer">Disclaimer: This website and the contents it features are entirely fan-made, and not endorsed by or officially related to Fate/Grand Order.</span>
			</div>
			<div className="col-12 col-sm-8">
				<h1>These are the stories of those who wish to protect the future.</h1>
			</div>
			
		</div>

		<div className="jumbotron">
			<ul id="series" className="row">
				
					<li id="emiya" className="not-active-first">
						<Link to="/videos/emiya">
							<span className="vertical-font">The Saga of Emiya-san</span>
							<div className="img not-active not-active-first"><img src={emiya} alt="Emiya-san Series"/></div>
							<div className="series-desc">
								<p>Even at a time where Chaldea should be peaceful, not all is as it seems.</p>
								<p>When a group of Servants get together to celebrate Master's birthday, something is off about Heroic Spirit Emiya. They soon discover a shocking secret, one that may strain even the strongest of bonds.</p>
								Experience the series that started it all...
							</div>
						</Link>
					</li>
				

				<li id="shroud" className="not-active-first">
					<Link to="/videos/shroud">
						<span className="vertical-font">Shroud of Malevolence</span>
						<div className="img not-active not-active-first"><img src={mhxa} alt="Shroud of Malevolence"/></div>
						<div className="series-desc">
							<p>Peace and quiet leads to complacency, and complacency inevitably leads to danger.</p>
							<p>Chaldea is suddenly attacked by an army of unidentified soldiers. Master, along with nearly all of Chaldea???s Servants, are kidnapped.</p>
							<p>With their power crippled and many unanswered questions, Chaldea???s remaining staff must track down this new enemy and learn their true intentions.</p>
						</div>
					</Link>
				</li>

				<li id="wish" className="not-active-first">
					<span className="vertical-font">Coming Soon...</span>
					<div className="img not-active not-active-first"><img src={entity} alt="???"/></div>
					<div className="series-desc">
						<p>Y' ephaimgsyha'h ymg' epgoka. Y' ymg' ephaiah'hri ph' nilgh'ri syha'h.</p>
					</div>
				</li>

				<li id="challenge" className="not-active-first">
					<Link to="/videos/challenge">
						<span className="vertical-font">Challenge Quests</span>
						<div className="img not-active not-active-first"><img src={waver} alt="Challenge Quests"/></div>
						<div className="series-desc">
							<p>With every season, new festivals. With every festival, new challenges.</p>
							<p>Watch as Chaldea???s Servants take on Challenge Quests!</p>
						</div>
					</Link>
				</li>
			</ul>
		</div>

	</main>

	{/* //Adds JQuery event listeners to elements. */}    
    {AddEvents()}
    </>
    );
}
 
export default Home;