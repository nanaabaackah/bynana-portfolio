import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faCodeCommit, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '/src/styles/global.css';

function Resume() {
    return(
        <>
            <main>
                 <Helmet>
                    <title>Resume | By Nana</title>
                </Helmet>
                <section id="sec_back-desktop">
                    <div className="who">
                        <div className="content">
                            <div id="fh5co-resume">
                                <div className="row">
                                    <div className="col-md-12 col-md-offset-0">
                                        <ul className="timeline">
                                            <li className="timeline-heading text-center animate-box">
                                                <div><h3>Work Experience</h3></div>
                                            </li>
                                            <li className="animate-box timeline-unverted">
                                                <div className="timeline-badge"><FontAwesomeIcon icon={faSuitcase} /></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">IT Technician</h4>
                                                        <span className="company">IBW Surveyors - Oct 2024 – Present</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <ul className="exp">
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Spearheaded enhancements to internal IT infrastructure, improving system uptime, data flow, and team efficiency across departments.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Redesigned the internal company portal using Google Sites with embedded custom HTML, CSS, and JavaScript, resulting in a 10% boost in user engagement and reduced support requests.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Conducted advanced data analysis using BigQuery, Looker Studio, and SQL Server to create operational dashboards and executive-level reporting for resource planning.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Collaborated with Managed Service Providers (MSPs) to implement IT policies and security protocols, improving compliance and reducing downtime by 15%.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Assisted with the technical rollout of internal tools and digital process automation, including document workflows and staff onboarding improvements.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Actively contributed to continuous improvement initiatives by providing system-level recommendations and supporting internal project launches.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-inverted animate-box">
                                                <div className="timeline-badge"><FontAwesomeIcon icon={faSuitcase} /></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">ERP Systems Manager</h4>
                                                        <span className="company">IN Engineering + Surveying - Jan 2023 – Oct 2024</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <ul className="exp">
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Led  the end-to-end customization and deployment of the company’s Enterprise Resource Planning (ERP) system using Odoo.sh, enabling a 50% increase in process automation across five departments.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Managed the full tech stack: Python for backend logic, PostgreSQL for database operations, and XML/QWeb for custom front-end UI within CRM, Sales, Accounting, Project modules and all other modules.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Built and maintained custom API endpoints via Odoo controllers, integrating third-party services and internal applications to streamline workflows.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Used GitHub for version control, managing branches, merge requests, and deployment through Odoo.sh, enabling agile collaboration between devs and stakeholders.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Directed the company-wide ERP rollout and change management strategy, resulting in 90% user adoption within the first 3 months.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Developed data dashboards and UI enhancements using Odoo Studio, JavaScript, and HTML/CSS, increasing visibility for managers across projects and operations.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Led UAT sessions, provided technical documentation, and delivered training to over 20 employees to ensure long-term system sustainability.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Operated within Agile sprint cycles, supporting backlog prioritization, sprint reviews, and iterative optimization post-launch.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="animate-box timeline-unverted">
                                                <div className="timeline-badge"><FontAwesomeIcon icon={faSuitcase} /></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">Digital Experience Lead</h4>
                                                        <span className="company">IN Engineering + Surveying - Jan 2023 – Oct 2024</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <ul className="exp">
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Developed and launched A/B-tested landing pages and WordPress microsites using Google Analytics insights to inform content personalization, resulting in a 12% increase in user engagement.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Aligned campaign execution with company product roadmaps through collaboration with sales and engineering teams.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Presented data-driven marketing insights and web metrics to leadership, influencing digital strategy.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-inverted animate-box">
                                                <div className="timeline-badge"><FontAwesomeIcon icon={faSuitcase} /></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">Survey Research Administrator</h4>
                                                        <span className="company">IN Engineering + Surveying - Sep 2022 – Oct 2024</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <ul className="exp">
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> <strong>Conducted</strong> over <strong>150+ property title searches</strong> using Teranet, maintaining <strong>100% accuracy</strong> in legal documentation.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Provided <strong>detailed research insights</strong> that directly supported <strong>200+ surveying projects</strong> across Ontario.</li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Ensured accuracy through strict quality control procedures. </li>
                                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Communicated research findings clearly to stakeholders and team members.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-heading text-center animate-box">
                                                <div><h3>Education</h3></div>
                                            </li>
                                            <li className="animate-box timeline-unverted">
                                                <div className="timeline-badge"><FontAwesomeIcon icon={faGraduationCap} /></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">Bachelors Degree</h4>
                                                        <span className="company">Trent University - 2017 - 2022</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <p>Bachelor of Arts (BA), <strong>Business</strong> and <strong>Computer Science</strong></p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="fh5co-bg-color">
                                <div id="fh5co-skills" className="animate-box">
                                    <div className="row"> 
                                        <h2 className="skills-heading">Skills</h2>
                                        <h5 className="timeline-heading">(Years of Experience)</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3>Languages & Frameworks</h3>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">HTML5</span><span className="value-right">3</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">CSS3</span><span className="value-right">3</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">JavaScript (ES6+)</span><span className="value-right">3</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-3-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">PHP</span><span className="value-right">2</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-4-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{ width:"40%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Python</span><span className="value-right">3</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-5-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3>Data Tools</h3>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">SQL Server</span><span className="value-right">&lt; 1</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width:"15%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">PostgreSQL</span><span className="value-right">2</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{ width:"40%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">BigQuery</span><span className="value-right">&lt; 1</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-3-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width:"15%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Looker Studio</span><span className="value-right">&lt; 1</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-4-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width:"15%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3>UI/UX & Optimization</h3>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Figma</span><span className="value-right">2</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{ width:"40%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Canva</span><span className="value-right">4</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style={{ width:"80%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Mobile-first responsive design</span><span className="value-right">3</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-3-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Accessibility (WCAG/a11y)</span><span className="value-right">3</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-4-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3>Digital Design & Tools</h3>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">SEO tools</span><span className="value-right">3</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Google Analytics</span><span className="value-right">3</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Google Sites (custom scripting)</span><span className="value-right">&lt; 1</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-3-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width:"15%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">SketchUp (3D integration)</span><span className="value-right">2.5</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-4-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="2.5" aria-valuemin="0" aria-valuemax="5" style={{ width:"50%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3>AI & Automation</h3>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Flask (AI/Automation)</span><span className="value-right">&lt; 1</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width:"15%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">ChatGPT (Prompt Integration)</span><span className="value-right">1.5</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="1.5" aria-valuemin="0" aria-valuemax="5" style={{ width:"30%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3>ERP Systems</h3>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Odoo (QWeb, XML, API integration)</span><span className="value-right">2.5</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="2.5" aria-valuemin="0" aria-valuemax="5" style={{ width:"50%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">WordPress</span><span className="value-right">3</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3>Version Control & Workflow</h3>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">GitHub</span><span className="value-right">4</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style={{ width:"80%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Browser Testing</span><span className="value-right">4</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style={{ width:"80%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Trello</span><span className="value-right">&lt; 1</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-3-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width:"15%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrap-b">
                                                <h3><span className="name-left">Agile/Scrum</span><span className="value-right">3</span></h3>
                                                <div className="progress-b">
                                                    <div className="progress-bar progress-bar-4-b progress-bar-striped active" role="progressbar"
                                                    aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="fh5co-skills" className="animate-box">
                                <div className="row">
                                    <h2>Certificates</h2>
                                    <div className="col-md-6">
                                        <div className="progress-wrap">
                                            <h3><span className="name-left">Web Development with HTML, CSS, JavaScript</span><span className="value-right">Completed</span></h3>
                                            <div className="progress-a">
                                                <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width:"100%" }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-wrap">
                                            <h3><span className="name-left">Developing Front-End Apps with React</span><span className="value-right">Completed</span></h3>
                                            <div className="progress-a">
                                                <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width:"100%" }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-wrap">
                                            <h3><span className="name-left">Developing Back-End Apps with Node.js and Express</span><span className="value-right">Completed</span></h3>
                                            <div className="progress-a">
                                                <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width:"100%" }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-wrap">
                                            <h3><span className="name-left">Python for Data Science, AI & Development</span><span className="value-right">Completed</span></h3>
                                            <div className="progress-a">
                                                <div className="progress-bar progress-bar-7 progress-bar-striped active" role="progressbar"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width:"100%" }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-wrap">
                                            <h3><span className="name-left">Database Management Essentials</span><span className="value-right">Completed</span></h3>
                                            <div className="progress-a">
                                                <div className="progress-bar progress-bar-9 progress-bar-striped active" role="progressbar"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width:"100%" }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress-wrap">
                                            <h3><span className="name-left">Developing AI Applications with Python and Flask</span><span className="value-right">Completed</span></h3>
                                                <div className="progress-a">
                                                <div className="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width:"100%" }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-wrap">
                                            <h3><span className="name-left">Google Digital Unlocked</span><span className="value-right">Completed</span></h3>
                                            <div className="progress-a">
                                                <div className="progress-bar progress-bar-6 progress-bar-striped active" role="progressbar"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width:"100%" }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-wrap">
                                            <h3><span className="name-left">Django Application Development with SQL and Databases</span><span className="value-right">15%</span></h3>
                                            <div className="progress-a">
                                                <div className="progress-bar progress-bar-8 progress-bar-striped active" role="progressbar"
                                                aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width:"15%" }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sec_back-mobile">
                    <div className="who">
                        <div>
                            <p className="sec_one">
                                Technical Front-End Developer • Odoo ERP • Data & Digital Strategy | Business Analyst | Toronto, ON<br />
                            </p>
                        </div>
                        <div className="content">
                            <div className="col-md-12 col-md-offset-0">
                                        <ul className="timeline">
                                            <li className="timeline-heading text-center animate-box">
                                                <div><h3>Work Experience</h3></div>
                                            </li>
                                            <li className="animate-box timeline-unverted">
                                                <div className="timeline-badge"><i className="fa-solid fa-suitcase"></i></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">IT Technician</h4>
                                                        <span className="company">IBW Surveyors - Oct 2024 – Present</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <ul className="exp">
                                                            <li><i className="fa-solid fa-code-commit"></i> Rebuilt internal portal using HTML, SCSS, and JavaScript, reducing load times by 10% and improving UX satisfaction scores.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Collaborated on company website redesign, boosting user engagement by 10% through better UX and SEO.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Worked with Managed Service Providers to implement IT policies, increasing efficiency by 5%.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Analyzed operational data using BigQuery, Looker Studio, and SQL Server, helping executives monitor KPIs in real time.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-inverted animate-box">
                                                <div className="timeline-badge"><i className="fa-solid fa-suitcase"></i></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">ERP Systems Manager</h4>
                                                        <span className="company">IN Engineering + Surveying - Jan 2023 – Oct 2024</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <ul className="exp">
                                                            <li><i className="fa-solid fa-code-commit"></i> Led end-to-end development of custom Odoo ERP modules (CRM, Sales, Projects) using Python and XML, boosting process automation by 50%.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Conducted user training sessions for 20+ staff, ensuring 90% system adoption within the first quarter of rollout.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Translated UI mockups from Figma into accessible, mobile-first web pages; implemented WCAG-compliant accessibility features.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Utilized Odoo controllers to create custom endpoints, integrating data across multiple modules and third-party APIs.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Optimized controller routes and backend logic, improving ERP data load speed by 30%.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Developed and maintained 5 SEO-optimized WordPress sites, increasing organic traffic by 30% and reducing bounce rate by 22%</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="animate-box timeline-unverted">
                                                <div className="timeline-badge"><i className="fa-solid fa-suitcase"></i></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">Marketing Coordinator</h4>
                                                        <span className="company">IN Engineering + Surveying - Jan 2023 – Oct 2024</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <ul className="exp">
                                                            <li><i className="fa-solid fa-code-commit"></i> Integrated Google Analytics and custom event tracking, enabling weekly performance reporting and 10% increase in lead generation.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Aligned campaign execution with company product roadmaps through collaboration with sales and engineering teams.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Presented data-driven marketing insights and web metrics to leadership, influencing digital strategy.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-inverted animate-box">
                                                <div className="timeline-badge"><i className="fa-solid fa-suitcase"></i></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">Survey Research Administrator</h4>
                                                        <span className="company">IN Engineering + Surveying - Sep 2022 – Oct 2024</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <ul className="exp">
                                                            <li><i className="fa-solid fa-code-commit"></i> <strong>Conducted</strong> over <strong>150+ property title searches</strong> using Teranet, maintaining <strong>100% accuracy</strong> in legal documentation.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Provided <strong>detailed research insights</strong> that directly supported <strong>200+ surveying projects</strong> across Ontario.</li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Ensured accuracy through strict quality control procedures. </li>
                                                            <li><i className="fa-solid fa-code-commit"></i> Communicated research findings clearly to stakeholders and team members.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <br />
                                            <li className="timeline-heading text-center animate-box">
                                                <div><h3>Education</h3></div>
                                            </li>
                                            <li className="animate-box timeline-unverted">
                                                <div className="timeline-badge"><i className="fa-solid fa-graduation-cap"></i></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">Bachelors Degree</h4>
                                                        <span className="company">Trent University - 2017 - 2022</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <p>Bachelor of Arts (BA), <strong>Business</strong> and <strong>Computer Science</strong></p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div className="fh5co-bg-color">
                                        <div id="fh5co-skills" className="animate-box">
                                            <div className="row"> 
                                                <h2 className="skills-heading animate-box" >Skills</h2>
                                                <h4>(Years of Experience)</h4>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 animate-box">
                                                    <h3>Languages & Frameworks</h3>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">HTML5</span><span className="value-right">3</span></h3>
                                                        <div className="progress-b">
                                                        <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                        aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">CSS3</span><span className="value-right">3</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">JavaScript (ES6+)</span><span className="value-right">3</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-3-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">PHP</span><span className="value-right">2</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-4-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{ width: "40%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Python</span><span className="value-right">3</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-5-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row animate-box">
                                                <div className="col-md-6">
                                                    <h3>Data Tools</h3>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">SQL Server</span><span className="value-right">&lt; 1</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width: "15%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">PostgreSQL</span><span className="value-right">2</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{ width: "40%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">BigQuery</span><span className="value-right">&lt; 1</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-3-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width: "15%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Looker Studio</span><span className="value-right">&lt; 1</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-4-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width: "15%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row animate-box">
                                                <div className="col-md-6">
                                                    <h3>UI/UX & Optimization</h3>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Figma</span><span className="value-right">2</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{ width: "40%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Canva</span><span className="value-right">4</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style={{ width: "80%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Mobile-first responsive design</span><span className="value-right">3</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-3-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Accessibility (WCAG/a11y)</span><span className="value-right">3</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-4-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row animate-box">
                                                <div className="col-md-6">
                                                    <h3>Digital Design & Tools</h3>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">SEO tools</span><span className="value-right">3</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Google Analytics</span><span className="value-right">3</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Google Sites (custom scripting)</span><span className="value-right">&lt; 1</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-3-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width: "15%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">SketchUp (3D integration)</span><span className="value-right">2.5</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-4-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="2.5" aria-valuemin="0" aria-valuemax="5" style={{ width: "50%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row animate-box">
                                                <div className="col-md-6">
                                                    <h3>AI & Automation</h3>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Flask (AI/Automation)</span><span className="value-right">&lt; 1</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width: "15%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">ChatGPT (Prompt Integration)</span><span className="value-right">1.5</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="1.5" aria-valuemin="0" aria-valuemax="5" style={{ width: "30%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <h3>ERP Systems</h3>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Odoo (QWeb, XML, API integration)</span><span className="value-right">2.5</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="2.5" aria-valuemin="0" aria-valuemax="5" style={{ width: "50%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">WordPress</span><span className="value-right">3</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row animate-box">
                                                <div className="col-md-6">
                                                    <h3>Version Control & Workflow</h3>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">GitHub</span><span className="value-right">4</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-1-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style={{ width: "80%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Browser Testing</span><span className="value-right">4</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-2-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style={{ width: "80%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Trello</span><span className="value-right">&lt; 1</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-3-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width: "15%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap-b">
                                                        <h3><span className="name-left">Agile/Scrum</span><span className="value-right">3</span></h3>
                                                        <div className="progress-b">
                                                            <div className="progress-bar progress-bar-4-b progress-bar-striped active" role="progressbar"
                                                            aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: "60%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        
                                    <div>
                                        <div id="fh5co-skills" className="animate-box">
                                            <div className="row">
                                                <h2>Certificates</h2>
                                                <div className="col-md-6 animate-box">
                                                    <div className="progress-wrap">
                                                        <h3><span className="name-left">Web Development with HTML, CSS, JavaScript</span><span className="value-right">Completed</span></h3>
                                                        <div className="progress-a">
                                                        <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
                                                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap">
                                                        <h3><span className="name-left">Developing Front-End Apps with React</span><span className="value-right">Completed</span></h3>
                                                        <div className="progress-a">
                                                        <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
                                                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap">
                                                        <h3><span className="name-left">Developing Back-End Apps with Node.js and Express</span><span className="value-right">Completed</span></h3>
                                                        <div className="progress-a">
                                                        <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
                                                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap">
                                                        <h3><span className="name-left">Python for Data Science, AI & Development</span><span className="value-right">Completed</span></h3>
                                                        <div className="progress-a">
                                                        <div className="progress-bar progress-bar-7 progress-bar-striped active" role="progressbar"
                                                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap">
                                                        <h3><span className="name-left">Database Management Essentials</span><span className="value-right">Completed</span></h3>
                                                        <div className="progress-a">
                                                        <div className="progress-bar progress-bar-9 progress-bar-striped active" role="progressbar"
                                                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="progress-wrap">
                                                        <h3><span className="name-left">Developing AI Applications with Python and Flask</span><span className="value-right">Completed</span></h3>
                                                        <div className="progress-a">
                                                        <div className="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
                                                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap">
                                                        <h3><span className="name-left">Google Digital Unlocked</span><span className="value-right">Completed</span></h3>
                                                        <div className="progress-a">
                                                        <div className="progress-bar progress-bar-6 progress-bar-striped active" role="progressbar"
                                                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap">
                                                        <h3><span className="name-left">Django Application Development with SQL and Databases</span><span className="value-right">15%</span></h3>
                                                        <div className="progress-a">
                                                        <div className="progress-bar progress-bar-8 progress-bar-striped active" role="progressbar"
                                                        aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width: "15%" }}>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
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

export default Resume;