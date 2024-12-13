"use client"
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import React from "react";
import Link from "next/link";




export default function Home() {
  const user = useSelector((state:RootState)=>state.auth.user)
  console.log('Redux User',user)
  

  return (
    <div className="bg-[url('/bg.png')] min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="flex flex-col items-center mt-10 justify-center">
      <a
        href="#"
        className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          className="w-30 h-30 my-2"
          src="/qlodin-logo.png"
          alt="logo"
        />
      </a>
  
      <div className="mt-4">
        <Link
          href="/sign-in"
          className="text-white font-bold py-2 px-4 rounded bg-[#000000] hover:bg-[#3a393a]"
        >
          Log In
        </Link>
        <Link
          href="/sign-up"
          className="ml-2 text-white font-bold py-2 px-4 rounded bg-[#000000] hover:bg-[#212121]"
        >
          Sign Up
        </Link>
      </div>
    </div>
  </div>
  
   

  );
}
