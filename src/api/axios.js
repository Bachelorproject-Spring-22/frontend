import axios from 'axios';
import { tokenRefresh } from './apiCalls';

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
        const response = await tokenRefresh();
        sessionStorage.clear();
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
        async function (response) {
            const { status } = response;
            /* console.log(`Response from ${config.url}:`, {
                code: status,
                ...data
            }); */

            if (status === 204) {
                await refreshToken();
            }

            return response;
        },
        async function (error) {
            if (error.response) {
                const { status, data } = error.response;
                //console.log(error.response);

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