import Image from "next/image";
import Link from "next/link";
import { FaBookmark, FaUserFriends } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdTimer } from "react-icons/io";
import { MdFeedback, MdHelpOutline, MdNotListedLocation, MdOutlineExplore } from "react-icons/md";
import { LuMessageCircleHeart } from "react-icons/lu";

const LeftAside = () => {

    const navLinks = [
        { href: "/friends", icon: <FaUserFriends />, color: "text-blue-400", label: "Friends" },
        { href: "/explore", icon: <MdOutlineExplore />, color: "text-red-400", label: "Explore Videos" },
        { href: "/saved", icon: <FaBookmark />, color: "text-purple-400", label: "Saved Favorites" },
        { href: "/message", icon: <LuMessageCircleHeart />, color: "text-pink-400", label: "Messages" },
        { href: "/memories", icon: <IoMdTimer />, color: "text-cyan-400", label: "Memories" },
        { href: "/settings", icon: <IoSettingsOutline />, color: "text-gray-300", label: "Settings" },
        { href: "/help&support", icon: <MdHelpOutline />, color: "text-yellow-400", label: "Help & Support" },
        { href: "/feedback", icon: <MdFeedback />, color: "text-green-400", label: "Give Feedback" },
    ]
    return (
        <>
            <div className="space-y-4">
                {/* Profile Card */}
                <Link href={'/profile'}>
                    <div className="relative bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 rounded-2xl p-4 shadow-[0_0_35px_rgba(0,0,0,0.5)] border border-gray-800 overflow-hidden group transition-all duration-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.25)] hover:-translate-y-1">
                        <div className="relative h-24 w-full rounded-xl overflow-hidden">
                            <Image className="w-full h-full object-cover bg-cover brightness-[0.85] group-hover:brightness-100 transition-all duration-300" src={'https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg'} alt="Cover Image" width={700} height={120} />
                        </div>
                        <div className="relative -mt-10 flex flex-col items-center z-10">
                            <div className="relative">
                                <Image className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] object-cover bg-gray-900" src={'https://i.postimg.cc/65X8XRRf/Face-Care.png'} alt="Profile Image" width={110} height={110} />
                                <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-gray-900"></div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mt-2 tracking-wide">Mohammad Abu Naim</h3>
                            <p className="text-gray-400 text-[13px] text-center leading-relaxed mt-1 px-3">FullStack Developer | Frontend Developer | React | Next.js | Node.js | MERN Stack | MongoDB | Web App</p>
                            <div className="flex items-center justify-center gap-2 mt-2 text-gray-400 text-sm">
                                <MdNotListedLocation className="text-cyan-400 text-base" />
                                <span>Noakhali, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Sidebar */}
                <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 rounded-2xl backdrop-blur-xl p-4 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                    <h4 className="text-gray-400 text-sm font-semibold px-3 mb-3 uppercase tracking-wider">Quick Access</h4>
                    <div className="flex flex-col space-y-0.5">
                        {
                            navLinks.map(link => (
                                <Link key={link.href} href={link.href} className="group flex items-center gap-3 p-2.5 rounded-xl bg-gray-800/40 hover:bg-gray-700/60 hover:shadow-[0_0_18px_rgba(0,255,200,0.08)] transition-all duration-300">
                                    <span className={`${link.color} text-lg bg-gray-900 p-2 rounded-lg group-hover:scale-110 transition-transform`}>{link.icon}</span>
                                    <span className="text-gray-200 text-md font-medium group-hover:text-cyan-400 transition-colors">{link.label}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftAside;