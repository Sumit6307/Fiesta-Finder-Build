import { Link } from "react-router-dom";

export default function Footer() {
    const footerNavs = [
        { to: '/about', name: 'About Us' },
        { to: '/blog', name: 'Blog' },
        { to: '/', name: 'Home' },
        { to: '/team', name: 'Our Team' },
        { to: '/careers', name: 'Careers' },
        { to: '/policy', name: 'Privacy Policies' }
    ];

    return (
        <footer className="w-full bg-white text-gray-800 py-16 px-8 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
            <div className="max-w-lg sm:mx-auto sm:text-center transform hover:scale-105 transition-transform duration-500">
                <img src="https://www.floatui.com/logo.svg" className="w-32 sm:mx-auto mb-4 transform hover:rotate-6 transition-transform duration-500" alt="Fiesta Finder Logo" />
                <p className="leading-relaxed text-lg font-light mt-4 opacity-80 hover:opacity-100 transition-opacity duration-500">
                    Discover the most exquisite wedding planning services with Fiesta Finder. From themes to venues, we ensure perfection in every detail.
                </p>
            </div>

            <div className="mt-12">
                <ul className="flex flex-wrap justify-center space-x-8 text-lg font-semibold">
                    {footerNavs.map((item, idx) => (
                        <li key={idx} className="group relative">
                            <Link 
                                to={item.to}
                                className="text-gray-800 hover:text-indigo-500 transition-colors duration-300 ease-in-out"
                            >
                                {item.name}
                                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 transform origin-left"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-12 text-center">
                <div className="opacity-80 hover:opacity-100 transition-opacity duration-500">
                    <p>&copy; 2025 Fiesta Finder. Crafted with passion for your perfect day.</p>
                </div>
            </div>

            <div className="mt-10 flex justify-center space-x-8">
                <ul className="flex space-x-6">
                    <li className="transform hover:scale-110 transition-transform duration-300 hover:rotate-6">
                        <a href="javascript:void()" className="text-gray-800 hover:text-indigo-400">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-15l-1.45 1.45 4.45 4.45H6v2h10.45L12 17.45 13.45 19l7-7-7-7L12 5z"></path>
                            </svg>
                        </a>
                    </li>

                    <li className="transform hover:scale-110 transition-transform duration-300 hover:rotate-6">
                        <a href="javascript:void()" className="text-gray-800 hover:text-indigo-400">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 9V3H7v6H2v3h5v6h3v-6h5V9h-5z"></path>
                            </svg>
                        </a>
                    </li>

                    <li className="transform hover:scale-110 transition-transform duration-300 hover:rotate-6">
                        <a href="javascript:void()" className="text-gray-800 hover:text-indigo-400">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 12l-7-6v4H3v4h13v4l7-6z"></path>
                            </svg>
                        </a>
                    </li>

                    <li className="transform hover:scale-110 transition-transform duration-300 hover:rotate-6">
                        <a href="javascript:void()" className="text-gray-800 hover:text-indigo-400">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12l-7-6v4H3v4h11v4l7-6z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
