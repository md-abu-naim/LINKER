import Emojipicker from '@/app/Components/Shared/Emojipicker';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaChevronDown, FaChevronUp, FaComment, FaPhotoVideo, FaShare, FaThumbsUp } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';

const Videos = async ({ params }) => {
    const { id } = await params

    const videos = [
        { "_id": "0001", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4", "views": "150" },
        { "_id": "5552", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766984076/invideo-ai-1080_Full-Stack_Developer_Portfolio_Intro_2025-06-17_1_qyubpz.mp4", "views": "10" },
        { "_id": "0003", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766984427/SnapSave_App_764675533258347_1080p_ulhw91.mp4", "views": "1500" },
        { "_id": "5554", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4", "views": "150" },
        { "_id": "0005", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766984076/invideo-ai-1080_Full-Stack_Developer_Portfolio_Intro_2025-06-17_1_qyubpz.mp4", "views": "110" },
        { "_id": "5556", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766984427/SnapSave_App_764675533258347_1080p_ulhw91.mp4", "views": "150" },
        { "_id": "0007", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4", "views": "150" },
        { "_id": "5558", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766984076/invideo-ai-1080_Full-Stack_Developer_Portfolio_Intro_2025-06-17_1_qyubpz.mp4", "views": "154" },
        { "_id": "0009", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766984427/SnapSave_App_764675533258347_1080p_ulhw91.mp4", "views": "150" },
        { "_id": "0009", "video": "https://res.cloudinary.com/dcqnddytj/video/upload/v1766982713/testVideo_x1w7rk.mp4", "views": "1110" },
    ]

    const video = videos.find(v => v._id === id)

    return (
        <div className='flex justify-between'>
            {/* Left Side */}
            <div className='m-2'>
                <button className="btn cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors rounded-full p-2 text-xl"><RxCross1 /></button>
            </div>

            {/* Center Video */}
            <div className='flex items-center justify-between gap-3'>
                <div className='flex w-full h-full'>
                    <video src={video.video} playsInline controls autoFocus
                        className='w-96 h-full object-cover rounded-md' ></video>

                    <div className="flex flex-col items-center justify-end gap-4 mb-4 py-2 md:py-1">
                        <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                            <FaThumbsUp />
                            <span>20</span>
                        </button>
                        <a href='#comment' className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                            <FaComment />
                            <span>24</span>
                        </a>
                        <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                            <FaShare />
                            <span>8</span>
                        </button>
                        <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <button className='bg-gray-700 hover:bg-gray-800 p-3 rounded-full'><FaChevronUp className='text-3xl font-bold' /></button>
                    <button className='bg-gray-700 hover:bg-gray-800 p-3 rounded-full'><FaChevronDown className='text-3xl font-bold' /></button>
                </div>
            </div>

            {/* Right Side */}
            <div className='lg:w-1/3 w-full md:flex flex-col bg-gray-950 border-l border-gray-800 lg:max-h-[90vh] lg:overflow-hidden hover:overflow-y-auto'>
                <div className='p-4 space-y-1'>
                    <div className="flex items-center gap-3 p-">
                        <Image className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover" src="https://i.postimg.cc/65X8XRRf/Face-Care.png" width={50} height={50} alt="User" />
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm md:text-lg">Mohammad Abu Naim</span>
                            <span className="text-gray-400 text-sm">24 hours ago · 🌍 Public</span>
                        </div>
                    </div>

                    {/* Caption */}
                    <p className='text-gray-200'>Just finished working on my new full-stack project! 🚀 Feeling super excited about the progress.</p>
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-around gap-3 py-2 md:py-1 border-y border-gray-700">
                    <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                        <FaThumbsUp />
                        <span>20</span>
                    </button>
                    <a href='#comment' className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                        <FaComment />
                        <span>24</span>
                    </a>
                    <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                        <FaShare />
                        <span>8</span>
                    </button>
                </div>

                {/* CommentBox */}
                <div className='mt-3 px-2'>
                    <div className='bg-gray-900 px-3 py-2 rounded-2xl'>
                        <div className='flex items-center justify-between'>
                            <div className="flex items-center gap-2">
                                <Image className="w-10 h-10 rounded-full border-2 border-cyan-400 object-cover" src="https://i.postimg.cc/65X8XRRf/Face-Care.png" width={50} height={50} alt="User" />
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm">Mohammad Abu Naim</span>
                                    <small className="text-gray-400">24 hours ago </small>
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
                        <div className=' text-gray-200'>
                            <p>Just finished working on my new full-stack project! 🚀 Feeling super excited about the progress.</p>
                        </div>
                    </div>
                    <div className='mt-1'>
                        <Image className="rounded-2xl h-full object-cover" src="https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg" width={250} height={300} alt="User" />
                    </div>
                </div>

                {/* Comment Input Field */}
                <div id='comment' className="flex items-center gap-3 px-4 py-3 border-t border-gray-700 bg-gray-900 z-50 mb-12 md:mb-0">
                    <Link href={'/profile'}>
                        <Image className="w-12 h-10 rounded-full border border-cyan-400 object-cover cursor-pointer" src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={40} height={40} />
                    </Link>
                    <div className='relative w-full'>
                        <textarea rows={2} className="w-full rounded-full bg-gray-800/70 text-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500" type="text" placeholder="Write a comment.." />
                        <div className='absolute flex items-center gap-2 bottom-1.5 left-4'>
                            <Emojipicker />
                            <input name="cover" type="file" id="coverInput" accept="image/*" className="hidden" />
                            <label htmlFor="coverInput" className="cursor-pointer hover:scale-125 hover:rotate-6">
                                <span className="text-lg"><FaPhotoVideo /></span>
                            </label>
                        </div>
                    </div>
                    <div className='cursor-pointer bg-gray-800 text-cyan-400 hover:bg-gray-700 transition-colors rounded-full p-2 text-xl'>
                        <IoMdSend />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videos;