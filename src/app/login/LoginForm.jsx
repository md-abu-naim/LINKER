'use client'
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";


const LoginForm = () => {
    const session = useSession()
    const router = useRouter()

    console.log(session);

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        const result = await signIn("credentials", { email, password,  redirect: false})

        if (result?.error) {
            alert("Invalid email or password");
        }else{
            alert('login success')
            router.push('/')
        }
    }
    return (
        <form onSubmit={handleLogin} id='account' className='space-y-8'>
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
    );
};

export default LoginForm;