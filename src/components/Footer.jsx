import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <footer className="site-footer"> 
            <div className="f-dropdown">
                <nav>
                    <ul id="f-menu">
                        <li className="f-logo"><a href="/"><img src="/src/assets/bn-long-white.svg"/></a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/resume">Resume</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="f-social-icons">
                <a href="https://www.linkedin.com/in/nana-aba-ackah/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://github.com/nanaabaackah/portfolio.io" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="mailto:nanaabaackah@gmail.com" ><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="documents/Nana Aba Ackah Resume.pdf" target="_blank"><FontAwesomeIcon icon={faFilePdf} /></a>
            </div>
            <span>&copy; 2025 - MADE TO MATTER. MADE BY NANA Styling design ideas from <a href="http://freehtml5.co/">FreeHTML5.co</a></span>

        </footer>
        
    );
}

export default Footer;