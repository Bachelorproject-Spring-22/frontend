import axios  from "axios";
import jwt_decode from 'jwt-decode';
import dayjs from "dayjs";

const baseURL = process.env.REACT_APP_BACKEND_LOCAL;
console.log(baseURL);
let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;

const axiosInstance = axios.create({
    baseURL,
    headers: {Authorization: `Bearer ${authTokens?.jwtToken}`}
});

axiosInstance.interceptors.request.use(async req => {
    if(!authTokens) {
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
        req.headers.Authorization = `Bearer ${authTokens?.jwtToken}`;
    }

    console.log(authTokens);
    const user = jwt_decode(authTokens.jwtToken);
    console.log(user);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    console.log(authTokens);
    if(!isExpired) return req;
    console.log("Under expired");
    const response = await axios.post(`/api/refresh/`);

    localStorage.setItem('authTokens', JSON.stringify(response.data));
    req.headers.Authorization = `Bearer ${response.data.jwtToken}`;
    return req;
})

export default axiosInstance;