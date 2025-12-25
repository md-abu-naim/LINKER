'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBookmark, FiCalendar, FiHome, FiImage, FiUser, FiUsers } from "react-icons/fi";
import { IoMdTimer } from "react-icons/io";

const Tabs = () => {
    const pathname = usePathname()

    const isActive = (route) => {
        if(route === '/profile') return pathname === '/profile'
       return pathname === route || pathname.startsWith(route + '_') || pathname.startsWith(route + '/');
    }

    return (
        <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap p-4 max-w-5xl mx-auto">
            <Link rel="noopener noreferrer" href="/profile" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${isActive('/profile') ? 'border border-b-0 text-cyan-400 font-medium' : 'border-b'} border-cyan-400 rounded-t-lg`}>
                <FiHome className="text-2xl" />
                <span>Posts</span>
            </Link>
            <Link rel="noopener noreferrer" href="/profile/about" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${isActive('/profile/about') ? 'border border-b-0 text-cyan-400 font-medium' : 'border-b'} border-cyan-400 rounded-t-lg`}>
                <FiUser className="text-2xl" />
                <span>About</span>
            </Link>
            <Link rel="noopener noreferrer" href="/profile/friends" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${isActive('/profile/friends') ? 'border border-b-0 text-cyan-400' : 'border-b'} border-cyan-400 rounded-t-lg`}>
                <FiUsers className="text-2xl" />
                <span>Friends</span>
            </Link>
            <Link rel="noopener noreferrer" href="/profile/photos" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${isActive('/profile/photos') ? 'border border-b-0 text-cyan-400 font-medium' : 'border-b'} border-cyan-400 rounded-t-lg`}>
                <FiImage className="text-2xl" />
                <span>Photos</span>
            </Link>
            <Link rel="noopener noreferrer" href="/profile/explore" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${isActive('/profile/explore') ? 'border border-b-0 text-cyan-400 font-medium' : 'border-b'} border-cyan-400 rounded-t-lg`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
                <span>Explores</span>
            </Link>
            <Link rel="noopener noreferrer" href="/profile/saved" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${isActive('/profile/saved') ? 'border border-b-0 text-cyan-400 font-medium' : 'border-b'} border-cyan-400 rounded-t-lg`}>
                <FiBookmark className="text-2xl" />
                <span>Saved</span>
            </Link>
            <Link rel="noopener noreferrer" href="/profile/memories" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${isActive('/profile/memories') ? 'border border-b-0 text-cyan-400 font-medium' : 'border-b'} border-cyan-400 rounded-t-lg`}>
                <IoMdTimer className="text-2xl" />
                <span>Memories</span>
            </Link>
            <Link rel="noopener noreferrer" href="/profile/events" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${isActive('/profile/events') ? 'border border-b-0 text-cyan-400 font-medium' : 'border-b'} border-cyan-400 rounded-t-lg`}>
                <FiCalendar className="text-2xl" />
                <span>Events</span>
            </Link>
        </div>
    );
};

export default Tabs;