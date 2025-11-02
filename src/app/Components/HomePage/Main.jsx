import Image from "next/image";
import Link from "next/link";
import { BsEmojiSmile, BsEmojiSunglasses } from "react-icons/bs";
import { FaPhotoVideo, FaRegImage, FaRegImages, FaVideo } from "react-icons/fa";
import PostModal from "./PostModal";
import { MediaInput } from "./MediaInput";
import { MdLocationOn, MdOutlineAttachFile } from "react-icons/md";
import { HiOutlineHashtag } from "react-icons/hi";

const Main = () => {

    return (
        <div>
            <div className="rounded-3xl bg-gray-900/60 backdrop-blur-xl border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_50px_rgba(0,255,200,0.15)] p-6 transition-all duration-500">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                    <Link href='/profile'>
                        <Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={50} height={50} className="border border-cyan-400 rounded-full hover:scale-105 transition-all duration-300" />
                    </Link>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-100">Mohammad Abu Naim</h3>
                        <p className="text-sm text-gray-500">Share something inspiring ✨</p>
                    </div>
                </div>

                {/* Input field */}
                <label htmlFor="my_modal_6" className="block w-full rounded-2xl bg-gray-800/60 text-gray-300 min-h-[100px] px-5 py-4 cursor-pointer hover:bg-gray-700/70 transition-all duration-300 border border-transparent hover:border-cyan-500">
                    <span className="opacity-70">What do you want to share today?</span>
                </label>

                {/* Buttons */}
                <div className="mt-5 flex items-center justify-around gap-5 border-t border-gray-700 pt-4">
                    <button className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-xl hover:bg-gray-700/80 transition-all duration-300 group">
                        <FaVideo className="text-red-500 text-xl group-hover:scale-110 transition-transform" />
                        <span className="text-gray-300 font-medium">Go Live</span>
                    </button>

                    <MediaInput />

                    <button className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-xl hover:bg-gray-700/80 transition-all duration-300 group">
                        <BsEmojiSunglasses className="text-yellow-500 text-xl group-hover:scale-110 transition-transform" />
                        <span className="text-gray-300 font-medium">Feelings</span>
                    </button>
                </div>
            </div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <PostModal />
        </div>
    );
};

export default Main;


{/* <div className="shadow-lg p-1 md:pt-3 md:p-5 rounded-lg md:space-y-4">
    <div className="flex items-center gap-2">
        <Link href="/profile"><Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={24} height={20} className="inline-block w-12 md:h-11 h-10 border border-cyan-400 rounded-full" /></Link>
        <label htmlFor="my_modal_6" className="flex gap-1 py-2 px-4 w-full bg-gray-800 hover:bg-gray-600 rounded-full text-gray-400 cursor-pointer">Whats on your mind? <span className="hidden md:block">Mohammad Abu?</span></label>
    </div>
    <hr className="text-gray-700 hidden md:block" />
    <div className="hidden md:flex items-center justify-around">
        <button className="flex items-center gap-2 hover:bg-gray-700 p-1 px-2 rounded-md">
            <span className="text-2xl text-red-500"><FaVideo /></span>
            <span className="text-2xl">Live Video</span>
        </button>
        <MediaInput />
        <button className="flex items-center gap-2 hover:bg-gray-700 p-1 px-2 rounded-md">
            <span className="text-2xl text-yellow-400"><BsEmojiSunglasses /></span>
            <span className="text-2xl">Feelings</span>
        </button>
    </div>

    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
    <PostModal />
</div> */}