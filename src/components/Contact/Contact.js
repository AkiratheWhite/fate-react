import {postMessage} from '../../api/messages'; //Axios routing for posting form data.
import {useState} from 'react'; //Used to check if the form has been submitted or not to prevent double submission.

import './styles.css';
import mordred_base from '../../img/mordred_tux.webp';
import mordred_smile from "../../img/mordred_tux_smile.webp";

const Contact = () => {

    const [submitted, setSubmitted] = useState(false); //Creates state to track form submission.

    const submitForm = (e) => {
        e.preventDefault(); //Prevents page refresh.
        var bodyFormData = new FormData(e.target); //Creates a FormData object from the form that triggers the event.

        const data = Object.fromEntries(bodyFormData.entries()); //Parses the form's data into a JSON object.

        postMessage(data); //Uses axios POST to send the data to back-end.
        setSubmitted(submitted => true); //Set the submitted state to true.
    }

    return (
        <main id="contact" className="container-fluid ">
        
        {submitted === false && 
        <>
        <div className="character portrait right d-none d-md-block">
            <img src={mordred_base} alt="Mordred Tux"/>	
        </div>
    
        <form id="contact-form" className="col-12 col-md-6 p-4" onSubmit={submitForm}>
            <h1 className="text-center">Have a question or comment? Please fill out our contact form!</h1>
                <div className="mb-3">
                    <label htmlFor="name">Name/Alias:</label> 
                    <input type="text" name="name" id="name" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required="required" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="name@host.domain (i.e. johnsmith@myemail.com)"/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="type">Contact Type:</label>
                    <select id="type" name="type" required="required" className="form-select">
                        <option value="question">Question</option>
                        <option value="comment">Comment</option>
                        <option value="request">Request</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <textarea id="message" rows="5" name="message" maxLength="500" placeholder="Enter your message here. (500 characters max)" className="form-control mb-3"/> 

                <div className="d-flex justify-content-evenly">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
        </form>
        </>
        }

    {submitted === true && 
        <>
            <div className="character portrait right d-none d-md-block">
                <img src={mordred_smile} alt="Mordred Tux Smiling"/>	
            </div>
            <div className="confirmation col-12 col-md-6 p-4 text-center">
                <h3>Thank you for your message!</h3>
                <button className="btn btn-success" onClick={()=> {setSubmitted(submitted => false)}}>Send another message?</button>
            </div>
        </>
    }

	</main>
    );
}
 
export default Contact;