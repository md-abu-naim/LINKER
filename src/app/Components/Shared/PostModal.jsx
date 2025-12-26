'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';
import { FaComment, FaShare, FaThumbsUp } from 'react-icons/fa';
import Link from 'next/link';
import { IoMdSend } from 'react-icons/io';
import Emojipicker from './Emojipicker';

const PostModal = ({ images }) => {
    return (
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box hidden md:block w-11/12 max-w-6xl p-0 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 backdrop-blur-xl relative rounded-xl">
                <div className='flex flex-col lg:flex-row lg:h-[90vh] overflow-y-auto'>

                    {/* Left Side: image slider */}
                    <div className='lg:w-2/3 w-full h-[90vh] bg-black flex items-center justify-center'>
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper w-full h-full"
                        >
                            {
                                images.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <Image onClick={() => setShowModal(true)} className='w-full h-full object-contain bg-black' src={img} width={800} height={800} alt={`Post Image ${i}`} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                    {/* Right Side */}
                    <div className='lg:w-1/3 w-full md:flex flex-col bg-gray-950 border-l border-gray-800 lg:max-h-[90vh] overflow-hidden hover:overflow-y-auto my-4'>
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
                        <div className='my-3 px-2'>
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
                        <div className="sticky inset-0 flex items-center gap-3 px-4 py-3 border-t border-gray-700 bg-gray-900 z-50">
                            <Link href={'/profile'}>
                                <Image className="w-12 h-10 rounded-full border border-cyan-400 object-cover cursor-pointer" src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={40} height={40} />
                            </Link>
                            <div className='relative w-full'>
                                <input className="w-full rounded-full bg-gray-800/70 text-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500" type="text" placeholder="Write a comment.." />
                                <div className='absolute right-0 top-0'>
                                    <Emojipicker />
                                </div>
                            </div>
                            <div className='cursor-pointer bg-gray-800 text-cyan-400 hover:bg-gray-700 transition-colors rounded-full p-2 text-xl'>
                                <IoMdSend />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Close Modal */}
                <div className="modal-action absolute top-2 right-2">
                    <form method="dialog">
                        <button className="btn cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors rounded-full p-2 text-xl"><RxCross1 /></button>
                    </form>
                </div>
            </div>

            {/* Small Device Modal */}
            <div className='modal-box md:hidden w-full bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 backdrop-blur-xl'>
                <div className="">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper w-full h-full">
                        {
                            images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <Image className='w-full h-dvh object-contain bg-black' src={img} width={800} height={800} alt={`Post Image ${i}`} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    {/* Close Modal */}
                    <div className="modal-action absolute top-0 right-0 z-50">
                        <form method="dialog">
                            <button className="btn cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors rounded-full p-2 text-xl"><RxCross1 /></button>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default PostModal;