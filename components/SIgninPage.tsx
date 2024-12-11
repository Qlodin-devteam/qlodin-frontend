"use client"
import { motion } from "framer-motion"
import Input from "./Input"; 
import { Mail, Lock, Loader } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/app/store/authStore";


const SigninPage = () => {

    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login, isLoading, error } = useAuthStore();

	const handleLogin = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

    

  return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full  bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
      overflow-hidden'
    >
        <div className='p-8'>
		<div className="flex flex-col items-center mt-10 justify-center">
          <a
            href="#"
            className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-10 h-10 my-2"
              src="/qlodin-logo.png"
              alt="logo"
            />
          </a>
          <h1 className="text-[#1E1E1E] text-[30px] font-medium font-playfair">
            Qlodin.
          </h1>
          <h1 className="text-xl text-center text-black text-[28px] font-semibold font-['Quicksand'] leading-7 tracking-tight md:text-2xl dark:text-white">
            welcome Back
          </h1>
        </div>

				<form className="p-3" >
                <Input
						icon={Mail}
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						icon={Lock}
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
                    	<div className='flex items-center mb-6'>
						<Link href='/forgot-password' className='text-sm text-black hover:underline'>
							Forgot password?
						</Link>
					</div>
                    <motion.button
						className='mt-5 w-full py-3 px-4 bg-gradient-to-r bg-black text-white 
						font-bold rounded-lg shadow-lg 
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						
					>
                      {isLoading ? <Loader className='w-6 h-6 animate-spin  mx-auto' /> : "Login"}
					</motion.button>
                    </form>
                    </div>
                    <div className='px-8 py-4 bg-opacity-50 flex justify-center'>
				<p className='text-sm text-gray-400'>
					Don't have an account?{" "}
					<Link href='/signuppage' className='text-black hover:underline'>
						Sign up
					</Link>
				</p>
			</div>

      
    </motion.div>
  )
}

export default SigninPage
