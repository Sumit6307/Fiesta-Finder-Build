import React from 'react';
import { Link } from 'react-router-dom';
import { Share, Heart } from 'lucide-react';

const HotelCard = ({ hotel }) => (
  <div className="flex flex-col max-w-[500px] w-full mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
    <div className="mb-4 rounded-xl overflow-hidden">
      <img
        className="w-full h-[200px] sm:h-[250px] object-cover hover:scale-105 transition-transform duration-300"
        src={hotel.image}
        alt={hotel.name}
      />
    </div>

    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{hotel.name}</h2>
        <div className="flex gap-3">
          <Share className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">₹{hotel.price}</h2>
        <p className="text-gray-600 text-sm sm:text-base flex items-center gap-1">
          <span className="text-blue-500">📍</span>
          {hotel.location}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Promotions:</strong> {hotel.promotions.join(', ')}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Rating:</strong> {hotel.rating} ⭐
        </p>
      </div>

      <hr className="border-gray-200" />

      <Link to={`/hotel/${hotel.id}`}>
        <button className="mt-4 w-full py-2 sm:py-3 bg-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Reserve Your Spot
        </button>
      </Link>
    </div>
  </div>
);

export default HotelCard;
