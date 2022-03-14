import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
//import { login } from '../api/apiCalls';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null);
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    let [loading, setLoading] = useState(true);
    const history = useNavigate();

    let loginUser = async (userData) => {
        const { username, password } = userData;
        //const response = await login({username, password});
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': username, 'password': password})
        });
        const data = await response.json();
        //console.log(data);

        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwt_decode(data.jwtToken));
            localStorage.setItem('authTokens', JSON.stringify(data));
            history('/');
        } else {
            // Denne må endres!!
            alert('Something went wrong bro!');
        }
    }

    let logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        history("/login");
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        setUser: setUser,
        loginUser: loginUser,
        logoutUser: logoutUser
    };

    useEffect(() => {
        if (authTokens) {
            setUser(jwt_decode(authTokens.jwtToken));
        }
        setLoading(false);
    }, [authTokens, loading]);

    return (
        <AuthContext.Provider value={contextData} >
            {loading ? <Loading /> : children}
        </AuthContext.Provider>
    )
}