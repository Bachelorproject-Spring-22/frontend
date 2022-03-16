import axios from 'axios';
//import jwt_decode from 'jwt-decode';
//import { checkDiff } from "../helpers/functions";

//console.log("This is the API ", process.env);

let axiosInstance = axios;
if (process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
    axiosInstance = axios.create({
        withCredentials: true,
        baseURL: process.env.REACT_APP_BACKEND
    });
} else {
    axiosInstance = axios.create();
}

function createAxiosResponseInterceptor(axiosInstance) {
    let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
    axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + authTokens?.jwtToken;

    const refreshToken = async () => {
        const response = await axios.post(`/api/refresh/`);;

        localStorage.setItem('authTokens', JSON.stringify(response.data));

        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${response.data.jwtToken}`;
    }

    axiosInstance.interceptors.request.use(
        function (config) {
            let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
            const token = authTokens?.jwtToken;
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            //console.log(`${config.method.toUpperCase()} Request made to ${config.url} with data:`, config.data);
            return config
        },
        function (err) {
            //console.log(err);
            return err;
        }
    );

    axiosInstance.interceptors.response.use(
        function (response) {
            /* const { status, data, config } = response;
            console.log(`Response from ${config.url}:`, {
                code: status,
                ...data
            }); */
            return response;
        },
        async function (error) {
            if (error.response) {
                const { status, data } = error.response;

                switch (status) {
                    case 401:
                        if (data === 'Unauthorized') {
                            try {
                                await refreshToken();
                                const config = error.config;
                                return await axiosInstance({ method: config.method, url: config.url, data: config.data });
                            } catch (e) {
                                return window.location.href = '/logout';
                            }
                        } else {
                            return window.location.href = '/logout';
                        }
                    default:
                        return Promise.reject(error);
                }
            } else if (error.request) {
                return Promise.reject(error);
            } else {
                return Promise.reject(error);
            }
        }
    )
}

createAxiosResponseInterceptor(axiosInstance)

export default axiosInstance;