import { Share, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = () => {
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
                    src="https://plus.unsplash.com/premium_photo-1664530452329-42682d3a73a7?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Apartment"
                />
            </motion.div>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
                    <motion.h2
                        className="text-xl sm:text-2xl font-bold text-gray-800"
                        whileHover={{ color: "#3b82f6" }}
                        transition={{ duration: 0.3 }}
                    >
                        Ely Parkway Apartment
                    </motion.h2>
                    <div className="flex gap-3">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Share className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
                        </motion.div>
                    </div>
                </div>

                <div className="space-y-3 mb-6">
                    <motion.h2
                        className="text-2xl sm:text-3xl font-bold text-blue-600"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        $1,200
                    </motion.h2>
                    <div className="text-gray-600 text-xs sm:text-sm space-y-2">
                        <motion.div
                            className="flex flex-wrap gap-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="font-semibold">• 5 Rooms</span>
                            <span className="font-semibold">• 7 Bathrooms</span>
                            <span className="font-semibold">• 5 Beds</span>
                        </motion.div>
                        <p className="text-gray-500">Up to 5 Guests</p>
                    </div>
                    <motion.p
                        className="text-gray-600 text-sm sm:text-base flex items-center gap-1"
                        whileHover={{ color: "#3b82f6" }}
                    >
                        <span className="text-blue-500">📍</span>
                        71 Broadway, New York, NY 10006
                    </motion.p>
                </div>

                <hr className="border-gray-200" />

                <motion.button
                    className="mt-4 w-full py-2 sm:py-3 bg-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Reserve Your Spot
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Card;
