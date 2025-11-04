'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';
import { FaRegSmile } from 'react-icons/fa';

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

            <dialog id="my_modal_4" className="modal relative overflow-y-hidden">
                <div className="modal-box w-11/12 max-w-6xl p-0 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 backdrop-blur-xl relative overflow-hidden rounded-xl">
                    <div className='flex flex-col md:flex-row h-[90vh]'>
                        <div className='flex items-center justify-center flex-2 border'>
                            <Swiper
                                slidesPerView={'auto'}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {
                                    images.map(img => (
                                        <SwiperSlide key={img}>
                                            <Image src={img} width={600} height={600} alt='Images' />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                        <div className='flex-1 border'>
                            <div className="flex items-center gap-3">
                                <Image className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover" src="https://i.postimg.cc/65X8XRRf/Face-Care.png" width={50} height={50} alt="User" />
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm md:text-lg">Mohammad Abu Naim</span>
                                    <span className="text-gray-400 text-sm">24 hours ago · 🌍 Public</span>
                                </div>
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

        </div>
    );
};

export default PostImage;