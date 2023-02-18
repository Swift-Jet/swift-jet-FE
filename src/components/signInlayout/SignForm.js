import React, { useState } from "react";
import axios from "axios";
import Frame584 from "../signInlayout/Frame584.png";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import "../signInlayout/signInlayout.css";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { email, password };

  const toastMsg = (message) => toast(message);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/user/login", data)
      .then((data) => {
        console.log(data);              
        toastMsg(data?.data.message);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toastMsg(error?.response?.data?.error);
      });
  };
  return (
    <main class=" h-screen flex justify-center items-center font-[Poppins]">
      <ToastContainer />
      <div class="flex flex-col md:flex-row w-1/2 md:w-4/5 mx-auto rounded-3xl shadow-2xl">
        <section class="bg-white p-6 md:p-10 md:min-w-[50%] flex flex-col gap-4 rounded-3xl">
          <div class="text-start mb-8">
            <p class="text-rose-900 font-bold text-2xl">Welcome Back</p>
          </div>
          <form
            action=""
            class="flex flex-col gap-6 sm:w-full lg:w-3/4"
            onSubmit={handleSubmit}
          >
            <div class="space-y-8">
              <label
                for="username"
                class=" font-medium text-rose-900 dark:text-rose-900"
              >
                Username{" "}
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
                  name="email"
                  id="username"
                  autocomplete="username"
                  placeholder="Username"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  class="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-100 dark:border-rose-900 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-rose-900"
                />
              </div>
            </div>
            <div class="space-y-4">
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
                  id="username"
                  autocomplete="username"
                  placeholder="Enter Your Password"
                  class="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-100 dark:border-rose-900 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-rose-900"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="flex flex-row justify-between ">
              <a href="#" class="text-rose-900">
                {" "}
                Forget Password
              </a>
              <a href="#" class="text-rose-900">
                {" "}
                Register
              </a>
            </div>
            <button
              variant="outlined"
              size="medium"
              type="submit"
              class="relative flex h-11 w-full items-center justify-center px-6 bg-rose-900 hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded-full"
            >
              <span class="relative text-base font-semibold text-white dark:text-dark">
                Sign In{" "}
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
          <div class="mt-16">
            <img alt="" src={Frame584} className="w-4/5  " />
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignForm;
