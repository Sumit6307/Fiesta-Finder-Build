import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import BlogCard from "../components/BlogCard"

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar />

            <div className="container max-w-[1400px] mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Blog</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, 
                        arcu nec ultricies ultricies, eros justo lacinia arcu, ac rhoncus justo 
                        purus nec sapien. Sed nec nunc id ante fermentum ultricies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>

            <Footer />
        </div>
    )
}