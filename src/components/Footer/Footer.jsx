import { Link } from "react-router-dom";
import './footer.css';

function Footer() {
    return (
        <footer>
                <h3>The Kahoot! League</h3>
                <section>
                    <article>
                        <p>Learn more</p>
                        <Link to='/about'>About The Kahoot! League</Link>
                        <Link to='/help'>Help</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/about/terms'>Terms of service</Link>
                        <Link to='/about/privacy'>Privacy policy</Link>
                        <Link to='/about/cookie'>Cookie policy</Link>
                    </article>
                    <article>
                        <p>Want to Contribute?</p>
                        <Link to='/developer'>Developer</Link>
                    </article>
                </section>
                <p className="middle-emphasis">Created by Cornelius, Glenn and Tom.</p>
                <p className="middle-emphasis">NTNU-Gjøvik, 2022</p>
        </footer>
    );
}

export default Footer;