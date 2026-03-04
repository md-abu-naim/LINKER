'use client'
import axios from "axios";

const LocationForm = ({user}) => {
    const handleTwon = async(e) => {
        e.preventDefault()
        const location = e.target.location.value

        const res = await axios.put(`${process.env.NEXT_PUBLIC_API}/users/update/${user?._id}`, {location})
        const data = await res.data.data
        if (data.modifiedCount > 0) {
            alert('Update location')
        }
    }
    return (
        <form onSubmit={handleTwon} className="space-y-5 hidden peer-checked:block bg-gray-950/40 p-6 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,255,255,0.04)] mt-2">
            <div className="flex flex-col gap-1">
                <label className="text-sm text-cyan-400 font-medium">Home Town</label>
                <input type="text" name="location" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: Senbag, Noakhali" required />
            </div>
            <button className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ">
                Share Home Town 🚀
            </button>
        </form>
    );
};

export default LocationForm;