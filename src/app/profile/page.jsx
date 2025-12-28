import Image from "next/image";
import { FiHome, FiMapPin, FiUsers, } from "react-icons/fi";
import Link from "next/link";
import { FaBriefcase, FaComment, FaGraduationCap, FaShare, FaThumbsUp, FaVideo } from "react-icons/fa";
import { MediaInput } from "../Components/Shared/MediaInput";
import { BsEmojiSunglasses } from "react-icons/bs";
import PostBox from "../Components/Shared/PostBox";
import ImageLayout from "../Components/Shared/ImageLayout";


const ProfilePost = () => {
    const friends = [
        { name: 'Abu Naim', img: 'https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp' },
        { name: 'Jasim Uddin', img: 'https://i.postimg.cc/h4M3nDFf/Rose-Petal-Hydrating-Face-Mist.jpg' },
        { name: 'Rofiqul Islam', img: 'https://i.postimg.cc/0NmB17xs/Herbal-Strengthening-Hair-Oil.webp' },
        { name: 'Salma Sweety', img: 'https://i.postimg.cc/WbbCqDmG/Cocoa-Butter-Body-Lotion.jpg' },
        { name: 'Shakhawat Miyaji', img: 'https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp' },
        { name: 'Mohammad Abu Naim', img: 'https://i.postimg.cc/x1B4Ztw5/Exfoliating-Coffee-Body-Scrub.webp' },
        { name: 'Salma Sweety', img: 'https://i.postimg.cc/WbbCqDmG/Cocoa-Butter-Body-Lotion.jpg' },
        { name: 'Shakhawat Miyaji', img: 'https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp' },
        { name: 'Mohammad Abu Naim', img: 'https://i.postimg.cc/x1B4Ztw5/Exfoliating-Coffee-Body-Scrub.webp' },
    ]
    const images = [
        'https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp',
        'https://i.postimg.cc/h4M3nDFf/Rose-Petal-Hydrating-Face-Mist.jpg',
        'https://i.postimg.cc/0NmB17xs/Herbal-Strengthening-Hair-Oil.webp',
        'https://i.postimg.cc/WbbCqDmG/Cocoa-Butter-Body-Lotion.jpg',
        'https://i.postimg.cc/x1B4Ztw5/Exfoliating-Coffee-Body-Scrub.webp',
    ]

    return (
        <div className="grid grid-cols-12 gap-6 max-w-5xl mx-auto mt-2 px-2 md:px-4 lg:px-0">
            <div className="col-span-12 lg:col-span-5">
                <div className="rounded-3xl p-3 md:px-4 space-y-2 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 backdrop-blur-xl border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_50px_rgba(0,255,200,0.15)] transition-all duration-500 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold">Introduce</h3>
                    <p className="text-gray-300">FullStack Developer | Frontend Developer | React | Next.js | Node.js | MERN Stack | MongoDB | Web App</p>
                    <hr className="text-cyan-800" />

                    <div className="mt-2 space-y-3">
                        <div className="flex items-center gap-2">
                            <FaBriefcase className="text-xl text-cyan-400" />
                            <span><span className="text-cyan-400">Work at</span> {'Jamiya Mohammadia Khajuria Madrasha'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaGraduationCap className="text-2xl text-cyan-400" />
                            <span><span className="text-cyan-400">Went to</span> {'Jamiya Mohammadia Khajuria Madrasha'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaGraduationCap className="text-2xl text-cyan-400" />
                            <span><span className="text-cyan-400">Studied at</span> {'Jamiya Mohammadia Khajuria Madrasha'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiHome className="text-2xl text-cyan-400" />
                            <span><span className="text-cyan-400">Lives in</span> {'Khajuria, Senbag, Noakhali'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiMapPin className="text-2xl text-cyan-400" />
                            <span><span className="text-cyan-400">From to</span> {'Khajuria, Senbag, Noakhali'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiUsers className="text-2xl text-cyan-400" />
                            <span><span className="text-cyan-400">Followed by</span> {'10000 People'}</span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold">Photos</h3>
                            <Link href={`/profile/photos`} className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2 px-4">
                                <span className="text-md">See All Photos</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-0.5 mt-2 border border-cyan-950 shadow-2xs rounded-md">
                            {
                                images?.slice(0, 6).map((img, i) => (
                                    <Image key={i} className="w-32 md:w-60 lg:w-32 h-24 md:h-52 lg:h-32 object-cover rounded-md" src={img} alt="Photos" width={400} height={400} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold">Friends</h3>
                            <Link href={`/profile/friends`} className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2 px-4">
                                <span className="text-md">See All Friends</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-1 md:gap-3 mt-2 border-x border-t border-cyan-950 shadow-2xs rounded-md">
                            {
                                friends?.slice(0, 6).map((frined, i) => (
                                    <div key={i} className="">
                                        <Image className="w-32 md:w-56 lg:w-32 h-24 md:h-52 lg:h-32 object-cover rounded-md" src={frined.img} alt="Photos" width={400} height={400} />
                                        <h3 className="text-sm md:text-lg lg:text-sm font-semibold mt-0.5">{frined.name}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Post Box */}
            <div className="col-span-12 lg:col-span-7">
                <div className="rounded-3xl p-4 md:mt-0 md:p-6 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 backdrop-blur-xl border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_50px_rgba(0,255,200,0.15)] transition-all duration-500 hover:-translate-y-1">
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
                        <button className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-cyan-400 transition-all duration-300 group">
                            <FaVideo className="text-red-500 text-xl group-hover:scale-110 transition-transform" />
                            <span className="font-medium">Go Live</span>
                        </button>

                        <MediaInput />

                        <button className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-cyan-400 transition-all duration-300 group">
                            <BsEmojiSunglasses className="text-yellow-500 hover:text-cyan-400 text-xl group-hover:scale-110 transition-transform" />
                            <span className="font-medium">Feelings</span>
                        </button>
                    </div>
                </div>

                {/* Post Layout */}
                <div className="rounded-3xl mt-3 mb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-lg border border-gray-800 overflow-hidden transition-all duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 px-4 py-2 border-b border-gray-700">
                        <div className="flex items-center gap-3">
                            <Image className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover" src="https://i.postimg.cc/65X8XRRf/Face-Care.png" width={50} height={50} alt="User" />
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm md:text-lg">Mohammad Abu Naim</span>
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

                    {/* Post Content */}
                    <div className="p-4">
                        <p className="text-gray-300 text-base leading-relaxed">
                            Just finished working on my new full-stack project! 🚀 Feeling super excited about the progress.
                        </p>

                        <ImageLayout images={images} />
                    </div>

                    {/* Engagement Bar */}
                    <div className="flex items-center justify-around gap-3 py-2 md:py-1 border-t border-gray-700">
                        <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                            <FaThumbsUp />
                            <span>20</span>
                        </button>
                        <a href='#comment'  className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                            <FaComment />
                            <span>24</span>
                        </a>
                        <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                            <FaShare />
                            <span>8</span>
                        </button>
                    </div>
                </div>

                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <PostBox />
            </div>
        </div>
    );
};

export default ProfilePost;

