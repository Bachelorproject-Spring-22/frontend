import axios from './axios';

const login = (username, password) => {
    axios.post('/login', { username, password }, {headers: {'Content-Type': 'application/json'}});
}

const getter = () => {
    return axios.get('/');
}

export {
    login,
    getter
};