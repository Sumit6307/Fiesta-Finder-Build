// src/components/HotelCard.jsx
import React from "react";
import '../styles/HotelCard.css'

const HotelCard = ({ hotel }) => (
  <div className="hotel-card">
    <img src={hotel.image} alt={hotel.name} className="hotel-card-image" />
    <div className="hotel-card-info">
      <h3>{hotel.name}</h3>
      <p>{hotel.location}</p>
      <p>Rating: {hotel.rating} ⭐</p>
      <p>From ₹{hotel.price}</p>
      <p>{hotel.promotions.join(", ")}</p>
    </div>
  </div>
);

export default HotelCard;
