import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import WorkForm from "./WorkForm";
import UniversityForm from "./UniversityForm";
import AddSchoolForm from "./AddSchoolForm";
import { FiPlus } from "react-icons/fi";


const Educations = () => {
    return (
        <div className="bg-linear-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 rounded-2xl backdrop-blur-xl p-4 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <div className="space-y-1">
                <input type="checkbox" id="toggleWorkForm" className="peer hidden" />
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Work</h3>
                    <label htmlFor="toggleWorkForm" className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                        <FiPlus className="text-xl" />
                        <span className="text-md">Add Work</span>
                    </label>
                </div>

                <WorkForm />

                <div className="flex gap-3 text-md hover:bg-gray-800 p-2 rounded-sm">
                    <span><FaBriefcase className="text-3xl text-cyan-400" /></span>
                    <div className="flex flex-col">
                        <span className="font-medium">Full Stack Developer <span className="font-normal"> at</span> {'SM Technology'}</span>
                        <small className="text-gray-300 text-sm">2025 to present · Dhaka Bangladesh</small>
                        <p className="text-sm text-gray-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nemo molestiae officiis corrupti. Minima libero blanditiis id quam quod iusto facilis saepe praesentium? Odit ea non accusantium. Nam, fuga. Id, sed. Quam, magnam eos est praesentium cupiditate blanditiis, ipsum debitis saepe quas harum numquam repudiandae, animi ipsam rerum enim nesciunt.
                        </p>
                    </div>
                </div>
            </div>

            {/* Educations */}
            <div className="space-y-1">
                <input type="checkbox" id="toggleuniversityForm" className="peer hidden" />
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">University</h3>
                    <label htmlFor="toggleuniversityForm" className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                        <FiPlus className="text-xl" />
                        <span className="text-md">Add Versity</span>
                    </label>
                </div>

                <UniversityForm />

                <div className="flex items-center gap-3 text-md hover:bg-gray-800 p-2 rounded-sm">
                    <FaGraduationCap className="text-4xl text-cyan-400" />
                    <span>Studied at <span className="font-medium">{'Al-Jamiatul Ahliah Darul Uloom Moinul Islam, Hathazari, Ctg, Bangladesh'}</span></span>
                </div>
            </div>

            {/* School */}
            <div className="space-y-1">
                <input type="checkbox" id="toggleSchoolForm" className="peer hidden" />
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">School</h3>
                    <label htmlFor="toggleSchoolForm" className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                        <FiPlus className="text-xl" />
                        <span className="text-md">Add School</span>
                    </label>
                </div>

                <AddSchoolForm />

                <div className="flex items-center gap-3 text-md hover:bg-gray-800 p-2 rounded-sm">
                    <FaGraduationCap className="text-3xl text-cyan-400" />
                    <span>Went to <span className="font-medium">{'Jamiya Mohammadia Khajuria Madrasha'}</span></span>
                </div>
            </div>
        </div>
    );
};

export default Educations;