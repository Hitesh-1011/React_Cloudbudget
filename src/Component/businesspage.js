import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
    } from "react-router-dom";
import Navbar from './navbar';
import {FaEuroSign} from 'react-icons/fa';
import Overview from './overview';

function Businesspage(){
    return(
        <div className="backgrndcolor">
            <div className="pagemargin">
                <div className="navbarposition">
                    <Router>
                        <div>
                            <Navbar/>
                            <Switch>
                            <Route exact path="/"></Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
                <div className="secdiv">
                    <div className="mainheading"><h1>CLOUDBUDGET</h1></div>
                    <div className="mainsubheading"><p> Cloud budget management for everyone. Only <FaEuroSign/>69.95 a month After a 7 Day Trial of Up to <FaEuroSign/>4.99  </p></div>
                    <button>Signup</button>
                </div>
            </div>
        </div>
    )
}
export default Businesspage;