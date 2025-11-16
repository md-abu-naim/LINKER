import { FaBriefcase, FaGraduationCap, FaPhoneAlt } from "react-icons/fa";
import { FiHome, FiMapPin, FiUser, FiUsers } from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import { MdMarkEmailUnread } from "react-icons/md";

const Overview = () => {
    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 rounded-2xl backdrop-blur-xl p-4 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            {/* Works */}
            <div className="flex items-center gap-3 text-md hover:bg-gray-800 p-2 rounded-sm">
                <FaBriefcase className="text-3xl text-cyan-400" />
                <div className="flex flex-col">
                    <span className="font-medium">Full Stack Developer <span className="font-normal"> at</span> {'SM Technology'}</span>
                    <small className="text-gray-300 text-sm">2025 to present</small>
                </div>
            </div>

            {/* Educations */}
            <div className="">
                <div className="flex items-center gap-3 text-md hover:bg-gray-800 p-2 rounded-sm">
                    <FaGraduationCap className="text-3xl text-cyan-400" />
                    <span>Went to <span className="font-medium">{'Jamiya Mohammadia Khajuria Madrasha'}</span></span>
                </div>
                <div className="flex items-center gap-3 text-md hover:bg-gray-800 p-2 rounded-sm">
                    <FaGraduationCap className="text-4xl text-cyan-400" />
                    <span>Studied at <span className="font-medium">{'Al-Jamiatul Ahliah Darul Uloom Moinul Islam, Hathazari, Ctg, Bangladesh'}</span></span>
                </div>
            </div>

            {/* Lives & Locations */}
            <div className=" text-md">
                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <FiHome className="text-3xl text-cyan-400" />
                    <span>Lives in <span className="font-medium">{'Khajuria, Senbag, Noakhali'}</span></span>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <FiMapPin className="text-3xl text-cyan-400" />
                    <span>From <span className="font-medium">{'Senbag, Noakhali, Chittagang, Bangladesh'}</span></span>
                </div>
            </div>

            {/* Additionals */}
            <div className="text-md">
                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <FiUsers className="text-3xl text-cyan-400" />
                    <span>Followed by  <span className="font-medium">{'1000'}</span> peoples</span>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <LuShield className="text-3xl text-cyan-400" />
                    <span>Joined <span className="font-medium">{'Fabruary 2025'}</span></span>
                </div>
            </div>

            {/* Contacts */}
            <div className="text-md">
                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <FaPhoneAlt className="text-3xl text-cyan-400" />
                    <span>Phone: <span className="font-medium hover:underline hover:text-cyan-400">{'01882585833'}</span></span>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <MdMarkEmailUnread className="text-3xl text-cyan-400" />
                    <span>Email: <a href="mailto:" className="font-medium hover:underline hover:text-cyan-400">{'mohammadnaim.dev@gmail.com'}</a></span>
                </div>
            </div>

            {/* Basic info */}
            <div className="text-md">
                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <FiUser className="text-3xl text-cyan-400" />
                    <span>Gender: <span className="font-medium">{'Male'}</span></span>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <FiUser className="text-3xl text-cyan-400" />
                    <span>Birth: <span className="font-medium">{'Fabruary 2004'}</span></span>
                </div>
            </div>
        </div>
    );
};

export default Overview;