import './footer.css';
import Button from '../Button/Button';
import Carbonbadge from "react-carbonbadge"
import Icon from '../Icon/Icon';
import NtnuLogo from '../../assets/ntnu_uten_slagord_neg.png';
import { Link } from "react-router-dom";

function Footer() {
    const scroll = () => {
        window.scroll(0, 0);
    }

    return (
        <footer>
            <div>
                <h3>uniLeague</h3>
                <section>
                    <article>
                        <p>Learn more</p>
                        <Link to='/about'>About uniLeague</Link>
                        <Link to='/help'>Help</Link>
                        <Link to='/about/contact'>Contact</Link>
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
                    <p className="middle-emphasis">NTNU i Gjøvik, 2022</p>
                </section>
                <section className="logo-arrow">
                    <img src={NtnuLogo} alt="ntnu-logo" className="footer-logo" />
                        <Button onClick={scroll} label={""} size='no-size' variant={'fab'} ariaLabel={"Scroll to top"} icon={<Icon iconId="arrow_upward"/>}/>
                </section>
                <section className="carbon-section">
                    <Carbonbadge darkMode={true} />
                    <img src="https://api.thegreenwebfoundation.org/greencheckimage/unileague.netlify.app?nocache=true" alt="This website is hosted Green - checked by thegreenwebfoundation.org" />
                </section>
            </div>
        </footer>
    );
}

export default Footer;