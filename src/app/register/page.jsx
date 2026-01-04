import Image from "next/image";

const Register = () => {
    return (
        <div>
            <div className=" bg-gray-950/40 p-6 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,255,255,0.04)] mt-4 max-w-xl mx-auto">
                <div className="flex items-center justify-center gap-2">
                    <Image src='/Logo.png' alt="Linker" width={600} height={400} className="w-10 h-auto" />
                    <h1 className="text-3xl font-bold text-cyan-400 uppercase">LINKER</h1>
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray-400">Create a new account. </h3>

                <form className='space-y-8'>
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm text-cyan-400 font-medium">First Name</label>
                            <input type="text" name="firstName" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: Elex" required />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm text-cyan-400 font-medium">Last Name</label>
                            <input type="text" name="lastName" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: RasselF" />
                        </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ">
                        Log in
                    </button>
                </form>

                <p className='text-md font-medium text-center text-cyan-500 underline cursor-pointer'>Forggotten Password</p>

                <div className="divider">OR</div>
            </div>
        </div>
    );
};

export default Register;