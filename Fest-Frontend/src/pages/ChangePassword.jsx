import { useState } from 'react';
import axios from '../api/axiosInstance';

export default function ChangePassword() {
    const [formData, setFormData] = useState({ oldPassword: '', newPassword: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/users/change-password', formData);
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <form onSubmit={handleSubmit} className="max-w-md w-full p-8 border rounded">
                <h1 className="text-2xl font-bold mb-4">Change Password</h1>
                <div className="flex flex-col gap-4">
                    <input
                        type="password"
                        name="oldPassword"
                        placeholder="Current Password"
                        onChange={handleChange}
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        onChange={handleChange}
                        className="p-2 border rounded"
                        required
                    />
                    <button type="submit" className="bg-blue-600 text-white py-2 rounded">
                        Update Password
                    </button>
                </div>
            </form>
        </div>
    );
}
