import { Link } from 'react-router-dom';
import SEO from '../../SEO/SEO';

function TermsOfService() {
    return (
        <>
            <SEO title="Terms of Service" />
            <p className='subtitle'>terms of service</p>

            <section className='about'>
                <article>
                    <h2>Terms</h2>
                    <p>By accessing this Website, accessible from www.unileague.netlify.app, you agree to be bound by these Website Terms and Conditions of Use. </p>
                    <p>You agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. </p>
                    <p>The materials contained in this Website are protected by copyright and trademark law.</p>
                </article>

                <article>
                    <h2>Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials on NTNU's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
                    <ul>
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose or any public display;</li>
                        <li>attempt to reverse engineer any software contained on NTNU's Website;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                    <p>This will let NTNU to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated. You should destroy any downloaded materials in your possession, whether printed or electronic format.</p>
                    <p>These Terms of Service has been created with the help of the <a href='https://www.termsofservicegenerator.net/' target='_blank' rel="noreferrer">Terms Of Service Generator</a>.</p>
                </article>

                <article>
                    <h2>Disclaimer</h2>
                    <p>All the materials on NTNU's Website are provided "as is". NTNU makes no warranties, whether expressed or implied, negates all other warranties. Furthermore, NTNU does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
                </article>

                <article>
                    <h2>Limitations</h2>
                    <p>NTNU or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials on NTNU's Website, even if NTNU or an authorized representative of this Website has been notified orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, and these limitations may not apply to you.</p>
                </article>

                <article>
                    <h2>Revisions and Errata</h2>
                    <p>The materials appearing on NTNU's Website may include technical, typographical, or photographic errors. NTNU will not promise that any of the materials on this Website are accurate, complete, or current. NTNU does not make any commitment to update the materials. NTNU may change the materials contained on its Website at any time without notice.</p>
                </article>

                <article>
                    <h2>Links</h2>
                    <p>NTNU has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by NTNU of the site. The use of any linked website is at the user's own risk.</p>
                </article>

                <article>
                    <h2>Site Terms of Use Modifications</h2>
                    <p>NTNU may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you agree to be bound by the current version of these Terms and Conditions of Use.</p>
                </article>

                <article>
                    <h2>Your Privacy</h2>
                    <p>Please read our <Link to="/about/privacy-policy" >Privacy Policy</Link>.</p>
                </article>

                <article>
                    <h2>Governing Law</h2>
                    <p>Any claim related to NTNU's Website shall be governed by the laws of Norway without regard to its conflict of law provisions.</p>
                </article>
            </section>
        </>
    );
}

export default TermsOfService;