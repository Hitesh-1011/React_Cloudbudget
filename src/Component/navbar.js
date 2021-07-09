import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaCloud} from 'react-icons/fa';
import {BsChevronDown} from 'react-icons/bs';
function Navbar(){
    return(
        <>
         <nav className="navbar">
             <div className="nav-container">
             <div class="menucontainer">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <NavLink exact to='/' className="nav-logo">
                    <div className="iconadj"><FaCloud/> </div> CLOUDBUDGET
                </NavLink>
                <div class="navcenter">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <a href="#overview">OVERVIEW</a>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='/b' className="nav-links">
                                FEATURES
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='/c' className="nav-links">
                                TECHNOLOGY
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='/d' className="nav-links">
                                CONTACT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='/e' className="nav-links">
                                SIGN UP
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="floatright">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLink exact to='/aboutus' className="nav-links">
                                LANG <BsChevronDown/>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='/contact' className="nav-links">
                                LOGIN
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
             </div>
         </nav>
        </>
    )
}

export default Navbar;