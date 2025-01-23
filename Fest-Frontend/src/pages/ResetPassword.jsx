import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axiosInstance';
import logo from '../assets/fiesta-finder-logo.jpeg'; // Replace with actual path

export default function ResetPassword() {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`/users/reset-password/${token}`, { newPassword });
            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data?.message || 'Something went wrong!');
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Reset Password</h2>
                <p className="text-base text-gray-500 mb-6 text-center">
                    Enter your new password below to reset your password.
                </p>

                {/* Reset Password Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="newPassword" className="text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your new password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-shadow shadow-md"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}