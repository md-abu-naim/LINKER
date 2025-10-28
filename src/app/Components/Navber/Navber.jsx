'use client'
import Image from "next/image";
import Link from "next/link";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { LuMessageCircleHeart } from "react-icons/lu";
import { FaBell, FaEnvelope, FaBars, FaTimes, FaHome, FaUserFriends } from "react-icons/fa";
import ToggleSerchbar from "./ToggleSerchbar";
import { useState } from "react";


const Navber = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navLink = ["Home", "Explore", "Posts", "About"];

    const navLinks = <>
        <li className="hover:text-cyan-400 transition cursor-pointer"><Link href='/' ><FaHome className="text-3xl" /></Link></li>
        <li className="hover:text-cyan-400 transition cursor-pointer"><Link href='/explore'><MdOutlineOndemandVideo className="text-3xl" /></Link></li>
        <li className="hover:text-cyan-400 transition cursor-pointer"><Link href='/friends'><FaUserFriends className="text-3xl" /></Link></li>
    </>
    return (
        <div>
            <nav className="w-full bg-gray-900 border-b border-gray-800 shadow-md sticky z-50">
                <div className="px-4 py-3 flex justify-between items-center">
                    {/*Left: Logo + Serchbar */}
                    <div className="flex items-center gap-2 relative">
                        <Image src='/Logo.png' alt="Linker" className=" object-contain" width={40} height={30} />
                        <span className="hidden lg:block text-xl font-bold text-cyan-400">LINKER</span>
                        <ToggleSerchbar />
                    </div>

                    {/*Center: Navlinks */}
                    <ul className="flex items-center justify-center font-medium space-x-3">
                        {navLinks}
                    </ul>

                    {/* Right: Message, Notification, Avater Dropdwon */}
                    <div className="flex items-center gap-5">
                        <Link href='/notifications' title="Cart Items" className="relative">
                            <button className="text-2xl hover:text-cyan-400 transition-colors"><FaBell /></button>
                            <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">9+</span>
                        </Link>
                        <Link href='/message' title="Cart Items" className="relative">
                            <button className="text-2xl hover:text-cyan-400 transition-colors"><LuMessageCircleHeart /></button>
                            <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">9+</span>
                        </Link>
                        <div className="dropdown">
                            <button tabIndex={0} className="w-9 h-9 rounded-full overflow-hidden border-2 border-cyan-400">
                                <img
                                    src="https://i.pravatar.cc/150?img=12"
                                    alt="User"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                            <div tabIndex="-1" className="dropdown-content z-50 mt-3 bg-cyan-950 rounded-md shadow-lg w-40 py-2 border right-0 border-cyan-700">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Settings</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-700 text-red-400">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;
