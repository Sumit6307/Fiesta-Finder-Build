import { useState } from 'react';
import axios from '../api/axiosInstance';
import logo from '../assets/fiesta-finder-logo.jpeg'; // Replace with actual path

export default function ForgetPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/forgot-password', { email });
            console.log('Password reset email sent:', response.data);
            alert("Reset Password Link Sent to the User Email");
        } catch (error) {
            console.error('Error occurred:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50">
            {/* Card Container */}
            <div className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-white">
                {/* Logo Section */}
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="Fiesta Finder Logo" className="w-24 h-24 rounded-full shadow-md" />
                </div>

                {/* Form Header */}
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Forgot Password</h2>
                <p className="text-base text-gray-500 mb-6 text-center">
                    Enter your email address and we'll send you a link to reset your password.
                </p>

                {/* Forgot Password Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-shadow shadow-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}