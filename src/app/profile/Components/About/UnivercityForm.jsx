import { FiPlus } from "react-icons/fi";

const UnivercityForm = () => {
    return (
        <div>
            <input type="checkbox" id="toggleUnivercityForm" className="peer hidden" />
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Univercity</h3>
                <label htmlFor="toggleUnivercityForm" className="flex items-center gap-1 bg-gray-900  hover:text-cyan-300 rounded-md p-2">
                    <FiPlus className="text-xl" />
                    <span className="text-md">Add Vercity</span>
                </label>
            </div>
            <form className="space-y-5 hidden peer-checked:block bg-gray-950/40 p-6 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,255,255,0.04)] mt-2">
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-cyan-400 font-medium">Univercity</label>
                    <input type="text" name="company" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: Dhaka Univercity" required />
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ">
                    Share Univercity 🚀
                </button>
            </form>
        </div>
    );
};

export default UnivercityForm;