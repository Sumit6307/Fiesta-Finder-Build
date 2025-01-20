import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar2() {
    const [isOpen, setIsOpen] = useState(false)
    
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
                                    className="w-full py-2 pl-12 pr-4 text-gray-500 border rounded-lg outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 transition-colors"
                                />
                            </div>
                        </form>
                    </div>

                    <button className="cursor-pointer lg:hidden hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(!isOpen)}>   
                        <Menu className="text-4xl" />
                    </button>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} lg:block transition-all duration-300 ease-in-out`}>
                    <ul className="lg:flex lg:items-center lg:space-x-8">
                        <li className="text-gray-600 hover:text-indigo-600 cursor-pointer py-2 lg:py-0 transition-colors">Home</li>
                        <li className="text-gray-600 hover:text-indigo-600 cursor-pointer py-2 lg:py-0 transition-colors">About</li>
                        <li className="text-gray-600 hover:text-indigo-600 cursor-pointer py-2 lg:py-0 transition-colors">Services</li>
                        <li className="text-gray-600 hover:text-indigo-600 cursor-pointer py-2 lg:py-0 transition-colors">Contact</li>
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg">
                            Get Started
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
