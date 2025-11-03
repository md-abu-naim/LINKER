'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

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
            <div className='mt-2'>
                <Image className='w-full h-auto rounded-xl bg-cover' src={images[0]} width={600} height={700} alt='Images' />
            </div>
        )
    }

    if (images?.length === 3) {
        return (
            <div className='w-full mt-2 space-y-2'>
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
            <div className='w-full mt-2 grid grid-cols-2 gap-2'>
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
            {/* <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper hidden"
            >
                {
                    images.map(img => (
                        <SwiperSlide key={img}>
                            <Image src={img} width={600} height={700} alt='Images' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>  */}
        </div>
    );
};

export default PostImage;
//   return (
// <div className="w-full mt-2 grid grid-cols-2 gap-2">
//   {images.slice(0, 4).map((img, index) => (
//     <div key={index} className="relative">
//       <Image
//         src={img}
//         alt={`Post Image ${index + 1}`}
//         width={400}
//         height={300}
//         className="w-full h-48 rounded-xl object-cover"
//       />
//       {/* + more overlay */}
//       {index === 3 && extraCount > 0 && (
//         <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-xl">
//           <span className="text-white text-2xl font-semibold">+{extraCount}</span>
//         </div>
//       )}
//     </div>
//   ))}
// </div>
//   );
// };

// export default PostImages;
