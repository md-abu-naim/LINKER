import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSortDown } from 'react-icons/fa';

const Friends = () => {
    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 rounded-2xl backdrop-blur-xl p-4 mt-1 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            {/* Requesting Account */}
            <div className='border-b-2 border-cyan-950'>
                <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold">Friend Request</h3>
                    <button className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2 px-4">
                        SEE MORE
                    </button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-1'>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg'>
                        <Image
                            className='md:h-56 w-24 md:w-full rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='px-2 pb-2 flex flex-col justify-around'>
                            <h2 className='text-lg font-semibold mt-0.5'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col items-center justify-between gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 p-1 rounded-lg w-full'>Confirm</button>
                                <button className='bg-gray-500 hover:bg-gray-800 p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg'>
                        <Image
                            className='md:h-56 w-24 md:w-full rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='px-2 pb-2 flex flex-col justify-around'>
                            <h2 className='text-lg font-semibold mt-0.5'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col items-center justify-between gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 p-1 rounded-lg w-full'>Confirm</button>
                                <button className='bg-gray-500 hover:bg-gray-800 p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg'>
                        <Image
                            className='md:h-56 w-24 md:w-full rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='px-2 pb-2 flex flex-col justify-around'>
                            <h2 className='text-lg font-semibold mt-0.5'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col items-center justify-between gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 p-1 rounded-lg w-full'>Confirm</button>
                                <button className='bg-gray-500 hover:bg-gray-800 p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg'>
                        <Image
                            className='md:h-56 w-24 md:w-full rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='px-2 pb-2 flex flex-col justify-around'>
                            <h2 className='text-lg font-semibold mt-0.5'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col items-center justify-between gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 p-1 rounded-lg w-full'>Confirm</button>
                                <button className='bg-gray-500 hover:bg-gray-800 p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg'>
                        <Image
                            className='md:h-56 w-24 md:w-full rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='px-2 pb-2 flex flex-col justify-around'>
                            <h2 className='text-lg font-semibold mt-0.5'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col items-center justify-between gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 p-1 rounded-lg w-full'>Confirm</button>
                                <button className='bg-gray-500 hover:bg-gray-800 p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg'>
                        <Image
                            className='md:h-56 w-24 md:w-full rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='px-2 pb-2 flex flex-col justify-around'>
                            <h2 className='text-lg font-semibold mt-0.5'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col items-center justify-between gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 p-1 rounded-lg w-full'>Confirm</button>
                                <button className='bg-gray-500 hover:bg-gray-800 p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='my-2'>
                    <button className='flex gap-1 items-center justify-center p-2 w-full rounded-lg hover:bg-gray-700 uppercase'>
                        See All Requesting Accounts
                        <FaSortDown className='text-lg' />
                    </button>
                </div>
            </div>

            {/* Related Accounts */}
            <div className='border-b-2 border-cyan-950 mt-7'>
                <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold">Related Friends</h3>
                    <button className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2 px-4">
                        SEE MORE
                    </button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-1'>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg overflow-hidden w-full'>
                        <Image
                            className='w-24 h-28 md:w-full md:h-56 rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='flex flex-col justify-between flex-1 p-2'>
                            <h2 className='text-base md:text-lg font-semibold'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 text-sm p-1 rounded-lg w-full'>Add Friend</button>
                                <button className='bg-gray-500 hover:bg-gray-800 text-sm p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg overflow-hidden w-full'>
                        <Image
                            className='w-24 h-28 md:w-full md:h-56 rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='flex flex-col justify-between flex-1 p-2'>
                            <h2 className='text-base md:text-lg font-semibold'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 text-sm p-1 rounded-lg w-full'>Add Friend</button>
                                <button className='bg-gray-500 hover:bg-gray-800 text-sm p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg overflow-hidden w-full'>
                        <Image
                            className='w-24 h-28 md:w-full md:h-56 rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='flex flex-col justify-between flex-1 p-2'>
                            <h2 className='text-base md:text-lg font-semibold'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 text-sm p-1 rounded-lg w-full'>Add Friend</button>
                                <button className='bg-gray-500 hover:bg-gray-800 text-sm p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg overflow-hidden w-full'>
                        <Image
                            className='w-24 h-28 md:w-full md:h-56 rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='flex flex-col justify-between flex-1 p-2'>
                            <h2 className='text-base md:text-lg font-semibold'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 text-sm p-1 rounded-lg w-full'>Add Friend</button>
                                <button className='bg-gray-500 hover:bg-gray-800 text-sm p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg overflow-hidden w-full'>
                        <Image
                            className='w-24 h-28 md:w-full md:h-56 rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='flex flex-col justify-between flex-1 p-2'>
                            <h2 className='text-base md:text-lg font-semibold'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 text-sm p-1 rounded-lg w-full'>Add Friend</button>
                                <button className='bg-gray-500 hover:bg-gray-800 text-sm p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg overflow-hidden w-full'>
                        <Image
                            className='w-24 h-28 md:w-full md:h-56 rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='flex flex-col justify-between flex-1 p-2'>
                            <h2 className='text-base md:text-lg font-semibold'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 text-sm p-1 rounded-lg w-full'>Add Friend</button>
                                <button className='bg-gray-500 hover:bg-gray-800 text-sm p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/profile'} className='flex flex-row md:flex-col border border-cyan-950 rounded-lg overflow-hidden w-full'>
                        <Image
                            className='w-24 h-28 md:w-full md:h-56 rounded-t-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <div className='flex flex-col justify-between flex-1 p-2'>
                            <h2 className='text-base md:text-lg font-semibold'>Mohammad Abu Naim</h2>

                            <div className='flex flex-row md:flex-col gap-2 mt-2'>
                                <button className='bg-cyan-600 hover:bg-cyan-800 text-sm p-1 rounded-lg w-full'>Add Friend</button>
                                <button className='bg-gray-500 hover:bg-gray-800 text-sm p-1 rounded-lg w-full'>Cancel</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='my-2'>
                    <button className='flex gap-1 items-center justify-center p-2 w-full rounded-lg hover:bg-gray-700 uppercase'>
                        See All Related Accounts
                        <FaSortDown className='text-lg' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Friends;