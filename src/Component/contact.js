import React from 'react';
import Businesspage from './businesspage';

function Contact(){
    return(
        <div className="contactcont">
            <div className="o1">
                <div className="o1content">
                    <h2>Contact</h2>
                    <p>Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours</p>
                </div>
            </div>
            <div className="o2">
                <form action={Businesspage}>
                    <div className="sideinput">
                        <input type="text" name="firstname" placeholder="First Name" required></input>
                        <input type="text" name="lastname" placeholder="Last Name" required></input>
                    </div>
                    <input type="text" name="phnnum" placeholder="Phone Number" required></input>
                    <select id="country" name="Select">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <button>SUBMIT NOW</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;