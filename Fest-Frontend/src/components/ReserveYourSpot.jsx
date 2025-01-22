import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/leaflet.css";

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
          // Check if the map container exists
          const mapContainer = document.getElementById("map");
          if (mapContainer) {
            map = L.map("map").setView(
              [selectedHotel.latitude, selectedHotel.longitude],
              13
            );
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
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              ₹{hotel.price}/night
            </h2>
            <p className="text-gray-600 mb-4">Rating: {hotel.rating} ⭐</p>
            <p className="text-gray-600 mb-4">
              Amenities: {hotel.amenities.join(", ")}
            </p>
            <p className="text-gray-600 mb-4">
              Promotions: {hotel.promotions.join(", ")}
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Nearby Attractions:
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {hotel.nearbyAttractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Check-in Date</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Check-out Date</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Number of Guests</label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="10"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              onClick={handleBooking}
              className="mt-6 w-full py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Hotel Location</h3>
          <div id="map" className="w-full h-[300px] rounded-lg"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ReserveYourSpot;
