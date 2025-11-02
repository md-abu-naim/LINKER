import Image from "next/image";
import Link from "next/link";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaComment, FaEllipsisH, FaRegCommentDots, FaRegHeart, FaRegImage, FaRegImages, FaRegShareSquare, FaShare, FaShareAlt, FaThumbsUp, FaVideo } from "react-icons/fa";
import PostModal from "./PostModal";
import { MediaInput } from "./MediaInput";
import PostImages from "./PostImage";

const Main = () => {


    return (
        <div>
            <div className="rounded-3xl p-4 md:p-6 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 backdrop-blur-xl border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_50px_rgba(0,255,200,0.15)] transition-all duration-500 hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <Link href='/profile'>
                        <Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={50} height={50} className="w-9 h-9 md:w-12 md:h-12 border border-cyan-400 rounded-full hover:scale-105 transition-all duration-300" />
                    </Link>
                    <div className="flex flex-col">
                        <h3 className="text-sm md:text-lg font-semibold text-gray-100">Mohammad Abu Naim</h3>
                        <p className="text-xs md:text-sm text-gray-500">Share something inspiring ✨</p>
                    </div>
                </div>

                {/* Input field */}
                <label htmlFor="my_modal_6" className="block w-full rounded-2xl bg-gray-800/60 text-gray-300 md:min-h-[90px] px-2 md:px-5 py-2 md:py-4  cursor-pointer hover:bg-gray-700/70 transition-all duration-300 border border-transparent hover:border-cyan-500">
                    <span className="opacity-70">What do you want to share today?</span>
                </label>

                {/* Buttons */}
                <div className="hidden md:flex mt-4 items-center justify-around border-t border-gray-700 pt-4">
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


            {/* Post Layout */}
            <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-lg border border-gray-800 overflow-hidden transition-all duration-500">
                {/* Header */}
                <div className="flex items-center justify-between gap-3 p-4 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                        <Image className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover" src="https://i.postimg.cc/65X8XRRf/Face-Care.png" width={50} height={50} alt="User" />
                        <div className="flex flex-col">
                            <span className="font-semibold text-lg">Mohammad Abu Naim</span>
                            <span className="text-gray-400 text-sm">24 hours ago · 🌍 Public</span>
                        </div>
                    </div>

                    <button className="p-2 rounded-full hover:bg-gray-700 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="max-w-xl mx-auto rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-lg border border-gray-800 overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,255,200,0.2)]">
                {/* Header */}
                <div className="flex items-center justify-between gap-3 p-4 border-b border-gray-700">
                    {/* Left: User Info */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="https://i.postimg.cc/65X8XRRf/Face-Care.png"
                            alt="User"
                            width={50}
                            height={50}
                            className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover"
                        />
                        <div className="flex flex-col">
                            <span className="text-white font-semibold text-lg">Mohammad Abu Naim</span>
                            <span className="text-gray-400 text-sm">2 hours ago · 🌍 Public</span>
                        </div>
                    </div>

                    {/* Right: Simple Button */}
                    <button className="p-2 rounded-full hover:bg-gray-700 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                        </svg>
                    </button>
                </div>


                {/* Post Content */}
                <div className="p-4">
                    <p className="text-gray-300 text-base leading-relaxed">
                        Just finished working on my new full-stack project! 🚀 Feeling super excited about the progress.
                    </p>

                    {/* images */}
                    {/* <div className="mt-3 grid gap-2">
                        {images.length === 1 && (
                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src={images[0]}
                                    alt="Post Image"
                                    width={700}
                                    height={400}
                                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        )}

                        {images.length > 1 && (
                            <div
                                className={`grid gap-2 ${images.length === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-2"
                                    }`}
                            >
                                {images.slice(0, 4).map((img, i) => (
                                    <div key={i} className="relative rounded-xl overflow-hidden shadow-md group">
                                        <Image
                                            src={img}
                                            alt={`Post Image ${i + 1}`}
                                            width={700}
                                            height={400}
                                            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        {i === 3 && images.length > 4 && (
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold">
                                                +{images.length - 4}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div> */}
                    <PostImages />

                </div>

                {/* Engagement Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700">
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors">
                            <FaThumbsUp /> <span>Like</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
                            <FaComment /> <span>Comment</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition-colors">
                            <FaShare /> <span>Share</span>
                        </button>
                    </div>
                    <span className="text-gray-500 text-sm">24 Likes · 3 Comments</span>
                </div>

                {/* Comment Box */}
                <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-700">
                    <Image
                        src="https://i.postimg.cc/65X8XRRf/Face-Care.png"
                        alt="User"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border border-gray-600 object-cover"
                    />
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="flex-1 rounded-full bg-gray-800/70 text-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
                    />
                    <button className="text-cyan-400 hover:text-cyan-500 text-xl">
                        <BsEmojiSunglasses />
                    </button>
                </div>
            </div>


            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <PostModal />
        </div>
    );
};

export default Main;