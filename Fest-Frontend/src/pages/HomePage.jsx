import Footer from "../components/Footer"
import Navbar2 from "../components/Navbar2"
import Filtersidebar from '../components/Filtersidepanel'
import Card from "../components/Card"
import Option from "../components/Option"
import { useState } from 'react'

export default function HomePage() {

    const [pages] = useState(["1", "2", "3", "...", "8", "9", "10"])
    const [currentPage] = useState("1")

    return (
        <div className="min-h-screen">
            <Navbar2 />

            {/* Filter / Sorting */}
            <div className="flex flex-col md:flex-row mt-20 md:mt-28 p-2 md:p-4 gap-2 md:gap-4">
                {/* Sidebar - Hidden on smaller screens */}
                <div className="hidden md:block md:sticky md:top-28 h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                    <Filtersidebar className="w-64" />
                </div>

                <div>
                    <div className="flex items-center justify-between px-2 md:px-4">
                        <div className="px-5 md:px-4 text-2xl font-normal"><span className="font-medium">Search For -</span> Ely Parkway Apartment</div>
                        <Option 
                            id="Sort" 
                            options={["Sort By", "Price: Low to High", "Price: High to Low", "Newest", "Oldest"]}
                        />
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1 px-2 md:px-4">
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />

                        </div>
                    </div>
                </div>

            </div>

            {/* Pagination */}
            <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
                <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Previous</a>
                <div>
                    Page {currentPage} of {pages.length}
                </div>
                <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Next</a>
            </div>
            </div>
            <Footer />
        </div>
    )
}