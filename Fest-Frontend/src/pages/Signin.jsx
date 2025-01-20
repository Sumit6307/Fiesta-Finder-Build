import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../api/axiosInstance';

export default function Signin() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/users/login', formData);
            alert(response.data.message);
            navigate('/home'); // Navigate to home or dashboard after successful login
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-md p-8 rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Log in to your account</h1>
                <p className="text-base text-gray-500 mb-8 text-center">
                    Don&apos;t have an account?
                    <Link
                        to={"/register"}
                        className="text-blue-600 font-semibold hover:text-blue-800 ml-2">
                        Sign up
                    </Link>
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.username}
                            onChange={handleChange}
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
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4">
                        Sign in
                    </button>
                </form>
                <p className="text-center mt-4">
                    <button className="text-blue-600 hover:text-blue-800">
                        Forgot password?
                    </button>
                </p>
            </div>
        </div>
    );
}
