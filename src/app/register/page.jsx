import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

const Register = () => {
    return (
        <div className="p-2">
            <div className=" bg-gray-950/40 p-3 md:p-6 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,255,255,0.04)] mt-4 max-w-xl mx-auto mb-12 md:mb-0">
                <div className="flex items-center justify-center gap-2">
                    <Image src='/Logo.png' alt="Linker" width={600} height={400} className="w-10 h-auto" />
                    <h1 className="text-3xl font-bold text-cyan-400 uppercase">LINKER</h1>
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray-400">Create a new account. </h3>

                <RegisterForm />

                <Link href={'/login'} className="btn w-full border border-gray-400 hover:text-gray-400 py-3 rounded-2xl font-semibold text-lg">You have an account?</Link>
            </div>
        </div>
    );
};

export default Register;