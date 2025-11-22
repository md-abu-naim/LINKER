'use client'
import Image from "next/image";
import { FaPhotoVideo } from "react-icons/fa";

const CoverImage = () => {
    return (
        <div>
            {/* <div className="space-y-5 hidden peer-checked:block bg-gray-950/40 p-6 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,255,255,0.04)] mt-2">
                <div className="flex items-center justify-center shadow-gray-300 p-1">
                    <Image
                        src="https://i.postimg.cc/MTvqpvT7/cover.jpg"
                        alt="Cover"
                        className="object-cover rounded-md w-5xl max-h-40 md:max-h-80 shadow-2xl shadow-gray-700"
                        width={800} height={400}
                    />
                </div>
                <button onClick={() => document.getElementById('fileInput').click()} className="flex items-center gap-2 py-2 rounded-xl hover:bg-gray-700 hover:text-cyan-400 border border-cyan-400 transition-all duration-300 group">
                    <span className="text-2xl text-green-500"><FaPhotoVideo /></span>
                    <span className="text-2xl">Select & Update Cover Photo</span>
                    <input id="fileInput" type="file" className="hidden" />
                </button>
                <button>Share</button>
            </div> */}

            <div className="space-y-6 bg-gray-950/40 p-6 rounded-2xl border border-gray-800 shadow-[0_0_25px_rgba(0,255,255,0.03)] mt-3">

                {/* Cover Preview */}
                <div className="relative rounded-xl overflow-hidden group">
                    <Image
                        src="https://i.postimg.cc/MTvqpvT7/cover.jpg"
                        alt="Cover"
                        width={800}
                        height={400}
                        className="w-full max-h-56 md:max-h-80 object-cover rounded-xl shadow-lg shadow-black/40 group-hover:opacity-90 transition"
                    />


                    {/* Overlay hover effect */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                        <span className="text-cyan-300 text-lg font-medium">Current Cover</span>
                    </div>
                </div>

                {/* Upload Button */}
                <div className="flex items-center justify-center">
                    <input id="coverInput" type="file" className="hidden" />

                    <label
                        htmlFor="coverInput"
                        className="cursor-pointer w-full flex items-center justify-center gap-3 py-3 
            bg-gray-900 border border-cyan-500 rounded-xl text-cyan-300 
            hover:bg-gray-800 hover:border-cyan-400 hover:text-cyan-200
            transition-all duration-300 shadow-[0_0_12px_rgba(0,255,255,0.1)]
            "
                    >
                        <span className="text-2xl"><FaPhotoVideo /></span>
                        <span className="text-lg font-semibold">Upload Cover</span>
                    </label>
                </div>

                {/* Share Button */}
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-cyan-900/20">
                    Share
                </button>
            </div>

        </div>



    );
};

export default CoverImage;