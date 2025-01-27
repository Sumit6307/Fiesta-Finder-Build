import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import TypingEffect from "./Typing-effect";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const features = [
    {
      title: "Fast Refresh",
      description:
        "Stay ahead with instant updates for your event plans, ensuring smooth coordination at every stage.",
      icon: <Calendar className="h-10 w-10 text-blue-500" />,
      aosEffect: "fade-up",
    },
    {
      title: "Analytics",
      description:
        "Gain valuable insights and real-time reports to make data-driven decisions and enhance your event strategy.",
      icon: <Star className="h-10 w-10 text-green-500" />,
      aosEffect: "fade-right",
    },
    {
      title: "Secure Datacenters",
      description:
        "Your event data is safeguarded with cutting-edge encryption and security protocols, ensuring absolute privacy.",
      icon: <MapPin className="h-10 w-10 text-red-500" />,
      aosEffect: "fade-left",
    },
    {
      title: "Customizable Plans",
      description:
        "Design event solutions tailored to meet your unique needs, preferences, and style.",
      icon: <Users className="h-10 w-10 text-purple-500" />,
      aosEffect: "zoom-in",
    },
    {
      title: "24/7 Support",
      description:
        "Our team of event specialists is available around the clock to assist with all your planning needs.",
      icon: <Calendar className="h-10 w-10 text-yellow-500" />,
      aosEffect: "flip-right",
    },
    {
      title: "Flexible Solutions",
      description:
        "Adaptable tools and resources that cater to events of all sizes, ensuring seamless execution every time.",
      icon: <Star className="h-10 w-10 text-blue-500" />,
      aosEffect: "flip-left",
    },
  ];
    // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-blue-200 to-pink-300 opacity-50 animate-gradient-x -z-10"></div>

      {/* Hero Content */}
      <div className="relative pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="block mb-2">Create Memorable</span>
              <TypingEffect />
            </motion.h1>
            <motion.p
              className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Plan your perfect event with ease—seamless coordination, smart
              tools, and expert support for every step of the way.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              <Link
                to={`/home`}
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110 hover:translate-y-[-5px]"
              >
                Start Planning
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold text-lg ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110 hover:translate-y-[-5px]">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Features Section */}
          <div className="mt-20">
            <motion.h2
              className="text-4xl font-extrabold text-gray-900 text-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Do More with Less Complexity
            </motion.h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Our platform streamlines event planning, giving you access to
              powerful tools and insights to make your event a success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="mt-20 relative max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute -top-8 -right-8 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700">
              <img
                src="https://images.pexels.com/photos/949224/pexels-photo-949224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Event Planning"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
