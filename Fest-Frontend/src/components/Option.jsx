import { useState, useEffect, useRef } from "react";

export default function Option(prop) {
    console.log(prop.id , prop.options)
    const [showDropdown, setShowDropdown] = useState(false);
    // const [selectedOption, setSelectedOption] = useState(options[0]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="flex items-center space-x-4">
                <div className="relative" ref={dropdownRef}>
                    <button
                        className="border-2 px-4 py-2 rounded-lg border-blue-500"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        {prop.id}
                    </button>
                    {showDropdown && (
                        <div className="absolute z-10 top-12 left-0 w-48 bg-white rounded-lg border-2  border-blue-400  py-2">
                            {prop.options.map((option, index) => (
                                <a href="#" key={index} className="block px-4 py-2 hover:bg-blue-100">
                                    {option}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}