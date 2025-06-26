import React from 'react';
import { Helmet } from 'react-helmet';
import GistEmbed from '/src/components/GistEmbed';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCodeCommit, faTerminal, faLeftLong, faRightLong, faXmark } from '@fortawesome/free-solid-svg-icons';
import '/src/styles/global.css';

function Odoo() {
    return(
        <>
            <main>
                <Helmet>
                    <title>Projects | Odoo | By Nana</title>
                </Helmet>
                <section id="sec_back-desktop">
                    <div id="fh5co-work" className='animate-box'>
                        <div className="container">
                            <div className="content">
                                <div className="row animate-box">
                                    <div className="text-center fh5co-heading">
                                        <h1>Customizing Odoo ERP to Automate Operations</h1>
                                    </div>
                                    <div className="oppot">
                                        <h3>Overview</h3>
                                        <p> As an ERP Systems Manager at IN Engineering & Surveying, I led a company-wide initiative to customize the Odoo ERP platform. The goal was to 
                                            streamline manual processes across five departments, including CRM, Project Management, Accounting, Invoicing, Expenses and Sales, eLearning, Employees, Recruitment, Marketing Automation 
                                            and other modules useful for the company. The result was a 50% increase in workflow 
                                            automation and a 90% adoption rate within the first three months.
                                        </p>
                                        <h3>My Role</h3>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Led customization and development in GitHub, Python and Odoo Studio</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Gathered requirements from five departments</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Created new data models and UI views using XML/QWeb</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Built training resources and hosted workshops</li>
                                        </ul>
                                        <h3>Process</h3>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> <strong>Discovery:</strong> Stakeholder interviews and workflow mapping</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> <strong>Development:</strong> Python logic, controller endpoints, and UI views</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> <strong>Testing:</strong> QA environments and team feedback loops</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> <strong>Rollout:</strong> Training sessions and system-wide launch</li>
                                        </ul>
                                        <h3>Customizations</h3>
                                        <ol>
                                            <li><FontAwesomeIcon icon={faTerminal} /> Updated Project Method</li>
                                            <p>Initial code that was created and being used had an error where the Project sheet report generated was sent multiple times to the same user
                                                causing multiple unncessary emails. I improved the method  by restructuring the logic to first collect unique users and their corresponding emails.
                                                Using a dictionary, I grouped projects by user email and ensured that only one email per user would be sent with all relevant attachments. This
                                                removed redundancy and improved performance. I also added fallbacks to check for team-level users when project-level users were not assigned, 
                                                preventing skipped records and improving reliability. <br />The final implementation sends one concise, well-formatted message per user with all 
                                                applicable attachments, improving communication clarity and reducing internal email noise. This update was tested using Odoo Studio on a staging 
                                                environment deployed via Odoo.sh and version-controlled with GitHub.
                                            </p>
                                            <pre>
                                                <code className='gist'>
                                                    { `
    users_emails = {}
    for order in self.order_line:
        if order.project_id:
            user, email = False, False
            if order.project_id.user_id:
                user = order.project_id.user_id.name or False
                email = order.project_id.user_id.email or False
            elif self.team_id:
                user = self.team_id.user_id.name or False
                email = self.team_id.user_id.email or False 
                if user and email:  
                    if user not in users_emails:
                        users_emails[user] = []
                        email = users_emails[user].append(email)
                                                                    `}
                                                </code>
                                            </pre>
                                            <hr />
                                            <li><FontAwesomeIcon icon={faTerminal} /> Customized Project Name</li>
                                            <p>We wanted to create a standard automated process that loops through all posted invoices (<code className='inner'>account.move</code> records). It then checks if the 
                                                invoice is currently "in payment" (meaning it's being processed and fully paid) and trigger an automatic notification. To do this, I customized 
                                                the method to search all invoices with <code className='inner'>state = 'posted'</code>, filter those with <code className='inner'>payment_state = 'in_payment'</code>, and then trigger 
                                                an email using a predefined mail template titled "Invoice Status." I dynamically set the recipient address using the appropriate field and leveraged 
                                                Odoo’s built-in <code className='inner'>with_context()</code> and <code className='inner'>sudo()</code> methods to ensure the email was sent with the correct privileges and data. 
                                                This automation ensured finance teams were consistently notified of invoices in progress, streamlining follow-ups and reducing missed or delayed 
                                                payments. The entire flow was developed using Odoo Studio and deployed via Odoo.sh, with versioning and tracking handled through GitHub.
                                            </p>
                                            <pre>
                                                <code className='gist'>
                                                    {`
    for rec in records:
        seq = env['ir.sequence'].next_by_code('project.project')
            if rec.mun:
                new_project = { 
                    'name': str(seq)+ ' (' +str(rec.mun)+ ') ' +str( rec.sale_order_id.short_description )+ ' - ' + str(rec.partner_id.name), 
                    'project_number': seq, 
                } 
            else:
                new_project = { 
                    'name': str(seq)+ ' - ' +str( rec.sale_order_id.short_description )+ ' - ' + str(rec.partner_id.name), 
                    'project_number': seq, 
                } 
        partner = rec.update(new_project)
                                                    `}
                                                </code>
                                            </pre>
                                            <hr />
                                            <li><FontAwesomeIcon icon={faTerminal} /> Auto Send Invoice Status</li>
                                            <p>We wanted to create a standard project name auto generated whenever a job is accepted. This code retrieves the next available sequence number for 
                                                projects using Odoo’s <code className='inner'>ir.sequence</code>. <code className='inner'>project.project</code> is the defined sequence code — this ensures every project gets a unique 
                                                ID. If the record has a municipality value (<code className='inner'>rec.mun</code>), include it in parentheses as part of the project name. The name format looks like:
                                                "P00001 (Dundas) Site Prep - Smith Construction". If there's no municipality, the name excludes it. The current record (<code className='inner'>rec</code>) is updated with 
                                                the new project name and number.
                                            </p>
                                            <pre>
                                                <code className='gist'>
                                                    {`
    invoice_id = env['account.move'].search([('state', '=', 'posted')])

    for loop in invoice_id:
        template = env['mail.template'].search([('name', '=', 'Invoice Status')])
        if loop.payment_state == 'in_payment':
            template.write({'email_to':''})
            template.with_context().sudo().send_mail()
                                                    `}
                                                </code>
                                            </pre>
                                            <hr />
                                            <li><FontAwesomeIcon icon={faTerminal} /> Default use of 'Quote' change</li>
                                            <p>The goal was to change the default terminology used when sending sales estimates to clients.  Odoo's standard behavior uses the term "Quote" when sending 
                                                sales orders or estimates to clients. To align with internal preferences and improve clarity, I customized the quotation template to consistently display 
                                                "Estimate" instead. This involved modifying the QWeb XML templates and adjusting the relevant field labels using Odoo Studio. I also reviewed and updated 
                                                email templates, PDFs, and any automated messages where the original term appeared. The changes were deployed through Odoo.sh and managed in GitHub to 
                                                ensure version control and collaboration. This small but impactful update improved client communication and better reflected our company’s terminology standards.
                                            </p>
                                            <pre>
                                                <code className='gist'>
                                                    {`
    @api.depends('state')
        def _compute_type_name(self):
            for record in self:
                record.type_name = _('Estimate') if record.state in ('draft', 'sent', 'cancel') else _('Sales Order')
                                                    `}
                                                </code>
                                            </pre>
                                            <hr />
                                            <li><FontAwesomeIcon icon={faTerminal} /> Project Summary (Internal)(Partially Implemented)</li>
                                            <p>This method dynamically analyzes a project’s cost vs. revenue and communicates the insights through an automated email. This calculates key financial metrics for a specific project, such as:
                                                <br />Total timesheet cost <br />Total sales order (SO) amount <br />Budget ratio = cost vs. revenue.<br />
                                                The code searches the <code className='inner'>project.profitability.report</code> model for records linked to the current project (<code className='inner'>self.id</code>). Loops through each profitability record. Only sums 
                                                amount_untaxed from unique sale orders (no double counting). Adds up <code className='inner'>timesheet_cost</code> from all records. Uses <code className='inner'>env.ref()</code> to fetch the email template by XML ID which is safer and faster.
                                                Passes the metrics via context so they can be injected into the email template (<code className='inner'>{'${object.timesheet_cost}'}</code>, etc.). <code className='inner'>self.id</code> is passed as <code className='inner'>res_id</code>, so the template 
                                                knows which project record it's sending from.
                                            </p>
                                            <pre>
                                                <code className='gist'>
                                                    {`
    for record in project_reports:
        if record.sale_order_id.id not in sale_ids:
            sale_ids.add(record.sale_order_id.id)
            so_amount += record.sale_order_id.amount_untaxed
            timesheet_cost += record.timesheet_cost

            budget = abs(timesheet_cost / so_amount) if so_amount else 0.0

            template = self.env.ref('ppts_crm_sales.project_summary_mail')
            template.with_context({
                'timesheet_cost': round(timesheet_cost, 2),
                'so_amount': round(so_amount, 2),
                'budget': round(budget, 2),
            }).sudo().send_mail(self.id, force_send=True)
 `}
                                                </code>
                                            </pre>
                                            <hr />
                                            <li><FontAwesomeIcon icon={faTerminal} /> Auto-Send Startup Email (Not implemented yet)</li>
                                            <p>
                                                This method is designed to loop through all confirmed sales orders (<code className='inner'>state = 'sale'</code>). If the order is 2 days old, an onboarding email is automatically sent
                                                using a mail template called "Project Startup: What to Expect".
                                            </p>
                                            <pre>
                                                <code className='gist'>
{`
    from datetime import date

        def project_startup(self):
            SaleOrder = self.env['sale.order']
            template = self.env['mail.template'].search([('name', '=', 'Project Startup: What to Expect')], limit=1)

            for rec in SaleOrder.search([('state', '=', 'sale')]):
                if not rec.date_order:
                    continue  

                    days_since_order = (date.today() - rec.date_order.date()).days

                    if days_since_order == 2 and template:
                        template.with_context().sudo().send_mail(rec.id, force_send=True)
                        rec.write({'startup_sent': True})  
`}
                                                </code>
                                            </pre>
                                        </ol>
                                        <h3>Outcome</h3>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> 50% increase in process automation</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> 90% ERP adoption within the first 3 months</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Improved team coordination and visibility</li>
                                        </ul>
                                        <h3>Tools & Skills</h3> 
                                        <p>Canva, Odoo.sh, GitHub, Visual Studio, Python, QWeb/XML, Odoo Studio, User Training, Process Documentation</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div id="reconstruction">
                                        <div className="rec">
                                            <div className="embed">
                                                <h2>Code Embeds</h2>
                                                <table id="recon-b">
                                                    <thead>
                                                        <tr>
                                                            <th>Description</th>
                                                            <th>Python</th>
                                                            <th>GitHub</th>
                                                            <th>QWeb/XML</th>
                                                            <th>JS/HTML</th>
                                                            <th>SQL via ORM</th>
                                                            <th>Odoo Studio</th>
                                                            <th>Odoo.sh</th>
                                                            <th>Visual Basic</th>
                                                            <th>Other</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1. Updated Project Method</td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td>
                                                            <td className="cross"><FontAwesomeIcon icon={faXmark} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="cross">—</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2. Customized Project Name</td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td>
                                                            <td className="cross"><FontAwesomeIcon icon={faXmark} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="cross">—</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3. Auto Send Invoice Status</td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="cross"><FontAwesomeIcon icon={faXmark} /></td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="cross">—</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4. Default use of 'Quote' change</td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td>
                                                            <td className="cross"><FontAwesomeIcon icon={faXmark} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="cross">—</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5. Project Summary (Internal)</td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="cross"><FontAwesomeIcon icon={faXmark} /></td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="cross">—</td>
                                                        </tr>
                                                        <tr>
                                                            <td>6. Auto-Send Startup Email</td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="cross"><FontAwesomeIcon icon={faXmark} /></td>
                                                            <td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="check"><FontAwesomeIcon icon={faCheck} /></td><td className="cross">—</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="pre-next">
                                                <Link className="prev" to="/projects/lms"><FontAwesomeIcon icon={faLeftLong} />Previous</Link>
                                                <Link className="next" to="/projects/Reconstruction">Next<FontAwesomeIcon icon={faRightLong} /></Link>
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
                                    <div className="text-center fh5co-heading">
                                        <h1>Customizing Odoo ERP to Automate Operations</h1>
                                    </div>
                                    <div className="oppot">
                                        <h3>Overview</h3>
                                        <p> As an ERP Systems Manager at IN Engineering & Surveying, I led a company-wide initiative to customize the Odoo ERP platform. The goal was to 
                                            streamline manual processes across five departments, including CRM, Project Management, Accounting, Invoicing, Expenses and Sales, eLearning, Employees, Recruitment, Marketing Automation 
                                            and other modules useful for the company. The result was a 50% increase in workflow 
                                            automation and a 90% adoption rate within the first three months.
                                        </p>
                                        <h3>My Role</h3>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Led customization and development in GitHub, Python and Odoo Studio</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Gathered requirements from five departments</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Created new data models and UI views using XML/QWeb</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Built training resources and hosted workshops</li>
                                        </ul>
                                        <h3>Process</h3>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> <strong>Discovery:</strong> Stakeholder interviews and workflow mapping</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> <strong>Development:</strong> Python logic, controller endpoints, and UI views</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> <strong>Testing:</strong> QA environments and team feedback loops</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> <strong>Rollout:</strong> Training sessions and system-wide launch</li>
                                        </ul>
                                        <h3>Customizations</h3>
                                        <ol>
                                            <li><FontAwesomeIcon icon={faTerminal} /> Updated Project Method</li>
                                            <p>Initial code that was created and being used had an error where the Project sheet report generated was sent multiple times to the same user
                                                causing multiple unncessary emails. I improved the method 
                                            </p>
                                            <li><FontAwesomeIcon icon={faTerminal} /> Customized Project Name</li>
                                            <p>We wanted to create a standard automated process that loops through all posted invoices (<code className='inner'>account.move</code> records). It then checks if the 
                                                invoice is currently "in payment" (meaning it's being processed and fully paid) If so, send an email using a mail template called "Invoice Status"
                                            </p>
                                            <li><FontAwesomeIcon icon={faTerminal} /> Auto Send Invoice Status</li>
                                            <p>We wanted to create a standard project name auto generated whenever a job is accepted. This code retrieves the next available sequence number for 
                                                projects using Odoo’s <code className='inner'>ir.sequence</code>. <code className='inner'>project.project</code> is the defined sequence code — this ensures every project gets a unique 
                                                ID. If the record has a municipality value (<code className='inner'>rec.mun</code>), include it in parentheses as part of the project name. The name format looks like:
                                                "P00001 (Dundas) Site Prep - Smith Construction". If there's no municipality, the name excludes it. The current record (<code className='inner'>rec</code>) is updated with 
                                                the new project name and number.
                                            </p>
                                            <li><FontAwesomeIcon icon={faTerminal} /> Default use of 'Quote' change</li>
                                            <p>The goal was to change the language used when sending estimates to clients. The default used is 'Quote' and we wanted to change this to be displayed as 'Estimate'
                                            </p>
                                            <li><FontAwesomeIcon icon={faTerminal} /> Project Summary (Internal)(Partially Implemented)</li>
                                            <p>This method dynamically analyzes a project’s cost vs. revenue and communicates the insights through an automated email. This calculates key financial metrics for a specific project, such as:
                                                <br />Total timesheet cost <br />Total sales order (SO) amount <br />Budget ratio = cost vs. revenue.<br />
                                                The code searches the <code className='inner'>project.profitability.report</code> model for records linked to the current project (<code className='inner'>self.id</code>). Loops through each profitability record. Only sums 
                                                amount_untaxed from unique sale orders (no double counting). Adds up <code className='inner'>timesheet_cost</code> from all records. Uses <code className='inner'>env.ref()</code> to fetch the email template by XML ID which is safer and faster.
                                                Passes the metrics via context so they can be injected into the email template (<code className='inner'>{' ${object.timesheet_cost}' }</code>, etc.). <code className='inner'>self.id</code> is passed as <code className='inner'>res_id</code>, so the template 
                                                knows which project record it's sending from.
                                            </p>
                                            <li><FontAwesomeIcon icon={faTerminal} /> Auto-Send Startup Email (Not implemented yet)</li>
                                            <p>
                                                This method is designed to loop through all confirmed sales orders (<code className='inner'>state = 'sale'</code>). If the order is 2 days old, an onboarding email is automatically sent
                                                using a mail template called "Project Startup: What to Expect".
                                            </p>
                                        </ol>
                                        <h3>Outcome</h3>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> 50% increase in process automation</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> 90% ERP adoption within the first 3 months</li>
                                            <li><FontAwesomeIcon icon={faCodeCommit} /> Improved team coordination and visibility</li>
                                        </ul>
                                        <h3>Tools & Skills</h3> 
                                        <p>Canva, Odoo.sh, GitHub, Visual Studio, Python, QWeb/XML, Odoo Studio, User Training, Process Documentation</p>
                                    </div>
                                    <div className="pre-next">
                                        <Link className="prev" to="/projects/lms"><FontAwesomeIcon icon={faLeftLong} /> Previous</Link>
                                        <Link className="next" to="/projects/Reconstruction">Next<FontAwesomeIcon icon={faRightLong} /></Link>
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

export default Odoo;