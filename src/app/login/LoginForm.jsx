import Link from "next/link";

const LoginForm = () => {
    return (
        <div className="space-y-5 bg-gray-950/40 p-6 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,255,255,0.04)] mt-4">
            <form id='account' className='space-y-8'>
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-cyan-400 font-medium">Email</label>
                    <input type="text" name="email" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: example@gmail.com" required />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-cyan-400 font-medium">Password</label>
                    <input type="password" name="password" className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 text-gray-200 transition-all outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" placeholder="Ex: *******" required />
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ">
                    Log in
                </button>
            </form>

            <p className='text-md font-medium text-center text-cyan-500 underline cursor-pointer'>Forggotten Password</p>

            <div className="divider">OR</div>

            <Link href='/register' className=''>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-[0_0_25px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.7)]">
                    Create New Account
                </button>
            </Link>
        </div>
    );
};

export default LoginForm;