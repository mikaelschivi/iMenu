import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/",
    responseType: 'json'
})

export default api;