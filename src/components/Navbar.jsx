import './css/component.css';
import React from 'react';
import Toggle from './Toggle';
import profilePic from "../assets/ba.jpg";

const Navbar = () =>{

    return(
        <nav className= "navbar">
            <div className="name">     
            <h2>YAAZHAN</h2>
            </div>
            <div className='links'>
            <Toggle />
<img src={profilePic} alt="profile" className="profile-avatar" />
            </div>
             </nav>
            
    );

};

export default Navbar;