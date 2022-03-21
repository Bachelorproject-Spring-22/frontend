import axios from './axios';

const login = (username, password) => axios.post('/login', { username, password })

const getter = () => axios.get('/')

const getLeaderboard = () => axios.get('/leaderboard')

const getSnapshot = (courseId, formData) => axios.post(`/leaderboard/${courseId}`, formData)

const uploadQuiz = (data) => axios.post('/upload', data, { headers: { "Content-Type": "multipart/form-data" } })

const getCourseBoard = (courseId) => axios.get(`/leaderboard/${courseId}`)

const fetchHome = () => axios.get('/home')

const fetchCourse = (courseId) => axios.get(`/home/${courseId}`)

const fetchQuiz = (courseId, quizId) => axios.get(`/home/${courseId}/${quizId}`)

const tokenRefresh = () => axios.post('/api/refresh')

const revokeToken = () => axios.post('/api/revoke')

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