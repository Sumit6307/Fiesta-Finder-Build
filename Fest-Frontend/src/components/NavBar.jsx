import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen((prev) => !prev);
    };

    return (
        <nav className="w-full px-0 mx-0 flex items-center justify-between py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg rounded-b-lg transition-all duration-300 ease-in-out">
            {/* Logo */}
            <h1 className="text-3xl font-bold transform transition-all duration-300 hover:scale-110 hover:text-indigo-200">
                <Link to="/">Fiesta Finder</Link>
            </h1>

            {/* Navigation Links */}
            <ul className="flex items-center justify-center flex-grow space-x-4 gap-10">
                <li className="relative group">
                    <Link to="/about" className="text-white font-medium hover:text-indigo-200">
                        About
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                </li>
                <li className="relative group">
                    <Link to="/blog" className="text-white font-medium hover:text-indigo-200">
                        Blog
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                </li>
                <li className="relative group">
                    <Link to="/careers" className="text-white font-medium hover:text-indigo-200">
                        Careers
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                </li>
            </ul>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
                {user ? (
                    <div className="relative">
                        {/* Profile Button */}
                        <button
                            onClick={toggleProfileDropdown}
                            className="flex items-center space-x-2 text-gray-100 font-medium hover:text-indigo-200 transform transition-all duration-300"
                        >
                            <span>{user.fullname || user.email}</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`}
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
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-xl z-50 transform transition-all duration-200 opacity-100">
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 transition-colors duration-200"
                                >
                                    Profile
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 transition-colors duration-200"
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
                            className="text-blue-600 bg-white font-medium hover:bg-blue-100 px-6 py-2 rounded-lg border border-transparent transform transition-all duration-300"
                        >
                            Log in
                        </Link>
                        {/* Signup Button */}
                        <Link
                            to="/register"
                            className="text-blue-600 bg-white font-medium hover:bg-blue-100 px-6 py-2 rounded-lg border border-transparent transform transition-all duration-300"
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
