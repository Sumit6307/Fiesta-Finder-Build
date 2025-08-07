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
                <img src="data:image/png;base64,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" className="w-32 sm:mx-auto mb-4 transform hover:rotate-6 transition-transform duration-500" alt="Fiesta Finder Logo" />
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
