'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';
import { FaComment, FaRegSmile, FaShare, FaThumbsUp } from 'react-icons/fa';

const PostImage = () => {

    const images = [
        'https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg',
        'https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg',
        'https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg',
        'https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg',
        'https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg',
    ]

    const imageCount = images?.length - 4

    if (images?.length === 1) {
        return (
            <div onClick={() => document.getElementById('my_modal_4').showModal()} className='mt-2'>
                <Image className='w-full h-auto rounded-xl bg-cover' src={images[0]} width={600} height={700} alt='Images' />
            </div>
        )
    }

    if (images?.length === 3) {
        return (
            <div onClick={() => document.getElementById('my_modal_4').showModal()} className='w-full mt-2 space-y-2'>
                <Image className='w-full h-64 rounded-xl bg-cover' src={images[0]} width={600} height={700} alt='Images' />
                <div className='grid grid-cols-2 gap-2'>
                    {
                        images.slice(1, 3).map(img => (
                            <Image key={img} className='rounded-xl bg-cover' src={img} width={600} height={700} alt='Images' />
                        ))
                    }
                </div>
            </div>
        )
    }
    return (
        <div>
            <div onClick={() => document.getElementById('my_modal_4').showModal()} className='w-full mt-2 grid grid-cols-2 gap-2'>
                {
                    images.slice(0, 4).map((img, index) => (
                        <div key={index} className='relative'>
                            <Image className='rounded-xl bg-cover' src={img} width={600} height={700} alt={`Post Image ${index + 1}`} />
                            {
                                index === 3 && imageCount > 0 && (
                                    <div className='absolute inset-0 bg-black/60 flex items-center justify-center rounded-xl'>
                                        <span className='text-white text-2xl font-semibold'>+{imageCount}</span>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-6xl p-0 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 backdrop-blur-xl relative overflow-hidden rounded-xl">
                    <div className='flex flex-col md:flex-row h-[90vh]'>
                        <div className='md:w-2/3 w-full bg-black flex items-center justify-center'>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper w-full h-full"
                            >
                                {
                                    images.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <Image className='w-full h-full object-contain bg-black' src={img} width={800} height={800} alt={`Post Image ${i}`} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                        <div className='md:w-1/3 w-full flex flex-col bg-gray-950 border-l border-gray-800'>
                            <div className="flex items-center p-4 gap-3">
                                <Image className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover" src="https://i.postimg.cc/65X8XRRf/Face-Care.png" width={50} height={50} alt="User" />
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm md:text-lg">Mohammad Abu Naim</span>
                                    <span className="text-gray-400 text-sm">24 hours ago · 🌍 Public</span>
                                </div>
                            </div>
                            <div className='p-4 text-gray-200'>
                                <p>Just finished working on my new full-stack project! 🚀 Feeling super excited about the progress.</p>
                            </div>
                            <div className="flex items-center justify-around gap-3 py-2 md:py-1 border-y border-gray-700">
                                <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                                    <FaThumbsUp />
                                    <span>20</span>
                                </button>
                                <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                                    <FaComment />
                                    <span>24</span>
                                </button>
                                <button className="flex items-center gap-2 px-6 py-1 text-xl text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-200 ease-in-out">
                                    <FaShare />
                                    <span>8</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="modal-action absolute top-2 right-2">
                        <form method="dialog">
                            <button className="btn cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors rounded-full p-2 text-xl"><RxCross1 /></button>
                        </form>
                    </div>
                </div>
            </dialog>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-6xl p-0 bg-gray-900 text-white  relative overflow-hidden rounded-xl">

                    {/* Main Layout */}
                    <div className="flex flex-col md:flex-row h-[90vh]">

                        {/* LEFT — Image Slider */}
                        <div className="md:w-2/3 w-full bg-black flex items-center justify-center">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                className="w-full h-full"
                            >
                                {images.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <Image
                                            src={img}
                                            width={800}
                                            height={800}
                                            alt={`Post image ${i}`}
                                            className="w-full h-full object-contain bg-black"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* RIGHT — Post Details */}
                        <div className="md:w-1/3 w-full flex flex-col bg-gray-950 border-l border-gray-800">

                            {/* Header */}
                            <div className="flex items-center gap-3 p-4 border-b border-gray-800">
                                <Image
                                    className="w-10 h-10 rounded-full border-2 border-cyan-500 object-cover"
                                    src="https://i.postimg.cc/65X8XRRf/Face-Care.png"
                                    width={50}
                                    height={50}
                                    alt="User"
                                />
                                <div>
                                    <h2 className="font-semibold text-base">Mohammad Abu Naim</h2>
                                    <p className="text-gray-400 text-sm">24 hours ago · 🌍 Public</p>
                                </div>
                            </div>

                            {/* Caption */}
                            <div className="p-4 text-gray-200 text-sm border-b border-gray-800">
                                <p>
                                    Just finished building this amazing project! 🚀 <br />
                                    What do you guys think about the design?
                                </p>
                            </div>

                            {/* Comment Input */}
                            <div className="p-4 flex items-center gap-2 border-b border-gray-800">
                                <Image
                                    className="w-9 h-9 rounded-full border border-gray-700 object-cover"
                                    src="https://i.postimg.cc/65X8XRRf/Face-Care.png"
                                    width={40}
                                    height={40}
                                    alt="User"
                                />
                                <div className="flex items-center w-full bg-gray-800 rounded-full px-3 py-2 text-gray-300">
                                    <input
                                        type="text"
                                        placeholder="Write a comment..."
                                        className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
                                    />
                                    <FaRegSmile className="text-gray-400 text-xl cursor-pointer" />
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scroll">
                                {[1, 2, 3].map((c) => (
                                    <div key={c} className="flex items-start gap-3">
                                        <Image
                                            className="w-9 h-9 rounded-full border border-gray-700"
                                            src="https://i.postimg.cc/7YvT6W1W/Hair-Care.png"
                                            width={40}
                                            height={40}
                                            alt="User"
                                        />
                                        <div className="bg-gray-800 rounded-2xl px-3 py-2">
                                            <p className="font-medium text-sm">John Doe</p>
                                            <p className="text-gray-300 text-sm">Wow! This looks really good 🔥</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Close Button */}
                    <div className="absolute top-2 right-2 z-50">
                        <form method="dialog">
                            <button className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-full p-2 text-lg">
                                <RxCross1 />
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default PostImage;