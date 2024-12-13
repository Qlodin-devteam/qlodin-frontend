"use client";
import { motion } from "framer-motion";
import Input from "./Input";
import { Mail, Lock, Loader } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const SigninPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	
return (
    <motion.div
	initial={{ opacity: 0, y: 20 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 0.5 }}
	className="max-w-md w-full  bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
	overflow-hidden"
    >
	<div className="p-8">
        <div className="flex flex-col items-center mt-10 justify-center">
		<a
            href="#"
            className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
		>
            <img className="w-10 h-10 my-2" src="/qlodin-logo.png" alt="logo" />
		</a>
		<h1 className="text-[#1E1E1E] text-[30px] font-medium font-playfair">
            Qlodin.
		</h1>
		<h1 className="text-xl text-center text-black text-[28px] font-semibold font-['Quicksand'] leading-7 tracking-tight md:text-2xl dark:text-white">
            welcome Back
		</h1>
        </div>

        <form className="p-3">
		<Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
		/>
		<Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
		/>

		<div className="flex items-center mb-6">
            <Link
			href="/forgot-password"
			className="text-sm text-black hover:underline"
            >
			Forgot password?
            </Link>
		</div>
		<motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r bg-black text-white 
						font-bold rounded-lg shadow-lg 
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2
						focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
		>
            {isLoading ? (
			<Loader className="w-6 h-6 animate-spin  mx-auto" />
            ) : (
			"Login"
            )}
		</motion.button>
		<div className="flex flex-col items-center justify-center text-black text-[22px] font-medium font-['Quicksand'] leading-7">
            or
		</div>
		<div className="flex flex-col gap-3 my-3">
            <div className="flex flex-col items-center justify-center rounded-sm p-2 bg-[#DDDBFF] text-black">
			<button className="flex items-center">
                <img
				className="w-6 h-6 mr-2"
				src="/facebook.png"
				alt="Facebook logo"
                />
                Sign in with Facebook
			</button>
            </div>
            <div className="flex flex-col items-center justify-center rounded-sm p-2 bg-[#DDDBFF] text-black">
			<button className="flex items-center">
                <img
				className="w-6 h-6 mr-2"
				src="/google.png"
				alt="Google logo"
                />
                Sign in with Google
			</button>
            </div>
            <div className="flex flex-col items-center justify-center rounded-sm p-2 bg-[#DDDBFF] text-black">
			<button className="flex items-center">
                <img
				className="w-10 h-6 mr-2"
				src="/apple.png"
				alt="Apple logo"
                />
                Sign in with Apple
			</button>
            </div>
		</div>
        </form>
	</div>
	<div className="px-8 py-4 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
		Don't have an account?{" "}
		<Link href="/sign-up" className="text-black hover:underline">
            Sign up
		</Link>
        </p>
	</div>
    </motion.div>
);
};

export default SigninPage;
