import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000); // Reset form submission state after 4 seconds
  };

  return (
    <main className="py-14 bg-gradient-to-br from-white to-gray-100">
      <motion.div
        className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading Section */}
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <motion.h3
            className="text-indigo-600 font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Contact
          </motion.h3>
          <motion.p
            className="text-gray-800 text-3xl font-semibold sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Get in touch
          </motion.p>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            We’d love to hear from you! Please fill out the form below.
          </motion.p>
        </div>

        {/* Form Section */}
        <div className="mt-12 max-w-lg mx-auto">
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                <div>
                  <label className="font-medium">First name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 focus:shadow-md shadow-sm rounded-lg transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="font-medium">Last name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 focus:shadow-md shadow-sm rounded-lg transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 focus:shadow-md shadow-sm rounded-lg transition-all duration-200"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                      <option>US</option>
                      <option>ES</option>
                      <option>MR</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="+1 (555) 000-000"
                    required
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 focus:shadow-md shadow-sm rounded-lg transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 focus:shadow-md shadow-sm rounded-lg transition-all duration-200"
                ></textarea>
              </div>
              <button
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                Submit
              </button>
            </motion.form>
          ) : (
            <motion.div
              className="text-center p-6 bg-green-50 border border-green-200 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-green-600">
                Thank you for reaching out!
              </h3>
              <p className="text-gray-600 mt-2">
                We have received your message and will get back to you shortly.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </main>
  );
}
