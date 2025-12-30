// 'use client';
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FaHome, FaUser, FaUserFriends } from "react-icons/fa";
// import { MdOutlineExplore } from "react-icons/md";

// const MobileNavber = () => {
//     const pathname = usePathname()

//     const navLinks = [
//         { href: '/', icon: <FaHome className="text-2xl" />, title: 'Home' },
//         { href: '/friends', icon: <FaUserFriends className="text-2xl" />, title: 'Friends' },
//         { href: '/explore', icon: <MdOutlineExplore className="text-2xl" />, title: 'Explore' },
//         { href: '/profile', icon: <FaUser className="text-2xl" />, title: 'Profile' },
//     ]

//     return (
//         <div>
//             <nav className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-800 shadow-lg z-50 md:hidden">
//                 <ul className="flex justify-around items-center">
//                     {
//                         navLinks?.map(link => (
//                             <li key={link.href} title={link.title} className={`${pathname === link.href && 'border-t-2 border-cyan-600'} py-2 px-3 hover:text-cyan-400 transition-colors`}>
//                                 <Link href={link.href} className="flex flex-col items-center">
//                                     {link.icon}
//                                     <span>{link.title}</span>
//                                 </Link>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default MobileNavber;

'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaUserFriends } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";

const MobileNavber = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", icon: <FaHome className="text-2xl" />, title: "Home" },
    { href: "/friends", icon: <FaUserFriends className="text-2xl" />, title: "Followers" },
    { href: "/explores", icon: <MdOutlineExplore className="text-2xl" />, title: "Explore" },
    { href: "/profile", icon: <FaUser className="text-2xl" />, title: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-800 shadow-lg md:hidden backdrop-blur-sm bg-opacity-90">
      <ul className="flex justify-around items-center">
        {navLinks.map((link) => (
          <li
            key={link.href}
            title={link.title}
            className={`${pathname === link.href && "border-t-2 border-cyan-600"} py-2 px-3 hover:text-cyan-400 transition-colors`}
          >
            <Link href={link.href} className="flex flex-col items-center text-sm">
              {link.icon}
              <span>{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavber;
