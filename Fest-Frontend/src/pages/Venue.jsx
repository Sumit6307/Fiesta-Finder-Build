import { useState, useEffect } from 'react';
import { MapPin, Users, Bed, Bath, Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

export default function Venue() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    
    const images = [
        "https://plus.unsplash.com/premium_photo-1664530452611-69a2895ce19d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519226612673-73c0234437ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1635341109410-c6e11be45553?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1640808653955-568dd65debb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
    ];

    const reviews = [
        {
            author: "Sarah M.",
            rating: 5,
            date: "December 2024",
            comment: "Beautiful property with amazing views. The host was very responsive and accommodating."
        },
        {
            author: "John D.",
            rating: 4,
            date: "November 2024",
            comment: "Great location and amenities. Would definitely stay again."
        }
    ];

    const houseRules = [
        "Check-in: After 3:00 PM",
        "Check-out: Before 11:00 AM",
        "No smoking",
        "No pets",
        "No parties or events",
        "Maximum 5 guests"
    ];

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setSelectedImage((prev) => (prev + 1) % images.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length]);

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % images.length);
        setIsAutoPlaying(false);
    };

    const previousImage = () => {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
        setIsAutoPlaying(false);
    };

    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] mx-auto">
            <Navbar2 />

            <div className="flex-grow container mx-auto px-4 py-8 mt-24">
                {/* Gallery with Slider */}
                <div className="mb-8 space-y-4">
                    <div className="relative h-[500px] rounded-lg overflow-hidden group">
                        <img
                            src={images[selectedImage]}
                            alt={`Venue view ${selectedImage + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500"
                        />
                        
                        <button 
                            onClick={previousImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            {selectedImage + 1} / {images.length}
                        </div>

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setSelectedImage(idx);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        selectedImage === idx 
                                            ? 'bg-white w-4' 
                                            : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                    aria-label={`Go to image ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 overflow-x-auto">
                        {images.slice(0, 4).map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setSelectedImage(idx);
                                    setIsAutoPlaying(false);
                                }}
                                className="relative group"
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className={`h-24 w-full object-cover rounded transition-all ${
                                        selectedImage === idx 
                                            ? 'ring-2 ring-blue-500' 
                                            : 'filter brightness-90 group-hover:brightness-100'
                                    }`}
                                />
                                <div className={`absolute inset-0 bg-black/10 rounded transition-opacity ${
                                    selectedImage === idx ? 'opacity-0' : 'group-hover:opacity-0'
                                }`} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {/* Main Content */}
                        <div className="bg-white rounded-lg shadow-md mb-8">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Gorgeous Villa Bay</h1>
                                        <div className="text-sm  flex items-center text-gray-600 mb-2">
                                            <MapPin className="w-5 h-5 mr-2" />
                                            <span className='text-xs md:text-base'>325 E 84th St, New York</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xl sm:text-2xl font-bold text-gray-800">$299/night</div>
                                        <div className=" flex items-center flex-row text-yellow-500">
                                            <Star className="w-5 h-5 fill-current" />
                                            <span className="text-sm md:text-normal ml-1">4.9 (128 reviews)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid  md:grid-cols-3 gap-4 mb-6">
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2" />
                                        <span>5 Guests</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Bed className="w-5 h-5 mr-2" />
                                        <span>2 Bedrooms</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Bath className="w-5 h-5 mr-2" />
                                        <span>1 Bathroom</span>
                                    </div>
                                </div>

                                <div className="border-t pt-6">
                                    <h2 className="text-2xl font-bold mb-4">About this space</h2>
                                    <p className="text-gray-600 mb-6">
                                        Welcome to our stunning Villa Bay! This spacious property offers breathtaking views 
                                        of the city skyline and modern amenities for a comfortable stay. Recently renovated 
                                        with designer furnishings, the space features floor-to-ceiling windows, a fully 
                                        equipped kitchen, and a private balcony perfect for morning coffee or evening 
                                        relaxation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Amenities Section */}
                        <div className="bg-white rounded-lg shadow-md mb-8">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-6">Amenities</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-blue-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d={amenity.icon}
                                                />
                                            </svg>
                                            <span className="font-medium">{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* House Rules */}
                        <div className="bg-white rounded-lg shadow-md mb-8">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-6">House Rules</h2>
                                <ul className="space-y-3">
                                    {houseRules.map((rule, index) => (
                                        <li key={index} className="flex items-center">
                                            <Clock className="w-5 h-5 mr-2 text-gray-600" />
                                            <span>{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Reviews */}
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-6">Reviews</h2>
                                <div className="space-y-6">
                                    {reviews.map((review, index) => (
                                        <div key={index} className="border-b last:border-b-0 pb-6 last:pb-0">
                                            <div className="flex justify-between mb-2">
                                                <div className="font-semibold">{review.author}</div>
                                                <div className="text-gray-500">{review.date}</div>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-gray-600">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md sticky top-24">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4">Book your stay</h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Check-in</label>
                                            <input
                                                type="date"
                                                className="w-full p-2 border rounded"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Check-out</label>
                                            <input
                                                type="date"
                                                className="w-full p-2 border rounded"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Guests</label>
                                        <select className="w-full p-2 border rounded">
                                            <option>1 guest</option>
                                            <option>2 guests</option>
                                            <option>3 guests</option>
                                            <option>4 guests</option>
                                            <option>5 guests</option>
                                        </select>
                                    </div>
                                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                                        Book Now
                                    </button>
                                    <div className="bg-blue-50 text-blue-800 p-3 rounded">
                                        You won&apos;t be charged yet
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

// Amenities data remains the same
const amenities = [
    {
        name: "Wifi",
        icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
    },
    {
        name: "TV",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
        name: "Heater",
        icon: "M9.7 17h4.6c.2 0 .4-.1.5-.2l2.7-2.7c.2-.2.2-.5 0-.7L13.1 9H5.7c-.2 0-.4.1-.5.2l-2.7 2.7c-.2.2-.2 .5 0 .7L6.9 17c.1.1.3.2.5.2h2.3z",
    },
    {
        name: "Iron",
        icon: "M19 9l-7 7-7-7",
    },
    {
        name: "Washer",
        icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z M12 8v4l3 3",
    },
    {
        name: "Essentials",
        icon: "M5 13l4 4L19 7",
    },
    {
        name: "Shampoo",
        icon: "M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
];