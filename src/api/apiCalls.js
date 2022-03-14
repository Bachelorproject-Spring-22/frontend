import axios from './axios';

const getter = () => {
    return axios.get('/');
}

const getLeaderboard = () => {
    return axios.get('/leaderboard');
}

const uploadQuiz = (formData) => {
    return axios.post('/upload', {data: formData}, {headers: { "Content-Type": "multipart/form-data" }})
}

const getCourseBoard = (courseId) => {
    return axios.get(`/leaderboard/${courseId}`);
}

export {
    getter,
    getLeaderboard,
    uploadQuiz,
    getCourseBoard
};