import React from 'react';
import { Link } from 'react-router-dom';
import { Share, Heart } from 'lucide-react';

const HotelCard = ({ hotel }) => (
  <div className="flex flex-col max-w-[500px] w-full mx-auto p-5 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
    {/* Image Section */}
    <div className="relative rounded-2xl overflow-hidden mb-5">
      <img
        className="w-full h-[200px] sm:h-[250px] object-cover hover:scale-105 transition-transform duration-300"
        src={hotel.image}
        alt={hotel.name}
      />
      <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-md">
        Featured
      </span>
    </div>

    {/* Content Section */}
    <div>
      {/* Title and Icons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{hotel.name}</h2>
        <div className="flex gap-4">
          <Share className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors" />
          <Heart className="w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Pricing, Location, and Info */}
      <div className="space-y-4 mb-6">
        <h3 className="text-xl font-bold text-blue-600">₹{hotel.price}</h3>
        <p className="text-gray-600 flex items-center gap-2">
          <span className="text-blue-500">📍</span> {hotel.location}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Promotions:</strong> {hotel.promotions.join(', ')}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Rating:</strong> {hotel.rating} ⭐
        </p>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-4" />

      {/* Call-to-Action Button */}
      <Link to={`/hotel/${hotel.id}`}>
        <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
          Reserve Your Spot
        </button>
      </Link>
    </div>
  </div>
);

export default HotelCard;
