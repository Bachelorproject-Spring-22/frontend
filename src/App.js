import { useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './helpers/AuthContext';
import Login from './components/Login/Login';
import TestComponent from './components/TestComponent/TestComponent';
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
        <>
            <NavBar auth={contextData} />
            <div className="app">
                <main>
                    <Routes>
                        <Route element={<TestComponent />} path='/' exact />
                        <Route element={
                            <PrivateRoute>
                                <StudentRoute>
                                    <p>Home</p>
                                </StudentRoute>
                            </PrivateRoute>
                        } path='/home' exact />

                        <Route element={
                            <PrivateRoute>
                                <p>leaderboard</p>
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

                        <Route element={<Login />} path="/login" exact />
                        <Route element={
                            <PrivateRoute>
                                <Logout />
                            </PrivateRoute>
                        } path="/logout" exact />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
