import Image from "next/image";
import Link from "next/link";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaPhotoVideo, FaVideo } from "react-icons/fa";

const Main = () => {
    return (
        <div>
            <div className="border border-gray-700 shadow-lg pt-3 p-5 rounded-lg space-y-4">
                <div className="flex items-center gap-2">
                    <Link href="/profile"><Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={24} height={20} className="inline-block w-12 h-11 border border-cyan-400 rounded-full" /></Link>
                    <div className="text-xl py-2 px-4 w-full bg-gray-800 hover:bg-gray-600 rounded-full text-gray-400 cursor-pointer">Whats on your mind, Mohammad Abu?</div>
                </div>
                <hr className="text-gray-700" />
                <div className="flex items-center justify-around">
                    <button className="flex items-center gap-2">
                        <span className="text-2xl text-red-500"><FaVideo /></span>
                        <span className="text-2xl">Live Video</span>
                    </button>
                    <button className="flex items-center gap-2">
                        <span className="text-2xl text-green-500"><FaPhotoVideo /></span>
                        <span className="text-2xl">Photo/Video</span>
                    </button>
                    <button className="flex items-center gap-2">
                        <span className="text-2xl text-yellow-400"><BsEmojiSunglasses /></span>
                        <span className="text-2xl">Feelings</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;