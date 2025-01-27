import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar2 from "../components/Navbar2"; // Keeping your Navbar2
import Footer from "../components/Footer"; // Keeping your original Footer
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/leaflet.css";
import { motion } from "framer-motion"; // For animations

const ReserveYourSpot = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    let map;

    fetch("/hotels.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedHotel = data.find((hotel) => hotel.id === parseInt(id));
        setHotel(selectedHotel);

        if (selectedHotel && selectedHotel.latitude && selectedHotel.longitude) {
          const mapContainer = document.getElementById("map");
          if (mapContainer) {
            map = L.map("map").setView([selectedHotel.latitude, selectedHotel.longitude], 13);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              maxZoom: 19,
              attribution: "© OpenStreetMap contributors",
            }).addTo(map);

            L.marker([selectedHotel.latitude, selectedHotel.longitude])
              .addTo(map)
              .bindPopup(`${selectedHotel.name}`)
              .openPopup();
          }
        }
      })
      .catch((error) => console.error("Error fetching hotel data:", error));

    return () => {
      if (map) map.remove(); // Clean up the map instance
    };
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  const handleBooking = () => {
    if (!checkInDate || !checkOutDate) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    alert(
      `Booking confirmed for ${hotel.name}.\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nGuests: ${guests}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <Navbar2 />

      <div className="flex-grow container mx-auto px-4 py-8 mt-24">
        {/* Hotel Info Section */}
        <motion.div
          className="bg-white rounded-lg shadow-xl mb-8 overflow-hidden transform transition-all hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-[400px] object-cover rounded-t-lg transition-transform transform hover:scale-110"
          />
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{hotel.name}</h1>
            <p className="text-gray-600 mb-6 text-lg">{hotel.location}</p>
            <motion.h2
              className="text-3xl font-bold text-blue-600 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              ₹{hotel.price}/night
            </motion.h2>
            <p className="text-gray-600 mb-4">Rating: {hotel.rating} ⭐</p>
            <p className="text-gray-600 mb-4">Amenities: {hotel.amenities.join(", ")}</p>
            <p className="text-gray-600 mb-4">Promotions: {hotel.promotions.join(", ")}</p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">Nearby Attractions:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {hotel.nearbyAttractions.map((attraction, index) => (
                <motion.li
                  key={index}
                  className="mb-2 text-lg transition-transform hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                >
                  {attraction}
                </motion.li>
              ))}
            </ul>

            {/* Date Pickers and Guest Selector */}
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Check-in Date</label>
              <motion.input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg transition-all focus:ring-2 focus:ring-indigo-500 hover:scale-105"
                whileHover={{ scale: 1.03 }}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Check-out Date</label>
              <motion.input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg transition-all focus:ring-2 focus:ring-indigo-500 hover:scale-105"
                whileHover={{ scale: 1.03 }}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Number of Guests</label>
              <motion.input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="10"
                className="w-full p-3 border border-gray-300 rounded-lg transition-all focus:ring-2 focus:ring-indigo-500 hover:scale-105"
                whileHover={{ scale: 1.03 }}
              />
            </div>

            {/* Booking Button */}
            <motion.button
              onClick={handleBooking}
              className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md transform transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Confirm Booking
            </motion.button>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="bg-white rounded-lg shadow-xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Hotel Location</h3>
          <div id="map" className="w-full h-[300px] rounded-lg transition-transform"></div>
        </motion.div>
      </div>

      {/* Footer Section - Keeping your original footer */}
      <Footer />
    </div>
  );
};

export default ReserveYourSpot;
