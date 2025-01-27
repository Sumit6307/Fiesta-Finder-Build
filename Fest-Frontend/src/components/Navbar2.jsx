import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../api/axiosInstance';

export default function Navbar2({ onSearch }) {
    const [user, setUser] = useState(null); // To store logged-in user info
    const [searchQuery, setSearchQuery] = useState(''); // Search query state
    const [isFocused, setIsFocused] = useState(false); // To manage focus state
    const [searchSuggestions, setSearchSuggestions] = useState([]); // Dynamic suggestions
    const [showSuggestions, setShowSuggestions] = useState(false); // Control dropdown visibility
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('/users/profile', { withCredentials: true });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error.response?.data?.message || error.message);
            }
        };
        fetchUserDetails();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post('/users/logout', {}, { withCredentials: true });
            setUser(null);
            navigate('/login');
        } catch (error) {
            alert('Error logging out!');
        }
    };

    // Handle input change for search
    const handleInputChange = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Show suggestions if query is not empty
        if (query.trim() !== '') {
            try {
                const response = await axios.get(`/search/suggestions?query=${query}`);
                setSearchSuggestions(response.data || []);
                setShowSuggestions(true);
            } catch (error) {
                console.error("Error fetching search suggestions:", error);
                setShowSuggestions(false);
            }
        } else {
            setShowSuggestions(false);
        }
    };

    // Handle search submission
    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchQuery);
        }
        setShowSuggestions(false);
    };

    // Handle suggestion click
    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
        if (onSearch) {
            onSearch(suggestion);
        }
    };

    return (
        <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-4 flex items-center justify-between shadow-lg rounded-lg transition-all duration-300 ease-in-out">
            {/* Logo and Landing Page Link */}
            <div className="flex items-center gap-6">
                <Link to="/home" className="text-3xl font-bold transform transition-all duration-300 hover:scale-110 hover:text-indigo-200 hover:shadow-lg">
                    Fiesta Finder
                </Link>
                <Link
                    to="/"
                    className="text-sm bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow-md"
                >
                    Go to Home Page
                </Link>
            </div>
            
            {/* Search Bar */}
            <div className={`relative flex-grow mx-4 max-w-xl transition-all duration-500 ease-in-out ${isFocused ? 'opacity-100' : 'opacity-75'}`}>
                <form
                    onSubmit={handleSearch}
                    className="relative"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(searchQuery.trim() !== '' ? true : false)}
                >
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Search for events, venues, or blogs..."
                        className={`w-full p-4 rounded-full border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-500 ${isFocused ? 'bg-white text-gray-800 shadow-2xl' : 'bg-gray-100 text-gray-600'}`}
                    />
                    <button
                        type="submit"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-all duration-200"
                    >
                        🔍
                    </button>
                </form>

                {/* Suggestions Dropdown */}
                {showSuggestions && (
                    <div className="absolute bg-white text-black rounded-md shadow-xl mt-2 w-full max-h-40 overflow-y-auto custom-scrollbar transition-all duration-500">
                        {searchSuggestions.length > 0 ? (
                            searchSuggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="px-6 py-2 hover:bg-indigo-100 cursor-pointer transition-colors duration-300"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </div>
                            ))
                        ) : (
                            <div className="px-6 py-2 text-gray-500">No suggestions found</div>
                        )}
                    </div>
                )}
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-6">
                {user ? (
                    <>
                        <span className="text-lg font-medium">Welcome, {user.fullname || user.email}</span>
                        <button
                            onClick={() => navigate('/profile')}
                            className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
                        >
                            Profile
                        </button>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                            Login
                        </Link>
                        <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
