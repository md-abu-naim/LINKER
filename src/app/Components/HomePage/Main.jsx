import Image from "next/image";
import Link from "next/link";
import { BsEmojiSunglasses } from "react-icons/bs";
import {  FaVideo } from "react-icons/fa";
import ImageInput from "./ImageInput";

const Main = () => {

    return (
        <div>
            <div className="shadow-lg p-1 md:pt-3 md:p-5 rounded-lg md:space-y-4">
                <div className="flex items-center gap-2">
                    <Link href="/profile"><Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={24} height={20} className="inline-block w-12 md:h-11 h-10 border border-cyan-400 rounded-full" /></Link>
                    <div className="flex gap-1 py-2 px-4 w-full bg-gray-800 hover:bg-gray-600 rounded-full text-gray-400 cursor-pointer">Whats on your mind? <span className="hidden md:block">Mohammad Abu?</span></div>
                </div>
                <hr className="text-gray-700 hidden md:block" />
                <div className="hidden md:flex items-center justify-around">
                    <button className="flex items-center gap-2">
                        <span className="text-2xl text-red-500"><FaVideo /></span>
                        <span className="text-2xl">Live Video</span>
                    </button>
                    <ImageInput />
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