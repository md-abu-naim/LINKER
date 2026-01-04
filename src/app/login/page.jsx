import Image from 'next/image';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const Login = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between mb-11'>
            {/* Left side */}
            <div className='flex-1 w-full mx-auto border'>
                <div className="flex items-center gap-2">
                    <Image src='/Logo.png' alt="Linker" width={600} height={400} className="w-12 h-auto" />
                    <h1 className="text-3xl font-bold text-cyan-400 uppercase">LINKER</h1>
                </div>
                <h3 className='text-2xl font-medium text-gray-200'>Recent Login Accounts </h3>
                <p className='text-sm text-gray-400'>Click your picture or add an account</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
                    {/* Accounts */}
                    <div className='relative flex flex-row md:flex-col bg-gray-950 gap-1 p-2 md:p-4 rounded-lg shadow-2xs cursor-pointer hover:scale-95 transition-all'>
                        <span className='absolute top-1 left-1 font-extrabold bg-gray-700 hover:bg-gray-900 rounded-full p-0.5'><RxCross1 /></span>
                        <Image
                            className='w-12 h-14 md:w-full md:h-56 rounded-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <h3 className='text-md font-medium text-center mt-2'>Mohammad Abu Naim</h3>
                    </div>

                    {/* Add Account */}
                    <div className='flex flex-row md:flex-col gap-1 bg-gray-950 p-2 md:p-4 rounded-lg shadow-2xs cursor-pointer hover:scale-95 transition-all'> 
                        <div className='flex items-center justify-center bg-gray-900 rounded-lg w-12 h-12 md:w-full md:h-56'>
                            <FaPlus className='text-4xl text-cyan-400' />
                        </div>
                        <h3 className='text-md font-medium text-center mt-2 text-cyan-400'>Add New Account</h3>
                    </div>
                </div>
            </div>


            {/* Right side */}
            <div className='border flex-1'>
                <h3>THis is form</h3>
            </div>
        </div>
    );
};

export default Login;