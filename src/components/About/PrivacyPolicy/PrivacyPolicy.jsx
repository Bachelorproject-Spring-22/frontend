import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function PrivacyPolicy(props) {

    return (
        <>
            <Helmet>
                <title>Privacy Policy - The Kahoot! League</title>
            </Helmet>
            <p className='subtitle'>Privacy Policy</p>

            <section>
                <article>
                    <h2>The Product</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </article>

                <article>
                    <h2>The Project</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </article>

                <article>
                    <h2>Sustainability</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </article>

                <article>
                    <h2>Terms of Service</h2>
                    <p>Read our <Link to="/about/terms-of-service" >Terms of Service</Link> here</p>
                </article>

                <article>
                    <h2>Privacy Policy</h2>
                    <p>Read our <Link to="/about/privacy-policy" >Privacy Policy</Link> here</p>
                </article>

                <article>
                    <h2>Cookie Policy</h2>
                    <p>Read our <Link to="/about/cookie-policy" >Cookie Policy</Link> here</p>
                </article>
            </section>
        </>
    );
}

export default PrivacyPolicy;