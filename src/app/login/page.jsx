import Image from 'next/image';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const Login = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 mb-11'>
            {/* Left side */}
            <div className='lg:flex-1 lg:mt-14 lg:ml-20'>
                <div className="flex items-center gap-2">
                    <Image src='/Logo.png' alt="Linker" width={600} height={400} className="w-12 h-auto" />
                    <h1 className="text-3xl font-bold text-cyan-400 uppercase">LINKER</h1>
                </div>
                <h3 className='text-2xl font-medium text-gray-300 mt-3 mb-2'>Recent Login Accounts </h3>
                <p className='text-sm text-gray-400'>Click your picture or add an account</p>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-2'>
                    {/* Accounts */}
                    <div className='relative flex flex-row md:flex-col bg-gray-950 gap-1 p-2 md:p-4 rounded-lg shadow-2xs cursor-pointer hover:scale-95 transition-all'>
                        <span className='absolute top-1 left-1 font-extrabold bg-gray-900 hover:bg-gray-800 rounded-full p-0.5'><RxCross1 /></span>
                        <Image
                            className='w-12 h-14 md:w-40 mx-auto md:h-48 rounded-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <h3 className='text-md font-medium text-center mt-2'>Mohammad Abu Naim</h3>
                    </div>
                    <div className='relative flex flex-row md:flex-col bg-gray-950 gap-1 p-2 md:p-4 rounded-lg shadow-2xs cursor-pointer hover:scale-95 transition-all'>
                        <span className='absolute top-1 left-1 font-extrabold bg-gray-700 hover:bg-gray-900 rounded-full p-0.5'><RxCross1 /></span>
                        <Image
                            className='w-12 h-14 md:w-40 mx-auto md:h-48 rounded-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <h3 className='text-md font-medium text-center mt-2'>Mohammad Abu Naim</h3>
                    </div>
                    <div className='relative flex flex-row md:flex-col bg-gray-950 gap-1 p-2 md:p-4 rounded-lg shadow-2xs cursor-pointer hover:scale-95 transition-all'>
                        <span className='absolute top-1 left-1 font-extrabold bg-gray-700 hover:bg-gray-900 rounded-full p-0.5'><RxCross1 /></span>
                        <Image
                            className='w-12 h-14 md:w-40 mx-auto md:h-48 rounded-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <h3 className='text-md font-medium text-center mt-2'>Mohammad Abu Naim</h3>
                    </div>
                    <div className='relative flex flex-row md:flex-col bg-gray-950 gap-1 p-2 md:p-4 rounded-lg shadow-2xs cursor-pointer hover:scale-95 transition-all'>
                        <span className='absolute top-1 left-1 font-extrabold bg-gray-700 hover:bg-gray-900 rounded-full p-0.5'><RxCross1 /></span>
                        <Image
                            className='w-12 h-14 md:w-40 mx-auto md:h-48 rounded-lg object-cover'
                            src={'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} alt='Profile' width={600} height={400} />

                        <h3 className='text-md font-medium text-center mt-2'>Mohammad Abu Naim</h3>
                    </div>

                    {/* Add Account */}
                    <div className='flex flex-row md:flex-col gap-1 bg-gray-950 p-2 md:p-4 rounded-lg shadow-2xs cursor-pointer hover:scale-95 transition-all'>
                        <div className='flex items-center justify-center bg-gray-900 rounded-lg w-12 h-12 md:w-40 md:h-48 mx-auto'>
                            <FaPlus className='text-4xl text-cyan-400' />
                        </div>
                        <h3 className='text-md font-medium text-center mt-2 text-cyan-400'>Add New Account</h3>
                    </div>
                </div>
            </div>


            {/* Right side */}
            <div className='flex-1 p-16'>
                <div className="flex items-center justify-center gap-2">
                    <Image src='/Logo.png' alt="Linker" width={600} height={400} className="w-10 h-auto" />
                    <h1 className="text-3xl font-bold text-cyan-400">Login Form</h1>
                </div>
                <div className="bg-gray-950/40 p-6 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,255,255,0.04)] mt-2">
                    <form className='space-y-5'>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-cyan-400 font-medium">Email</label>
                            <input type="text" name="email" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: example@gmail.com" required />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-cyan-400 font-medium">Password</label>
                            <input type="password" name="password" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: *******" required />
                        </div>

                        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ">
                            Log in
                        </button>
                    </form>

                    <p className='text-md font-medium text-center text-cyan-500 underline cursor-pointer'>Forggotten Password</p>
                </div>
            </div>
        </div>
    );
};

export default Login;