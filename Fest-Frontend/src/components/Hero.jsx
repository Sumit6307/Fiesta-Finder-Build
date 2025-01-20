import { ArrowRight, Calendar, Users, MapPin, Star } from "lucide-react";
import React from 'react';
import TypingEffect from "./Typng-effect";

export default function Hero() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      title: "Easy Scheduling",
      description: "Book venues and vendors in just a few clicks"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Team Collaboration",
      description: "Work together with event planners and vendors"
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-500" />,
      title: "Venue Selection",
      description: "Access to premium venues worldwide"
    },
    {
      icon: <Star className="h-8 w-8 text-blue-500" />,
      title: "Expert Support",
      description: "24/7 assistance from event specialists"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="relative pt-24 pb-20 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              <span className="block mb-2">Create Memorable</span>
               <TypingEffect/>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we help you plan and execute
              perfect events that leave lasting impressions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <button className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Planning
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold text-lg ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>
  
            {/* Features Section */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-20 relative max-w-5xl mx-auto">
            <div className="absolute -top-8 -right-8 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/949224/pexels-photo-949224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Event Planning"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}