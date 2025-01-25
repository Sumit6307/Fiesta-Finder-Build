// Signup.jsx
import { useState } from 'react';
import axios from '../api/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/fiesta-finder-logo.jpeg'; // Replace with the actual path

export default function Signup() {
    const [formData, setFormData] = useState({ fullname: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/users/register', formData);
            alert(response.data.message); // Notify user to check email for verification
        } catch (error) {
            console.error('Error during signup:', error);
            setError(error.response?.data?.message || 'Something went wrong!');
        }
    };

    const handleGoogleSignup = () => {
        const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
        const googleRedirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
        window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${googleClientId}&redirect_uri=${googleRedirectUri}&response_type=token&scope=email`;
    };

    const handleFacebookSignup = () => {
        const facebookAppId = import.meta.env.VITE_FACEBOOK_APP_ID;
        const facebookRedirectUri = import.meta.env.VITE_FACEBOOK_REDIRECT_URI;
        window.location.href = `https://www.facebook.com/v4.0/dialog/oauth?client_id=${facebookAppId}&redirect_uri=${facebookRedirectUri}&response_type=token&scope=email`;
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50">
            <div className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-white">
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="Fiesta Finder Logo" className="w-24 h-24 rounded-full shadow-md" />
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Create New Account</h1>
                <p className="text-base text-gray-500 mb-6 text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-800 ml-1">
                        Log in
                    </Link>
                </p>
                {error && (
                    <div className="text-red-500 text-sm font-medium mb-4 text-center">
                        {error}
                    </div>
                )}

<button
                    onClick={handleGoogleSignup}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-3 px-4 rounded-md hover:bg-gray-100 transition-shadow mb-4 shadow-sm"
                >
                    <img
                        src="data:image/png;base64,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"
                        alt="Google Logo"
                        className="w-6 h-6"
                    />
                    Sign in with Google
                </button>
                <button
                    onClick={handleFacebookSignup}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-shadow mb-4 shadow-sm"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                        alt="Facebook Logo"
                        className="w-6 h-6"
                    />
                    Sign in with Facebook
                </button>
          
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
            


                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            type="email"
                            name="email"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
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
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter a strong password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-shadow shadow-md"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}