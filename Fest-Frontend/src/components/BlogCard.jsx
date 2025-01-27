export default function BlogCard({ title, description, imgSrc }) {
    return (
        <div className="max-w-lg overflow-hidden bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-indigo-500 transition-all duration-500 ease-in-out hover:rotate-2">
            <div className="relative">
                <img
                    src={imgSrc}
                    className="w-full h-[300px] object-cover rounded-t-lg transform hover:scale-110 hover:rotate-3 transition-all duration-700 ease-in-out"
                    alt="Wedding Image"
                />
            </div>
            
            <div className="p-6">
                {/* Title with hover effect */}
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-all duration-300 ease-in-out">{title}</h1>
                    <span className="px-3 py-1 text-sm text-indigo-600 bg-indigo-100 rounded-full">Featured</span>
                </div>
                
                {/* Description with hover effect */}
                <h2 className="text-lg font-medium text-gray-700 mb-3 hover:text-indigo-500 transition-colors duration-300 ease-in-out">{description}</h2>
                
                {/* Short preview of the content */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 hover:text-gray-800 transition-all duration-500">
                    Explore more about {title} and learn how to make your wedding day an unforgettable experience with unique ideas.
                </p>
            </div>
        </div>
    );
}
