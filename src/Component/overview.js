import React from 'react';
import Vidimg from '../Images/videoimg.JPG' 

function Overview(){
    return(
        <div id="overview">
            <div className="pagemargin">
                <div className="overview">
                    <div className="overviewsubcontainer">
                        <div className="overviewcontent">
                            <h3>Easy to Use Cloud Budget Management Software</h3>
                            <p>Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.</p>
                            <p className="maincolor">Learn More</p>
                        </div>
                    </div>
                    <div className="overviewsubcontainer">
                        <div className="overviewcontent">
                            <img src={Vidimg} alt="videoimg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;