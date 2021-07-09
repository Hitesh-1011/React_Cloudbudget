import React from 'react';
import Money from '../Images/money.png';
import Mobile from '../Images/mobile.png';
import Roof from '../Images/roof.png';
function Features(){
    return(
        <>
            <div className="featurescontainer">
                <h1>Features</h1>
                <div className="imageflex">
                    <div className="contentflex">
                    <div className="divcenter">
                        <img src={Money} alt="money"></img>
                        <div class="subimage">
                                <h3>Supports All Currencies and Cards</h3>
                                <p>We support all popular currencies and is fully customizable to add</p>
                                <p className="maincolor">Read More</p>
                        </div>
                    </div>
                    <div>
                    <img src={Mobile} alt=" "></img>
                    <div class="subimage">
                                <h3>Supports All Currencies and Cards</h3>
                                <p>We support all popular currencies and is fully customizable to add</p>
                                <p className="maincolor">Read More</p>
                    </div>
                    </div>
                    </div>
                    
                    <div className="contentflex">
                        <div>
                            <img src={Roof} alt="Roof"></img>
                            <div class="subimage">
                                <h3>Supports All Currencies and Cards</h3>
                                <p>We support all popular currencies and is fully customizable to add</p>
                                <p className="maincolor">Read More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Features;