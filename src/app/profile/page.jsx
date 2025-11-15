import Image from "next/image";
import { FaHome, FaUser, FaUserFriends } from "react-icons/fa";
import { LuMessageCircleHeart } from "react-icons/lu";
import { FiBookmark, FiCalendar, FiHome, FiImage, FiUser, FiUsers } from "react-icons/fi";
import { IoMdTimer } from "react-icons/io";

const Profile = () => {
    const posts = [
        { id: 1, img: "https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp" },
        { id: 2, img: "https://i.postimg.cc/h4M3nDFf/Rose-Petal-Hydrating-Face-Mist.jpg" },
        { id: 3, img: "https://i.postimg.cc/0NmB17xs/Herbal-Strengthening-Hair-Oil.webp" },
        { id: 4, img: "https://i.postimg.cc/WbbCqDmG/Cocoa-Butter-Body-Lotion.jpg" },
        { id: 5, img: "https://i.postimg.cc/x1B4Ztw5/Exfoliating-Coffee-Body-Scrub.webp" },
    ];
    return (
        <div>
            <div className="">
                <div className="bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 shadow-[0_0_35px_rgba(0,0,0,0.5)]">
                    {/* Cover */}
                    <div className="flex items-center justify-center shadow-gray-300">
                        <Image
                            src="https://i.postimg.cc/MTvqpvT7/cover.jpg"
                            alt="Cover"
                            className="bg-cover rounded-b-md w-5xl h-[400px] shadow-2xl shadow-gray-700"
                            width={800} height={400}
                        />
                    </div>

                    {/* Profile & Name */}
                    <div className="flex items-center justify-between w-5xl mx-auto">
                        <div className="relative -mt-8 px-6 flex items-center gap-4">
                            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg ">
                                <Image
                                    src="https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"
                                    alt="Profile"
                                    className="object-cover w-full h-full"
                                    width={200} height={200}
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-semibold">Mohammmad Abu Naim</h2>
                                <span className="text-2xl font-medium">(Naim)</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="flex items-center bg-cyan-800 hover:bg-gray-900  hover:text-cyan-300 rounded-md p-2">
                                <span className="text-md">Follow</span>
                            </button>
                            <button className="bg-cyan-800 hover:bg-gray-900 hover:text-cyan-300 rounded-md p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-around mt-5 mx-auto max-w-5xl px-4 bg-gray-900 py-5 rounded-xl">
                        <div className="flex flex-col items-center bg-gray-800/50 hover:bg-gray-800 rounded-xl px-8 py-4 shadow hover:border border-gray-700 cursor-pointer transition">
                            <LuMessageCircleHeart className="text-3xl text-cyan-300" />
                            <span className="mt-1 text-sm">Message</span>
                        </div>
                        <div className="flex flex-col items-center bg-gray-800/50 hover:bg-gray-800 rounded-xl px-8 py-4 shadow hover:border border-gray-700 cursor-pointer transition">
                            <span className="text-3xl text-cyan-300 font-semibold">1,800</span>
                            <span className="mt-1 text-sm">Followers</span>
                        </div>

                        <div className="flex flex-col items-center bg-gray-800/50 hover:bg-gray-800 rounded-xl px-8 py-4 shadow hover:border border-gray-700 cursor-pointer transition">
                            <span className="text-3xl text-cyan-300 font-semibold">122</span>
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

            </div>

        </div>
    );
};

export default Profile;

