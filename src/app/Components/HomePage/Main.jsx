import Image from "next/image";
import Link from "next/link";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import MediaInput from "./MediaInput";
import { RxCross1 } from "react-icons/rx";
import { MdPublic } from "react-icons/md";

const Main = () => {

    return (
        <div>

            {/* Post Box */}
            <div className="shadow-lg p-1 md:pt-3 md:p-5 rounded-lg md:space-y-4">
                <div className="flex items-center gap-2">
                    <Link href="/profile"><Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={24} height={20} className="inline-block w-12 md:h-11 h-10 border border-cyan-400 rounded-full" /></Link>
                    <label htmlFor="my_modal_6" className="flex gap-1 py-2 px-4 w-full bg-gray-800 hover:bg-gray-600 rounded-full text-gray-400 cursor-pointer">Whats on your mind? <span className="hidden md:block">Mohammad Abu?</span></label>
                </div>
                <hr className="text-gray-700 hidden md:block" />
                <div className="hidden md:flex items-center justify-around">
                    <button className="flex items-center gap-2">
                        <span className="text-2xl text-red-500"><FaVideo /></span>
                        <span className="text-2xl">Live Video</span>
                    </button>
                    <MediaInput />
                    <button className="flex items-center gap-2">
                        <span className="text-2xl text-yellow-400"><BsEmojiSunglasses /></span>
                        <span className="text-2xl">Feelings</span>
                    </button>
                </div>

                {/* Post Box Modal */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box relative">
                        <div className="flex items-center justify-center pb-4">
                            <h2 className="text-2xl font-semibold">Create a New Post</h2>
                            <label htmlFor="my_modal_6" className="absolute right-6 bg-gray-700 hover:bg-gray-800 rounded-full p-2 text-xl"><RxCross1 /></label>
                        </div>
                        <hr className="text-gray-700" />
                        <div className="flex items-center gap-2 mt-3">
                            <Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={24} height={20} className="inline-block w-11 h-11 border border-cyan-400 rounded-full " />
                            <div className="flex flex-col">
                                <span className="font-semibold text-md">Mohammad Abu Naim</span>

                                <select defaultValue="Pick a font" className="select select-ghost bg-gray-700">
                                    <option>
                                        <span><MdPublic /></span>
                                        <span>Public</span>
                                    </option>
                                    <option>
                                        <span><MdPublic /></span>
                                        <span>Friends</span>
                                    </option>
                                    <option>
                                        <span><MdPublic /></span>
                                        <span>Only Me</span>
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;