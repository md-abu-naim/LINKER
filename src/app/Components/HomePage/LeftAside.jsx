import Image from "next/image";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import { MdNotListedLocation } from "react-icons/md";
import "./HomePage.css";

const LeftAside = () => {
    return (
        <div>
            <Link href={'/profile'} title="Go to Profile" className="shadow-lg rounded-xl border border-gray-700 block">
                <Image src="https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg" alt="Cover" width={300} height={250} className="w-full h-28 bg-cover rounded-t-2xl" />
                <div className="-mt-16 flex flex-col items-center p-3 pb-5">
                    <Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="" width={100} height={100} className="h-28 w-28 rounded-full border-3 border-cyan-400 object-cover" />
                    <h3 className="text-2xl font-bold">Mohammad Abu Naim</h3>
                    <p className="text-gray-400 text-center text-xm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quas magnam cum fugit ipsa, eos consequatur quia molestiae excepturi officiis.</p>
                    <address className="flex items-center gap-2 text-gray-500">
                        <span><MdNotListedLocation /></span>
                        <small>Noakhali, Chittagang, Bangladesh</small>
                    </address>
                </div>
            </Link>
            <div className="rounded-md shadow-lg py-2 mt-5">
                <Link href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                    <span className="text-xl bg-gray-800 p-2 rounded-full"><IoSettingsOutline /></span>
                    <span className="text-xl">Settings & Privacy</span>
                </Link>
                <Link href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                    <span className="text-xl bg-gray-800 p-2 rounded-full"><IoSettingsOutline /></span>
                    <span className="text-xl">Settings & Privacy</span>
                </Link>
                <Link href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                    <span className="text-xl bg-gray-800 p-2 rounded-full"><IoSettingsOutline /></span>
                    <span className="text-xl">Settings & Privacy</span>
                </Link>
                <Link href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                    <span className="text-xl bg-gray-800 p-2 rounded-full"><IoSettingsOutline /></span>
                    <span className="text-xl">Settings & Privacy</span>
                </Link>
                <Link href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                    <span className="text-xl bg-gray-800 p-2 rounded-full"><IoSettingsOutline /></span>
                    <span className="text-xl">Settings & Privacy</span>
                </Link>
                <Link href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                    <span className="text-xl bg-gray-800 p-2 rounded-full"><IoSettingsOutline /></span>
                    <span className="text-xl">Settings & Privacy</span>
                </Link>
                <Link href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                    <span className="text-xl bg-gray-800 p-2 rounded-full"><IoSettingsOutline /></span>
                    <span className="text-xl">Settings & Privacy</span>
                </Link>
                <Link href="/help&support" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                    <span className="text-xl bg-gray-800 p-2 rounded-full"><IoSettingsOutline /></span>
                    <span className="text-xl">Help & Support</span>
                </Link>
                <Link href="/feedback" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                    <span className="text-xl bg-gray-800 p-2 rounded-full"><IoSettingsOutline /></span>
                    <span className="text-xl">Give Feedback</span>
                </Link>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                    <span className="text-xl bg-gray-800 p-2 rounded-full"><IoSettingsOutline /></span>
                    <span className="text-xl">Log Out</span>
                </button>
            </div>
        </div>
    );
};

export default LeftAside;