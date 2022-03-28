import axios from './axios';

const prefix = '/api/v1';

const login = (username, password) => axios.post(`${prefix}/login`, { username, password });

// Leaderboard routes
const getLeaderboard = () => axios.get(`${prefix}/leaderboard`);

const getSnapshot = (courseId, formData) => axios.post(`${prefix}/leaderboard/${courseId}`, formData);

const getCourseBoard = (courseId) => axios.get(`${prefix}/leaderboard/${courseId}`);

// Manage routes
const uploadQuiz = (data) => axios.post(`${prefix}/upload`, data, { headers: { "Content-Type": "multipart/form-data" } });

const getCourseAndSemester = () => axios.get(`${prefix}/upload`);

// Student routes
const fetchHome = () => axios.get(`${prefix}/home`);

const fetchCourse = (courseId) => axios.get(`${prefix}/home/${courseId}`);

const fetchQuiz = (courseId, quizId) => axios.get(`${prefix}/home/${courseId}/${quizId}`);

// Refresh tokens
const tokenRefresh = () => axios.post(`${prefix}/refresh`);

const revokeToken = () => axios.post(`${prefix}/revoke`);

export {
    login,
    getLeaderboard,
    getSnapshot,
    getCourseBoard,
    uploadQuiz,
    getCourseAndSemester,
    fetchHome,
    fetchCourse,
    fetchQuiz,
    tokenRefresh,
    revokeToken
};