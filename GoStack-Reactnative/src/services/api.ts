import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.25.80.1:3333',
});

export default api;