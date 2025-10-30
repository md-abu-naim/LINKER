'use client'
import { FaPhotoVideo } from "react-icons/fa";

const ImageInput = () => {

    const hanldeClick = async() => {
        console.log('object');
    }
    return (
        <button onClick={hanldeClick} className="flex items-center gap-2">
            <span className="text-2xl text-green-500"><FaPhotoVideo /></span>
            <span className="text-2xl">Photo/Video</span>
            <input type="file" accept="image/*,video/*" className="hidden" />
        </button>
    );
};

export default ImageInput;