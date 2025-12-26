'use client'

import Image from 'next/image';
import PostModal from './PostModal';

const ImageModal = () => {
    const images = [
        'https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp',
        'https://i.postimg.cc/h4M3nDFf/Rose-Petal-Hydrating-Face-Mist.jpg',
        'https://i.postimg.cc/0NmB17xs/Herbal-Strengthening-Hair-Oil.webp',
        'https://i.postimg.cc/WbbCqDmG/Cocoa-Butter-Body-Lotion.jpg',
        'https://i.postimg.cc/x1B4Ztw5/Exfoliating-Coffee-Body-Scrub.webp',
    ]

    const imageCount = images?.length - 4

    // Image Layout
    const Imagelayout = () => {
        if (images?.length === 1) {
            return (
                <div onClick={() => document.getElementById('my_modal_4').showModal()} className='mt-2'>
                    <Image className='w-full h-auto rounded-xl bg-cover cursor-pointer' src={images[0]} width={600} height={700} alt='Images' />
                </div>
            )
        }

        if (images?.length === 3) {
            return (
                <div onClick={() => document.getElementById('my_modal_4').showModal()} className='w-full mt-2 space-y-1 cursor-pointer'>
                    <Image className='w-full h-36 md:h-64 rounded-sm bg-cover' src={images[0]} width={600} height={700} alt='Images' />
                    <div className='grid grid-cols-2 gap-1'>
                        {
                            images.slice(1, 3).map(img => (
                                <Image key={img} className='h-36 md:h-64 w-full rounded-sm bg-cover' src={img} width={600} height={700} alt='Images' />
                            ))
                        }
                    </div>
                </div>
            )
        }

        return (
            <div onClick={() => document.getElementById('my_modal_4').showModal()} className='w-full mt-2 grid grid-cols-2 gap-1'>
                {
                    images.slice(0, 4).map((img, index) => (
                        <div key={index} className='relative cursor-pointer'>
                            <Image onClick={() => setImg(img)} className='h-36 md:h-64 w-full rounded-sm bg-cover' src={img} width={600} height={700} alt={`Post Image ${index + 1}`} />
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

            {/* Modal */}
            <PostModal images={images} />
        </div>
    );
};

export default ImageModal;