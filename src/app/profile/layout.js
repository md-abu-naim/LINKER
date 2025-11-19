import Image from "next/image";
import { LuMessageCircleHeart } from "react-icons/lu";
import { FiEdit2, FiLink, FiShare2, FiSlash, FiUserPlus, FiUserX } from "react-icons/fi";
import Link from "next/link";
import Tabs from "./Components/Tabs";

const ProfileLayout = ({ children }) => {
    return (
        <div>
            <div className="">
                {/* Profile Information */}
                <div className="bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 shadow-[0_0_35px_rgba(0,0,0,0.5)]">
                    {/* Cover */}
                    <div className="flex items-center justify-center shadow-gray-300">
                        <Image
                            src="https://i.postimg.cc/MTvqpvT7/cover.jpg"
                            alt="Cover"
                            className="object-cover rounded-b-md w-5xl max-h-40 md:max-h-80 lg:max-h-96 shadow-2xl shadow-gray-700"
                            width={800} height={400}
                        />
                    </div>

                    {/* Profile & Name */}
                    <div className="flex items-center flex-col lg:flex-row justify-between lg:w-5xl mx-auto">
                        <div className="relative -mt-8 px-6 flex items-center flex-col lg:flex-row lg:gap-4">
                            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg ">
                                <Image
                                    src="https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"
                                    alt="Profile"
                                    className="object-cover w-full h-full"
                                    width={200} height={200}
                                />
                            </div>
                            <div className="flex items-center flex-row lg:flex-col lg:items-start gap-2 lg:gap-0 lg:mt-5">
                                <h2 className="text-4xl font-semibold text-center">Mohammmad Abu Naim <span className="text-2xl font-medium md:hidden">(Naim)</span></h2>
                                <span className="text-2xl font-medium hidden md:block">(Naim)</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <button className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2 px-4">
                                <span><FiUserPlus /></span>
                                <span className="text-md">Follow</span>
                            </button>
                            <Link href={'profile/about_customize_profile'} className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2 px-4">
                                <span><FiEdit2 /></span>
                                <span className="text-md">Edit Profile</span>
                            </Link>

                            <div className="dropdown dropdown-center">
                                <button tabIndex={0} className="bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                                    </svg>
                                </button>
                                <ul tabIndex="-1" className="dropdown-content menu mt-0.5 bg-gray-900 rounded-box z-50 w-52 p-2 shadow-lg border border-cyan-700">
                                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                        <span className=" bg-gray-800 p-2 rounded-full"><FiEdit2 /></span>
                                        <span className="">Edit Profile</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                        <span className=" bg-gray-800 p-2 rounded-full"><FiUserX /></span>
                                        <span className="">Unfollow</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                        <span className=" bg-gray-800 p-2 rounded-full"><FiSlash /></span>
                                        <span className="">Block</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                        <span className=" bg-gray-800 p-2 rounded-full"><FiShare2 /></span>
                                        <span className="">Share</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                        <span className=" bg-gray-800 p-2 rounded-full"><FiLink /></span>
                                        <span className=""> Copy Profile ID</span>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-around flex-row mt-5 mx-auto md:max-w-5xl md:px-4 bg-gray-900 py-5 rounded-xl">
                        <Link href={'/message'} className="flex flex-col items-center bg-gray-800/50 hover:bg-gray-800 rounded-xl px-4 md:px-8 py-2 md:py-4 shadow hover:border border-gray-700 cursor-pointer transition">
                            <LuMessageCircleHeart className="text-3xl text-cyan-300" />
                            <span className="mt-1 text-sm">Message</span>
                        </Link>
                        <div className="flex flex-col items-center bg-gray-800/50 hover:bg-gray-800 rounded-xl px-4 md:px-8 py-2 md:py-4 shadow hover:border border-gray-700 cursor-pointer transition">
                            <span className="text-2xl md:text-3xl text-cyan-300 font-semibold">1,800</span>
                            <span className="mt-1 text-sm">Followers</span>
                        </div>

                        <div className="flex flex-col items-center bg-gray-800/50 hover:bg-gray-800 rounded-xl px-4 md:px-8 py-2 md:py-4 shadow hover:border border-gray-700 cursor-pointer transition">
                            <span className="text-2xl md:text-3xl text-cyan-300 font-semibold">122</span>
                            <span className="mt-1 text-sm">Total Posts</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <Tabs />
                </div>

            </div>
            {children}
        </div>
    );
};

export default ProfileLayout;