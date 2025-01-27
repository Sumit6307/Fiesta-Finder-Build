import { useState } from "react";
import { motion } from "framer-motion"; // For smooth animations
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function CareerPage() {
  const positions = [
    {
      title: "Full Stack Developer",
      icon: "💻",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      icon: "👨‍💻",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "UI/UX Designer",
      icon: "🎨",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Frontend Developer",
      icon: "📱",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Customer Success Lead",
      icon: "🤝",
      location: "Remote",
      type: "Full-time",
    },
  ];

  const benefits = [
    {
      title: "Future Equity",
      icon: "🚀",
      description: "Be part of our success with equity options",
    },
    {
      title: "Flexible Hours",
      icon: "⏰",
      description: "Work when and where you want",
    },
    {
      title: "Learning Experience",
      icon: "📚",
      description: "Gain hands-on startup experience",
    },
    {
      title: "Networking",
      icon: "🤝",
      description: "Connect with industry professionals",
    },
    {
      title: "Remote Work",
      icon: "🏠",
      description: "Work from anywhere in the world",
    },
  ];

  const [showModal, setShowModal] = useState(null); // For expanded job info
  const [isSubmitted, setIsSubmitted] = useState(false); // For form submission status

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Hide success message after 3 seconds
  };

  return (
    <div>
      <NavBar />

      <div className="min-h-screen flex flex-col">
        <div className="flex-grow container mx-auto px-4 py-16 space-y-16 max-w-6xl">
          <div className="text-center space-y-6">
            <motion.h1
              className="text-5xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Join Our Team at Fiesta
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              We&apos;re building the future of event experiences, and we need
              exceptional talent to help us get there. Join a team of passionate
              individuals working to transform how people celebrate life&apos;s
              moments.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="rounded-lg border p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                <span className="mr-2">👥</span> Open Positions
              </h2>
              <div className="space-y-4">
                {positions.map((position, index) => (
                  <motion.div
                    key={position.title}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                    onClick={() => setShowModal(index === showModal ? null : index)}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl p-2 bg-white rounded-lg">
                        {position.icon}
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {position.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {position.location} • {position.type}
                        </p>
                      </div>
                    </div>
                    {showModal === index && (
                      <motion.div
                        className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>Additional job details about {position.title}.</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg border p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                <span className="mr-2">🎁</span> Benefits & Perks
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#e0e7ff",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl mb-2 inline-block">{benefit.icon}</span>
                    <h3 className="font-medium text-gray-800">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {isSubmitted && (
            <motion.div
              className="bg-green-500 text-white p-4 rounded-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Application Submitted Successfully!
            </motion.div>
          )}

          <motion.div
            className="rounded-lg p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Take the Next Step
            </h2>
            <form className="space-y-6 max-w-3xl mx-auto" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="position"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Position of Interest
                </label>
                <select
                  id="position"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a position</option>
                  {positions.map((pos) => (
                    <option key={pos.title} value={pos.title}>
                      {pos.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Tell Us About Yourself
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="Share your background, skills, and why you're excited about Fiesta"
                />
              </div>
              <motion.div
                className="text-center pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                >
                  Submit Application
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
