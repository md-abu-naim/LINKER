'use client'
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const ToggleSerchbar = () => {
    const [active, setActive] = useState(false);
    return (
        <div className="">
            <div onClick={() => setActive(!active)} className="lg:hidden bg-gray-800 rounded-full text-gray-400 p-2 w-8 h-8">
                <span><FaSearch></FaSearch></span>
            </div>
            <div className="">
                <div className={`${active} flex items-center bg-gray-800 rounded-full px-3 py-2 ml-3`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
                </svg>
                <input
                    type="search"
                    placeholder="Search Linker"
                    className="bg-transparent outline-none text-sm px-2 w-40 focus:w-44 transition-all duration-300"
                />
            </div>
            </div>
        </div>
    );
};

export default ToggleSerchbar;