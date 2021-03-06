import { Route, Routes, Link } from "react-router-dom";
import './about.css';
import Contact from "./Contact/Contact";
import CookiePolicy from "./CookiePolicy/CookiePolicy";
import MainAbout from "./MainAbout/MainAbout";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import SEO from "../SEO/SEO";
import TermsOfService from "./TermsOfService/TermsOfService";

function About() {
    return (
        <>
        <SEO title="About" />
            <header>
                <nav>
                    <Link to="/" className='breadcrumb-item'>Home</Link>
                    &#8250;
                    <Link to="/about" className='breadcrumb-item' >About</Link>
                    <Routes>
                        <Route exact path='/terms-of-service' element={<>&#8250; <Link to="/about/terms-of-service" className='breadcrumb-item' >Terms of Service</Link></>} />
                        <Route exact path='/privacy-policy' element={<>&#8250; <Link to="/about/privacy-policy" className='breadcrumb-item' >Privacy Policy</Link></>} />
                        <Route exact path='/cookie-policy' element={<>&#8250; <Link to="/about/cookie-policy" className='breadcrumb-item' >Cookie Policy</Link></>} />
                        <Route exact path='/contact' element={<>&#8250; <Link to="/about/contact" className='breadcrumb-item' >Contact</Link></>} />
                    </Routes>
                </nav>
    
                <h1>uniLeague</h1>
            </header>
            <Routes>
                <Route exact path='/' element={<MainAbout />} />
                <Route exact path='/terms-of-service' element={<TermsOfService />} />
                <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route exact path='/cookie-policy' element={<CookiePolicy />} />
                <Route exact path='/contact' element={<Contact />} />
            </Routes>
        </>
    );
}

export default About;