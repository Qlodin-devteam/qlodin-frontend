"use client";

import React, { useEffect, useState } from "react";
import { newUserRegistration } from "./RegAction";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "../ui/alert";
import { Vortex } from "react-loader-spinner";
const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  userName: "",
};

const passwordVerificationError = {
  isLenthy: false,
  hasUpper: false,
  hasLower: false,
  hasNumber: false,
  hasSpclChr: false,
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passwordVerificationError);
  const { isLoading, status, message } = useSelector(
    (state) => state.registration
  );
  useEffect(() => {}, [newUser]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });

    if (name === "password") {
      const isLenthy = value.length > 8;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpclChr = /[@,#,$,%,&]/.test(value);

      setPasswordError({
        ...passwordError,
        isLenthy,
        hasUpper,
        hasLower,
        hasNumber,
        hasSpclChr,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //  console.log(newUser);

    dispatch(newUserRegistration(newUser));
  };

  return (
    <section className="bg-[url('/bg.png')] h-screen dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
        <div className="w-full backdrop-blur-sm rounded-lg bg-white/40 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
              Welcome to qlodin
            </h1>
          </div>
          <div>
            {message && (
              <Alert
                className={
                  status === "text-green-400"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {message}
              </Alert>
            )}
          </div>
          <div className="p-4 md:-mt-20 space-y-2 md:space-y-4 sm:p-20">
            <form className="space-y-2 md:space-y-4" onSubmit={handleOnSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  placeholder="Email"
                  onChange={handleOnChange}
                  className="bg-gray-50 text-black text-base font-normal font-['Quicksand'] border-gray-300 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={newUser.password}
                  placeholder="Password"
                  onChange={handleOnChange}
                  className="bg-gray-50 peer text-black text-base font-normal font-['Quicksand'] border-gray-300 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
                <div className="hidden peer-focus:block">
                  <ul className="mb-4">
                    <li
                      className={
                        passwordError.isLenthy
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      Min 8 characters
                    </li>
                    <li
                      className={
                        passwordError.hasUpper
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      At least one upper case
                    </li>
                    <li
                      className={
                        passwordError.hasLower
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      At least one lower case
                    </li>
                    <li
                      className={
                        passwordError.hasNumber
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      At least one number
                    </li>
                    <li
                      className={
                        passwordError.hasSpclChr
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      At least one special character i.e @ # $ % &{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center rounded-sm bg-[#1E1E1E] p-2 text-white">
                <button
                  type="submit"
                  className="text-white text-base font-semibold font-['Quicksand']"
                  disabled={Object.values(passwordError).includes(false)}
                >
                  Next
                </button>
                <div>
                  {isLoading && (
                    <Vortex
                      visible={true}
                      height="30"
                      width="30"
                      ariaLabel="vortex-loading"
                      wrapperStyle={{}}
                      wrapperClass="vortex-wrapper"
                      colors={[
                        "black",
                        "gold",
                        "black",
                        "gold",
                        "black",
                        "gold",
                      ]}
                    />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
