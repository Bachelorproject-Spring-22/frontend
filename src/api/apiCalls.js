import axios from './axios';

const getter = () => {
    return axios.get('/');
}

export {
    getter
};