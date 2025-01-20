// src/pages/Home.jsx
import React from "react";
import useFetch from "../hooks/useFetch";
import HotelList from "../components/HotelList";

const Home = () => {
  const { data: hotels, error, loading } = useFetch("/hotels.json");

  if (loading) return <p>Loading hotels...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Wedding Awards</h2>
      <HotelList hotels={hotels.slice(0, 4)} />

      <h2>Featured Wedding Vendors</h2>
      <HotelList hotels={hotels.slice(4)} />
    </div>
  );
};

export default Home;
