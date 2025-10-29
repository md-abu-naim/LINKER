import Image from "next/image";
import Link from "next/link";
import { MdOutlineExplore } from "react-icons/md";
import { LuMessageCircleHeart } from "react-icons/lu";
import { FaBell, FaHome, FaUser, FaUserFriends } from "react-icons/fa";
import Searchbar from "./Searchbar";
import NavLinks from "./NavLinks";


const Navber = () => {

    const navLinks = <>
        <li className="hover:text-cyan-400 transition cursor-pointer"><Link href='/' ><FaHome className="text-xl md:text-3xl" /></Link></li>
        <li className="hover:text-cyan-400 transition cursor-pointer"><Link href='/explore'><MdOutlineExplore className="text-xl md:text-3xl" /></Link></li>
        <li className="hover:text-cyan-400 transition cursor-pointer"><Link href='/friends'><FaUserFriends className="text-xl md:text-3xl" /></Link></li>

    </>
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
                        <Link href='/notifications' title="Notifications" className="relative">
                            <button className="text-2xl hover:text-cyan-400 transition-colors"><FaBell /></button>
                            <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-white font-semibold rounded-full w-4 h-4 text-[10px] flex items-center justify-center">9+</span>
                        </Link>
                        <Link href='/message' title="Message" className="relative z-10">
                            <button className="text-2xl hover:text-cyan-400 transition-colors"><LuMessageCircleHeart /></button>
                            <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">9+</span>
                        </Link>
                        <div className="dropdown">
                            <button tabIndex={0} className="w-7 h- sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-cyan-400">
                                <Image src="" alt="User" width={24} height={20} className="w-24 h-6" />
                            </button>
                            <div tabIndex="-1" className="dropdown-content z-50 mt-2 bg-cyan-950 rounded-md shadow-lg w-40 py-2 border right-0 border-cyan-700">
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
