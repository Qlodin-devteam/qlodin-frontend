/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import Input from "./Input";
import { Mail, Lock, Loader } from "lucide-react";

import Link from "next/link";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { useState } from "react";
 import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/app/store/authSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";






const SignUpPage = () => {
  const dispatch= useDispatch()
  const router = useRouter()

  const [loading , setLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password:"",
    
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]:value
    })
  }
 const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true)
  try{
   
     const response = await  axios.post("https://qlodin-backend.onrender.com/api/user/auth/register",formData, { 
      
      headers: {
        "Content-Type": "application/json",
      },

      });

     const user = response.data;
     toast.success("signup Successfull please check your mail for your verification code ")
     dispatch(setAuthUser(user));
     router.push("/verifyemail ");
     console.log(user);

  }catch(error:any){
    toast.error(error.response.data.message)
    console.log(error)

  }finally{
    setLoading(false)
  }
}
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
      overflow-hidden"
    >
      <div className="p-8">
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
            Sign Up
          </h1>
        </div>

        <form onSubmit={submitHandler} >
          <Input
            icon={Mail}
            type="email"
            name='email'
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            icon={Lock}
            type="password"
            name='password'
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
       
          <PasswordStrengthMeter password={formData.password} />
          
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-black to-black text-white
            font-bold rounded-lg shadow-lg hover:from-black
            hover:to-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
            focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
           
          > {loading ? (
            <Loader className=" text-white animate-spin mx-auto" size={24} />
          ) : (
            "Sign Up"
          )}
        
          </motion.button>
          
        </form>
      </div>
      <div className="px-8 py-4  bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link href={"/loginpage"} className="text-black hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
