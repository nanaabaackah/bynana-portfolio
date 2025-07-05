import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/"><img src="/assets/bn.svg"/></a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/resume">Resume</a></li>
            <div className='drop'>
              <button className='dropbtn'><a href="/projects">Projects <FontAwesomeIcon icon={faCaretDown} /></a></button>
              <div className='dropdown-content'>
                <Link to="/projects/lms">Learning Management System (LMS)</Link>
                <Link to="/projects/Odoo">Odoo Customization</Link>
                <Link to="/projects/Reconstruction">Intranet Reconstruction</Link>
              </div>
            </div>
            <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <nav className="navbar-mob">
        <ul className="nav-links">
          <li><a href="/"><img src="/assets/bn-white.svg"/></a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;