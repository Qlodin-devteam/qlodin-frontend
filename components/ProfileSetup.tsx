"use client"
import { motion } from "framer-motion"
import Input from "./Input"; 
import {   User, Cake, } from "lucide-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";


const ProfileSetup = () => {

    //  const [firstName, setFirstName] = useState("");
    //  const [lastName, setLastName] = useState("");
    //  const [userName, setUserName] = useState("");
    //  const [dateOfBirth, setDateOfBirth] = useState("");
    //  const [mobileNumber, setMobileNumber] = useState("");

   
	

    
	// const { profilesetup, error, message, isLoading } = useAuthStore();
	// const router = useRouter(); // Use the router hook
  
	// const handleSignUp = async (e) => {
	//   e.preventDefault();
	//   try {
	// 	await profilesetup(firstName, lastName,userName,dateOfBirth,mobileNumber);
	// 	// Display success message
	// 	setTimeout(() => {
	// 	  router.push("/step1"); // Redirect after 5 seconds
	// 	}, 5000);
	//   } catch (error) {
	// 	console.log(error);
	//   }
	// };
   
  return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="max-w-md w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
      overflow-hidden"
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
           Creating your Profile
          </h1>
        </div>

				<form className="p-3" >
					<div className="sm:flex sm:gap-4 ">

					<Input
						icon={User}
						type='firstName'
						placeholder='First Name'
						// value={firstName}
						// onChange={(e) => setFirstName(e.target.value)}
					/>
                        <Input
						icon={User}
						type='LastName'
						placeholder='Last Name'
						// value={lastName}
						// onChange={(e) => setLastName(e.target.value)}
					/>

					</div>
					<Input
						icon={Cake}
						type='date'
						placeholder='DD/MM/YYYY'
						// value={dateOfBirth}
						// onChange={(e) => setDateOfBirth(e.target.value)}
					/>
         
                        <Input
						icon={User}
						type='userName'
						placeholder='Driptag'
						// value={userName}
						// onChange={(e) => setUserName(e.target.value)}
					/>

<div className="relative w-full">
  <div className="flex items-center">
    {/* Country code dropdown */}
    <select
      className="bg-gray-100 border border-gray-300 text-gray-800 text-sm
	   rounded-l-lg focus:ring-yellow-500 focus:border-yellow-500 block w-1/3 p-2.5"
      
      
    >
	  <option value="+234">+234 (NG)</option>
      <option value="+1">+1 (US)</option>
      <option value="+44">+44 (UK)</option>
      <option value="+91">+91 (IN)</option>
      <option value="+81">+81 (JP)</option>
      <option value="+61">+61 (AU)</option>
      <option value="+49">+49 (DE)</option>
      <option value="+33">+33 (FR)</option>
    </select>

    {/* Phone number input */}
    <input
	type="mobileNumber"
      placeholder="Phone Number"
	    className="bg-gray-100 border-t border-r border-b border-gray-300 text-gray-800 text-sm rounded-r-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
    //   value={mobileNumber}
    //   onChange={(e) => setMobileNumber(e.target.value)}
    />
  </div>
</div>

              
			 


{/* 
{message && <p className="text-green-500 font-semibold mt-2  " >{message}</p>}
{error && <p className="text-red-500 font-semibold mt-2">{error}</p>} */}
                  
                    <motion.button
						className='mt-5 w-full py-3 px-4 bg-gradient-to-r bg-black text-white 
						font-bold rounded-lg shadow-lg 
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
                        //  disabled={isLoading}
						
					>
                        {/* {isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Next"}  */}
						Next 
					</motion.button>
                    </form>

		<div className="flex">
		<div className="flex items-center h-5">
			<input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-yellow-600
			 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
			 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
		</div>
		<div className="ms-2 text-sm">
			<label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">I have read and agree to the terms of service </label>
			<p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">By clicking Continue, you agree to Qlodin's Terms of Service and confirm that you have read Qlodin's Privacy Policy</p>
		</div>
	</div>

		

	
                    </div>
         

      
    </motion.div>
  )
}

export default ProfileSetup
