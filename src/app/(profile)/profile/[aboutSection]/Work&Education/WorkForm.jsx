'use client'
import { useState } from "react";

const WorkForm = () => {
    const [present, setPresent] = useState(false)

    const handleWork = (e) => {
        e.preventDefault()
        const form = e.target
        const company = form.company.value
        const position = form.position.value
        const city = form.city.value
        const description = form.description.value
        const fromYear = form.fromYear.value
        const toYear = present ? 'Present' : form.toYear.value

        const workData = { company, position, city, description, fromYear, toYear }
        console.log(workData);
    }
    return (
        <form onSubmit={handleWork} className="space-y-5 hidden peer-checked:block bg-gray-950/40 p-6 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,255,255,0.04)] mt-2">
            <div className="flex flex-col gap-1">
                <label className="text-sm text-cyan-400 font-medium">Company</label>
                <input type="text" name="company" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: Google, Meta..." required />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-cyan-400 font-medium">Position</label>
                <input type="text" name="position" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: Frontend Developer" required />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-cyan-400 font-medium">City / Town</label>
                <input type="text" name="city" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: Dhaka, Chittagong" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-cyan-400 font-medium">Description</label>
                <textarea name="description" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none min-h-[120px] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Describe your role, responsibilities..."></textarea>
            </div>

            <h4 className="text-lg font-semibold text-gray-200 mt-4">Time Period</h4>
            <div className="flex items-center gap-2">
                <input onChange={() => setPresent(!present)} checked={present} type="checkbox" name="Present" id="present" className="size-5 accent-cyan-500" />
                <label htmlFor="present" className="text-md text-cyan-400 font-medium">{"I'm currently work here"}</label>
            </div>
            <div className="flex items-center gap-3">
                <span>From</span>
                <select defaultValue='Year' name="fromYear" className="bg-gray-900 border border-gray-700 text-gray-200 p-2.5 rounded-lg outline-none focus:border-cyan-400 font-semibold shadow-[inset_0_0_12px_rgba(0,0,0,0.5)]">
                    <option disabled>Year</option>
                    {
                        Array.from({ length: 27 }, (_, i) => 2026 - i).map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))
                    }
                </select>
                <span>to</span>
                {
                    present ? <span className="text-md font-medium">Present</span> :
                        <select defaultValue='Year' name="toYear" className="bg-gray-900 border border-gray-700 text-gray-200 p-2.5 rounded-lg outline-none focus:border-cyan-400 font-semibold shadow-[inset_0_0_12px_rgba(0,0,0,0.5)]">
                            <option disabled>Year</option>
                            {
                                Array.from({ length: 27 }, (_, i) => 2026 - i).map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))
                            }
                        </select>

                }
            </div>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ">
                Share Work 🚀
            </button>
        </form>
    );
};

export default WorkForm;