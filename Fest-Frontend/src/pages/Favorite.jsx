import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import HotelCard from "../components/HotelCard";
import { useAuth } from "../context/AuthContext";
import { Skeleton } from "../components/Skeleton"; // Import Skeleton for loading effect

const Favorite = () => {
    const { user } = useAuth();
    const [favoriteHotels, setFavoriteHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchFavoriteHotels = async () => {
            try {
                const response = await axiosInstance.get("/users/favorite-hotels", {
                    withCredentials: true,
                });
                console.log("Response from backend:", response.data); // Debugging
                setFavoriteHotels(response.data);
                setIsLoading(false); // Data loaded
            } catch (error) {
                console.error("Error fetching favorite hotels:", error.response?.data || error.message); // Debugging
                setIsLoading(false); // Stop loading on error
            }
        };

        if (user) {
            fetchFavoriteHotels();
        }
    }, [user]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Favorites</h1>
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} />
                    ))}
                </div>
            ) : favoriteHotels.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteHotels.map((hotel) => (
                        <HotelCard key={hotel._id} hotel={hotel} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">You have no favorite hotels yet.</p>
            )}
        </div>
    );
};

export default Favorite;
