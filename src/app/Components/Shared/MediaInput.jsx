"use client";

import { FaPhotoVideo } from "react-icons/fa";

export const MediaInput = () => {
    return (
        <button onClick={() => document.getElementById('fileInput').click()} className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-cyan-400 transition-all duration-300 group">
            <span className="text-2xl text-green-500"><FaPhotoVideo /></span>
            <span className="text-2xl">Photo/Video</span>
            <input id="fileInput" type="file" className="hidden" />
        </button>
    );
};

export const InputMedia = () => {
    return (
        <button onClick={() => document.getElementById('fileInput').click()} className="text-2xl hover:bg-gray-700 hover:text-cyan-400 p-1 px-2 rounded-md transition-transform hover:scale-110">
            <span className="text-green-500"><FaPhotoVideo /></span>
            <input id="fileInput" type="file" className="hidden" />
        </button>
    )
}