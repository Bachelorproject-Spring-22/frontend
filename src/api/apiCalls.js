import axios from './axios';

const getter = () => {
    return axios.get('/');
}

const getLeaderboard = () => {
    return axios.get('/leaderboard');
}

const uploadQuiz = (data) => {
    console.log(data);
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

const revokeToken = () => {
    return axios.post('api/revoke');
}

export {
    getter,
    getLeaderboard,
    uploadQuiz,
    getCourseBoard,
    fetchHome,
    fetchCourse,
    fetchQuiz,
    revokeToken
};