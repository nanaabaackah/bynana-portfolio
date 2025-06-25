import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/styles/global.css';

function Projects() {
    return(
        <>
            <main>
                 <Helmet>
                    <title>Projects | By Nana</title>
                </Helmet>
                <section id="sec_back-desktop">
                    <div id="fh5co-work">
                        <div className="container">
                            <div className="content">
                                <div className="row animate-box">
                                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                        <h1>Portfolio</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 text-center col-padding animate-box">
                                        <div className="work" style={{ backgroundImage: "url(/imgs/11.png" }}>
                                            <div className="desc">
                                                <a href="/projects/Odoo">Odoo ERP Customization</a>
                                            </div>
                                        </div>
                                        <button className="accordion-main">More</button>
                                        <div className="panell">
                                            <p>
                                                Customized Odoo ERP using Python, QWeb, and XML to automate workflows across five departments, boosting efficiency by 50% and achieving 90% adoption through stakeholder collaboration and training.
                                            </p>
                                            <div className="link">
                                                <a href="/projects/Odoo">View</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center col-padding animate-box">
                                        <div className="work" style={{ backgroundImage: "url(/imgs/12.png)" }}>
                                            <div className="desc">
                                                <a href="/projects/Reconstruction">Intranet Website Reconstruction</a>
                                            </div>
                                        </div>
                                        <button className="accordion-main">More</button>
                                        <div className="panell">
                                            <p>
                                                Redesigned IBW Surveyors’ intranet using Google Sites, Figma, and custom code to deliver a modern, responsive internal hub that improved usability and reduced support requests.
                                            </p>
                                            <div className="link">
                                                <a href="/projects/Reconstruction">View</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center col-padding animate-box">
                                        <div className="work" style={{ backgroundImage: "url(/imgs/16.png" }}>
                                            <div className="desc">
                                                <a href="/projects/lms">Internal Learning Portal</a>
                                            </div>
                                        </div>
                                        <button className="accordion-main">More</button>
                                        <div className="panell">
                                            <p>
                                                A responsive, lightweight LMS-style portal that links each learning module to curated Google Drive folders for self-paced employee training.
                                            </p>
                                            <div className="link">
                                                <a href="/projects/lms">View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sec_back-mobile">
                    <div id="fh5co-work">
                        <div className="container">
                            <div className="content">
                                <div className="row animate-box">
                                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                        <h1>Portfolio</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 text-center col-padding animate-box">
                                        <a href="/projects/Odoo"><div className="work" style={{ backgroundImage: "url(/imgs/11.png)" }}>
                                            <div className="desc">
                                                Odoo ERP Customization
                                            </div>
                                        </div></a>
                                    </div>
                                    <div className="col-md-3 text-center col-padding animate-box">
                                        <a href="/projects/Reconstruction"><div className="work" style={{ backgroundImage: "url(/imgs/12.png)" }}>
                                            <div className="desc">
                                                Intranet Website Reconstruction
                                            </div>
                                        </div></a>
                                    </div>
                                    <div className="col-md-3 text-center col-padding animate-box">
                                        <a href="/projects/lms"><div className="work" style={{ backgroundImage: "url(/imgs/16.png)" }}>
                                            <div className="desc">
                                                Internal Learning Portal
                                            </div>
                                        </div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Projects;