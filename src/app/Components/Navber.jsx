'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBell, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";


const Navber = () => {
    const [query, setQuery] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = ["Home", "Explore", "Posts", "About"];
    const results = ["Naim Web Dev", "Dashboard", "Settings", "Messages"].filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );
    // const navLinks = <>
    //     <li><Link href='/' ><FaHome className="w-10 h-8" /></Link></li>
    //     <li><Link href='/reels'><MdOutlineOndemandVideo className="w-10 h-8" /></Link></li>
    //     <li><Link href='/friends'><FaUserFriends className="w-10 h-8" /></Link></li>
    // </>
    return (
        <div>
           <nav className="w-full bg-gray-900 border-b border-gray-800 shadow-md sticky z-50">
                <div className="px-4 py-3 flex justify-between items-center">
                    {/* Logo + Serchbar */}
                    <div className="flex items-center gap-2">
                        <Image src='/Logo.png' alt="Linker" className="w-10 h-10 object-contain" width={70} height={30} />
                        <span className="text-xl font-bold text-cyan-400">LINKER</span>

                        <div className="flex items-center bg-gray-800 rounded-full px-3 py-2 ml-3">
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
            </nav>
            <nav className="w-full bg-gray-900 text-gray-200 border-b border-gray-800 shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                    {/* LEFT: Logo + Search */}
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                        <span className="text-xl font-bold text-cyan-400">LINKER</span>

                        {/* Search (hidden on small) */}
                        <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1 ml-5">
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
                                placeholder="Search..."
                                className="bg-transparent outline-none text-sm px-2 w-32 focus:w-44 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* CENTER: Nav Links (hidden on mobile) */}
                    <ul className="hidden md:flex space-x-8 font-medium">
                        {navLinks.map((link) => (
                            <li
                                key={link}
                                className="hover:text-cyan-400 transition cursor-pointer"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT: Icons + Avatar */}
                    <div className="flex items-center gap-5">
                        {/* Notification Icon */}
                        <button className="relative hover:text-cyan-400 transition">
                            <FaBell size={20} />
                            <span className="absolute top-0 right-0 h-2 w-2 bg-magenta-500 rounded-full"></span>
                        </button>

                        {/* Message Icon */}
                        <button className="relative hover:text-cyan-400 transition">
                            <FaEnvelope size={20} />
                            <span className="absolute top-0 right-0 h-2 w-2 bg-magenta-500 rounded-full"></span>
                        </button>

                        {/* Avatar Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-9 h-9 rounded-full overflow-hidden border-2 border-cyan-400 hover:border-magenta-500 transition"
                            >
                                <img
                                    src="https://i.pravatar.cc/150?img=12"
                                    alt="User"
                                    className="w-full h-full object-cover"
                                />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-3 bg-gray-800 rounded-md shadow-lg w-40 py-2 border border-gray-700">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Settings</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-700 text-red-400">Logout</a>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden text-gray-200 hover:text-cyan-400 transition"
                        >
                            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="md:hidden bg-gray-900 border-t border-gray-800">
                        <ul className="flex flex-col items-center space-y-4 py-5">
                            {navLinks.map((link) => (
                                <li
                                    key={link}
                                    className="hover:text-cyan-400 transition cursor-pointer"
                                >
                                    {link}
                                </li>
                            ))}
                            <div className="flex items-center gap-3">
                                <FaBell size={20} className="hover:text-cyan-400" />
                                <FaEnvelope size={20} className="hover:text-cyan-400" />
                            </div>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navber;
