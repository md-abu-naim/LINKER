"use client";

import { FaPhotoVideo } from "react-icons/fa";

export const MediaInput = () => {
    return (
        <button onClick={() => document.getElementById('fileInput').click()} className="flex items-center gap-2 hover:bg-gray-700 p-1 px-2 rounded-md">
            <span className="text-2xl text-green-500"><FaPhotoVideo /></span>
            <span className="text-2xl">Photo/Video</span>
            <input id="fileInput" type="file" className="hidden" />
        </button>
    );
};

export const InputMedia = () => {
    return (
        <button onClick={() => document.getElementById('fileInput').click()} className="text-2xl hover:bg-gray-700 p-1 px-2 rounded-md transition-transform hover:scale-110">
            <span className="text-green-500"><FaPhotoVideo /></span>
            <input id="fileInput" type="file" className="hidden" />
        </button>
    )
}