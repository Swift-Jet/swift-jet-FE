import React, { useContext } from "react";
import "./assets/css/style.css"






const SignIn = () => {
   
    return (
 
        <main class=" h-screen flex  justify-center items-center font-[Poppins]">
        <ToastContainer />
        <div class="flex flex-col md:flex-row w-4/5 md:w-4/5 sm:w-full mx-auto">
          <section class="bg-white p-6  md:p-10 md:min-w-[50%] flex flex-col gap-4 rounded-3xl">
            <div class="text-start mb-3">
              <h1 class="text-rose-900 font-bold text-3xl">
                Welcome To SwiftJets
              </h1>
              <p class="text-gray-900  text-md mt-3">
                Please enter your details to get started
              </p>
            </div>
            <form
              class="flex flex-col gap-6 sm:w-full lg:w-3/4"
              onSubmit={handleSubmit}
            >
              <div class="space-y-2">
                <label
                  for="username"
                  class=" font-medium text-rose-900 dark:text-rose-900"
                >
                  First Name{" "}
                </label>
                <div class="relative flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 absolute left-4 inset-y-0 my-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <input
                    type="text"
                    name="first_name"
                    id="firstName"
                    autocomplete="username"
                    placeholder="First Name"
                    class="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-100 dark:border-rose-900 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-rose-900"
                    onChange={(e) => {
                      setFirst_name(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label
                  for="username"
                  class=" font-medium text-rose-900 dark:text-rose-900"
                >
                  Last Name{" "}
                </label>
                <div class="relative flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 absolute left-4 inset-y-0 my-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <input
                    type="text"
                    name="last_name"
                    id="lastName"
                    autocomplete="username"
                    placeholder="Last Name"
                    class="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-100 dark:border-rose-900 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-rose-900"
                    onChange={(e) => {
                      setLast_name(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label
                  for="username"
                  class=" font-medium text-rose-900 dark:text-rose-900"
                >
                  Email{" "}
                </label>
                <div class="relative flex items-center">
                  <EmailOutlinedIcon
                    class="w-6 h-6 absolute left-4 inset-y-0 my-auto"
                    id="KeyOutLinded"
                  />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autocomplete="username"
                    placeholder="Email"
                    class="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-100 dark:border-rose-900 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-rose-900"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label
                  for="username"
                  class="font-medium text-rose-900 dark:text-rose-900"
                >
                  Password{" "}
                </label>
                <div class="relative flex items-center ">
                  <KeyOutlinedIcon
                    class="w-6 h-6 absolute left-4 inset-y-0 my-auto"
                    id="KeyOutLinded"
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="username"
                    placeholder="Enter Your Password"
                    class="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-100 dark:border-rose-900 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-rose-900"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="flex ">
                <p className="text-xs lg:text-sm">Already have an account with us ?</p>
                <a href="#" class="text-rose-900 text-xs lg:text-sm lg:ml-2">
                  {" "}
                  Sign In
                </a>
              </div>
              <button
                variant="outlined"
                size="medium"
                type="submit"
                class="relative flex h-11 w-full items-center justify-center px-6 bg-rose-900 hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded-full"
              >
                <span class="relative text-base font-semibold text-white dark:text-dark">
                  Get Started{" "}
                </span>
              </button>
  
              <p class="text-gray-500 text-sm">
                By proceeding, you consent to get calls, WhatsApp or SMS messages,
                including by automated means, from Tailus and its affiliates to
                the number provided.
              </p>
            </form>
          </section>
          <section class="hidden lg:inline-block text-white  rounded-3xl w-3/5">
            <div class="mt-10">
              <img alt="" src={Group1} />
            </div>
          </section>
        </div>
      </main>
   
                                                           

    );
};

export default SignIn;
