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
                    <Route path='/terms-of-service' element={<>&#8250; <Link to="/about/terms-of-service" className='breadcrumbItem' >Terms of Service</Link></>} />
                    <Route path='/privacy-policy' element={<>&#8250; <Link to="/about/privacy-policy" className='breadcrumbItem' >Privacy Policy</Link></>} />
                    <Route path='/cookie-policy' element={<>&#8250; <Link to="/about/cookie-policy" className='breadcrumbItem' >Cookie Policy</Link></>} />
                </Routes>
            </nav>

            <h1>The Kahoot!-League</h1>
            <Routes>
                <Route path='/' element={<MainAbout />} />
                <Route path='/terms-of-service' element={<TermsOfService />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/cookie-policy' element={<CookiePolicy />} />
            </Routes>
        </>
    );
}

export default About;