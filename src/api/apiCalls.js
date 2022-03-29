import axios from './axios';

const prefix = '/api/v1';

const login = (username, password) => axios.post(`${prefix}/login`, { username, password });

const getter = () => axios.get(`${prefix}/`);

// Leaderboard routes
const getLeaderboard = () => axios.get(`${prefix}/leaderboard`);

const getSnapshot = (courseId, formData) => axios.post(`${prefix}/leaderboard/${courseId}`, formData);

const getCourseBoard = (courseId) => axios.get(`${prefix}/leaderboard/${courseId}`);

// Manage routes
const uploadQuiz = (data) => axios.post(`${prefix}/manage`, data, { headers: { "Content-Type": "multipart/form-data" } });

const getCourseAndSemester = () => axios.get(`${prefix}/manage`);

const getCoursesManage = () => axios.get(`${prefix}/manage/courses`);

const getSpecificCourse = (courseId) => axios.get(`${prefix}/manage/courses/${courseId}`); 

const deleteQuiz = (courseId, quizId) => axios.delete(`${prefix}/manage/courses/${courseId}/${quizId}`);

// Student routes
const fetchHome = () => axios.get(`${prefix}/home`);

const fetchCourse = (courseId) => axios.get(`${prefix}/home/${courseId}`);

const fetchQuiz = (courseId, quizId) => axios.get(`${prefix}/home/${courseId}/${quizId}`);

// Refresh tokens
const tokenRefresh = () => axios.post(`${prefix}/refresh`);

const revokeToken = () => axios.post(`${prefix}/revoke`);

export {
    login,
    getter,
    getLeaderboard,
    getSnapshot,
    getCourseBoard,
    uploadQuiz,
    getCourseAndSemester,
    getCoursesManage,
    getSpecificCourse,
    deleteQuiz,
    fetchHome,
    fetchCourse,
    fetchQuiz,
    tokenRefresh,
    revokeToken
};