import { FiHome, FiMapPin, FiPlus } from "react-icons/fi";
import CurrentCityForm from "./CurrentCityForm";
import LocationForm from "./LocationForm";

const Locations = () => {
    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 space-y-2 rounded-2xl backdrop-blur-xl p-4 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">

            {/* Current City */}
            <div>
                <input type="checkbox" id="toggleCurrentCityForm" className="peer hidden" />
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Current City</h3>
                    <label htmlFor="toggleCurrentCityForm" className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                        <FiPlus className="text-xl" />
                        <span className="text-md">Add City</span>
                    </label>
                </div>
                <CurrentCityForm />
                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <FiHome className="text-3xl text-cyan-400" />
                    <span>Lives in <span className="font-medium">{'Khajuria, Senbag, Noakhali'}</span></span>
                </div>
            </div>

            {/* Location */}
            <div>
                <input type="checkbox" id="toggleTown" className="peer hidden" />
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Home Town</h3>
                    <label htmlFor="toggleTown" className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400 rounded-md p-2">
                        <FiPlus className="text-xl" />
                        <span className="text-md">Add Twon</span>
                    </label>
                </div>

                <LocationForm />

                <div className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-sm">
                    <FiMapPin className="text-3xl text-cyan-400" />
                    <span>From <span className="font-medium">{'Senbag, Noakhali, Chittagang, Bangladesh'}</span></span>
                </div>
            </div>
        </div>
    );
};

export default Locations;