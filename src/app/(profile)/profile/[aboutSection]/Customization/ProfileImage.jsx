'use client'

import { useImageUrl } from "@/app/Hooks/useImageUrl";
import Image from "next/image";
import { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";

const ProfileImage = () => {
    const { createImageUrl, revokeImageUrl } = useImageUrl()
    const [profileUrl, setProfileUrl] = useState(null)

    const handleProfilePreview = (e) => {
        const file = e.target.files[0]
        console.log(file);
        if (!file) return null

        if (profileUrl) revokeImageUrl(profileUrl)

        const url = createImageUrl(file)
        setProfileUrl(url)
    }

    return (
        <div className="space-y-4 hidden peer-checked:block p-6 rounded-2xl border border-gray-800 shadow-[0_0_25px_rgba(0,255,255,0.03)] mt-3">
            <div className="overflow-hidden flex items-center justify-center">
                <Image className="w-72 h-60 md:h-72 object-cover rounded-full shadow-lg" src={profileUrl ? profileUrl : 'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg'} width={800} height={400} alt="Cover" />
            </div>
            <div className="flex items-center justify-center">
                <input onChange={handleProfilePreview} name="profile" type="file" id="ProfileInput" accept="image/*" className="hidden" />
                <label htmlFor="ProfileInput" className="cursor-pointer w-full flex items-center justify-center gap-3 py-3 bg-gray-900 border border-cyan-500 rounded-xl text-cyan-400 hover:bg-gray-800 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300 shadow-[0_0_12px_rgba(0,255,255,0.1)]">
                    <span className="text-2xl"><FaPhotoVideo /></span>
                    <span className="text-lg font-semibold">{'Upload Profile'}</span>
                </label>
            </div>
            {
                profileUrl && <button className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-cyan-900/20">
                    Change Profile
                </button>
            }
        </div>
    );
};

export default ProfileImage;