import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const baseURL = process.env.REACT_APP_BACKEND_LOCAL;

const useAxios = () => {
    const {authTokens, setUser, setAuthTokens} = useContext(AuthContext);

    const axiosInstance = axios.create({
        baseURL,
        headers: {Authorization: `Bearer ${authTokens?.jwtToken}`}
    });

    axiosInstance.interceptors.request.use(async req => {
        const user = jwt_decode(authTokens.jwtToken);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if(!isExpired) return req;

        const response = await axios.post(`${baseURL}/api/refresh/`, {
            refresh: authTokens.refresh
        });

        localStorage.setItem('authTokens', JSON.stringify(response.data));

        setAuthTokens(response.data);
        setUser(jwt_decode(response.data.jwtToken));

        req.headers.Authorization = `Bearer ${response.data.jwtToken}`;

        return req;
    });

    return axiosInstance;
}

export default useAxios;