import axios from './axios';

const login = (username, password) => {
    return axios.post('/login', {username, password});
}

const getter = () => {
    return axios.get('/');
}

const getLeaderboard = () => {
    return axios.get('/leaderboard');
}

const getSnapshot = (courseId, formData) => {
    //console.log( courseId, formData );
    return axios.post(`/leaderboard/${courseId}`, formData)
}

const uploadQuiz = (data) => {
    return axios.post('/upload', data, {headers: { "Content-Type": "multipart/form-data" }})
}

const getCourseBoard = (courseId) => {
    return axios.get(`/leaderboard/${courseId}`);
}

const fetchHome = () => {
    return axios.get('/home');
}

const fetchCourse = (courseId) => {
    return axios.get(`/home/${courseId}`);
}

const fetchQuiz = (courseId, quizId) => {
    return axios.get(`/home/${courseId}/${quizId}`);
}

const tokenRefresh = () => {
    return axios.post('/api/refresh');
}

const revokeToken = () => {
    return axios.post('api/revoke');
}

export {
    login,
    getter,
    getLeaderboard,
    getSnapshot,
    uploadQuiz,
    getCourseBoard,
    fetchHome,
    fetchCourse,
    fetchQuiz,
    tokenRefresh,
    revokeToken
};