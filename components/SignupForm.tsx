"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation between pages

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter(); // Router for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleNext = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({}); // Clear previous errors

    try {
      const response = await fetch("https://qlodin-backend.onrender.com/api/user/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setFormErrors(data.errors || {});
      } else {
        // Save validated data to sessionStorage and navigate to the next page
        sessionStorage.setItem("signupData", JSON.stringify(formData));
        router.push("/signuppage");
      }
    } catch (error) {
      console.error("Validation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[url('/bg.png')] h-screen dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
        <div className="w-full backdrop-blur-sm rounded-lg bg-white/40 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center mt-10 justify-center">
            <h1 className="text-[#1E1E1E] text-[30px] font-medium font-playfair">Welcome to Qlodin.</h1>
            <h1 className="text-xl text-center text-black text-[28px] font-semibold leading-7 md:text-2xl dark:text-white">
              Sign up
            </h1>
          </div>
          <div className="p-4 space-y-2 md:space-y-4 sm:p-20">
            <form className="space-y-2 md:space-y-4" onSubmit={handleNext}>
              <div>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 text-black text-base border-gray-300 rounded-lg block w-full p-2.5"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  className="bg-gray-50 text-black text-base border-gray-300 rounded-lg block w-full p-2.5"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>}
              </div>
              <div className="flex flex-col items-center justify-center bg-[#1E1E1E] p-2 text-white rounded-sm">
                <button
                  type="submit"
                  className={`text-white text-base font-semibold ${
                    isLoading ? "cursor-not-allowed" : "bg-[#1E1E1E]"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Validating..." : "Next"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
