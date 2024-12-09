"use client";

import React, { useEffect,useState } from "react";
import { userRegistrationVerification } from  "./emailverify-api"
import { useParams } from "next/navigation";
import { Alert } from "../ui/alert";


const initialResponse = {
  status: "",
  message: "",
};


const EmailVerification = () => {
  const { _id, email } = useParams();
  const dt = { _id, email };


  const [response, setResponse] = useState(initialResponse);

  useEffect(() => {
    const apiCall = async () => {
      const result = await userRegistrationVerification(dt);
      setResponse(result);
    };

    !response.status && apiCall();
  }, [response]);

    
 
   
  
  return (
    <section className="bg-[url('/bg.png')] h-screen dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center mt-10 justify-center">
            <a href="#" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-10 h-10 my-2" src="/mail.png" alt="logo" />
            </a>
            <h1 className="text-[#1E1E1E] text-[30px] font-medium font-playfair">Verify your email.</h1>
            <h1 className="text-center text-black text-[20px] font-semibold font-['Quicksand'] leading-7 tracking-tight md:text-2xl dark:text-white">
              Enter the 6-digit verification code sent to your email
            </h1>
          </div>
          <div className="p-4 md:-mt-20 space-y-4 md:space-y-6 sm:p-20">

          <div className="form-box">
          {!response.status && <div className="info" />}

          {response.status && (
            <Alert
              className={response.status === "text-green-400" ? "text-green-400" : "text-red-400"}
            >
              {response.message}
            </Alert>
          )}
        </div>
            <form className="space-y-4">
              <div className="flex justify-between space-x-2">
                {Array(6)
                  .fill("")
                  .map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="w-12 h-12 text-center text-black text-lg font-medium font-['Quicksand'] bg-gray-50 border-black rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  ))}
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#1E1E1E] text-white bg-primary-600 rounded-lg font-medium font-['Quicksand']"
              >
                Verify Code
              </button>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">Didn't receive the code?</span>
                <button
                  type="button"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Resend Code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmailVerification;
