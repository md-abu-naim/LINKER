import Link from "next/link";
import { FiBookmark, FiCalendar, FiHome, FiImage, FiUser, FiUsers } from "react-icons/fi";
import { IoMdTimer } from "react-icons/io";

const Tabs = () => {
    return (
        <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap p-4 max-w-5xl mx-auto">
            <Link rel="noopener noreferrer" href="/profile" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-cyan-400">
                <FiHome className="text-2xl" />
                <span>Posts</span>
            </Link>
            <Link rel="noopener noreferrer" href="/profile/about" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-cyan-400">
                <FiUser className="text-2xl" />
                <span>About</span>
            </Link>
            <Link rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-cyan-400">
                <FiUsers className="text-2xl" />
                <span>Followers</span>
            </Link>
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
    );
};

export default Tabs;