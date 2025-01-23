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
        <nav className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
            {/* Logo and Landing Page Link */}
            <div className="flex items-center gap-4">
                <Link to="/home" className="text-lg font-bold">Fiesta Finder</Link>
                <Link
                    to="/"
                    className="text-sm bg-white text-blue-600 px-2 py-1 rounded hover:bg-gray-200 transition"
                >
                    Go to Home Page
                </Link>
            </div>
            
            {/* Search Bar */}
            <div className={`relative flex-grow mx-4 max-w-md transition-transform ${isFocused ? 'opacity-100' : 'opacity-50'} ease-in-out duration-300`}>
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
                        placeholder="Search..."
                        className={`w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${isFocused ? 'bg-white text-black shadow-md' : 'bg-gray-200 text-gray-700'}`}
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800"
                    >
                        🔍
                    </button>
                </form>

                {/* Suggestions Dropdown */}
                {showSuggestions && (
                    <div className="absolute bg-white text-black rounded-md shadow-lg mt-1 w-full max-h-40 overflow-y-auto custom-scrollbar">
                        {searchSuggestions.length > 0 ? (
                            searchSuggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </div>
                            ))
                        ) : (
                            <div className="px-4 py-2 text-gray-500">No suggestions found</div>
                        )}
                    </div>
                )}
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
                {user ? (
                    <>
                        <span className="text-sm">Welcome, {user.fullname || user.email}</span>
                        <button
                            onClick={() => navigate('/profile')}
                            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 transition"
                        >
                            Profile
                        </button>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 transition">
                            Login
                        </Link>
                        <Link to="/register" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 transition">
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
