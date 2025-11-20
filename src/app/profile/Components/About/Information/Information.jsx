import { FaPhoneVolume } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import PhoneForm from "./PhoneForm";
import { MdMarkEmailUnread } from "react-icons/md";
import EmailForm from "./EmailForm";

const Information = () => {
    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 space-y-2 rounded-2xl backdrop-blur-xl p-4 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            {/* Phone Number */}
            <div className="space-y-1">
                <input type="checkbox" id="togglePhone" className="peer hidden" />
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Phone Number</h3>
                    <label htmlFor="togglePhone" className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                        <FiEdit className="text-xl" />
                        <span className="text-md">Edit Phone</span>
                    </label>
                </div>

                <PhoneForm />

                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <FaPhoneVolume className="text-2xl text-cyan-400" />
                    <span>Phone: <span className="font-medium hover:underline hover:text-cyan-400">{'01882585833'}</span></span>
                </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
                <input type="checkbox" id="toggleEmail" className="peer hidden" />
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Email</h3>
                    <label htmlFor="toggleEmail" className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                        <FiEdit className="text-xl" />
                        <span className="text-md">Edit Email</span>
                    </label>
                </div>

                <EmailForm />

                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <MdMarkEmailUnread className="text-3xl text-cyan-400" />
                    <span>Email: <a href="mailto:" className="font-medium hover:underline hover:text-cyan-400">{'mohammadnaim.dev@gmail.com'}</a></span>
                </div>
            </div>
        </div>
    );
};

export default Information;