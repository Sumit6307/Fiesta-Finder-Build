import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance';

export default function ProfilePage() {
    const [user, setUser] = useState(null); // User details
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    // Fetch user details on load
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('/users/profile', { withCredentials: true });
                setUser(response.data);
            } catch (error) {
                alert(error.response?.data?.message || 'Error fetching user details!');
                navigate('/login'); // Redirect to login if not authenticated
            }
        };
        fetchUserDetails();
    }, [navigate]);

    // Handle change password
    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                '/users/change-password',
                { oldPassword, newPassword },
                { withCredentials: true }
            );
            alert(response.data.message); // Show success message
            setOldPassword('');
            setNewPassword('');
        } catch (error) {
            alert(error.response?.data?.message || 'Error changing password!');
        }
    };

    // Handle logout
    const handleLogout = async () => {
        try {
            await axios.post('/users/logout', {}, { withCredentials: true });
            localStorage.removeItem('user'); // Clear user data
            navigate('/login'); // Redirect to login
        } catch (error) {
            alert(error.response?.data?.message || 'Error logging out!');
        }
    };

    if (!user) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
            <div className="w-full max-w-md bg-white shadow-md p-6 rounded-md mb-6">
                <p><strong>Full Name:</strong> {user.fullname}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email || 'N/A'}</p>
            </div>

            {/* Change Password Section */}
            <div className="w-full max-w-md bg-white shadow-md p-6 rounded-md mb-6">
                <h2 className="text-xl font-bold mb-4">Change Password</h2>
                <form onSubmit={handleChangePassword} className="flex flex-col gap-4">
                    <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Update Password
                    </button>
                </form>
            </div>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="w-full max-w-md bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
            >
                Logout
            </button>
        </div>
    );
}
