'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";

const NavLinks = () => {
    const pathname = usePathname()

    const navLinks = [
        { href: '/', icon:<FaHome className="text-2xl md:text-3xl" />, title: 'Home' },
        { href: '/friends', icon:<FaUserFriends className="text-2xl md:text-3xl" />, title: 'Home' },
        { href: '/explore', icon:<MdOutlineExplore className="text-2xl md:text-3xl" />, title: 'Home' },
    ]
    
    return (
        <ul className="hidden md:flex just items-center font-medium gap-6 lg:mr-24">
            {
                navLinks?.map((link) => (
                    <li key={link.href} className={`hover:text-cyan-400 ${pathname === link.href && 'text-cyan-500 border-cyan-600 border-b-2'} py-2 px-6 transition-colors`}>
                        <Link href={link.href} >
                            {link.icon}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default NavLinks;