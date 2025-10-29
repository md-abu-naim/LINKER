import Link from "next/link";
import { FaHome, FaUser, FaUserFriends } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import NavLinks from "./NavLinks";

const MobileNavber = () => {
    return (
        <div>
            <nav className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-800 shadow-lg z-50 md:hidden">
                <ul className="flex justify-around items-center py-2">
                    {/* <li>
                        <Link href={'/'} className="flex flex-col items-center hover:text-cyan-400 transition-colors">
                            <FaHome className="text-2xl" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/frirends'} className="flex flex-col items-center hover:text-cyan-400 transition-colors">
                            <FaUserFriends className="text-2xl" />
                            <span>Friends</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/explore'} className="flex flex-col items-center hover:text-cyan-400 transition-colors">
                            <MdOutlineExplore className="text-2xl" />
                            <span>Explore</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/profile'} className="flex flex-col items-center hover:text-cyan-400 transition-colors">
                            <FaUser className="text-2xl" />
                            <span>Profile</span>
                        </Link>
                    </li> */}
                    <NavLinks />
                </ul>
            </nav>
        </div>
    );
};

export default MobileNavber;

