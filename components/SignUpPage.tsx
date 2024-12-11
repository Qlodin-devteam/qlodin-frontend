"use client";
import { motion } from "framer-motion";
import Input from "./Input";
import { Mail, Lock, Loader } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { useAuthStore } from "@/app/store/authStore";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, message, isLoading } = useAuthStore();
  const router = useRouter(); // Use the router hook

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      // Display success message
      setTimeout(() => {
        router.push("/verifyemail"); // Redirect after 5 seconds
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

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

        <form onSubmit={handleSignUp}>
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
          {message && <p className="text-green-500 font-semibold mt-2  " >{message}</p>}
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <PasswordStrengthMeter password={password} />
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-black to-black text-white
            font-bold rounded-lg shadow-lg hover:from-black
            hover:to-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
            focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
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
