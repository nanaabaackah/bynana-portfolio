import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

function Home() {
    return (
        <main  className="home">
            <header>
                <nav>
                    <ul id="dropdown">
                        
                        <li><a href="/about">About</a></li>
                        <li><a href="/resume">Resume</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section className="match-desktop">
            <div className="match__item--middle">
                <img src="/assets/bn-long-white.svg" alt="By Nana logo" />
                <p>
                    Technical Front-End Developer • Odoo ERP • Data & Digital Strategy | Business Analyst
                </p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/nana-aba-ackah/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://github.com/nanaabaackah/portfolio.io" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="mailto:nanaabaackah@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="/documents/Nana Aba Ackah Resume.pdf" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFilePdf} />
                    </a>
                </div>
            </div>
        </section>
        {/* Mobile Section */}
        <section className="match-mobile">
            <div className="match__item--top">
            <img src="/assets/bn-long-white.svg" alt="By Nana logo" />
            <p>
                Technical Front-End Developer • Odoo ERP • Data & Digital Strategy | Business Analyst
            </p>
            </div>
            <div className="social">
            <a href="https://www.linkedin.com/in/nana-aba-ackah/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/nanaabaackah/portfolio.io" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:nanaabaackah@gmail.com">
                <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="/documents/Nana Aba Ackah Resume.pdf" target="_blank" rel="noreferrer">
                <i className="fa-solid fa-file-pdf"></i>
            </a>
            </div>
        </section>
        </main>
    );
}

export default Home;