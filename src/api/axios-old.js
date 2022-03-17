import axios from "axios";
import jwt_decode from 'jwt-decode';
import { checkDiff } from "../helpers/functions";

let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
const  baseURL = process.env.REACT_APP_BACKEND;

const axiosInstance = axios.create({
    withCredentials: true,
        baseURL,
        headers: { Authorization: `Bearer ${authTokens?.jwtToken}` }
})

axiosInstance.interceptors.request.use(async req => {
    if (!authTokens) {
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
        req.headers.Authorization = `Bearer ${authTokens?.jwtToken}`;
    }

    //authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
    const user = jwt_decode(authTokens?.jwtToken);
    const isExpired = checkDiff(user.exp);

    if (!isExpired) return req;
    try {
        const response = await axios.post(`/api/refresh/`);
        localStorage.setItem('authTokens', JSON.stringify(response.data));
        req.headers.Authorization = `Bearer ${response.data.jwtToken}`;
        return req;
    } catch (error) {
        localStorage.removeItem('authTokens');
        return window.location.href = '/logout';
    }


})

export default axiosInstance;