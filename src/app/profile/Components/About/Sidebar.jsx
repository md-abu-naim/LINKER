'use client'
import Link from "next/link";
import { MdOutlineDashboard, MdOutlineInfo } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const path = usePathname()

    const navLinks = [
        { href: "/profile/about", icon: <MdOutlineDashboard />, label: "Overview" },
        { href: "/profile/about_customize_profile", icon: <LuSettings2 />, label: "Customize Profile" },
        { href: "/profile/about_work_and_education", icon: <FaGraduationCap />, label: "Work & Education" },
        { href: "/profile/about_lives_and_locations", icon: <FiMapPin />, label: "Lives & Locations" },
        { href: "/profile/about_information", icon: <MdOutlineInfo />, label: "Basic Information" }
    ]

    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 rounded-2xl backdrop-blur-xl p-4 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <h4 className="text-2xl font-bold mb-2">About</h4>
            <div className="flex flex-col space-y-1">
                {
                    navLinks.map(link => (
                        <Link key={link.href} href={link.href} className={`${path === link.href ? 'bg-gray-600/80 hover:bg-gray-500 text-cyan-400' : 'bg-gray-800/40 hover:bg-gray-800 hover:text-cyan-400 hover:shadow-[0_0_18px_rgba(0,255,200,0.08)]'} group flex items-center gap-3 p-2.5 rounded-xl  transition-all duration-300`}>
                            <span className={`text-lg bg-gray-900 p-2 rounded-lg group-hover:scale-110 transition-transform`}>{link.icon}</span>
                            <span className="text-md font-medium transition-colors">{link.label}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;