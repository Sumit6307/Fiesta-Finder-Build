import { useState } from "react";
import { motion } from "framer-motion";

export default function TeamSection() {
    const [clickedRole, setClickedRole] = useState(null);

    const team = [
        {
            avatar: "data:image/png;base64,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",
            name: "Sumit Kesarwani",
            title: "Founder",
            desc: "A creative force behind our stunning designs, Sumit specializes in user-centric design, creating intuitive and beautiful user interfaces that bring our projects to life.",
            hoverText: "I design with passion and creativity, ensuring every detail serves the user.",
            linkedin: "",
            twitter: "#",
            github: "#"
        },
    ];

    return (
        <section className="py-14 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl text-center">
                    <h3
                        className="text-gray-800 text-4xl font-semibold sm:text-5xl mb-4 transform hover:scale-105 transition-transform duration-500 cursor-pointer"
                        onMouseEnter={(e) => e.target.classList.add("text-indigo-600")}
                        onMouseLeave={(e) => e.target.classList.remove("text-indigo-600")}
                    >
                        Meet Our Talented Team
                    </h3>
                    <p className="text-gray-600 mt-3 text-lg">
                        Passionate professionals dedicated to creating exceptional wedding experiences.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {team.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="sm:flex gap-8 transform hover:scale-105 transition-transform duration-500"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <motion.div
                                className="w-full h-60 overflow-hidden rounded-xl shadow-lg"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-full h-full object-cover object-center rounded-xl"
                                />
                            </motion.div>
                            <div className="mt-4 sm:mt-0">
                                <h4
                                    onClick={() => setClickedRole(item.title)}
                                    className={`text-xl text-gray-800 font-semibold 
                                        ${clickedRole === item.title ? 'text-indigo-600' : 'hover:text-indigo-600'} 
                                        cursor-pointer transition-colors duration-300`}
                                    onMouseEnter={() => setClickedRole(item.title)}
                                >
                                    {item.name}
                                </h4>
                                <p
                                    className={`text-lg 
                                        ${clickedRole === item.title ? 'text-indigo-600' : 'text-gray-600'}
                                        transition-colors duration-300`}
                                >
                                    {item.title}
                                </p>
                                <p className="text-gray-600 mt-2 text-base">{item.desc}</p>
                                {clickedRole === item.title && (
                                    <p className="text-gray-700 mt-2 italic">{item.hoverText}</p>
                                )}
                                <div className="mt-3 flex gap-4 text-gray-400">
                                    <motion.a
                                        href={item.twitter}
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        className="hover:text-blue-500 duration-150"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 48 48">
                                            {/* Twitter icon */}
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        href={item.github}
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        className="hover:text-gray-800 duration-150"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 48 48">
                                            {/* GitHub icon */}
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        href={item.linkedin}
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        className="hover:text-blue-600 duration-150"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 48 48">
                                            {/* LinkedIn icon */}
                                        </svg>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
