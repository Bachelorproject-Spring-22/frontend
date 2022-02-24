import axios from './useAxios';

const login = (username, password) => {
    axios.post('/login', { username, password }, {headers: {'Content-Type': 'application/json'}});
}

export {
    login
};