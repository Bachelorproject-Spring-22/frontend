import axios from './axios';
import pureAxios from 'axios';

const onAppLoad = () => {
    return pureAxios.post('/api/refresh');
}

const getter = () => {
    return axios.get('/');
}

export {
    onAppLoad,
    getter
};