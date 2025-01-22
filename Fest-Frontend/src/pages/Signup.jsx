import { useState } from 'react';
import axios from '../api/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [formData, setFormData] = useState({ fullname: '', email: '', password: '' });
    const [error, setError] = useState(''); // State to handle error messages
    const navigate = useNavigate();

    // Handle input field changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(''); // Clear any previous error when typing
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Signup request
            const response = await axios.post('/users/register', formData);
            alert(response.data.message); // Show success message

            // Automatically login after signup
            const loginResponse = await axios.post('/users/login', {
                email: formData.email,
                password: formData.password,
            });

            // Save user data and navigate to home page after successful login
            localStorage.setItem('user', JSON.stringify(loginResponse.data)); // Optionally, store in local storage
            navigate('/home'); // Navigate to home after successful signup and login
        } catch (error) {
            console.error("Error during signup:", error); // Log the error for debugging
            setError(error.response?.data?.message || 'Something went wrong!');
        }
    };
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                    Create an account
                </h1>
                <p className="text-base text-gray-500 mb-8 text-center">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-800 ml-2">
                        Log in
                    </Link>
                </p>
                {error && (
                    <div className="text-red-500 text-sm font-medium mb-4 text-center">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.fullname}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter a  email"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter a strong password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}
