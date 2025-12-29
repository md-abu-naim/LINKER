import { FaRegEye } from "react-icons/fa";

const Explore = () => {
    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 max-w-5xl mx-auto my-2 rounded-2xl backdrop-blur-xl p-4 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold">Explores</h3>
            </div>

            {/* Explores Grid layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-4">
                <div className="relative border border-gray-500 rounded-lg">
                    <video src="https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4"
                        className="w-full h-68 object-cover rounded-lg"></video>
                    <div className="absolute left-2 bottom-0 flex items-center gap-1 text-white">
                        <FaRegEye className="text-xl" />
                        <span>150</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;