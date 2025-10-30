'use client'
import { FaPhotoVideo } from "react-icons/fa";

const ImageInput = () => {

    return (
        <button onClick={() => document.getElementById('fileInput').click()} className="flex items-center gap-2">
            <span className="text-2xl text-green-500"><FaPhotoVideo /></span>
            <span className="text-2xl">Photo/Video</span>
            <input id="fileInput" type="file" className="hidden" />
        </button>
    );
};

export default ImageInput;