import React, { useContext } from "react";
import "./assets/css/style.css"






const SignIn = () => {
   
    return (
 
        <main class=" h-screen flex justify-center items-center font-[Poppins]">
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
                  Admin Email{" "}
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
                  Admin Password{" "}
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
                <a href="#" class="text-rose-900 text-xs lg:text-sm lg:ml-2">
                  {" "}
                  Sign In
                </a>
              </div>
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
