import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigation = [
    { title: "Features", path: "#features" },
    { title: "How it Works", path: "#how-it-works" },
    { title: "FAQ", path: "#faq" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">Fiesta Finder</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
                >
                  {item.title}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              >
                {item.title}
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
