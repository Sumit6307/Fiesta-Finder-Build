import { useState } from "react";
import { motion } from "framer-motion";

export default function TeamSection() {
    const [clickedRole, setClickedRole] = useState(null);

    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
            name: "Martiana Dialan",
            title: "Product Designer",
            desc: "A creative force behind our stunning designs, Martiana specializes in user-centric design, creating intuitive and beautiful user interfaces that bring our projects to life.",
            hoverText: "I design with passion and creativity, ensuring every detail serves the user.",
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        {
            avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
            name: "Micheal Colorand",
            title: "Software Engineer",
            desc: "Micheal is a skilled coder and problem solver. With expertise in both frontend and backend development, he builds robust and scalable applications that power our platform.",
            hoverText: "I solve complex problems with clean, efficient code and ensure everything runs smoothly.",
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        {
            avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Daniel Martin",
            title: "Product Designer",
            desc: "Daniel brings innovative design ideas to life. Focused on user experience, Daniel ensures that every design decision enhances functionality while being aesthetically pleasing.",
            hoverText: "Design is not just about looks, it's about creating experiences that are functional and delightful.",
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        {
            avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            name: "Vicky Tanson",
            title: "Product Manager",
            desc: "With an eye for business strategy and a deep understanding of market needs, Vicky ensures our products align with customer expectations and market trends.",
            hoverText: "I drive the vision, manage product development, and ensure the final product is impactful.",
            linkedin: "#",
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
