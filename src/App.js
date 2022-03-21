import './css/app.css';
import AnoRoute from './routes/AnoRoute';
import AuthContext from './helpers/AuthContext';
import Developer from './components/Developer/Developer';
import Home from './components/Home/Home';
import Loading from './components/Loading/Loading';
import Logout from './components/Login/Logout';
import Manage from './components/Manage/Manage';
import NavBar from './components/Navbar/Navbar';
import PrivateRoute from './routes/PrivateRoute';
import StudentRoute from './routes/StudentRoute';
import TeacherRoute from './routes/TeacherRoute';
import leaderboardHoc from './components/HOC/LeaderboardHOC';
import managePageBackend from './components/HOC/ManageHOC';
import resultHoc from './components/HOC/ResultHOC';
import settingHoc from './components/HOC/SettingHOC';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { checkExp } from './helpers/functions';
import { getter } from './api/apiCalls';
import { lazy, Suspense, useEffect, useContext } from 'react';

const About = lazy(() => import('./components/About/About'));
const Denied = lazy(() => import('./components/Error/Denied'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Leaderboard = lazy(() => import('./components/Leaderboard/Leaderboard'));
const Login = lazy(() => import('./components/Login/Login'));
const MyResults = lazy(() => import('./components/MyResults/MyResults'));
const NotFound = lazy(() => import('./components/Error/NotFound'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const WorkProgress = lazy(() => import('./components/WIP/WorkProgress'));

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

    const ManageHOC = managePageBackend(Manage);
    const ResultHOC = resultHoc(MyResults);
    const LeaderboardHOC = leaderboardHoc(Leaderboard);
    const SettingHOC = settingHoc(Settings);
    
    return (
        <HelmetProvider>
            <div className='grid-container'>
                <NavBar auth={contextData} />
                <div className="app">
                    <main>
                        <Suspense fallback={null}>
                            <Routes>
                                <Route element={<AnoRoute />} >
                                    <Route element={<Home />} exact path='/' />
                                </Route>

                                <Route element={<StudentRoute />}>
                                    <Route element={<ResultHOC data={contextData}/>} exact path='/home/*'  />
                                </Route>

                                <Route element={<PrivateRoute />}>
                                    <Route element={<LeaderboardHOC data={contextData} />} exact path='/leaderboard/*' />
                                </Route>

                                <Route element={<TeacherRoute />}>
                                    <Route element={<ManageHOC data={contextData} />} exact path='/manage/*' />
                                </Route>

                                <Route element={<PrivateRoute />}>
                                    <Route element={<SettingHOC data={contextData} />} exact path='/settings/*' />
                                </Route>

                                <Route element={<AnoRoute />}>
                                    <Route element={<Login />} exact path='/login' />
                                </Route>

                                <Route element={
                                    <PrivateRoute>
                                        <Logout />
                                    </PrivateRoute>
                                } path="/logout" exact />

                                <Route path='/about/*' element={<About />} exact />
                                <Route path='/developer' element={<Developer />} exact />
                                <Route path='/help' element={<WorkProgress />} exac />

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