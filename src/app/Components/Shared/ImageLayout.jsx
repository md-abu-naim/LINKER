'use client'
import Image from 'next/image';
import PostModal from './PostModal';
import { useState } from 'react';

const ImageLayout = ({ media, post }) => {
    const [openModal, setOpenModal] = useState(false)
    const imageCount = media?.length - 4


    // Image Layout
    const Imagelayout = () => {
        if (media?.length === 1) {
            return (
                <div className='mt-2'>
                    {
                        media[0].type === 'image' ? <Image onClick={() => setOpenModal(true)} className='w-full h-auto rounded-xl object-cover cursor-pointer' src={media[0].url} width={600} height={700} alt='Images' /> :
                            <video src={media[0].url} controls className='w-full h-auto rounded-xl object-cover cursor-pointer' />
                    }
                </div>
            )
        }

        if (media?.length === 3) {
            return (
                <div className='w-full mt-2 space-y-1 cursor-pointer'>
                    {media[0].type === 'image' ? <Image onClick={() => setOpenModal(true)} className='w-full h-36 md:h-64 rounded-sm object-cover' src={media[0].url} width={600} height={700} alt='Images' /> :
                        <video controls className='w-full h-36 md:h-64 rounded-sm object-cover' src={media[0].url} width={600} height={700} />}
                    <div className='grid grid-cols-2 gap-1'>
                        {
                            media?.slice(1, 3).map((item, i) => (
                                item.type === 'image' ? <Image key={i} onClick={() => setOpenModal(true)} className='h-36 md:h-64 w-full rounded-sm object-cover' src={item.url} width={600} height={700} alt='Images' /> :
                                    <video key={i} controls className='h-36 md:h-64 w-full rounded-sm object-cover' src={item.url} width={600} height={700} />
                            ))
                        }
                    </div>
                </div>
            )
        }

        return (
            <div className='w-full mt-2 grid grid-cols-2 gap-1'>
                {
                    media?.slice(0, 4).map((item, index) => (
                        <div key={index} className='relative cursor-pointer'>
                            {
                                item.type === 'image' ? <Image onClick={() => setOpenModal(true)} className='h-36 md:h-64 w-full rounded-sm object-cover' src={item.url} width={600} height={700} alt={`Post Image ${index + 1}`} /> :
                                    <video className='h-36 md:h-64 w-full rounded-sm object-cover' src={item.url} width={600} height={700} alt={`Post Image ${index + 1}`} />
                            }
                            {
                                index === 3 && imageCount > 0 && (
                                    <div className='absolute inset-0 bg-black/60 flex items-center justify-center rounded-sm'>
                                        <span className='text-white text-2xl font-semibold'>+{imageCount}</span>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div>
            {Imagelayout()}

            {/* Post Modal */}
            {
                openModal && <PostModal media={media} post={post} setOpenModal={setOpenModal} />
            }
        </div>
    );
};

export default ImageLayout;