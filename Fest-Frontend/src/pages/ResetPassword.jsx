import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axiosInstance';

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
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="p-2 border rounded"
                        placeholder="Enter your new password"
                        required
                    />
                </div>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">Reset Password</button>
            </form>
        </div>
    );
}
