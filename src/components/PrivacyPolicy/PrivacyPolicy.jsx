import { Link } from 'react-router-dom';

function PrivacyPolicy(props) {
    
    return (
        <>
            <nav>
                <a href="/" className='breadcrumbItem'>Home</a>
                &#8250;
                <a href="/about" className='breadcrumbItem' >About</a>
                &#8250;
                <a href="/about" className='breadcrumbItem' >Privacy Policy</a>
            </nav>

            <h1>The Kahoot!-League</h1>
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
                    <p>Read our <Link to="/login" >Terms of Service</Link> here</p>
                </article>
    
                <article>
                    <h2>Privacy Policy</h2>
                    <p>Read our <Link to="/login" >Privacy Policy</Link> here</p>
                </article>
    
                <article>
                    <h2>Cookie Policy</h2>
                    <p>Read our <Link to="/login" >Cookie Policy</Link> here</p>
                </article>
            </section>
        </>
    );
}

export default PrivacyPolicy;