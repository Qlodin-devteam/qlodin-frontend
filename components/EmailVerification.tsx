import React from 'react'

const EmailVerification = () => {
  return (

    <section className="bg-[url('/bg.png')] h-screen dark:bg-gray-900">
    <div className="flex flex-col   items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
     
        <div className=" w-full backdrop-blur-sm   rounded-lg  bg-white/40 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex  flex-col items-center mt-10  justify-center " >
          <a href="#" className="flex items-center   text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-10 h-10 my-2" src="/qlodin-logo.png" alt="logo"/>
          
        </a>
        <h1 className="text-[#1E1E1E] text-[30px]  font-medium font-playfair" > Welcome to Qlodin.</h1>
  
        <h1 className="text-xl text-center text-black text-[28px] font-semibold font-['Quicksand'] leading-7  tracking-tight 
                      md:text-2xl dark:text-white">
                    Please paste the verification codethat was sent to yoru mails
      </h1> 

  
          </div>
      
            <div className="p-4 md:-mt-20 space-y-2 md:space-y-4 sm:p-20">

            <form className="space-y-2 md:space-y-4" action="#">
                    <div>
                        
                        <input type="number" name="number" id="number" className="bg-gray-50 text-black text-base font-normal font-['Quicksand']  border-gray-300 rounded-lg 
                        focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Verificaation Code " 
                         />
                    </div>
                 
                      
  
                     
                   
                   
                </form>
               
       
            </div>
        </div>
    </div>
  </section>
 
 
  )
}

export default EmailVerification
