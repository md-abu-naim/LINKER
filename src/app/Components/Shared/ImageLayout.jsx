'use client'
import Image from 'next/image';
import PostModal from './PostModal';
import { useState } from 'react';

const ImageLayout = ({images, post}) => {
    const [openModal, setOpenModal] = useState(false)
    const {image} = post || {}
    const imageCount = images?.length - 4

    // Image Layout
    const Imagelayout = () => {
        if (image?.length === 1) {
            return (
                <div onClick={() => setOpenModal(true)} className='mt-2'>
                    <Image className='w-full h-auto rounded-xl bg-cover cursor-pointer' src={image[0]} width={600} height={700} alt='Images' />
                </div>
            )
        }

        if (images?.length === 3) {
            return (
                <div onClick={() => setOpenModal(true)} className='w-full mt-2 space-y-1 cursor-pointer'>
                    <Image className='w-full h-36 md:h-64 rounded-sm bg-cover' src={image[0]} width={600} height={700} alt='Images' />
                    <div className='grid grid-cols-2 gap-1'>
                        {
                            image?.slice(1, 3).map(img => (
                                <Image key={img} className='h-36 md:h-64 w-full rounded-sm bg-cover' src={img} width={600} height={700} alt='Images' />
                            ))
                        }
                    </div>
                </div>
            )
        }

        return (
            <div onClick={() => setOpenModal(true)} className='w-full mt-2 grid grid-cols-2 gap-1'>
                {
                    image.slice(0, 4).map((img, index) => (
                        <div key={index} className='relative cursor-pointer'>
                            <Image className='h-36 md:h-64 w-full rounded-sm bg-cover' src={img} width={600} height={700} alt={`Post Image ${index + 1}`} />
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
                openModal && <PostModal post={post}  setOpenModal={setOpenModal} />
            }
        </div>
    );
};

export default ImageLayout;