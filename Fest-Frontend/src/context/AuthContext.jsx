import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance'; // Axios instance for API calls

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check if there's a user in localStorage on page load
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Set user from localStorage
        } else {
            fetchUser();
        }
    }, []);

    // Fetch the user details from the backend (when user not in localStorage)
    const fetchUser = async () => {
        try {
            const response = await axiosInstance.get('/users/profile'); // Fetch user profile
            setUser(response.data); // Update context with user data
            localStorage.setItem('user', JSON.stringify(response.data)); // Persist user in localStorage
        } catch (error) {
            console.error('Error fetching user:', error.response?.data?.message || error.message);
        }
    };

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); // Persist user to localStorage
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Remove user from localStorage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
