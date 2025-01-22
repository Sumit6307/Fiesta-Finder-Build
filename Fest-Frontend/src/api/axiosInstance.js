import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', // Match the backend prefix
    withCredentials: true, // Allow cookies
});

export default axiosInstance;
