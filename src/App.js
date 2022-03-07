import { useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './helpers/AuthContext';
import Login from './components/Login/Login';
import TestComponent from './components/TestComponent/TestComponent';
import About from './components/About/About';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './components/TermsOfService/TermsOfService';
import CookiePolicy from './components/CookiePolicy/CookiePolicy';
import './app.css';
import Logout from './components/Login/Logout';
import { getter } from './api/apiCalls';
import NavBar from './components/Navbar/Navbar';
import Upload from './components/TestComponent/Upload';
import Footer from './components/Footer/Footer';
import PrivateRoute from './routes/PrivateRoute';
import TeacherRoute from './routes/TeacherRoute';
import { checkExp } from './helpers/functions';
import StudentRoute from './routes/StudentRoute';
import AnoRoute from './routes/AnoRoute';

function App() {
    const contextData = useContext(AuthContext);

    useEffect(() => {
        let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
        if (authTokens) {
            const expired = checkExp(authTokens);
            if (expired) {
                getter();
            }
        }

        window.scroll(0, 0);
    })

    return (
        <div className='grid-container'>
            <NavBar auth={contextData} />
            <div className="app">
                <main>
                    <Routes>
                        <Route element={<TestComponent />} path='/' exact />
                        <Route element={
                            <StudentRoute>
                                <p>Home</p>
                            </StudentRoute>
                        } path='/home' exact />

                        <Route element={
                            <PrivateRoute>
                                <h1>leaderboard</h1>
                            </PrivateRoute>
                        } path='/leaderboard' exact />

                        <Route element={
                            <TeacherRoute>
                                <Upload />
                            </TeacherRoute>
                        } path='/manage' exact />

                        <Route element={
                            <PrivateRoute>
                                <p>Settings</p>
                            </PrivateRoute>
                        } path='/settings' exact />

                        <Route element={
                            <AnoRoute>
                                <Login />
                            </AnoRoute>
                        } path="/login" exact />
                        <Route element={
                            <PrivateRoute>
                                <Logout />
                            </PrivateRoute>
                        } path="/logout" exact />

                        {/* Nesting?? */}
                        <Route path='/about' element={<About />} exact />
                        <Route path='/terms-of-service' element={<TermsOfService />} />
                        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                        <Route path='/cookie-policy' element={<CookiePolicy />} />

                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
