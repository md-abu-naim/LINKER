'use client'
import PostModal from "@/app/Components/Shared/PostModal";
import Image from "next/image";

const ProfilePicture = () => {
    const images = [
        'https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg',
    ]
    return (
        <div>
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg cursor-pointer">
                <Image onClick={() => document.getElementById('my_modal_4').showModal()}
                    src="https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"
                    alt="Profile"
                    className="object-cover w-full h-full"
                    width={200} height={200}
                />
            </div>

            {/* ImageModal */}
            {/* <PostModal images={images} /> */}
        </div>
    );
};

export default ProfilePicture;