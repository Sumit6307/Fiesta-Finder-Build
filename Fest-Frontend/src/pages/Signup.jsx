import { useState } from 'react';
import axios from '../api';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [formData, setFormData] = useState({ fullname: '', username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/users/register', formData);
            alert(response.data.message);
            navigate('/home');
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
                <div className="w-full max-w-md p-8 rounded-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        Create an account
                    </h1>
                    <p className="text-base text-gray-500 mb-8 text-center">
                        Already have an account?
                        <Link to={"/login"} className="text-blue-600 font-semibold hover:text-blue-800 ml-2">
                            Log in
                        </Link>
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="fullname" className="text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="fullname"
                                id="fullname"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.fullname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
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
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
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
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
