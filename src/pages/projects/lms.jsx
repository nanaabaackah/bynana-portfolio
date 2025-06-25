import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCommit, faSquareCheck, faTriangleExclamation, faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import LightboxViewer from '/src/components/LightboxViewer';
import '/src/styles/global.css';

function Learn() {
    return(
        <>
            <main>
                <Helmet>
                    <title>Project | LMS | By Nana</title>
                </Helmet>
            </main>
            <section id="sec_back-desktop">
                <div id="fh5co-work">
                    <div className="container">
                        <div className="content">
                            <div className="row animate-box">
                                <div className="text-center fh5co-heading">
                                    <h1>Internal Learning Portal (Lightweight LMS)</h1>
                                </div>
                                <div className="oppot">
                                    <h3>Overview</h3>
                                    <p> I designed and developed a simple, scalable learning homepage for employees to access training materials organized by category. Each module in the grid 
                                        links to a dedicated Google Drive folder containing curated content like documents, recorded lectures, and regulations.
                                        This project serves as a lightweight Learning Management System (LMS), offering intuitive navigation and direct access to resources without the complexity 
                                        of a full LMS platform.</p>
                                
                                    <h3>Tech Highlights</h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faCodeCommit} /> Semantic HTML and responsive CSS Grid layout</li>
                                        <li><FontAwesomeIcon icon={faCodeCommit} /> Font Awesome icons for intuitive visual cues</li>
                                        <li><FontAwesomeIcon icon={faCodeCommit} /> Modular structure ready for JavaScript enhancements (e.g., filtering, dynamic content)</li>
                                        <li><FontAwesomeIcon icon={faCodeCommit} /> Integrated with Google Drive for seamless content access</li>
                                        <li><FontAwesomeIcon icon={faCodeCommit} /> Designed in line with accessibility and responsive design best practices</li>
                                    </ul>
                                    <h3>Outcome</h3>
                                    <p>
                                        This approach helps organizations centralize learning content in a user-friendly way, supporting self-paced training without the overhead of a full 
                                        software platform.
                                    </p>
                               
                                    <h3>Tools & Skills</h3> 
                                    <p>Figma, Canva, HTML, CSS, JavaScript, Google Sites, UX Design</p>
                                </div>
                            </div>
                            <div className="row">
                                <div id="reconstruction">
                                    <div className="rec">
                                        <div className="embed">
                                            <h2>Code Embeds</h2>
                                            <h4>Apps</h4>
                                            <table id="recon">
                                                <tr>
                                                    <th>Code</th>
                                                    <th>Notes</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <iframe 
                                                            height="700" 
                                                            width="520" 
                                                            scrolling="no" t
                                                            itle="E-learning Platform" 
                                                            src="https://codepen.io/nanaabaackah/embed/YPPjpor?default-tab=html%2Cresult&theme-id=dark" 
                                                            frameborder="0" 
                                                            loading="lazy" 
                                                            allowtransparency="true" 
                                                            allowfullscreen
                                                        ></iframe>
                                                    </td>
                                                    <td>
                                                        <div className="ids-b">
                                                            <h5>Idea</h5>
                                                            <p>Create a lightweight internal learning platform where employees can browse educational content by category. Each grid item links 
                                                                to a Google Drive folder containing self-paced learning resources.
                                                            </p>
                                                            <h5>Discussion</h5>
                                                            <ul>
                                                                <li><FontAwesomeIcon icon={faCodeCommit} /> Built using semantic HTML (<code>h1</code>, <code>h2</code>, <code>div</code>) and structured with a CSS grid layout</li>
                                                                <li><FontAwesomeIcon icon={faCodeCommit} /> Each card includes an <code>img</code> preview, Font awesome icons, and a content block with linked headings and category descriptions</li>
                                                                <li><FontAwesomeIcon icon={faCodeCommit} /> The layout is mobile-responsive using flexbox/grid, and designed for easy scalability</li>
                                                                <li><FontAwesomeIcon icon={faCodeCommit} /> Ideal for integration with a CMS or lightweight JS filtering system for search or tagging</li>
                                                            </ul>
                                                            <h5>Solution</h5>
                                                            <p>This static front-end component serves as a foundation for a self-paced learning portal:
                                                            </p>
                                                            <ul>
                                                                <li><FontAwesomeIcon icon={faSquareCheck} /> Clean UX using semantic HTML and reusable card components</li>
                                                                <li><FontAwesomeIcon icon={faSquareCheck} /> Easily integrates with cloud storage (Google Drive)</li>
                                                                <li><FontAwesomeIcon icon={faSquareCheck} /> Ready for extension with JavaScript (e.g., dynamic loading, filtering, modals)</li>
                                                                <li><FontAwesomeIcon icon={faSquareCheck} /> Scalable design suitable for teams looking to centralize learning materials without a full Learning Management System</li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <hr />
                                                <tr>
                                                    <td>
                                                        <iframe 
                                                            height="550" 
                                                            width="520" 
                                                            scrolling="no" 
                                                            title="Search Bar" 
                                                            src="https://codepen.io/nanaabaackah/embed/OPPwWOq?default-tab=html&theme-id=dark" 
                                                            frameborder="no" 
                                                            loading="lazy" 
                                                            allowtransparency="true" 
                                                            allowfullscreen
                                                        ></iframe>
                                                    </td>
                                                    <td>
                                                        <div className="ids-b">
                                                            <h5>Idea</h5>
                                                            <p>Implement a dynamic search bar that allows users to enter a query and open a new tab with relevant results. The goal is to integrate lightweight, client-side search functionality without a backend.
                                                            </p>
                                                            <h5>Code Explanaition</h5>
                                                            <h6><code>submitSearch():</code></h6>
                                                            <ul>
                                                                <li><FontAwesomeIcon icon={faCodeCommit} /> Grabs the user's query from the input box.</li>
                                                                <li><FontAwesomeIcon icon={faCodeCommit} /> Concatenates it with a base URL (<code>siteSearchUrl</code>) and an optional ending string (end).</li>
                                                                <li><FontAwesomeIcon icon={faCodeCommit} /> Opens that final URL in a new browser tab (<code>_blank</code>).</li>
                                                                <p><FontAwesomeIcon icon={faTriangleExclamation} /> Note: <code>siteSearchUrl</code> and <code>end</code> are currently empty strings, so the URL won’t work unless you define them (e.g., 'https://www.google.com/search?q=').</p>
                                                                <h6><code>searchKeypress(e):</code></h6>
                                                                <li><FontAwesomeIcon icon={faCodeCommit} /> Triggers a search when the user presses Enter (<code>keyCode === 13</code>).</li>
                                                                <li><FontAwesomeIcon icon={faCodeCommit} /> <code>document.querySelector('button').click()</code> targets the button to return the search</li>
                                                            </ul>
                                                        </div>      
                                                    </td>
                                                </tr>
                                            </table>
                                            <LightboxViewer
                                                source="https://embed.figma.com/design/ChqS2fTMUBsrs9jbTP3mew/Intranet?node-id=1026-4&embed-host=share"
                                                type="iframe"
                                                buttonText="View Figma Design"
                                            />   
                                        </div>
                                    </div>
                                </div>
                            </div>      
                            <div className="pre-next">
                                <a className="prev" href="/projects/Reconstruction">
                                    <FontAwesomeIcon icon={faLeftLong} />
                                    <span>Previous</span>
                                </a>
                                <a className="next" href="/projects/Odoo">
                                    <span>Next</span>
                                    <FontAwesomeIcon icon={faRightLong} />
                                </a>
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
                                <div className="text-center fh5co-heading">
                                    <h1>Internal Learning Portal (Lightweight LMS)</h1>
                                </div>
                                <div className="oppot">
                                    <h3>Overview</h3>
                                    <p> I designed and developed a simple, scalable learning homepage for employees to access training materials organized by category. Each module in the grid 
                                        links to a dedicated Google Drive folder containing curated content like documents, recorded lectures, and regulations.
                                        This project serves as a lightweight Learning Management System (LMS), offering intuitive navigation and direct access to resources without the complexity 
                                        of a full LMS platform.</p>
                                
                                    <h3>Tech Highlights</h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faCodeCommit} /> Semantic HTML and responsive CSS Grid layout</li>
                                        <li><FontAwesomeIcon icon={faCodeCommit} /> Font Awesome icons for intuitive visual cues</li>
                                        <li><FontAwesomeIcon icon={faCodeCommit} /> Modular structure ready for JavaScript enhancements (e.g., filtering, dynamic content)</li>
                                        <li><FontAwesomeIcon icon={faCodeCommit} /> Integrated with Google Drive for seamless content access</li>
                                        <li><FontAwesomeIcon icon={faCodeCommit} /> Designed in line with accessibility and responsive design best practices</li>
                                    </ul>
                                    <h3>Outcome</h3>
                                    <p>
                                        This approach helps organizations centralize learning content in a user-friendly way, supporting self-paced training without the overhead of a full 
                                        software platform.
                                    </p>
                               
                                    <h3>Tools & Skills</h3> 
                                    <p>Figma, Canva, HTML, CSS, JavaScript, Google Sites, UX Design</p>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div id="reconstruction">
                                    <div className="rec">
                                        <div className="embed">
                                            <h2>Code Embeds</h2>
                                            <h4>Apps</h4>
                                            <div className="ids-b">
                                                <h5>Idea</h5>
                                                <p>Create a lightweight internal learning platform where employees can browse educational content by category. Each grid item links 
                                                    to a Google Drive folder containing self-paced learning resources.
                                                </p>
                                                <h5>Discussion</h5>
                                                <ul>
                                                    <li><FontAwesomeIcon icon={faCodeCommit} /> Built using semantic HTML (<code>h1</code>, <code>h2</code>, <code>div</code>) and structured with a CSS grid layout</li>
                                                    <li><FontAwesomeIcon icon={faCodeCommit} /> Each card includes an <code>img</code> preview, Font awesome icons, and a content block with linked headings and category descriptions</li>
                                                    <li><FontAwesomeIcon icon={faCodeCommit} /> The layout is mobile-responsive using flexbox/grid, and designed for easy scalability</li>
                                                    <li><FontAwesomeIcon icon={faCodeCommit} /> Ideal for integration with a CMS or lightweight JS filtering system for search or tagging</li>
                                                </ul>
                                                <h5>Solution</h5>
                                                <p>This static front-end component serves as a foundation for a self-paced learning portal:
                                                </p>
                                                <ul>
                                                    <li><FontAwesomeIcon icon={faSquareCheck} /> Clean UX using semantic HTML and reusable card components</li>
                                                    <li><FontAwesomeIcon icon={faSquareCheck} /> Easily integrates with cloud storage (Google Drive)</li>
                                                    <li><FontAwesomeIcon icon={faSquareCheck} /> Ready for extension with JavaScript (e.g., dynamic loading, filtering, modals)</li>
                                                    <li><FontAwesomeIcon icon={faSquareCheck} /> Scalable design suitable for teams looking to centralize learning materials without a full Learning Management System</li>
                                                </ul>
                                            </div>
                                            <div className="ids-b">
                                                <h5>Idea</h5>
                                                <p>Implement a dynamic search bar that allows users to enter a query and open a new tab with relevant results. The goal is to integrate lightweight, client-side search functionality without a backend.
                                                </p>
                                                <h5>Code Explanaition</h5>
                                                <ul>
                                                    <h6><code>submitSearch():</code></h6>
                                                    <li><FontAwesomeIcon icon={faCodeCommit} /> Grabs the user's query from the input box.</li>
                                                    <li><FontAwesomeIcon icon={faCodeCommit} /> Concatenates it with a base URL (<code>siteSearchUrl</code>) and an optional ending string (end).</li>
                                                    <li><FontAwesomeIcon icon={faCodeCommit} /> Opens that final URL in a new browser tab (<code>_blank</code>).</li>
                                                    <p><FontAwesomeIcon icon={faTriangleExclamation} /> Note: <code>siteSearchUrl</code> and <code>end</code> are currently empty strings, so the URL won’t work unless you define them (e.g., 'https://www.google.com/search?q=').</p>
                                                    <h6><code>searchKeypress(e):</code></h6>
                                                    <li><FontAwesomeIcon icon={faCodeCommit} /> Triggers a search when the user presses Enter (<code>keyCode === 13</code>).</li>
                                                    <li><FontAwesomeIcon icon={faCodeCommit} /> <code>document.querySelector('button').click()</code> targets the button to return the search</li>
                                                </ul>
                                            </div>     
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pre-next">
                            <a className="prev" href="/projects/Reconstruction"><FontAwesomeIcon icon={faLeftLong} />Previous</a>
                            <a className="next" href="/projects/Odoo">Next<FontAwesomeIcon icon={faRightLong} /></a>
                        </div>
                    </div>
                </div>  
            </section>
            
        </>

    );
}

export default Learn;