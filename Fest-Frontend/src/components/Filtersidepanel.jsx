import { useState } from "react";

const Filtersidebar = ({ onFilterChange, onResetFilters }) => {
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 300000,
        location: "",
        promotions: [],
        amenities: [],
        nearbyAttractions: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);
        onFilterChange(updatedFilters); // Notify parent component of filter changes
    };

    const handleCheckboxChange = (category, value) => {
        const updatedFilters = {
            ...filters,
            [category]: filters[category].includes(value)
                ? filters[category].filter((item) => item !== value) // Remove if already selected
                : [...filters[category], value], // Add if not selected
        };
        setFilters(updatedFilters);
        onFilterChange(updatedFilters); // Notify parent component of filter changes
    };

    const handleReset = () => {
        const resetFilters = {
            minPrice: 0,
            maxPrice: 300000,
            location: "",
            promotions: [],
            amenities: [],
            nearbyAttractions: [],
        };
        setFilters(resetFilters);
        onResetFilters(resetFilters); // Notify parent component to reset filters
    };

    return (
        <div className="w-72 bg-white shadow-xl p-6 rounded-xl space-y-6">
            {/* Price Range */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Price Range</h3>
                <div className="flex items-center gap-3">
                    <input
                        type="number"
                        name="minPrice"
                        value={filters.minPrice}
                        onChange={handleInputChange}
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Min"
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        value={filters.maxPrice}
                        onChange={handleInputChange}
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Max"
                    />
                </div>
            </div>

            {/* Location */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Location</h3>
                <input
                    type="text"
                    name="location"
                    value={filters.location}
                    onChange={handleInputChange}
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter location"
                />
            </div>

            {/* Promotions */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Promotions</h3>
                <div className="space-y-2">
                    {["10% off", "5% off", "Free Parking", "Complimentary Breakfast"].map(
                        (promotion) => (
                            <label key={promotion} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <input
                                    type="checkbox"
                                    checked={filters.promotions.includes(promotion)}
                                    onChange={() => handleCheckboxChange("promotions", promotion)}
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <span className="ml-3 text-gray-700">{promotion}</span>
                            </label>
                        )
                    )}
                </div>
            </div>

            {/* Amenities */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Amenities</h3>
                <div className="space-y-2">
                    {["Wi-Fi", "Swimming Pool", "Gym", "Parking", "Restaurant", "Conference Hall"].map(
                        (amenity) => (
                            <label key={amenity} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <input
                                    type="checkbox"
                                    checked={filters.amenities.includes(amenity)}
                                    onChange={() => handleCheckboxChange("amenities", amenity)}
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <span className="ml-3 text-gray-700">{amenity}</span>
                            </label>
                        )
                    )}
                </div>
            </div>

            {/* Nearby Attractions */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Nearby Attractions</h3>
                <div className="space-y-2">
                    {["Hazratganj Market", "Lucknow Zoo", "Bara Imambara", "Ambedkar Park", "Fun Republic Mall", "Gomti Riverfront"].map(
                        (attraction) => (
                            <label key={attraction} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <input
                                    type="checkbox"
                                    checked={filters.nearbyAttractions.includes(attraction)}
                                    onChange={() => handleCheckboxChange("nearbyAttractions", attraction)}
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <span className="ml-3 text-gray-700">{attraction}</span>
                            </label>
                        )
                    )}
                </div>
            </div>

            {/* Reset Button */}
            <div>
                <button
                    onClick={handleReset}
                    className="w-full py-2.5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
                >
                    Reset Filters
                </button>
            </div>
        </div>
    );
};

export default Filtersidebar;