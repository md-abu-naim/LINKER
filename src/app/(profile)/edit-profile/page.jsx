'use client'
import { useImageUrl } from '@/app/Hooks/useImageUrl';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const EditProfile = () => {
    const { createImageUrl, revokeImageUrl } = useImageUrl()
    const [profileUrl, setProfileUrl] = useState(null)
    const [coverUrl, setCoverUrl] = useState(null)
    const {data: session} = useSession()
    const [bio, setBio] = useState('')


    const handleProfilePreview = (e) => {
        const file = e.target.files[0]

        if (!file) return null

        if (profileUrl) revokeImageUrl(profileUrl)

        const url = createImageUrl(file)
        setProfileUrl(url)
    }

    const handleCoverPreview = (e) => {
        const file = e.target.files[0]
        if (!file) return null

        if (coverUrl) revokeImageUrl(coverUrl)

        const url = createImageUrl(file)
        setCoverUrl(url)
    }


    const handleUser = async() => {
        const updateData = {
            profile: profileUrl,
            cover: coverUrl,
            bio
        }
        // console.log(updateData);
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API}/users/update/${session?.user?.email}`, updateData)
        const data = await res.data
        console.log(data);
    }


    return (
        <div className="bg-linear-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 space-y-2 rounded-2xl backdrop-blur-xl  p-4 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <div className='flex items-center gap-2 justify-between'>
                <Link href={'/register'} className="bg-gray-800 hover:bg-gray-900 py-1 px-3 rounded-md text-cyan-400 hover:text-cyan-300 text-xl flex items-center gap-1"><GrLinkPrevious /> Back</Link>
                <Link href={'/'} className="bg-gray-800 hover:bg-gray-900 py-1 px-3 rounded-md text-cyan-400 hover:text-cyan-300 text-xl flex items-center gap-1">Skip <GrLinkNext /></Link>
            </div>
            <div className='w-10/12 mx-auto space-y-7'>
                {/* Cover  Image*/}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">Cover</h3>

                        <input onChange={handleCoverPreview} name="cover" type="file" id="coverInput" accept="image/*" className="hidden" />
                        <label htmlFor='coverInput' className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                            <FiEdit className="text-xl" />
                            <span className="text-md">Edit Cover</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-center shadow-gray-300 border-2 border-cyan-400 rounded-md">
                        <Image
                            src={coverUrl || "https://i.postimg.cc/MTvqpvT7/cover.jpg"}
                            alt="Cover"
                            className="cover rounded-md w-6xl max-h-40 md:max-h-96 shadow-2xl shadow-gray-700"
                            width={800} height={400}
                        />
                    </div>
                </div>

                <div className='flex justify-around gap-10'>
                    {/* Profile Image */}
                    <div className="space-y-2 flex-1">
                        <input type="checkbox" id="toggleProfile" className="peer hidden" />
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold">Profile</h3>

                            <input onChange={handleProfilePreview} name="profile" type="file" id="profileInput" accept="image/*" className="hidden" />
                            <label htmlFor="profileInput" className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                                <FiEdit className="text-xl" />
                                <span className="text-md">Edit Profile</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-center shadow-gray-300 rounded-md border border-gray-700 p-1">
                            <Image
                                src={profileUrl || "https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"}
                                alt="Profile"
                                className="object-cover rounded-full w-60 h-60 shadow-2xl border-4 border-cyan-400 shadow-gray-700"
                                width={800} height={400}
                            />
                        </div>
                    </div>

                    {/* Introduce */}
                    <div className="space-y-2 flex-1">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold">Introduce</h3>
                            <label htmlFor="toggleBio" className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                                <FiEdit className="text-xl" />
                                <span className="text-md">Edit Intro</span>
                            </label>
                        </div>

                        <input type="checkbox" id="toggleBio" className="peer hidden" />
                        <div className="space-y-5 hidden peer-checked:block bg-gray-950/40 p-6 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,255,255,0.04)] mt-2">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-cyan-400 font-medium">Introduce</label>
                                <textarea onChange={(e) => setBio(e.target.value)} maxLength={150} name="description" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none min-h-[120px] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Describe your role, responsibilities...">{bio}</textarea>
                            </div>
                        </div>


                        <div className="text-center shadow-gray-300 rounded-md border border-gray-700 p-1">
                            <p className="text-gray-300 p-3">{bio || 'FullStack Developer | Frontend Developer | React | Next.js | Node.js | MERN Stack | MongoDB | Web App'}</p>
                        </div>
                    </div>
                </div>

                {/* Continue button */}
                <button onClick={handleUser} className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-[0_0_25px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.7)]">
                    Save and Continue
                </button>
            </div>
        </div>
    );
};

export default EditProfile;