import { FaRegEye } from "react-icons/fa";

const Videos = () => {
    return (
        <div className="relative border border-gray-500 rounded-lg">
            <video src="https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4"
                className="w-full h-68 object-cover rounded-lg"></video>
            <div className="absolute left-2 bottom-0 flex items-center gap-1 text-white">
                <FaRegEye className="text-xl" />
                <span>150</span>
            </div>
        </div>
    );
};

export default Videos;