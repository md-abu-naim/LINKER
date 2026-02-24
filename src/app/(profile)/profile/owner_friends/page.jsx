import Image from "next/image";
import { FiSlash, FiUserX } from "react-icons/fi";
import Link from "next/link";
import FriendSearchForm from "./FriendSearchForm";

export const metadata = {
  title: "LINKER | | Owner Friends",
  description: "Linker current user's friends page",
};

const OwnerFriends = () => {
    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 max-w-5xl mx-auto my-2 rounded-2xl backdrop-blur-xl p-4 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold">Friends</h3>
                <FriendSearchForm />
            </div>

            {/* Friends Cart Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div className="flex items-center justify-between gap-4 border border-gray-800 rounded-lg p-2">
                    <div className="flex items-center justify-between gap-3">
                        <Image
                            src="https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"
                            alt="Profile"
                            className="object-cover rounded-lg w-28 h-28 shadow-2xl shadow-gray-700"
                            width={800} height={400}
                        />
                        <div className="flex flex-col">
                            <Link href={'/profile'} className="text-2xl font-medium text-cyan-400 hover:text-cyan-600">Mohammad Abu Naim</Link>
                            <Link href={'/profile/friends'} className="font-medium text-gray-400 hover:text-gray-600">1000 Friends</Link>
                        </div>
                    </div>
                    <div className="dropdown dropdown-center">
                        <button className="p-2 rounded-full hover:bg-gray-700 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                            </svg>
                        </button>
                        <ul tabIndex="-1" className="dropdown-content menu bg-gray-900 rounded-box z-50 w-52 p-2 shadow-lg border border-cyan-700 right-24">

                            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                <span className=" bg-gray-800 p-2 rounded-full"><FiUserX /></span>
                                <span className="">Unfriend</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                <span className=" bg-gray-800 p-2 rounded-full"><FiSlash /></span>
                                <span className="">Block</span>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-4 border border-gray-800 rounded-lg p-2">
                    <div className="flex items-center justify-between gap-3">
                        <Image
                            src="https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"
                            alt="Profile"
                            className="object-cover rounded-lg w-28 h-28 shadow-2xl shadow-gray-700"
                            width={800} height={400}
                        />
                        <div className="flex flex-col">
                            <Link href={'/profile'} className="text-2xl font-medium text-cyan-400 hover:text-cyan-600">Mohammad Abu Naim</Link>
                            <Link href={'/profile/friends'} className="font-medium text-gray-400 hover:text-gray-600">1000 Friends</Link>
                        </div>
                    </div>
                    <div className="dropdown dropdown-center">
                        <button className="p-2 rounded-full hover:bg-gray-700 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                            </svg>
                        </button>
                        <ul tabIndex="-1" className="dropdown-content menu bg-gray-900 rounded-box z-50 w-52 p-2 shadow-lg border border-cyan-700 right-24">

                            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                <span className=" bg-gray-800 p-2 rounded-full"><FiUserX /></span>
                                <span className="">Unfriend</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                <span className=" bg-gray-800 p-2 rounded-full"><FiSlash /></span>
                                <span className="">Block</span>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-4 border border-gray-800 rounded-lg p-2">
                    <div className="flex items-center justify-between gap-3">
                        <Image
                            src="https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"
                            alt="Profile"
                            className="object-cover rounded-lg w-28 h-28 shadow-2xl shadow-gray-700"
                            width={800} height={400}
                        />
                        <div className="flex flex-col">
                            <Link href={'/profile'} className="text-2xl font-medium text-cyan-400 hover:text-cyan-600">Mohammad Abu Naim</Link>
                            <Link href={'/profile/friends'} className="font-medium text-gray-400 hover:text-gray-600">1000 Friends</Link>
                        </div>
                    </div>
                    <div className="dropdown dropdown-center">
                        <button className="p-2 rounded-full hover:bg-gray-700 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                            </svg>
                        </button>
                        <ul tabIndex="-1" className="dropdown-content menu bg-gray-900 rounded-box z-50 w-52 p-2 shadow-lg border border-cyan-700 right-24">

                            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                <span className=" bg-gray-800 p-2 rounded-full"><FiUserX /></span>
                                <span className="">Unfriend</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                <span className=" bg-gray-800 p-2 rounded-full"><FiSlash /></span>
                                <span className="">Block</span>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-4 border border-gray-800 rounded-lg p-2">
                    <div className="flex items-center justify-between gap-3">
                        <Image
                            src="https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"
                            alt="Profile"
                            className="object-cover rounded-lg w-28 h-28 shadow-2xl shadow-gray-700"
                            width={800} height={400}
                        />
                        <div className="flex flex-col">
                            <Link href={'/profile'} className="text-2xl font-medium text-cyan-400 hover:text-cyan-600">Mohammad Abu Naim</Link>
                            <Link href={'/profile/friends'} className="font-medium text-gray-400 hover:text-gray-600">1000 Friends</Link>
                        </div>
                    </div>
                    <div className="dropdown dropdown-center">
                        <button className="p-2 rounded-full hover:bg-gray-700 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                            </svg>
                        </button>
                        <ul tabIndex="-1" className="dropdown-content menu bg-gray-900 rounded-box z-50 w-52 p-2 shadow-lg border border-cyan-700 right-24">

                            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                <span className=" bg-gray-800 p-2 rounded-full"><FiUserX /></span>
                                <span className="">Unfriend</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                                <span className=" bg-gray-800 p-2 rounded-full"><FiSlash /></span>
                                <span className="">Block</span>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerFriends;