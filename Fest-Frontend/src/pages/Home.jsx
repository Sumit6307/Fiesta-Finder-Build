import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import Filtersidebar from "../components/Filtersidepanel";
import HotelCard from "../components/HotelCard"; // Import the HotelCard component
import SortDropdown from "../components/SortDropdown"; // Import SortDropdown
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import { Skeleton } from "../components/Skeleton"; // For loading skeletons
import { FaArrowUp } from "react-icons/fa";

export default function HomePage() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page (starts from 1)
  const [hotelsPerPage] = useState(15); // Number of hotels per page
  const [totalPages, setTotalPages] = useState(1); // Total number of pages
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Sort By");
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 300000,
    location: "",
    promotions: [],
    amenities: [],
    nearbyAttractions: [],
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Fetch data from the public folder
  useEffect(() => {
    fetch("/hotels.json")
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        setFilteredHotels(data);
        setTotalPages(Math.ceil(data.length / hotelsPerPage)); // Calculate total pages
        setIsLoading(false); // Data loaded
      })
      .catch((error) => {
        console.error("Error fetching hotels data:", error);
        setIsLoading(false); // Stop loading on error
      });
  }, []);

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredHotels(filtered);
    setTotalPages(Math.ceil(filtered.length / hotelsPerPage)); // Recalculate pages after search
    setCurrentPage(1); // Reset to first page after search
  };

  // Sort functionality
  const handleSort = (option) => {
    setSortOption(option);
    let sortedHotels = [...filteredHotels];

    if (option === "Price: Low to High") {
      sortedHotels.sort((a, b) => a.price - b.price);
    } else if (option === "Price: High to Low") {
      sortedHotels.sort((a, b) => b.price - a.price);
    } else if (option === "Newest") {
      // Sort by MongoDB _id (newest first)
      sortedHotels.sort((a, b) => {
        const timestampA = parseInt(a._id.substring(0, 8), 16);
        const timestampB = parseInt(b._id.substring(0, 8), 16);
        return timestampB - timestampA;
      });
    } else if (option === "Oldest") {
      // Sort by MongoDB _id (oldest first)
      sortedHotels.sort((a, b) => {
        const timestampA = parseInt(a._id.substring(0, 8), 16);
        const timestampB = parseInt(b._id.substring(0, 8), 16);
        return timestampA - timestampB;
      });
    }

    setFilteredHotels(sortedHotels);
    setTotalPages(Math.ceil(sortedHotels.length / hotelsPerPage)); // Recalculate pages after sorting
    setCurrentPage(1); // Reset to first page after sorting
  };

  // Apply filters whenever filters change
  useEffect(() => {
    const filtered = hotels.filter((hotel) => {
      const matchesPrice =
        hotel.price >= filters.minPrice && hotel.price <= filters.maxPrice;
      const matchesLocation = hotel.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());
      const matchesPromotions =
        filters.promotions.length === 0 ||
        filters.promotions.some((promotion) =>
          hotel.promotions.includes(promotion)
        );
      const matchesAmenities =
        filters.amenities.length === 0 ||
        filters.amenities.every((amenity) => hotel.amenities.includes(amenity));
      const matchesAttractions =
        filters.nearbyAttractions.length === 0 ||
        filters.nearbyAttractions.some((attraction) =>
          hotel.nearbyAttractions.includes(attraction)
        );

      return (
        matchesPrice &&
        matchesLocation &&
        matchesPromotions &&
        matchesAmenities &&
        matchesAttractions
      );
    });

    setFilteredHotels(filtered);
    setTotalPages(Math.ceil(filtered.length / hotelsPerPage)); // Recalculate pages after filtering
    setCurrentPage(1); // Reset to first page after filtering
  }, [filters, hotels]);

  // Reset filters
  const handleResetFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 300000,
      location: "",
      promotions: [],
      amenities: [],
      nearbyAttractions: [],
    });
  };

  // Get hotels for the current page
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);

  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Monitor scroll to toggle the scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar2 onSearch={handleSearch} />

      {/* Filter / Sorting Section */}
      <div className="flex flex-col md:flex-row mt-20 md:mt-28 p-2 md:p-4 gap-2 md:gap-4">
        {/* Sidebar - Hidden on smaller screens */}
        <div className="hidden md:block md:sticky md:top-28 h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
          <Filtersidebar
            onFilterChange={setFilters}
            onResetFilters={handleResetFilters}
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between px-2 md:px-4">
            <motion.div
              className="px-5 md:px-4 text-2xl font-normal"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-medium">Search For -</span>{" "}
              {searchQuery || "Ely Parkway Apartment"}
            </motion.div>
            <SortDropdown
              id="Sort"
              options={[
                "Sort By",
                "Price: Low to High",
                "Price: High to Low",
                "Newest",
                "Oldest",
              ]}
              onSelect={handleSort}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 px-2 md:px-4">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                {Array.from({ length: hotelsPerPage }).map((_, index) => (
                  <Skeleton key={index} />
                ))}
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatePresence>
                  {currentHotels.map((hotel) => (
                    <motion.div
                      key={hotel._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HotelCard hotel={hotel} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>

          {/* Pagination */}
          <motion.div
            className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
              <motion.button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Previous
              </motion.button>
              <div>
                Page {currentPage} of {totalPages}
              </div>
              <motion.button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <motion.button
          className="fixed bottom-10 right-10 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-50"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  );
}
