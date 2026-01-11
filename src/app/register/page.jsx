'use client'
import Image from "next/image";
import Link from "next/link";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const day = form.day.value
        const month = form.month.value
        const year = form.year.value
        const gender= form.gender.value
        const email= form.email.value
        const password= form.password.value

        const name = `${firstName} ${lastName}`
        const birth = `${day} ${month} ${year}`

        const user = {name, birth, gender, email, password}
        console.log(user);
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className="p-2">
            <div className=" bg-gray-950/40 p-3 md:p-6 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,255,255,0.04)] mt-4 max-w-xl mx-auto mb-12 md:mb-0">
                <div className="flex items-center justify-center gap-2">
                    <Image src='/Logo.png' alt="Linker" width={600} height={400} className="w-10 h-auto" />
                    <h1 className="text-3xl font-bold text-cyan-400 uppercase">LINKER</h1>
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray-400">Create a new account. </h3>

                <form onSubmit={handleRegister} className='space-y-4 mb-5'>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm text-cyan-400 font-medium">First Name</label>
                            <input type="text" name="firstName" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: Elex" required />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm text-cyan-400 font-medium">Last Name</label>
                            <input type="text" name="lastName" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: Rassel" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-cyan-400">Date Of Birth</h3>
                        <div className="flex items-center justify-between gap-2">
                            {
                                <select name="day" className="p-3 w-full rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                                    <option value="">Select Day</option>
                                    {
                                        [...Array(31)].map((_, i) => (
                                            <option key={i} value={i + 1}>{i + 1}</option>
                                        ))
                                    }
                                </select>
                            }
                            <select name="month" className="p-3 w-full rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                                <option value="">Select Month</option>
                                {
                                    months.map((name, i) => <option key={i} value={name}>{name}</option>)
                                }
                            </select>
                            <select name="year" className="p-3 w-full rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                                <option value="">Select Year</option>
                                {
                                    [...Array(80)].map((_, i) => {
                                        const year = new Date().getFullYear() - i
                                        return (
                                            <option key={i} value={year}>{year}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-cyan-400">Gender</h3>
                        <div className="flex items-center justify-between gap-2">
                            <label htmlFor="male" className="flex items-center justify-between p-3 w-full space-x-1 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                                Male
                                <input type="radio" value={'Male'} name="gender" id="male" />
                            </label>
                            <label htmlFor="female" className="flex items-center justify-between p-3 w-full space-x-1 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                                Female
                                <input type="radio" value={'Female'} name="gender" id="female" />
                            </label>
                            <label htmlFor="others" className="flex items-center justify-between p-3 w-full rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                                Others
                                <input type="radio" value={'Others'} name="gender" id="others" />
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <label className="text-sm text-cyan-400 font-medium">Phone or Email</label>
                        <input type="text" name="email" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Phone Number or Email Address    " required />
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <label className="text-sm text-cyan-400 font-medium">New Password</label>
                        <input type="password" name="password" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="New Password" required />
                    </div>

                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ">
                        Register
                    </button>
                </form>

                <Link href={'/login'} className="btn w-full border border-gray-400 hover:text-gray-400 py-3 rounded-2xl font-semibold text-lg">You have an account?</Link>
            </div>
        </div>
    );
};

export default Register;