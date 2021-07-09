import React from 'react';
import Payment from '../Images/payment.JPG'
import {FiTwitter} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';
import {FaFacebookF} from 'react-icons/fa';
function Footer(){
    return(
        <div className="footer">
            <div className="footerflex">
                <div className="footercont">
                    <h2>Address</h2>
                    <p>Pipang Ltd, Griva Digeni,</p>
                    <p>81-83 Jacovides Tower, </p>
                    <p>1st Floor,1090 Picosia USA</p>
                </div>
                <div className="footercont">
                    <h2>Services</h2>
                    <p>Overview</p>
                    <p>Features</p>
                    <p>Technology</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy</p>
                </div>
                <div className="footercont">
                    <h2>Get in Touch</h2>
                    <p>info@cloudbudget.com</p>
                    <p>+1 844-721-7120</p>
                    <h2><FaFacebookF/> <FiLinkedin/> <FiTwitter/></h2>
                </div>
                <div className="footercont">
                    <h2>We Support</h2>
                    <img src={Payment} alt="Types of payment gateays"></img>
                </div>
            </div>
            <h4>Copyright 2021 CloudBudget</h4>
        </div>
    )
}

export default Footer;