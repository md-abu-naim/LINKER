"use client"
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";

const BackButton = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.back()} className='absolute md:static m-2 lg:w-96'>
            <button className="btn cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors rounded-full p-2 text-xl"><RxCross1 /></button>
        </div>
    );
};

export default BackButton;