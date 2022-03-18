import { Link } from 'react-router-dom';
import SEO from '../../SEO/SEO';

function MainAbout() {
    return (
        <>
            <SEO title="About" />
            <p className='subtitle'>About</p>

            <section className='about'>
                <article>
                    <h2>The Product</h2>
                    <p>uniLeague is a way to improve your learning by actively participating in class. You collect points by answering quizzes and participating in class. uniLeague is a new way to keep track of your own learning results.</p>
                </article>

                <article>
                    <h2>The Project</h2>
                    <p>uniLeague is a bachelor project for the web development degree at NTNU Gjøvik. Its task is to measure student engagement based on the usage of Kahoot! - an interactive quiz tool. The project's purpose is to find factors that determine if a student will be engaged by using Kahoot - or simply going through the lecture.</p>
                </article>

                <article>
                    <h2>Sustainability</h2>
                    <p>When designing uniLeague, we always aim to consider the environment. In fact, uniLeague is built with sustainability in mind. uniLeague is more environmentally friendly than 90% of other websites. Some of our happy green practices include a dark color palette and minimal use of fonts and symbols to reduce energy consumption and carbon dioxide emissions, as well as to display all essential information without loading multiple pages. 🌳</p>
                </article>

                <article>
                    <h2>Terms of Service</h2>
                    <p>Read our <Link to="/about/terms-of-service" >Terms of Service</Link> here.</p>
                </article>

                <article>
                    <h2>Privacy Policy</h2>
                    <p>Read our <Link to="/about/privacy-policy" >Privacy Policy</Link> here.</p>
                </article>

                <article>
                    <h2>Cookie Policy</h2>
                    <p>Read our <Link to="/about/cookie-policy" >Cookie Policy</Link> here.</p>
                </article>

                <article>
                    <h2>contact us</h2>
                    <p>Learn how you can contact us on our <Link to="/about/contact" >Contact page</Link>.</p>
                </article>
            </section>
        </>
    )
}

export default MainAbout;
