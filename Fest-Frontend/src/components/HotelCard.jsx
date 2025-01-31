import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Share, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";

const HotelCard = ({ hotel }) => {
    const { user, setUser } = useContext(AuthContext);
    const [showShareOptions, setShowShareOptions] = useState(false); // State to manage share options visibility

    const handleToggleFavorite = async (hotelId) => {
        try {
            if (!hotelId) {
                console.error("Invalid hotel ID:", hotelId);
                return;
            }

            const response = await axiosInstance.post(
                "/users/toggle-favorite",
                { hotelId },
                { withCredentials: true }
            );

            console.log("Toggle Favorite Response:", response.data); // Debugging
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
        } catch (error) {
            console.error("Error toggling favorite:", error.response?.data || error.message); // Debugging
        }
    };

    const handleShare = async () => {
        const shareData = {
            title: hotel.name,
            text: `Check out this hotel: ${hotel.name} located at ${hotel.location}. Price: ₹${hotel.price}`,
            url: window.location.href, // You can customize this URL to point to the hotel's specific page
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: Show custom share options
                setShowShareOptions(true);
            }
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };

    const handleWhatsAppShare = () => {
        const message = `Check out this hotel: ${hotel.name} located at ${hotel.location}. Price: ₹${hotel.price}\n${window.location.href}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleFacebookShare = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(facebookUrl, "_blank");
    };

    const hotelId = hotel._id; // Use _id instead of id
    const isFavorite = user?.favorites?.includes(hotelId);

    return (
        <motion.div
            className="flex flex-col max-w-[500px] w-full mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            whileHover={{ scale: 1.02 }}
        >
            {/* Image Section */}
            <motion.div
                className="mb-4 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img
                    className="w-full h-[200px] sm:h-[250px] object-cover"
                    src={hotel.image}
                    alt={hotel.name}
                />
            </motion.div>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
                    <motion.h2
                        className="text-xl sm:text-2xl font-bold text-gray-800"
                        whileHover={{ color: "#3b82f6" }}
                        transition={{ duration: 0.3 }}
                    >
                        {hotel.name}
                    </motion.h2>
                    <div className="flex gap-3">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            title="Share"
                            onClick={handleShare}
                        >
                            <Share className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            title="Add to Favorites"
                            onClick={() => handleToggleFavorite(hotelId)}
                        >
                            <Heart className={`w-6 h-6 cursor-pointer ${isFavorite ? "text-red-500" : "text-gray-600"}`} />
                        </motion.div>
                    </div>
                </div>

                {/* Share Options Modal */}
                {showShareOptions && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-lg font-semibold mb-4">Share via</h3>
                            <div className="flex gap-4">
                                <button
                                    onClick={handleWhatsAppShare}
                                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                        alt="WhatsApp"
                                        className="w-6 h-6"
                                    />
                                    WhatsApp
                                </button>
                                <button
                                    onClick={handleFacebookShare}
                                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                        alt="Facebook"
                                        className="w-6 h-6"
                                    />
                                    Facebook
                                </button>
                            </div>
                            <button
                                onClick={() => setShowShareOptions(false)}
                                className="mt-4 w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}

                <div className="space-y-3 mb-6">
                    <motion.h2
                        className="text-2xl sm:text-3xl font-bold text-blue-600"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        ₹{hotel.price}
                    </motion.h2>
                    <p className="text-gray-600 text-sm sm:text-base flex items-center gap-1">
                        <span className="text-blue-500">📍</span>
                        {hotel.location}
                    </p>
                    <p className="text-gray-600 text-sm">
                        <strong>Promotions:</strong> {Array.isArray(hotel.promotions) ? hotel.promotions.join(", ") : "No promotions available"}
                    </p>
                    <motion.p
                        className="text-gray-600 text-sm"
                        whileHover={{ color: "#f97316" }}
                    >
                        <strong>Rating:</strong> {hotel.rating} ⭐
                    </motion.p>
                </div>

                <hr className="border-gray-200" />

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to={`/hotel/${hotelId}`}>
                        <button className="mt-4 w-full py-2 sm:py-3 bg-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300">
                            Reserve Your Spot
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HotelCard;