import './css/component.css';
import React, { useState } from 'react'; // Added useState import
import Toggle from './Toggle';
import profilePic from "../assets/ba.jpg";
import { Mail, Instagram } from 'lucide-react'; // Added imports for Mail and Instagram icons

const Navbar = ({ theme, toggleTheme }) => {
    const [showProfile, setShowProfile] = useState(false);
    const dropdownRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        };

        if (showProfile) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showProfile]);

    return (
        <nav className="navbar">
            <div className="name">
                <h2>யாழன்</h2>
            </div>
            <div className='links'>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                <div className="profile-container" ref={dropdownRef}>
                    <img
                        src={profilePic}
                        alt="profile"
                        className="profile-avatar"
                        onClick={() => setShowProfile(!showProfile)}
                    />
                    {showProfile && (
                        <div className="profile-dropdown">
                            <a href="mailto:uibalaji29@gmail.com" className="profile-item">
                                <Mail size={16} />
                                <span>uibalaji29@gmail.com</span>
                            </a>
                            <a
                                href="https://www.instagram.com/thamizh._.bala/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="profile-item"
                            >
                                <Instagram size={16} />
                                <span>thamizh._.bala</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>

    );

};

export default Navbar;