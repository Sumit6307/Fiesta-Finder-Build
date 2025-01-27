import { useState } from 'react';
import { motion } from 'framer-motion'; // For smooth animations

export default function TermsOfService() {
    const [clicked, setClicked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setClicked(!clicked); // Toggle the color and scale change on click
        setShowModal(true);    // Show the modal when clicked
    };

    const closeModal = () => {
        setShowModal(false);  // Close the modal
    };

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto max-w-5xl px-6 py-12">
                <div className="mb-12">
                    {/* Animated Heading with Color Change */}
                    <motion.h2
                        className={`text-3xl font-extrabold transition-all duration-300 ${clicked ? 'text-blue-600 scale-105' : 'text-gray-900'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        onClick={handleClick}
                    >
                        Terms of Service
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 mt-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        By using our platform, you agree to adhere to these terms and
                        conditions. We aim to create a safe, lawful, and inclusive space for
                        all our users.
                    </motion.p>
                </div>

                {/* Modal Popup */}
                {showModal && (
                    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800">Terms of Service Details</h3>
                            <p className="text-lg text-gray-600 mt-4">
                                Here you can add more detailed information about the terms of service.
                                The pop-up modal will contain all the information you want to display in a user-friendly way.
                            </p>
                            <button
                                onClick={closeModal}
                                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}

                {/* Terms List */}
                <div className="space-y-10 mt-12">
                    {/* User Obligations and Conduct Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                            User Obligations and Conduct
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                            {['Users must be at least 18 or have guardian consent if younger.',
                                'Users must provide accurate and truthful information and maintain account security.',
                                'Harassment, hate speech, or discriminatory behavior is strictly prohibited.',
                                'Users must not engage in any unauthorized commercial activities.',
                                'Users must respect intellectual property rights and not infringe on copyrights.'].map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start transition-transform duration-200 ease-in-out transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-600 mr-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal Disclaimers and Limitations Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                            Legal Disclaimers and Limitations
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                            {['We reserve the right to modify these terms at any time.',
                                'Our service is provided "as is" without any warranties.',
                                'We are not liable for any damages arising from the use of our service.',
                                'Fiesta reserves the right to suspend or terminate accounts for violations or illegal activities.',
                                'Users cannot upload defamatory, obscene, or illegal content. Violators will be reported under the Indian Penal Code.',
                                'Users agree to indemnify us against any claims arising from their use of the service.',
                                'Any disputes will be resolved through arbitration in accordance with local laws.',
                                'Users can file complaints via the Grievance Officer. Fiesta will acknowledge them within 48 hours and resolve them within 30 days.'].map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start transition-transform duration-200 ease-in-out transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-600 mr-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
