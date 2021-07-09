import React from 'react';
import Hotel from '../Images/hotel.png'
import {IoLogoGooglePlaystore} from 'react-icons/io5';
import {GrAppleAppStore} from 'react-icons/gr';
import {DiWindows} from 'react-icons/di';
function stayfocus(){
    return(
        <div className="stayfocuscont">
            {/* <div className="margin"> */}
            <div className="overviewsubcontainer">
                <div className="overviewcontent">
                    <h2>Stay focused on saving money</h2>
                    <p>It is important to stay focused on saving money in any way you can. We help you monitor your spending habits so you can easily spot and cut any unnecc</p>
                    <h2><IoLogoGooglePlaystore/> <GrAppleAppStore/> <DiWindows/></h2>
                </div>
            </div>
            <div className="overviewcontent">
                <img src={Hotel} alt="videoimg"></img>
            </div>
            {/* </div> */}
        </div>
    )
}
export default stayfocus;