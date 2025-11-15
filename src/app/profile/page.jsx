import Image from "next/image";
import { LuMessageCircleHeart } from "react-icons/lu";
import { FiBookmark, FiCalendar, FiEdit2, FiHome, FiImage, FiLink, FiShare2, FiSlash, FiUser, FiUserPlus, FiUsers, FiUserX } from "react-icons/fi";
import { IoMdTimer } from "react-icons/io";
import Link from "next/link";
import { FaComment, FaShare, FaThumbsUp, FaVideo } from "react-icons/fa";
import { MediaInput } from "../Components/HomePage/MediaInput";
import { BsEmojiSunglasses } from "react-icons/bs";
import PostModal from "../Components/HomePage/PostModal";
import PostImage from "../Components/HomePage/PostImage";

const Profile = () => {
    return (
        <div>
            <div className="">
                {/* Full Profile Information */}
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
                        <div className="relative -mt-8 px-6 flex items-center flex-col lg:flex-row gap-4">
                            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg ">
                                <Image
                                    src="https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"
                                    alt="Profile"
                                    className="object-cover w-full h-full"
                                    width={200} height={200}
                                />
                            </div>
                            <div className="flex items-center flex-row lg:flex-col lg:items-start gap-2 lg:gap-0 mt-5">
                                <h2 className="text-4xl font-semibold text-center">Mohammmad Abu Naim <span className="text-2xl font-medium md:hidden">(Naim)</span></h2>
                                <span className="text-2xl font-medium hidden md:block">(Naim)</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <button className="flex items-center gap-1 bg-cyan-800 hover:bg-gray-900  hover:text-cyan-300 rounded-md p-2 px-4">
                                <span><FiUserPlus /></span>
                                <span className="text-md">Follow</span>
                            </button>

                            <div className="dropdown dropdown-center">
                                <button tabIndex={0} className="bg-cyan-800 hover:bg-gray-900 hover:text-cyan-300 rounded-md p-2">
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
                    <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap p-4 max-w-5xl mx-auto">
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-cyan-400">
                            <FiHome className="text-2xl" />
                            <span>Posts</span>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-cyan-400">
                            <FiUser className="text-2xl" />
                            <span>About</span>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-cyan-400">
                            <FiUsers className="text-2xl" />

                            <span>Followers</span>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-cyan-400">
                            <FiImage className="text-2xl" />
                            <span>Photos</span>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                            </svg>
                            <span>Explores</span>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-cyan-400">
                            <FiBookmark className="text-2xl" />
                            <span>Saved</span>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-cyan-400">
                            <IoMdTimer className="text-2xl" />
                            <span>Memories</span>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-cyan-400">
                            <FiCalendar className="text-2xl" />
                            <span>Events</span>
                        </a>
                    </div>
                </div>

                {/* Aside & Posts */}
                <div className="grid grid-cols-12 gap-6 max-w-5xl mx-auto mt-2 px-5 lg:px-0">

                    <div className="col-span-12 lg:col-span-5 border">aside</div>

                    <div className="col-span-12 lg:col-span-7">
                        <div className="rounded-3xl p-4 mt-4 md:mt-0 md:p-6 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 backdrop-blur-xl border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_50px_rgba(0,255,200,0.15)] transition-all duration-500 hover:-translate-y-1">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-3 md:mb-4">
                                <Link href='/profile'>
                                    <Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={50} height={50} className="w-9 h-9 md:w-12 md:h-12 border border-cyan-400 rounded-full hover:scale-105 transition-all duration-300" />
                                </Link>
                                <div className="flex flex-col">
                                    <h3 className="text-sm md:text-lg font-semibold text-gray-100">Mohammad Abu Naim</h3>
                                    <p className="text-xs md:text-sm text-gray-500">Share something inspiring ✨</p>
                                </div>
                            </div>

                            {/* Input field */}
                            <label htmlFor="my_modal_6" className="block w-full rounded-2xl bg-gray-800/60 text-gray-300 md:min-h-[90px] px-2 md:px-5 py-2 md:py-4  cursor-pointer hover:bg-gray-700/70 transition-all duration-300 border border-transparent hover:border-cyan-500">
                                <span className="opacity-70">What do you want to share today?</span>
                            </label>

                            {/* Buttons */}
                            <div className="hidden md:flex mt-4 items-center justify-around border-t border-gray-700 pt-4">
                                <button className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-xl hover:bg-gray-700/80 transition-all duration-300 group">
                                    <FaVideo className="text-red-500 text-xl group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-300 font-medium">Go Live</span>
                                </button>

                                <MediaInput />

                                <button className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-xl hover:bg-gray-700/80 transition-all duration-300 group">
                                    <BsEmojiSunglasses className="text-yellow-500 text-xl group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-300 font-medium">Feelings</span>
                                </button>
                            </div>
                        </div>

                        {/* Post Layout */}
                        <div className="rounded-3xl mt-3 mb-11 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-lg border border-gray-800 overflow-hidden transition-all duration-500">
                            {/* Header */}
                            <div className="flex items-center justify-between gap-3 px-4 py-2 border-b border-gray-700">
                                <div className="flex items-center gap-3">
                                    <Image className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover" src="https://i.postimg.cc/65X8XRRf/Face-Care.png" width={50} height={50} alt="User" />
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-sm md:text-lg">Mohammad Abu Naim</span>
                                        <span className="text-gray-400 text-sm">24 hours ago · 🌍 Public</span>
                                    </div>
                                </div>
                                <button className="p-2 rounded-full hover:bg-gray-700 transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                                    </svg>
                                </button>
                            </div>

                            {/* Post Content */}
                            <div className="p-4">
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Just finished working on my new full-stack project! 🚀 Feeling super excited about the progress.
                                </p>

                                <PostImage />
                            </div>

                            {/* Engagement Bar */}
                            <div className="flex items-center justify-around gap-3 py-2 md:py-1 border-t border-gray-700">
                                <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                                    <FaThumbsUp />
                                    <span>20</span>
                                </button>
                                <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                                    <FaComment />
                                    <span>24</span>
                                </button>
                                <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                                    <FaShare />
                                    <span>8</span>
                                </button>
                            </div>
                        </div>

                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <PostModal />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;

