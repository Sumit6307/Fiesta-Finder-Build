import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar2({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchChange = (e) => {
    onSearch(e.target.value);  // Pass the search value to the parent component
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <nav className="lg:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="flex items-center justify-between gap-4">
          <h2 className="hidden sm:block font-bold text-2xl text-indigo-600 cursor-pointer hover:text-indigo-700 transition-colors">
            Fiesta Finder
          </h2>
          <h2 className="block sm:hidden font-bold text-4xl text-indigo-600 cursor-pointer hover:text-indigo-700 transition-colors">
            E
          </h2>

          {/* Search */}
          <div className="md:ml-8 md:w-96">
            <form onSubmit={(e) => e.preventDefault()} className="w-full">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleSearchChange}  // Handle search input
                  className="w-full py-2 pl-12 pr-4 text-gray-500 border rounded-lg outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 transition-colors"
                />
              </div>
            </form>
          </div>

          <button className="cursor-pointer lg:hidden hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="text-4xl" />
          </button>
        </div>
      </nav>
    </div>
  );
}
