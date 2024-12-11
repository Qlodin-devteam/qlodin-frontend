"use client"

import { ClerkLoaded,  UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"
import Form from "next/form"
import { PackageIcon, TrolleyIcon } from "@sanity/icons"

import { Button } from "./ui/button"
import SigninForm from "./LoginForm/SigninForm"


function Header(){

    const { user } = useUser()
  return (
    <header className=" flex flex-wrap justify-between items-center px-4 py-2" >
    
    {/* top row */}
    <div>
        <Link href="/" className="text-2xl flex   text-[#724baa]   hover:opacity-50 cursor-pointer mx-auto sm:mx-0 "    > 
        <div><img className="w-[32px] h-[32px]" src="/qlodin-logo.png" /></div>
        <div className="text-[#724baa]  font-medium font-playfair">QLodin</div>
        </Link>

        <Form 
    action="/search"
    className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"

    >
        <input type="text" name ="query" placeholder="search qlodin now"
        className="bg-gray-100 text-black px-4 py-2 rounded focus:outline-none focus:ring-2 
        focus:ring-[#724baa] focus:ring-opacity-500 border w-full max-w-4xl " />

    </Form>

    <div>

        <Link href="/basket" className="flex relative flex-1 justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-[#724baa]
         hover:bg-[#724BAA] text-white font-bold py-2 px-4 rounded  "  >
            <TrolleyIcon className="w-6 h-6" />
            {/* item count when the global state is implemented */}
        <span >My Basket</span> 
        </Link>
        {/* user area */}
        <ClerkLoaded>
            {user && (
                <Link href="/orders" className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2
                 bg-[#724BAA] hover:bg-[#724BAA] text-white font-bold py-2 px-4 rounded " >
                    <PackageIcon className="w-6 h-6" />
                    <span  className="" >My Orders</span>
                </Link>
            )}

            {user ? (
                <div className="flex items-center space-x-2 " >
                    <UserButton/>
                    <div className=" hidden sm:block text-xs" >
                        <p className="text-gray-400" >Welcome Back</p>
                        <p className="font-bold" >{user.fullName}!</p>
                         </div>
                </div>
            ):(
                
                <Button>
                    <Link href="/sign-in" className="text-white font-bold py-2 px-4 rounded" />
                   
                </Button>
                
            )}
            <SigninForm/>
              
        </ClerkLoaded>
        

    </div>

    </div>

  
       
    </header>
  ) 
}

export default Header
