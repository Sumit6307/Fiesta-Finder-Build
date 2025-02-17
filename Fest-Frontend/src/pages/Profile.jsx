import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance';
import { FaArrowLeft, FaLock, FaUser, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import logo from '../assets/fiesta-finder-logo.jpeg'; // Replace with actual path

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('/users/profile', { withCredentials: true });
                setUser(response.data);
            } catch (error) {
                alert(error.response?.data?.message || 'Error fetching user details!');
                navigate('/login');
            }
        };
        fetchUserDetails();
    }, [navigate]);

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/users/change-password', { oldPassword, newPassword }, { withCredentials: true });
            alert(response.data.message);
            setOldPassword('');
            setNewPassword('');
        } catch (error) {
            alert(error.response?.data?.message || 'Error changing password!');
        }
    };

    const handleLogout = async () => {
        try {
            await axios.post('/users/logout', {}, { withCredentials: true });
            localStorage.removeItem('user');
            navigate('/login');
        } catch (error) {
            alert(error.response?.data?.message || 'Error logging out!');
        }
    };

    if (!user) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 p-4">
            <div className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-white relative">
                {/* Back Button */}
                <button 
                    className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 text-lg transition-all" 
                    onClick={() => navigate('/home')}
                >
                    <FaArrowLeft />
                </button>

                {/* Logo Section */}
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="Fiesta Finder Logo" className="w-24 h-24 rounded-full shadow-md" />
                </div>

                {/* Profile Details */}
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Profile</h1>
                <div className="w-full bg-white shadow-md p-6 rounded-md mb-6">
                    <p className="text-lg flex items-center gap-2"><FaUser /> <strong>Full Name:</strong> {user.fullname}</p>
                    <p className="text-lg flex items-center gap-2 mt-2"><FaEnvelope /> <strong>Email:</strong> {user.email}</p>
                </div>

                {/* Change Password Section */}
                <div className="w-full bg-white shadow-md p-6 rounded-md mb-6">
                    <h2 className="text-xl font-bold mb-4 text-center">Change Password</h2>
                    <form onSubmit={handleChangePassword} className="flex flex-col gap-4">
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Current Password"
                                className="w-full pl-10 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                placeholder="New Password"
                                className="w-full pl-10 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-shadow shadow-md"
                        >
                            Update Password
                        </button>
                    </form>
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-shadow shadow-md flex items-center justify-center gap-2"
                >
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </div>
    );
}
