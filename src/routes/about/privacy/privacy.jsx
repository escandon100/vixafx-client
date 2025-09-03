import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./privacy.scss"


const Privacy = ()  => {
    return ( 
        <>
            <div className="privacyNav">
                 <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Privacy Policy</span>
            </div>
            <div className="privacy">
                <div className="main">
                    <h1>PRIVACY POLICY</h1>
                    <p>Vixa Fx gives this Privacy Policy to educate clients of our arrangements and procedures with respect to the collection, use and exposure of actually recognizable data got from clients of this website, located at www.traderbasefx.com ("Site"). This Privacy Policy might be refreshed from time to time in any way; every version will apply to data gathered while it was set up. We will inform you of any material changes to our Privacy Policy by posting the new Privacy Policy on our Site. You are encouraged to counsel this Privacy Policy routinely for any changes.</p>
                    <p>By giving us such data, you are giving us your agree to collect, use and store the data in the way clarified hereto.</p>
                    <h3>COLLECTED DATA</h3>
                    <p>Personally Identifiable Information: When perusing the non-password ensured segments of Prime24 Options`s Site, it is done as such namelessly; no privately recognizable data is collected. When index.phping into an enlisted client of Vixa Fx, it is mentioned that an email address, username and a secret key to get to our Site is given. The law requires customers to give trading data (e.g., to what extent they have been trading, favored trading style, and so forth.) and a profile portrayal. When a customer index.phps with Vixa FX and signs in to the Site, they are never again anonymous to Vixa Fx.</p>
                    <p>As an enlisted client, the law expects customers to give P24O Ltd. with the vital accreditations to get to their brokerage account (for example client ID, secret word, and data important to get to their record). Vixa FX will never get to your records for any reason other than to recover customer trading information and give the administrations they have mentioned. Customers can de-enact their record in any capacity whenever and Vixa FX will erase the majority of your private recognizable data from its servers. Vixa FX will not keep a duplicate of actually recognizable data for any reasons upon record deactivation aside from as might be required by law or to generally secure protect legal rights.</p>
                    <h3>DATA SECURITY</h3>
                    <p>When visiting the Site, Vixa FX may collect data through "cookies" or other comparable Web devices to improve the client experience. Cookies are little strings of content that are sent by our Site to your program on your PC's hard drive. Cookies empower Vixa FX to perceive Site guests when they return to the Site, to keep up Web sessions while perusing all through the Site, just as help Vixa Fx give a superior, progressively customized involvement.Vixa Fx's cookies are not tied to private recognizable data. Most Web programs consequently acknowledge cookies; however, it is conceivable to change browser setup with the goal that it does not accept cookies. Also, dismissing cookies may avert guests exploiting certain parts of our Site.</p>
                    <p>When browsing Vixa FX 's Site, P24O Ltd. automatically gets and records data on its server logs from the guest's browser including your IP address, Vixa FX cookie data, and the pages requested. Vixa FX utilizes this data to improve the usefulness and ease of use of its services.Vixa Fx's log records are not fixing to private identifiable data.</p>
                    <p> Vixa FX utilizes secure server programming (SSL) and firewalls to shield all data from unapproved access, exposure, adjustment, or destruction.</p>
                    <h3>How Vixa FX Uses Collected Data</h3>
                    <p>Client Service: Based upon the individual recognizable data gave amid the registration procedure, Vixa FX sends a welcome email to confirm the record. Vixa FX will connect with enrolled clients in the response to their request in order to give the services mentioned and deal with the account.</p>
                    <p>Brokerage Information: index.phped clients of the Site may give Vixa Fx the qualifications to get to their brokerage account to recover their trading data. This data is just used to acquire trading history for the record and this data and is not available anyplace on the Site.</p>
                    <p>Data Sharing and Disclosure:Vixa Fx Does Not Reveal Any Private Identifiable Information. Vixa FX will not distribute any close to private identifiable data (for example name, email address or contacts) on the Site for others to see without the enlisted client's express authorization, except if the client themselves posts it on the Site.</p>
                    <p>P24O Ltd:</p>
                    <ol>
                        <li>Does not lease or share any private recognizable data;</li>
                        <li>Does not lease or impart any private recognizable data to outsiders that are not our operators or specialist providers.</li>
                    </ol>
                    <p>May give client data if legitimately required.</p>
                    <p>May be required to give client data under the accompanying conditions: in the response of subpoenas, court orders, or lawful procedure or to build up or practice our legitimate rights or shield against real or compromised lawful cases. Moreover, when Vixa FX trusts it is important to share data so as to research, avert or make a move with respect to illicit exercises or exercises which it trusts offer ascent to legitimate liability to Vixa Fx, its individuals or third persons, suspected extortion, circumstances including potential dangers to the physical security of any individual, infringement of Vixa Fx's Terms of Use, or as generally required by law.</p>
                    <h3>PERSONS UNDER THE AGE OF 18</h3>
                    <p>In consistency with most national legitimate systems, we do not allow people under the age of 18 years to be our clients, and we will not gather data from people younger than 18. By utilizing our Site, you confirm that you are beyond 18 years old.</p>
                    <h3>FINAL STATEMENT</h3>
                    <p>On the off chance that you have any inquiries or remarks about this Privacy Policy or our utilization of your actually identifiable data, please do not hesitate and contact us.</p>
                </div>
                <div className="side">
                    <h3>Trading tools</h3>
                    <ul>
                        <li className='privacyClicked'><Link to="#">Privacy Policy</Link></li>
                        
                    </ul>
                </div>
            </div>
        </>
     );
}

export default Privacy;