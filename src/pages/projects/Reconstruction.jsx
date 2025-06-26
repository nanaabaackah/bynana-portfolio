import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCodeCommit, faRightLong, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import LightboxViewer from '/src/components/LightboxViewer';
import FigmaEmbed from '/src/components/FigmaEmbed';
import '/src/styles/global.css';

function Reconstruction() {
    return(
        <>
            <main>
                <Helmet>
                    <title>Projects | Reconstruction | By Nana</title>
                </Helmet>
                <section id="sec_back-desktop">
                    <div id="fh5co-work">
                        <div className="container">
                            <div className="content">
                                <div className="row animate-box">
                                    <div className="text-center fh5co-heading">
                                        <h1>Redesigning IBW’s Intranet with Google Sites</h1>
                                    </div>
                                    <div className="oppot">
                                        <h3>Overview</h3>
                                        <p> At IBW Surveyors, I led the complete redesign of the company’s internal intranet, transforming it from a static, cluttered information hub into a modern, 
                                            user-centered platform that enhanced communication, resource access, and team productivity. Using Google Sites as the foundation, I introduced embedded 
                                            custom HTML, CSS, and JavaScript to go beyond native capabilities, enabling responsive layouts, interactive UI components, and improved navigation flows. 
                                            The redesign was guided by wireframes and high-fidelity prototypes built in Figma and Canva, which were presented to department leads for iterative feedback 
                                            and approval.
                                        </p>
                                    
                                        <h3>Problem</h3>
                                        <p>Prior to this project, the company's internal intranet — built using Google Sites — had become cluttered, outdated, and difficult to navigate. Content was 
                                            fragmented, important documents were buried or duplicated, and users across departments struggled to locate the tools and resources they needed to perform 
                                            their work efficiently. The lack of a clear information hierarchy and limited design flexibility in the original setup contributed to frequent internal 
                                            support requests and delays in communication. As the organization grew, so did the need for a more structured, intuitive, and scalable internal platform.
                                        </p>
                                
                                        <h3>Process</h3>
                                        <ul>
                                            <li><strong><FontAwesomeIcon icon={faCodeCommit} /> Design:</strong> Created mockups and collected feedback</li>
                                            <li><strong><FontAwesomeIcon icon={faCodeCommit} /> Development:</strong> Used embedded code in Google Sites for advanced styling and interactivity</li>
                                            <li><strong><FontAwesomeIcon icon={faCodeCommit} /> Testing:</strong> Checked for performance and mobile responsiveness</li>
                                            <li><strong><FontAwesomeIcon icon={faCodeCommit} /> Launch:</strong> Rolled out intranet with training and internal messaging</li>
                                        </ul>
                                    
                                        <h3>Outcome</h3>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> 30% reduction in internal support requests</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Increased visibility and usage of internal tools</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Positive feedback from multiple departments</li>
                                        </ul>
                                
                                        <h3>Tools & Skills</h3> 
                                        <p>Figma, Canva, HTML, CSS, JavaScript, Google Sites, UX Design</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div id="reconstruction">
                                        <div className="rec">
                                            <h2>Design Changes</h2>
                                            <div  className="design">
                                                <h4>App Dashboard Redesign</h4>
                                                <div className="ids">
                                                    <h5>Idea</h5>
                                                    <p>Replace low-quality, pixelated image buttons with a clean, 
                                                        scalable design using modern UI principles.
                                                    </p>
                                                    <h5>Discussion</h5>
                                                    <p>The original dashboard used inconsistent images that made
                                                        navigation unclear and visually unprofessional. Icons were pixelated, 
                                                        lacked uniform sizing, and had no accessibility features like alt tags.
                                                    </p>
                                                    <h5>Solution</h5>
                                                    <p>Implemented a responsive grid layout using high-resolution icons with 
                                                        consistent spacing and modern hover effects. Added descriptive <code>alt</code> 
                                                        tags for screen readers and improved overall accessibility and visual flow.
                                                    </p>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={faSquareCheck} /> Enhanced visual clarity and consistency</li>
                                                        <li><FontAwesomeIcon icon={faSquareCheck} /> Faster user recognition of app functions</li>
                                                        <li><FontAwesomeIcon icon={faSquareCheck} /> Accessible for screen readers</li>
                                                        <li><FontAwesomeIcon icon={faSquareCheck} /> Easier to maintain and scale</li>
                                                    </ul>
                                                </div>
                                                <table id="recon">
                                                    <tr>
                                                        <th>Before</th>
                                                        <th>After</th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="pic">
                                                                <img src="/imgs/website transformation/old icons.png" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id='figmaPlaceholder'>
                                                                <FigmaEmbed
                                                                figmaUrl="https://embed.figma.com/design/ChqS2fTMUBsrs9jbTP3mew/Intranet?node-id=215-86&embed-host=share"
                                                                previewImage="/imgs/figmaph1.png"
                                                                alt="Figma Preview 1"
                                                            />     
                                                            </div>
                                                                        
                                                        </td>
                                                    </tr>
                                                    <hr />
                                                    <tr>
                                                        <td>
                                                            <div className="pic">
                                                                <img src="/imgs/website transformation/old icons2.png" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id='figmaPlaceholder'>
                                                                <FigmaEmbed
                                                                figmaUrl="ttps://embed.figma.com/design/ChqS2fTMUBsrs9jbTP3mew/Intranet?node-id=215-88&embed-host=share"
                                                                previewImage="/imgs/figmaph1.png"
                                                                alt="Figma Preview 2"
                                                            />     
                                                            </div>
                                                                                   
                                                        </td>
                                                    </tr>
                                                    <hr />
                                                    <tr>
                                                        <td>
                                                            <div className="pic">
                                                                <img src="/imgs/website transformation/old icons3.png" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id='figmaPlaceholder'>
                                                                <FigmaEmbed
                                                                figmaUrl="https://embed.figma.com/design/ChqS2fTMUBsrs9jbTP3mew/Intranet?node-id=249-3&embed-host=share"
                                                                previewImage="/imgs/figmaph1.png"
                                                                alt="Figma Preview 3"
                                                            />  
                                                            </div>
                                                                            
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className="embed">
                                                <h2>Code Embeds</h2>
                                                <table id="recon">
                                                    <h4>Apps</h4>
                                                    <tr>
                                                        <th>Code</th>
                                                        <th>Notes</th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <iframe height="650" width="520" scrolling="no" title="Search Bar with Directory" 
                                                            src="https://codepen.io/nanaabaackah/embed/dPPjOKN?default-tab=html%2Cresult&theme-id=dark" 
                                                            frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                                            </iframe>
                                                        </td>
                                                        <td>
                                                            <div className="ids-b">
                                                                <h5>Idea</h5>
                                                                <p>Create a searchable, accordion-style webpage to organize land registry office (LRO) resources 
                                                                    by region (e.g., Dundas, Durham, Essex).
                                                                </p>
                                                                <h5>Discussion</h5>
                                                                <ul>
                                                                    <li><strong><FontAwesomeIcon icon={faCodeCommit} />Design</strong> Clean layout using Google Fonts (<code>Montserrat</code>) and Font Awesome icons.</li>
                                                                    <li><strong><FontAwesomeIcon icon={faCodeCommit} />Structure</strong> Semantic HTML with a <code>&lt;section className="main"&gt;</code> wrapper and categorized accordion buttons for navigation.</li>
                                                                    <li><strong><FontAwesomeIcon icon={faCodeCommit} />Interactivity</strong> Accordion toggles sections open/closed; search form present but not fully implemented.</li>
                                                                    <li><strong><FontAwesomeIcon icon={faCodeCommit} />Styling</strong> Flexbox layout, rounded elements, and dynamic visual indicators for expanded/collapsed panels</li>
                                                                </ul>
                                                                <h5>Solution</h5>
                                                                <p>This code represents the <strong>foundation of an interactive registry office explorer</strong>, which:</p>
                                                                <ul>
                                                                    <li><FontAwesomeIcon icon={faCodeCommit} />Organized with semantic HTML and responsive CSS</li>
                                                                    <li><FontAwesomeIcon icon={faCodeCommit} />Visually intuitive with accordion-based content reveal</li>
                                                                    <li><FontAwesomeIcon icon={faCodeCommit} />Ready for JavaScript integration to enable search and toggle functionality</li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <LightboxViewer
                                                    source="/documents/IBW_Intranet_Redesign.pdf"
                                                    type="pdf"
                                                    buttonText="View PDF Document"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pre-next">
                                <Link className="next" to="/projects/lms">Next<FontAwesomeIcon icon={faRightLong} /></Link>
                            </div>
                        </div>
                    </div>
                    </section>
                <section id="sec_back-mobile">
                    <div id="fh5co-work">
                        <div className="container">
                            <div className="content">
                                <div className="row animate-box">
                                    <div className="text-center fh5co-heading">
                                        <h1>Redesigning IBW’s Intranet with Google Sites</h1>
                                    </div>
                                    <div className="oppot">
                                        <h3>Overview</h3>
                                        <p> At IBW Surveyors, I led the complete redesign of the company’s internal intranet, transforming it from a static, cluttered information hub into a modern, 
                                            user-centered platform that enhanced communication, resource access, and team productivity. Using Google Sites as the foundation, I introduced embedded 
                                            custom HTML, CSS, and JavaScript to go beyond native capabilities, enabling responsive layouts, interactive UI components, and improved navigation flows. 
                                            The redesign was guided by wireframes and high-fidelity prototypes built in Figma and Canva, which were presented to department leads for iterative feedback 
                                            and approval.
                                        </p>
                                    
                                        <h3>Problem</h3>
                                        <p>Prior to this project, the company's internal intranet — built using Google Sites — had become cluttered, outdated, and difficult to navigate. Content was 
                                            fragmented, important documents were buried or duplicated, and users across departments struggled to locate the tools and resources they needed to perform 
                                            their work efficiently. The lack of a clear information hierarchy and limited design flexibility in the original setup contributed to frequent internal 
                                            support requests and delays in communication. As the organization grew, so did the need for a more structured, intuitive, and scalable internal platform.
                                        </p>
                                
                                        <h3>Process</h3>
                                        <ul>
                                            <li><strong><FontAwesomeIcon icon={faCodeCommit} /> Design:</strong> Created mockups and collected feedback</li>
                                            <li><strong><FontAwesomeIcon icon={faCodeCommit} /> Development:</strong> Used embedded code in Google Sites for advanced styling and interactivity</li>
                                            <li><strong><FontAwesomeIcon icon={faCodeCommit} /> Testing:</strong> Checked for performance and mobile responsiveness</li>
                                            <li><strong><FontAwesomeIcon icon={faCodeCommit} /> Launch:</strong> Rolled out intranet with training and internal messaging</li>
                                        </ul>
                                    
                                        <h3>Outcome</h3>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> 30% reduction in internal support requests</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Increased visibility and usage of internal tools</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Positive feedback from multiple departments</li>
                                        </ul>
                                
                                        <h3>Tools & Skills</h3> 
                                        <p>Figma, Canva, HTML, CSS, JavaScript, Google Sites, UX Design</p>
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div id="reconstruction">
                                        <div className="rec">
                                            <h2>Design Changes</h2>
                                            <div  className="design">
                                                <h4>App Dashboard Redesign</h4>
                                                <div className="ids">
                                                    <h5>Idea</h5>
                                                    <p>Replace low-quality, pixelated image buttons with a clean, 
                                                        scalable design using modern UI principles.
                                                    </p>
                                                    <h5>Discussion</h5>
                                                    <p>The original dashboard used inconsistent images that made
                                                        navigation unclear and visually unprofessional. Icons were pixelated, 
                                                        lacked uniform sizing, and had no accessibility features like alt tags.
                                                    </p>
                                                    <h5>Solution</h5>
                                                    <p>Implemented a responsive grid layout using high-resolution icons with 
                                                        consistent spacing and modern hover effects. Added descriptive <code>alt</code> 
                                                        tags for screen readers and improved overall accessibility and visual flow.
                                                    </p>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={faSquareCheck} /> Enhanced visual clarity and consistency</li>
                                                        <li><FontAwesomeIcon icon={faSquareCheck} /> Faster user recognition of app functions</li>
                                                        <li><FontAwesomeIcon icon={faSquareCheck} /> Accessible for screen readers</li>
                                                        <li><FontAwesomeIcon icon={faSquareCheck} /> Easier to maintain and scale</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="embed">
                                                <h2>Code Embeds</h2>
                                                <div className="ids-b">
                                                    <h5>Idea</h5>
                                                    <p>Create a searchable, accordion-style webpage to organize land registry office (LRO) resources 
                                                        by region (e.g., Dundas, Durham, Essex).
                                                    </p>
                                                    <h5>Discussion</h5>
                                                    <ul>
                                                        <li><strong><FontAwesomeIcon icon={faCodeCommit} />Design</strong> Clean layout using Google Fonts (<code>Montserrat</code>) and Font Awesome icons.</li>
                                                        <li><strong><FontAwesomeIcon icon={faCodeCommit} />Structure</strong> Semantic HTML with a <code>&lt;section className="main"&gt;</code> wrapper and categorized accordion buttons for navigation.</li>
                                                        <li><strong><FontAwesomeIcon icon={faCodeCommit} />Interactivity</strong> Accordion toggles sections open/closed; search form present but not fully implemented.</li>
                                                        <li><strong><FontAwesomeIcon icon={faCodeCommit} />Styling</strong> Flexbox layout, rounded elements, and dynamic visual indicators for expanded/collapsed panels</li>
                                                    </ul>
                                                    <h5>Solution</h5>
                                                    <p>This code represents the <strong>foundation of an interactive registry office explorer</strong>, which:</p>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={faCodeCommit} />Organized with semantic HTML and responsive CSS</li>
                                                        <li><FontAwesomeIcon icon={faCodeCommit} />Visually intuitive with accordion-based content reveal</li>
                                                        <li><FontAwesomeIcon icon={faCodeCommit} />Ready for JavaScript integration to enable search and toggle functionality</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pre-next">
                                    <Link className="next" to="/projects/lms">Next<FontAwesomeIcon icon={faRightLong} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
}

export default Reconstruction;