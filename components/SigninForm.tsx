import React from 'react'


const SigninForm = () => {
  return (
    <section className="bg-[url('/bg.png')] h-screen dark:bg-gray-900">
  <div className="flex flex-col   items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
   
      <div className=" w-full backdrop-blur-sm   rounded-lg  bg-white/40 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex  flex-col items-center mt-10  justify-center " >
        <a href="#" className="flex items-center   text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-10 h-10 my-2" src="/qlodin-logo.png" alt="logo"/>
        
      </a>
      <h1 className="text-[#1E1E1E] text-[30px]  font-medium font-playfair" >  Qlodin.</h1>

      <h1 className="text-xl text-center text-black text-[28px] font-semibold font-['Quicksand'] leading-7  tracking-tight 
                    md:text-2xl dark:text-white">
                  Login 
    </h1> 

        </div>
    
          <div className="p-4 md:-mt-20 space-y-2 md:space-y-4 sm:p-20">
             
              <form className="space-y-2 md:space-y-4" action="#">
                  <div>
                      
                      <input type="email" name="email" id="email" className="bg-gray-50 text-black text-base font-normal font-['Quicksand']  border-gray-300 rounded-lg 
                      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" 
                       />
                  </div>
                  <div>
                     
                    <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 text-black text-base font-normal font-['Quicksand'] border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                       dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" /></div>
                       <div className="flex flex-col items-center justify-center rounded-sm  bg-[#1E1E1E] p-2 text-white "> 
                        <button className="text-white text-base font-semibold font-['Quicksand']" >Login </button></div>
                        <div className="flex flex-col items-center justify-center text-black text-[22px] font-medium font-['Quicksand'] leading-7  " >or</div>

                       <div className="flex flex-col items-center justify-center rounded-sm p-2 bg-[#DDDBFF] text-black " > 
                        <button className="flex" > <img className="w-6 h-6 mr-2" src="/facebook.png" alt="logo"/> Sign in with Facebook</button></div>

                        <div className="flex flex-col items-center justify-center rounded-sm p-2  bg-[#DDDBFF] text-black" > 
                        <button className="flex" ><img className="w-6 h-6 mr-2" src="/google.png" alt="logo"/>Sign in with Goggle</button></div>

                        <div className="flex flex-col items-center justify-center rounded-sm p-2 bg-[#DDDBFF] text-black " > 
                        <button className="flex" ><img className="w-10 h-6 mr-2" src="/apple.png" alt="logo"/> Sign in with apple</button></div>

                   
                 
                  <p className=" flex flex-col items-center justify-center  text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/signuppage" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

  )
}

export default SigninForm
