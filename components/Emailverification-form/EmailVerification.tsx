"use client";

import React, { useEffect,useState } from "react";
import { userRegistrationVerification } from  "./emailverify-api"
import { useParams } from "next/navigation";
import { Alert } from "../ui/alert";
import { Vortex } from "react-loader-spinner";


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
              
            </a>
          
            <div className="form-box">
          {!response.status &&      
          <Vortex
          visible={true}
          height="30"
          width="30"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['black', 'gold', 'black', 'gold', 'black', 'gold']}
        />}

          {response.status && (
            <Alert
              className={response.status === "text-green-400" ? "text-green-400" : "text-red-400"}
            >
              {response.message}
            </Alert>
          )}
        </div>
          </div>
    
        </div>
      </div>
    </section>
  );
}

export default EmailVerification;
