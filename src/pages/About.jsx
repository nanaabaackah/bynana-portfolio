import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '/src/styles/global.css';

function About() {
    return(
        <>
            <main>
                <Helmet>
                    <title>About Me | By Nana</title>
                </Helmet>
                <section id="sec_back-desktop">
                    <div class="who">
                        <div class="wrapper">
                            <div class="profile">
                                <div class="overlay">
                                    <ul class="social-icons">
                                        <a href="https://www.linkedin.com/in/nana-aba-ackah/" target="_blank"><li><FontAwesomeIcon icon={faLinkedinIn} /></li></a>
                                        <a href="https://github.com/nanaabaackah/portfolio.io" target="_blank"><li><FontAwesomeIcon icon={faGithub} /></li></a>
                                        <a href="mailto:nanaabaackah@gmail.com" ><li><FontAwesomeIcon icon={faEnvelope} /></li></a>
                                        <a href="documents/Nana Aba Ackah Resume.pdf" target="_onblank"><li><FontAwesomeIcon icon={faFilePdf} /></li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="write-up">
                            <h1>Hey, I’m Nana Aba </h1>
                            <p>
                                a curious creative who blends code, design, and digital strategy to build things that make work easier, smoother, and a little 
                                more delightful. From custom ERP tools and interactive dashboards to responsive websites and branded intranets, I bring ideas to 
                                life with Python, WordPress, Odoo, BigQuery, and a whole lot of curiosity.

                                This portfolio?
                                Every detail, every line of code, every pixel —
                                Made to matter. Made by Nana.
                            </p>
                            <h2>Let’s Connect</h2>
                            <div class="contact">
                                <p>Have a project in mind or just want to say hi? I’m always open to chatting about tech, teamwork, or the next big idea.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sec_back-mobile">
                    <div class="who">
                        <div class="profile">
                            <p></p>
                        </div>                
                        <div class="write-up">
                            <h1>Hey, I’m Nana Aba </h1>
                            <p>
                                I build useful tools, clean sites, and smooth systems using code, design, and data.
                                Made to matter. Made by Nana.
                            </p>
                            <h2>Let’s Connect</h2>
                            <div class="contact">
                                <p>Have a project in mind? Want to collaborate, chat about tech, or just say hi?</p>
                                <ul class="social-icons">
                                    <a href="https://www.linkedin.com/in/nana-aba-ackah/" target="_blank"><li><i class="fa-brands fa-linkedin-in"></i></li></a>
                                    <a href="https://github.com/nanaabaackah/portfolio.io" target="_blank"><li><i class="fa fa-github"></i></li></a>
                                    <a href="mailto:nanaabaackah@gmail.com" ><li><i class="fa-solid fa-envelope"></i></li></a>
                                    <a href="documents/Nana Aba Ackah Resume.pdf" target="_onblank"><li><i class="fa-solid fa-file-pdf"></i></li></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
        
    );
}

export default About;