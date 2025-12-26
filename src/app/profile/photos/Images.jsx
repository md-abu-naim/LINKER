'use client'
import PostModal from "@/app/Components/Shared/PostModal";
import Image from "next/image";
import { MdDelete, MdDownload, MdEdit, MdPerson, MdPhoto } from "react-icons/md";
const Images = () => {
    const images = [
        'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg',
    ]
    return (
        <div className="relative border border-gray-700 rounded-lg p-0.5">
            <Image onClick={() => document.getElementById('my_modal_4').showModal()}
                src="https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"
                alt="Profile"
                className="object-cover rounded-lg w-52 h-48 shadow-2xl shadow-gray-700 cursor-pointer"
                width={800} height={400}
            />
            <div className="dropdown dropdown-center absolute top-1 right-1">
                <button className="p-2 rounded-full bg-gray-500 hover:bg-gray-700 transition">
                    <MdEdit className="text-xl text-black" />
                </button>
                <ul tabIndex="-1" className="dropdown-content menu bg-gray-900 rounded-box z-50 w-52 p-2 shadow-lg border border-cyan-700 right-24">
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-700">
                        <span className="text-xl bg-gray-800 p-2 rounded-full"><MdDelete /></span>
                        <span className="">Delete Photo</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-700">
                        <span className="text-xl bg-gray-800 p-2 rounded-full"><MdDownload /></span>
                        <span className="">Download</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-700">
                        <span className="text-xl bg-gray-800 p-2 rounded-full"><MdPerson /></span>
                        <span className="">Make Profile Picture</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-700">
                        <span className="text-xl bg-gray-800 p-2 rounded-full"><MdPhoto /></span>
                        <span className="">Make Cover Photo</span>
                    </div>
                </ul>
            </div>

            {/* ImageModal */}
            <PostModal images={images} />
        </div>
    );
};

export default Images;