import { Route, Routes, Link } from "react-router-dom";
import CookiePolicy from "./CookiePolicy/CookiePolicy";
import MainAbout from "./MainAbout/MainAbout";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./TermsOfService/TermsOfService";
import './about.css';

function About() {
    return (
        <>
            <nav>
                <Link to="/" className='breadcrumbItem'>Home</Link>
                &#8250;
                <Link to="/about" className='breadcrumbItem' >About</Link>
                <Routes>
                    <Route exact path='/terms-of-service' element={<>&#8250; <Link to="/about/terms-of-service" className='breadcrumbItem' >Terms of Service</Link></>} />
                    <Route exact path='/privacy-policy' element={<>&#8250; <Link to="/about/privacy-policy" className='breadcrumbItem' >Privacy Policy</Link></>} />
                    <Route exact path='/cookie-policy' element={<>&#8250; <Link to="/about/cookie-policy" className='breadcrumbItem' >Cookie Policy</Link></>} />
                </Routes>
            </nav>

            <h1>The Kahoot!-League</h1>
            <Routes>
                <Route exact path='/' element={<MainAbout />} />
                <Route exact path='/terms-of-service' element={<TermsOfService />} />
                <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route exact path='/cookie-policy' element={<CookiePolicy />} />
            </Routes>
        </>
    );
}

export default About;