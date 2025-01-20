// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        console.error('Signup error:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};
