import { useState } from "react";

const Filtersidebar = ({ hotels, setFilteredHotels }) => {
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
        rating: "",
        promotions: [],
        nearbyAttractions: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleCheckboxChange = (category, value) => {
        setFilters((prev) => ({
            ...prev,
            [category]: prev[category].includes(value)
                ? prev[category].filter((item) => item !== value)
                : [...prev[category], value],
        }));
    };

    const applyFilters = () => {
        let filtered = hotels.filter(hotel => 
            hotel.price >= filters.minPrice && 
            hotel.price <= filters.maxPrice &&
            (filters.rating ? hotel.rating >= filters.rating : true) &&
            (filters.nearbyAttractions ? hotel.nearbyAttractions.includes(filters.nearbyAttractions) : true) &&
            (filters.promotions.length > 0 ? filters.promotions.some(promo => hotel.promotions.includes(promo)) : true) &&
            (filters.amenities.length > 0 ? filters.amenities.every(amenity => hotel.amenities.includes(amenity)) : true)
        );
        setFilteredHotels(filtered);
    };

    const resetFilters = () => {
        setFilters({
            minPrice: 0,
            maxPrice: 300000,
            typeOfPlace: "",
            region: "",
            rooms: 1,
            bathrooms: 1,
            beds: 1,
            guests: 1,
            amenities: [],
            rating: "",
            promotions: [],
            nearbyAttractions: ""
        });
        setFilteredHotels(hotels);
    };

    return (
        <div className="w-72 bg-white shadow-xl p-6 rounded-xl space-y-6">
            {/* Price Range */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Price Range</h3>
                <div className="flex items-center gap-3">
                    <input type="number" name="minPrice" value={filters.minPrice} onChange={handleInputChange} placeholder="Min" className="w-full p-2.5 border rounded-lg" />
                    <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleInputChange} placeholder="Max" className="w-full p-2.5 border rounded-lg" />
                </div>
            </div>

            {/* Star Rating Filter */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Star Rating</h3>
                <select name="rating" value={filters.rating} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg">
                    <option value="">All Ratings</option>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <option key={star} value={star}>{star} Stars & Up</option>
                    ))}
                </select>
            </div>

            {/* Promotions Filter */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Promotions</h3>
                <div className="space-y-2">
                    {["10% off", "5% off", "Free Parking"].map((promo) => (
                        <label key={promo} className="flex items-center cursor-pointer p-2 rounded-lg">
                            <input type="checkbox" onChange={() => handleCheckboxChange("promotions", promo)} className="w-4 h-4" />
                            <span className="ml-3">{promo}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Nearby Attractions Filter */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Nearby Attractions</h3>
                <input type="text" name="nearbyAttractions" value={filters.nearbyAttractions} onChange={handleInputChange} placeholder="Enter an attraction" className="w-full p-2.5 border rounded-lg" />
            </div>

            {/* Amenities Filter */}
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Amenities</h3>
                <div className="space-y-2">
                    {["Wi-Fi", "Swimming Pool", "Gym", "Parking"].map((amenity) => (
                        <label key={amenity} className="flex items-center cursor-pointer p-2 rounded-lg">
                            <input type="checkbox" onChange={() => handleCheckboxChange("amenities", amenity)} className="w-4 h-4" />
                            <span className="ml-3">{amenity}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
                <button onClick={applyFilters} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Check</button>
                <button onClick={resetFilters} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Reset</button>
            </div>
        </div>
    );
};

export default Filtersidebar;
