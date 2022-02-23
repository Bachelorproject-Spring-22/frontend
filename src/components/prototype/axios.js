import axios from 'axios';

const fetchData = () => {
    return axios.get('/fetch');
}

export {
    fetchData
};