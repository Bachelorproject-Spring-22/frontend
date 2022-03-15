import axios from "axios";
import jwt_decode from 'jwt-decode';
import { checkDiff } from "../helpers/functions";

let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;

let baseURL;
let axiosInstance;
if (process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
    baseURL = process.env.REACT_APP_BACKEND;
    axiosInstance = axios.create({
        withCredentials: true,
        baseURL,
        headers: { Authorization: `Bearer ${authTokens?.jwtToken}` }
    });
} else {
    baseURL = process.env.REACT_APP_BACKEND_LOCAL;
    axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${authTokens?.jwtToken}` }
    });
}

axiosInstance.interceptors.request.use(async req => {
    if (!authTokens) {
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
        req.headers.Authorization = `Bearer ${authTokens?.jwtToken}`;
    }

    authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
    const user = jwt_decode(authTokens.jwtToken);
    const isExpired = checkDiff(user.exp);

    if (!isExpired) return req;
    try {
        const response = await axios.post(`/api/refresh/`);
        localStorage.setItem('authTokens', JSON.stringify(response.data));
        req.headers.Authorization = `Bearer ${response.data.jwtToken}`;
        return req;
    } catch (error) {
        return window.location.href = '/logout';
    }


})

export default axiosInstance;