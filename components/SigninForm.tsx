import React from 'react'


const SigninForm = () => {
  return (
    <section className="bg-[url('/bg.png')] dark:bg-gray-900">
  <div className="flex flex-col   items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   
      <div className="w-full backdrop-blur-sm  rounded-lg bg-white/40 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center justify-center " >
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-10 h-10 mr-2" src="/qlodin-logo.png" alt="logo"/>
        
      </a>
      <h1 className="text-[#724baa] text-[30px]  font-medium font-playfair" >  Qlodin </h1>

      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
              </h1>

        </div>
    
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
             
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" 
                       />
                  </div>
                  <div>
                     
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                       dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></div>
                       <div className="flex flex-col items-center justify-center rounded-sm p-4 bg-[#724BAA] text-white " > 
                        <button className="" >Sign In</button></div>
                        <div className="flex flex-col items-center justify-center " >OR</div>

                        <div className="flex flex-col items-center justify-center rounded-sm p-4 bg-[#DDDBFF] text-white " > 
                        <button className="" >Goggle</button></div>
                        <div className="flex flex-col items-center justify-center rounded-sm p-4 bg-[#DDDBFF] text-white " > 
                        <button className="" >Facebook</button></div>

                   
                 
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
