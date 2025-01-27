import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white">
            <NavBar />

            <div className="container max-w-[1400px] mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center mb-16 animate__animated animate__fadeIn">
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-6 transition-all duration-500 hover:text-indigo-600">
                        Fiesta Blog
                    </h1>
                    <p className="text-lg text-gray-500 leading-relaxed mb-6 opacity-75 hover:opacity-100 transition-opacity duration-500">
                        Dive into wedding planning tips, real-life stories, and the latest trends to make your special day truly unforgettable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Cards with different content */}
                    <BlogCard 
                        title="Unforgettable Venues" 
                        description="Discover unique and breathtaking wedding venues to set the perfect stage for your big day." 
                        imgSrc="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <BlogCard 
                        title="Creative Wedding Themes" 
                        description="Get inspired with creative wedding themes to reflect your personality and love story." 
                        imgSrc="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <BlogCard 
                        title="Glamorous Wedding Styles" 
                        description="Find glamorous and elegant wedding styling ideas to make your day shine." 
                        imgSrc="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}
