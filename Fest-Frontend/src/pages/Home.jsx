import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import Filtersidebar from "../components/Filtersidepanel";
import HotelCard from "../components/HotelCard"; // Import the HotelCard component
import SortDropdown from "../components/SortDropdown"; // Import SortDropdown instead of Option
import { useState, useEffect } from "react";

export default function HomePage() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [currentPage] = useState("1");
  const [pages] = useState(["1", "2", "3", "...", "8", "9", "10"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Sort By");

  // Fetch data from the public folder
  useEffect(() => {
    fetch("/hotels.json")
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        setFilteredHotels(data);
      })
      .catch((error) => console.error("Error fetching hotels data:", error));
  }, []);

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredHotels(filtered);
  };

  // Sort functionality
  const handleSort = (option) => {
    setSortOption(option);
    let sortedHotels = [...filteredHotels];

    if (option === "Price: Low to High") {
      sortedHotels = sortedHotels.sort((a, b) => a.price - b.price);
    } else if (option === "Price: High to Low") {
      sortedHotels = sortedHotels.sort((a, b) => b.price - a.price);
    } else if (option === "Newest") {
      sortedHotels = sortedHotels.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (option === "Oldest") {
      sortedHotels = sortedHotels.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredHotels(sortedHotels);
  };

  return (
    <div className="min-h-screen">
      <Navbar2 onSearch={handleSearch} />  {/* Pass search function to Navbar2 */}

      {/* Filter / Sorting */}
      <div className="flex flex-col md:flex-row mt-20 md:mt-28 p-2 md:p-4 gap-2 md:gap-4">
        {/* Sidebar - Hidden on smaller screens */}
        <div className="hidden md:block md:sticky md:top-28 h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
          <Filtersidebar className="w-64" />
        </div>

        <div>
          <div className="flex items-center justify-between px-2 md:px-4">
            <div className="px-5 md:px-4 text-2xl font-normal">
              <span className="font-medium">Search For -</span> {searchQuery || "Ely Parkway Apartment"}
            </div>
            <SortDropdown  // Use SortDropdown instead of Option
              id="Sort"
              options={[
                "Sort By",
                "Price: Low to High",
                "Price: High to Low",
                "Newest",
                "Oldest",
              ]}
              onSelect={handleSort}  // Pass handleSort to SortDropdown
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 px-2 md:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
              {filteredHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
          <a
            href="javascript:void(0)"
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
          >
            Previous
          </a>
          <div>
            Page {currentPage} of {pages.length}
          </div>
          <a
            href="javascript:void(0)"
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
