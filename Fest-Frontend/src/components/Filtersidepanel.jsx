import { useState } from "react";

const Filtersidebar = () => {
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 300000,
        typeOfPlace: "",
        region: "",
        rooms: 1,
        bathrooms: 1,
        beds: 1,
        guests: 1,
        amenities: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleCheckboxChange = (amenity) => {
        setFilters((prev) => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter((a) => a !== amenity)
                : [...prev.amenities, amenity],
        }));
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

            {/* Type of Place */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Type of Place</h3>
                <div className="space-y-2">
                    {["All", "For Rent", "For Sale"].map((type) => (
                        <label key={type} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <input
                                type="radio"
                                name="typeOfPlace"
                                value={type}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-gray-700">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Region */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Region</h3>
                <select
                    name="region"
                    value={filters.region}
                    onChange={handleInputChange}
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all"
                >
                    <option value="">Choose an option</option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                </select>
            </div>

            {/* Rooms and Beds */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Rooms and Beds</h3>
                <div className="space-y-4">
                    {["rooms", "bathrooms", "beds", "guests"].map((key) => (
                        <div key={key} className="flex items-center justify-between">
                            <label className="text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            [key]: Math.max(1, prev[key] - 1),
                                        }))
                                    }
                                    className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    -
                                </button>
                                <span className="w-6 text-center font-medium">{filters[key]}</span>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            [key]: prev[key] + 1,
                                        }))
                                    }
                                    className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Amenities */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Amenities</h3>
                <div className="space-y-2">
                    {["Air conditioning", "Parking", "Hot water", "Free Wi-Fi"].map(
                        (amenity) => (
                            <label key={amenity} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange(amenity)}
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <span className="ml-3 text-gray-700">{amenity}</span>
                            </label>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Filtersidebar;
