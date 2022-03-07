import { Link } from "react-router-dom";
import NtnuLogo from '../../assets/ntnu_uten_slagord_neg.png';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './footer.css';

function Footer() {
    const scroll = () => {
        window.scroll(0, 0);
    }
    
    return (
        <footer>
            <h3>The Kahoot! League</h3>
            <section>
                <article>
                    <p>Learn more</p>
                    <Link to='/about'>About The Kahoot! League</Link>
                    <Link to='/help'>Help</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about/terms-of-service'>Terms of service</Link>
                    <Link to='/about/privacy-policy'>Privacy policy</Link>
                    <Link to='/about/cookie-policy'>Cookie policy</Link>
                </article>
                <article>
                    <p>Want to Contribute?</p>
                    <Link to='/developer'>Developer</Link>
                </article>
            </section>
            <section className="created">
                <p className="middle-emphasis">Created by Cornelius, Glenn and Tom.</p>
                <p className="middle-emphasis">NTNU-Gjøvik, 2022</p>
            </section>
            <section className="logo-arrow">
                <img src={NtnuLogo} alt="ntnu-logo" className="footer-logo" />
                <button onClick={scroll} className="footer-button"><ArrowUpwardRoundedIcon /></button>
            </section>
            <section>
                <div id="wcb" className="carbonbadge wcb-d"></div>
                <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
                <img src="https://api.thegreenwebfoundation.org/greencheckimage/www.ntnu.no" alt="This website is hosted Green - checked by thegreenwebfoundation.org" />
            </section>
        </footer>
    );
}

// Siste section MÅ oppdateres!!!!!!!!!!

export default Footer;