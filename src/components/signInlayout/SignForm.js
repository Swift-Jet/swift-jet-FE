import React from "react";
import logoprimary from "../signInlayout/logoprimary.png";
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import "../signInlayout/signInlayout.css"
import { Button } from "@mui/material";



const SignForm = () => {
  return (
    
 
    <body class=" min-h-screen flex flex-col justify-center bg-white dark:bg-gray-900">
    <div class="relative sm:py-16">
      <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 transition duration-300 delay-0">
        <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-blue-100 dark:from-rose-400"></div>
        <div class="blur-[106px] h-32 bg-gradient-to-r from-rose-100 to-rose-400"></div>
      </div>
      <div class="relative xl:container m-auto px-6 text-gray-500 md:px-12">
        <div class="m-auto space-y-8 sm:w-4/5 md:w-3/5 xl:w-2/5">
          <div class="p-8 md:py-12 ">
            <img src={logoprimary} loading="lazy" class="w-36 grayscale dark:contrast-50 contrast-200" alt="swiftjet logo" />
            <h2 class="mt-20 mb-8 text-3xl font-bold text-gray-800">Welcome back to SwiftJet.</h2>
            <form action="" class="space-y-8 ">
              <div class="space-y-4">
                <label for="username" class="text-gray-600 dark:text-gray-300">Enter your email </label>
                <div class="relative flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute left-4 inset-y-0 my-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>                      
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="username"
                    placeholder="Email"
                    class="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div class="space-y-4">
                <label for="username" class="text-gray-600 dark:text-gray-300">Password </label>
                <div class="relative flex items-center ">
                <KeyOutlinedIcon class="w-6 h-6 absolute left-4 inset-y-0 my-auto" id="KeyOutLinded"/>                      
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="username"
                    placeholder="Enter Your Password"
                    class="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
                  <Button variant="outlined" size="medium" class="relative flex h-11 w-full items-center justify-center px-6 bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded-full">
                <span class="relative text-base font-semibold text-white dark:text-dark">Sign In </span>
                </Button>
              

              <p class="text-gray-500 text-sm">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Tailus and its affiliates to the number provided.</p>
  
              <p class="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                Don't have an account ?
                <a href="#" class="text-primary"> Register</a>
              </p>
            </form>
          </div>
        </div>   
      </div>
      <div class="space-x-4 text-center text-gray-500">
          <span>&copy; SwiftJet</span>
          <a href="#" class="text-sm hover:text-primary">Contact</a>
          <a href="#" class="text-sm hover:text-primary">Privacy & Terms</a>
        </div>
    </div>
  </body>
                                      
                                      
  );
};

export default SignForm;