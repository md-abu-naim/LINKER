import { FaRegEye } from "react-icons/fa";

const Explore = () => {
    const videos = [
        { "_id": "0001", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4", "views": "150" },
        { "_id": "5552", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766984076/invideo-ai-1080_Full-Stack_Developer_Portfolio_Intro_2025-06-17_1_qyubpz.mp4", "views": "10" },
        { "_id": "0003", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4", "views": "1500" },
        { "_id": "5554", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4", "views": "150" },
        { "_id": "0005", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766984076/invideo-ai-1080_Full-Stack_Developer_Portfolio_Intro_2025-06-17_1_qyubpz.mp4", "views": "110" },
        { "_id": "5556", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4", "views": "150" },
        { "_id": "0007", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4", "views": "150" },
        { "_id": "5558", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766984076/invideo-ai-1080_Full-Stack_Developer_Portfolio_Intro_2025-06-17_1_qyubpz.mp4", "views": "154" },
        { "_id": "0009", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4", "views": "150" },
        { "_id": "0009", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4", "views": "1110" },
    ]
    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 max-w-5xl mx-auto my-2 rounded-2xl backdrop-blur-xl p-4 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold">Explores</h3>
            </div>

            {/* Explores Grid layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-4">
                {
                    videos.map((video, i) => (
                        <div key={i} className="relative border border-gray-500 rounded-lg">
                            <video src={video.video}
                                className="w-full h-68 object-cover rounded-lg"></video>
                            <div className="absolute left-2 bottom-0 flex items-center gap-1 text-white">
                                <FaRegEye className="text-xl" />
                                <span>{video.views}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Explore;