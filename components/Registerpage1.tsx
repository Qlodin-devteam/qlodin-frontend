'use client'

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For programmatic navigation in Next.js

const Registerpage1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Next.js router for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({}); // Clear previous errors

    try {
      const response = await fetch(
        "https://qlodin-backend.onrender.com/api/user/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        router.push("/emailverificationpage"); // Redirect to another page on success
      } else {
        setFormErrors(data.errors || { global: data.error || "An error occurred" });
      }
    } catch (error) {
      setFormErrors({ global: "Network error. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[url('/bg.png')] h-screen dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
        <div className="w-full backdrop-blur-sm rounded-lg bg-white/40 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center mt-10 justify-center">
            <a href="#" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-10 h-10 my-2" src="/qlodin-logo.png" alt="logo" />
            </a>
            <h1 className="text-[#1E1E1E] text-[30px] font-medium font-playfair">Qlodin.</h1>
            <h1 className="text-xl text-center text-black text-[28px] font-semibold font-['Quicksand'] leading-7 tracking-tight md:text-2xl dark:text-white">
              Let's add more details
            </h1>
          </div>
          <div className="p-4 md:-mt-20 space-y-2 md:space-y-4 sm:p-20">
            <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="firstName"
                  id="firstname"
                  className="bg-gray-50 text-black text-base font-normal font-['Quicksand'] border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Firstname"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  id="lastname"
                  placeholder="Lastname"
                  className="bg-gray-50 text-black text-base font-normal font-['Quicksand'] border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="userName"
                  id="username"
                  className="bg-gray-50 text-black text-base font-normal font-['Quicksand'] border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                  value={formData.userName}
                  onChange={handleChange}
                />
                {formErrors.userName && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.userName}</p>
                )}
              </div>
              <div className="flex flex-col items-center justify-center rounded-sm bg-[#1E1E1E] p-2 text-white">
                <button
                  type="submit"
                  className={`text-white text-base font-semibold font-['Quicksand'] flex items-center justify-center ${
                    isLoading ? " cursor-not-allowed" : "bg-[#1E1E1E]"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Continue"}
                </button>
              </div>
              {formErrors.global && (
                <p className="text-red-500 text-sm text-center mt-2">{formErrors.global}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registerpage1;
