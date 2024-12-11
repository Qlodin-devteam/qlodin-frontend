import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';  
import { useAuthStore } from "@/app/store/authStore";
import toast from "react-hot-toast";
import Link from "next/link";

const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const router = useRouter();  

  const { error, isLoading, verifyEmail } = useAuthStore();

  const handleChange = (index, value) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      await verifyEmail(verificationCode);
      router.push("/profilesetup");  // Use router.push for navigation
      toast.success("Email verified successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Auto submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  

  return (

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=''
      >
              <div className="flex flex-col items-center mt-10 justify-center">
          <a
            href="#"
            className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-10 h-10 my-2"
              src="/mail.png"
              alt="logo"
            />
          </a>
          <h1 className="text-[#1E1E1E] text-[30px] font-medium font-playfair">
            Qlodin.
          </h1>
          <h1 className="text-xl text-center text-black text-[28px] font-semibold font-['Quicksand'] leading-7 tracking-tight md:text-2xl dark:text-white">
            verify your email
          </h1>
        </div>
        <p className='text-center text-black mb-6'>Enter the 6-digit code sent to your email address.</p>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='flex justify-between'>
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type='text'
                maxLength='6'
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className='w-12 h-12 text-center text-2xl font-bold bg-white/30 text-black border-2 border-gray-600 rounded-lg focus:border-yellow-500 focus:outline-none'
              />
            ))}
          </div>
          {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}

          <div className="px-8 py-4  bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          
          <Link href={"/loginpage"} className="text-black hover:underline">
            Resend Code
          </Link>
        </p>
      </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            disabled={isLoading || code.some((digit) => !digit)}
            className='w-full bg-black text-white font-bold py-3 px-4 rounded-lg shadow-lg
             hover:from-black hover:to-black focus:outline-none focus:ring-2
             focus:ring-yellow-500 '
          >
            {isLoading ? "Verifying..." : "Verify Email"}

          </motion.button>
        </form>
      </motion.div>

  );
};

export default EmailVerificationPage;
