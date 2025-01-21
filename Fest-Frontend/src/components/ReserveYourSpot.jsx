import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const ReserveYourSpot = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch('/hotels.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedHotel = data.find((hotel) => hotel.id === parseInt(id));
        setHotel(selectedHotel);
      })
      .catch((error) => console.error('Error fetching hotel data:', error));
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] mx-auto">
      <Navbar2 />

      <div className="flex-grow container mx-auto px-4 py-8 mt-24">
        <div className="bg-white rounded-lg shadow-md mb-8">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-[400px] object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{hotel.name}</h1>
            <p className="text-gray-600 mb-6">{hotel.location}</p>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">₹{hotel.price}/night</h2>
            <p className="text-gray-600">{hotel.promotions.join(', ')}</p>
            <p className="text-gray-600">Rating: {hotel.rating} ⭐</p>

            <button className="mt-6 w-full py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReserveYourSpot;
