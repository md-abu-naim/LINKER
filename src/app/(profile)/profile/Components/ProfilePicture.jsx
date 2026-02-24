'use client'
import PostModal from "@/app/Components/Shared/PostModal";
import Image from "next/image";
import { useState } from "react";

const ProfilePicture = () => {
    const [openModal, setOpenModal] = useState(false)
    const image = [
        'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg',
    ]
    return (
        <div>
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg cursor-pointer">
                <Image onClick={() => setOpenModal(true)}
                    src="https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"
                    alt="Profile"
                    className="object-cover w-full h-full"
                    width={200} height={200}
                />

            </div>

            {/* ImageModal */}
            {
                openModal && <PostModal images={image}  setOpenModal={setOpenModal} />
            }
        </div>
    );
};

export default ProfilePicture;