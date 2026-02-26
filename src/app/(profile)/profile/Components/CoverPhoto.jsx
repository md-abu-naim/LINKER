"use client"
import PostModal from "@/app/Components/Shared/PostModal";
import Image from "next/image";
import { useState } from "react";

const CoverPhoto = ({cover}) => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <div className="flex items-center justify-center shadow-gray-300 cursor-pointer">
                <Image onClick={() => setOpenModal(true)}
                    src={cover ||"https://i.postimg.cc/MTvqpvT7/cover.jpg"}
                    alt="Cover"
                    className="object-cover rounded-b-md w-5xl max-h-40 md:max-h-80 lg:max-h-96 shadow-2xl shadow-gray-700"
                    width={800} height={400}
                />
            </div>

            {/* ImageModal */}
            {
                openModal && <PostModal images={[cover]}  setOpenModal={setOpenModal} />
            }
        </div>
    );
};

export default CoverPhoto;