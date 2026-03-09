import Image from "next/image";
import Link from "next/link";
import { BsEmojiSunglasses, BsFillPinAngleFill } from "react-icons/bs";
import { FaComment, FaShare, FaThumbsUp, FaVideo } from "react-icons/fa";
import { MediaInput } from "../Shared/MediaInput";
import PostBox from "../Shared/PostBox";
import ImageLayout from "../Shared/ImageLayout";
import axios from "axios";
import { FiBookmark, FiEdit2, FiEyeOff, FiLink, FiSlash } from "react-icons/fi";

const Main = async ({ user }) => {
    const res = await axios(`${process.env.NEXT_PUBLIC_API}/posts`)
    const posts = res.data

    // const images = [
    //     'https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp',
    //     'https://i.postimg.cc/h4M3nDFf/Rose-Petal-Hydrating-Face-Mist.jpg',
    //     'https://i.postimg.cc/0NmB17xs/Herbal-Strengthening-Hair-Oil.webp',
    //     'https://i.postimg.cc/WbbCqDmG/Cocoa-Butter-Body-Lotion.jpg',
    //     'https://i.postimg.cc/x1B4Ztw5/Exfoliating-Coffee-Body-Scrub.webp',
    // ]
    return (
        <div className="mb-24 md:mb-10">
            {/* Post Box */}
            <PostBox user={user} />


            {/* Post Layout */}
            {
                posts.map((post, i) => (
                    <div key={i} className="rounded-3xl mt-3 bg-linear-to-br from-gray-900 via-gray-800 to-black shadow-lg border border-gray-800 overflow-hidden transition-all duration-500">
                        {/* Header */}
                        <div className="flex items-center justify-between gap-3 px-4 py-2 border-b border-gray-700">
                            <div className="flex items-center gap-3">
                                <Image className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover" src={post.author.avatar} width={50} height={50} alt="User" />
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm md:text-lg">{post.author.name}</span>
                                    <span className="text-gray-400 text-sm">24 hours ago · {post.visibility}</span>
                                </div>
                            </div>
                            <div className="dropdown dropdown-center">
                                <button tabIndex={0} className="p-2 rounded-full hover:bg-gray-700 transition">
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
                                <ul tabIndex="-1" className="dropdown-content menu mt-0.5 bg-gray-900 rounded-box z-50 w-52 p-2 shadow-lg border border-cyan-700 right-24">
                                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                        <span className=" bg-gray-800 p-2 rounded-full"><FiEyeOff /></span>
                                        <span className="">Hide Post</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                        <span className=" bg-gray-800 p-2 rounded-full"><FiBookmark /></span>
                                        <span className="">Saved</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                        <span className=" bg-gray-800 p-2 rounded-full"><FiSlash /></span>
                                        <span className="">Block {post.author.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                        <span className=" bg-gray-800 p-2 rounded-full"><FiLink /></span>
                                        <span className=""> Copy Link</span>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        {/* Post Content */}
                        <div className="p-4">
                            <p className="text-gray-300 text-base leading-relaxed">
                                {post.content}
                            </p>

                            <ImageLayout post={post} images={post.image} />
                        </div>

                        {/* Engagement Bar */}
                        <div className="flex items-center justify-around gap-3 py-2 md:py-1 border-t border-gray-700">
                            <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                                <FaThumbsUp />
                                <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                                <FaComment />
                                <span>{post.commentsCount}</span>
                            </button>
                            <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                                <FaShare />
                                <span>{post.shares}</span>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Main;