import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import CoverImage from "./CoverImage";

const CustomizeProfile = () => {
    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 space-y-2 rounded-2xl backdrop-blur-xl p-4 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <div className="space-y-2">
                <input type="checkbox" id="toggleCover" className="peer hidden" />
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Cover</h3>
                    <label htmlFor="toggleCover" className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                        <FiEdit className="text-xl" />
                        <span className="text-md">Edit Cover</span>
                    </label>
                </div>

                <CoverImage />

                <div className="flex items-center justify-center shadow-gray-300 border-2 border-cyan-400 rounded-md p-1">
                    <Image
                        src="https://i.postimg.cc/MTvqpvT7/cover.jpg"
                        alt="Cover"
                        className="object-cover rounded-md w-5xl max-h-40 md:max-h-80 shadow-2xl shadow-gray-700"
                        width={800} height={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomizeProfile;