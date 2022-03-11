import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './helpers/AuthContext';
import './css/app.css';
import { getter } from './api/apiCalls';
import NavBar from './components/Navbar/Navbar';
import PrivateRoute from './routes/PrivateRoute';
import TeacherRoute from './routes/TeacherRoute';
import { checkExp } from './helpers/functions';
import StudentRoute from './routes/StudentRoute';
import Home from './components/Home/Home';
import AnoRoute from './routes/AnoRoute';
import Loading from './components/Loading/Loading';
import Manage from './components/Manage/Manage';

const Footer = lazy(() => import('./components/Footer/Footer'));
const MyResults = lazy(() => import('./components/MyResults/MyResults'));
const Upload = lazy(() => import('./components/TestComponent/Upload'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const Login = lazy(() => import('./components/Login/Login'));
const Logout = lazy(() => import('./components/Login/Logout'));
const About = lazy(() => import('./components/About/About'));
const WorkProgress = lazy(() => import('./components/WIP/WorkProgress'));
const Denied = lazy(() => import('./components/Error/Denied'));
const NotFound = lazy(() => import('./components/Error/NotFound'));
const Leaderboard = lazy(() => import('./components/Leaderboard/Leaderboard'));

function App() {
    const contextData = useContext(AuthContext);

    useEffect(() => {
        let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
        if (authTokens) {
            const expired = checkExp(authTokens);
            //console.log(expired);
            if (expired) {
                getter();
            }
        }

        window.scroll(0, 0);
    })

    return (
        <HelmetProvider>
            <div className='grid-container'>
                <NavBar auth={contextData} />
                <div className="app">
                    {/* <CookieBanner/> */}
                    <main>
                        <Suspense fallback={<Loading />}>
                            <Routes>
                                <Route element={
                                    <AnoRoute>
                                        <Home />
                                    </AnoRoute>
                                } path='/' exact />

                                <Route element={
                                    <StudentRoute>
                                        <MyResults data={contextData} />
                                    </StudentRoute>
                                } path='/home/*' exact />

                                <Route element={
                                    <PrivateRoute>
                                        <Leaderboard data={contextData} />
                                    </PrivateRoute>
                                } path='/leaderboard/*' exact />

                                <Route element={
                                    <TeacherRoute>
                                        <Upload />
                                        <Manage data={contextData} />
                                    </TeacherRoute>
                                } path='/manage/*' exact />

                                <Route element={
                                    <PrivateRoute>
                                        <Settings data={contextData} />
                                    </PrivateRoute>
                                } path='/settings/*' exact />

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

                                <Route path='/about/*' element={<About />} exact />
                                <Route path='/developer' element={<WorkProgress />} exact />

                                <Route path='/403' element={<Denied />} exact />
                                <Route path='*' element={<NotFound />} />

                            </Routes>
                        </Suspense>
                    </main>
                    <Suspense fallback={<Loading />}>
                        <Footer />
                    </Suspense>
                </div>
            </div>
        </HelmetProvider>
    );
}

export default App;