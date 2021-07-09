import React from 'react';
import {GoCloudDownload} from 'react-icons/go';
import {AiOutlineSecurityScan} from 'react-icons/ai';
import {GoFilePdf} from 'react-icons/go';
import {FaFileCsv} from 'react-icons/fa';
function Technology(){
    return(
        <>
            <div className="techcontainer">
                <div className="pagemargin">
                    <h1>Technology</h1>
                    <div className="contentcontainer">
                        <div className="contentflex">
                        <div className="techcontent">
                            <div className="styleone">01</div>
                            <div className="styleicon"><GoCloudDownload/></div>
                            <div className="subiconcont">
                                <h4>Cloud Storage</h4>
                                <p>Access your account from anywhere in the world on any device</p>
                            </div>
                        </div>                
                        <div className="techcontent">
                            <div className="styleone">02</div>
                            <div className="styleicon"><AiOutlineSecurityScan/></div>
                            <div className="subiconcont">
                                <h4>Secure</h4>
                                <p>All your information is stored on secure cloud servers</p>
                            </div>
                        </div>
                        </div>
                        <div className="contentflex">
                        <div className="techcontent">
                            <div className="styleone">03</div>
                            <div className="styleicon"><GoFilePdf/></div>
                            <div className="subiconcont">
                                <h4>PDF Download</h4>
                                <p>Download any of your reports in PDF format</p>
                            </div>
                        </div>
                        <div className="techcontent">
                            <div className="styleone">04</div>
                            <div className="styleicon"><FaFileCsv/></div>
                            <div className="subiconcont">
                                <h4>CSV Download</h4>
                                <p>All your information is stored on secure cloud servers</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Technology;