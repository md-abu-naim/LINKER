'use client'
import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

const LogOutBtn = () => {
    return (
        <button onClick={() => signOut({callbackUrl: '/login'})} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 w-full">
            <span className="text-xl bg-gray-800 p-2 rounded-full"><MdLogout /></span>
            <span className="text-xl">Log Out</span>
        </button>
    );
};

export default LogOutBtn;