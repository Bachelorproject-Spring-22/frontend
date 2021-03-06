import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { login } from '../api/apiCalls';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    let [loading, setLoading] = useState(true);
    const history = useNavigate();

    let loginUser = async (userData) => {
        const { username, password } = userData;

        try {
            const response = await login(username, password);
            const data = response.data;
            
            if (response.status === 200) {
                localStorage.setItem('authTokens', JSON.stringify(data));
                setAuthTokens(data);
                setUser(jwt_decode(data.jwtToken));
                history('/');
                return { success: 'Logged in successfully' };
            }
        } catch (error) {
            return { error: 'Wrong username or password!' };
        }
    }

    let logoutUser = async () => {
        //await revokeToken();
        setAuthTokens(null);
        setUser(null);
        sessionStorage.clear();
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