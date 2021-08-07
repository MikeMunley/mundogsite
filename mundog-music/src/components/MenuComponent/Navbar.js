import React, { useState } from 'react';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    
    <>
    
      <nav className='navbar'>
       
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
         <Link to="/bio" className="nav-links" onClick={closeMobileMenu}>Bio</Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
          <Link to="/news" className="nav-links" onClick={closeMobileMenu}>News</Link>
          </li>
          <li className='nav-item'>
          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
          </li>
          <li className='nav-item'>
          <Link to="/epk" className="nav-links" onClick={closeMobileMenu}>Press Kit</Link>
          </li>
          </ul>
        
      </nav>
      <ReactPlayer controls width='30' height='30'
        url="https://soundcloud.com/mundogmusic/the-dog-house-1"
      />
    </>
  );
}

export default Navbar;
