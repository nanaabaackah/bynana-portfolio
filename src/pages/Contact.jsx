import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/styles/global.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return(
        <>
            <main>
                 <Helmet>
                    <title>Contact | By Nana</title>
                </Helmet>
                <section id="sec_back-desktop">
                    <div id="fh5co-consult">
                        <div className="video fh5co-video" style={{ backgroundImage: "url(/imgs/IMG_4710.JPG)" }}>
                            <div className="overlay"></div>
                        </div>
                        <div className="choose animate-box">
                            <h2>Contact</h2>
                            <form action="https://formspree.io/f/mnndedjk" method="POST">
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <input type="text" id="fname" className="form-control" placeholder="Your Name" required />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input type="text" id="email" className="form-control" placeholder="Your email address" required />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" required />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Ask anything" required></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section id="sec_back-mobile">
                    <div id="fh5co-consult">
                        <div className="choose animate-box">
                            <ul className="social-icons">
                                <a href="https://www.linkedin.com/in/nana-aba-ackah/" target="_blank"><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
                                <a href="https://github.com/nanaabaackah/" target="_blank"><li><FontAwesomeIcon icon={faGithub} /></li></a>
                                <a href="mailto:nanaabaackah@gmail.com" ><li><FontAwesomeIcon icon={faEnvelope} /></li></a>
                                <a href="/documents/Nana Aba Ackah Resume.pdf" target="_onblank"><li><FontAwesomeIcon icon={faFilePdf} /></li></a>
                            </ul>
                        </div>
                        <div className="choose animate-box">
                            <h2>Contact</h2>
                            <form name="contact" netlify>
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <input type="text" id="fname" className="form-control" placeholder="Your Name" required/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input type="text" id="email" className="form-control" placeholder="Your email address" required/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" required/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Ask anything" required></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className="video fh5co-video" style={{ backgroundImage: "url(/imgs/IMG_4710.JPG)" }}>
                            <div className="overlay"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Contact;