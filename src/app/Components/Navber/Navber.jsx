import Image from "next/image";
import Link from "next/link";
import { LuMessageCircleHeart } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import Searchbar from "./Searchbar";
import NavLinks from "./NavLinks";
import { IoSettingsOutline } from "react-icons/io5";
import { MdFeedback, MdHelpOutline, MdLogout } from "react-icons/md";

const Navber = () => {
    return (
        <div>
            <nav className="w-full bg-gray-900 border-b border-gray-800 shadow-md sticky z-50">
                <div className="flex justify-between items-center pt-1 px-3 sm:px-4">

                    {/*Left: Logo + Searchbar */}
                    <div className="flex items-center gap-2">
                        <Image src='/Logo.png' alt="Linker" width={38} height={28} className="w-9 h-auto" />
                        <span className="hidden lg:block text-xl font-bold text-cyan-400">LINKER</span>
                        <div className="hidden md:block">
                            <Searchbar />
                        </div>
                    </div>

                    {/*Center: Navlinks */}
                    <div >

                        {/* {navLinks} */}
                        <NavLinks />

                        <div className="md:hidden p-2">
                            <Searchbar />
                        </div>
                    </div>

                    {/* Right: Message, Notification, Avater Dropdwon */}
                    <div className="flex items-center justify-between gap-2 sm:gap-5">
                        <Link href='/notifications' title="Notifications" className="relative bg-gray-800 p-1 px-1.5 rounded-full">
                            <button className="text-xl md:text-2xl hover:text-cyan-400 transition-colors"><FaBell /></button>
                            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-semibold rounded-full w-5 h-4 text-[11px] flex items-center justify-center">9+</span>
                        </Link>
                        <Link href='/message' title="Message" className="relative bg-gray-800 p-1 px-1.5 rounded-full">
                            <button className="text-xl md:text-2xl hover:text-cyan-400 transition-colors"><LuMessageCircleHeart /></button>
                            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-semibold rounded-full w-5 h-4 text-[11px] flex items-center justify-center">9+</span>
                        </Link>
                        {/* Dropdwon */}
                        <div title="Account" className="dropdown">
                            <button tabIndex={0} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-cyan-400">
                                <Image src="" alt="User" width={24} height={20} className="w-24 h-6" />
                            </button>
                            <div tabIndex="-1" className="dropdown-content z-50 mt-2 bg-gray-900 rounded-md shadow-lg w-2xs py-2 border right-0 border-cyan-700">
                                <Link href="/profile" className="flex items-center gap-2 p-3 mx-3 mb-3 border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                                    <Image src="" alt="User" width={24} height={20} className="inline-block w-9 h-9 border border-cyan-400 rounded-full " />
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-sm">Mohammad Abu Naim</span>
                                        <span className="text-gray-400 text-xs">View Profile</span>
                                    </div>
                                </Link>
                                <Link href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                    <span className="text-xl bg-gray-800 p-2 rounded-full"><IoSettingsOutline /></span>
                                    <span className="text-xl">Settings & Privacy</span>
                                </Link>
                                <Link href="/help&support" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                    <span className="text-xl bg-gray-800 p-2 rounded-full"><MdHelpOutline /></span>
                                    <span className="text-xl">Help & Support</span>
                                </Link>
                                <Link href="/help&support" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                    <span className="text-xl bg-gray-800 p-2 rounded-full"><MdFeedback /></span>
                                    <span className="text-xl">Give Feedback</span>
                                </Link>
                                <Link href="/help&support" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                    <span className="text-xl bg-gray-800 p-2 rounded-full"><MdLogout /></span>
                                    <span className="text-xl">Log Out</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;
