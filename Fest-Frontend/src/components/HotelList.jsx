// src/components/HotelList.jsx
import React from "react";
import HotelCard from "./HotelCard";
import '../styles/HotelList.css'


const HotelList = ({ hotels }) => {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
