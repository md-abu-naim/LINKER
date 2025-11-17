import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import WorkForm from "./WorkForm";

const Educations = () => {
    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 rounded-2xl backdrop-blur-xl p-4 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <div>
                {/* Works */}
                <WorkForm />
                

                <div className="flex items-center gap-3 text-md hover:bg-gray-800 p-2 rounded-sm">
                    <FaBriefcase className="text-3xl text-cyan-400" />
                    <div className="flex flex-col">
                        <span className="font-medium">Full Stack Developer <span className="font-normal"> at</span> {'SM Technology'}</span>
                        <small className="text-gray-300 text-sm">2025 to present</small>
                    </div>
                </div>

                {/* Educations */}
                <div className="">
                    <div className="flex items-center gap-3 text-md hover:bg-gray-800 p-2 rounded-sm">
                        <FaGraduationCap className="text-3xl text-cyan-400" />
                        <span>Went to <span className="font-medium">{'Jamiya Mohammadia Khajuria Madrasha'}</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-md hover:bg-gray-800 p-2 rounded-sm">
                        <FaGraduationCap className="text-4xl text-cyan-400" />
                        <span>Studied at <span className="font-medium">{'Al-Jamiatul Ahliah Darul Uloom Moinul Islam, Hathazari, Ctg, Bangladesh'}</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Educations;