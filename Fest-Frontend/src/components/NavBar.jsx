import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext); // Access user and logout functions from context
    const navigate = useNavigate();

    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // Profile dropdown visibility

    // Handle logout functionality
    const handleLogout = () => {
        logout(); // Clears user session
        navigate('/login'); // Redirects to login page
    };

    // Toggle dropdown visibility
    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen((prev) => !prev);
    };

    return (
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4 bg-white ">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-blue-600">
                <Link to="/">Fiesta Finder</Link>
            </h1>

            {/* New Navigation Links */}
            <ul className="flex items-center space-x-4 gap-10">
                <li>
                    <Link to="/about" className="text-blue-600 font-medium hover:text-blue-800">About</Link>
                </li>
                <li>
                    <Link to="/blog" className="text-blue-600 font-medium hover:text-blue-800">Blog</Link>
                </li>
                <li>
                    <Link to="/careers" className="text-blue-600 font-medium hover:text-blue-800">Careers</Link>
                </li>
            </ul>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
                {user ? (
                    <div className="relative">
                        {/* Profile Button */}
                        <button
                            onClick={toggleProfileDropdown}
                            className="flex items-center space-x-2 hover:text-blue-600"
                        >
                            <span className="font-medium text-gray-700">{user.fullname || user.email}</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform duration-200 ${
                                    isProfileDropdownOpen ? 'rotate-180' : ''
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                                >
                                    Profile
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center space-x-4">
                        {/* Login Button */}
                        <Link
                            to="/login"
                            className="text-blue-600 font-medium hover:text-blue-800"
                        >
                            Log in
                        </Link>
                        {/* Signup Button */}
                        <Link
                            to="/register"
                            className="text-blue-600 font-medium hover:text-blue-800"
                        >
                            Sign up
                        </Link>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default NavBar;
