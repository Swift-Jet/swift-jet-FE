import React, { useState } from "react";
import logoprimary from "../signInlayout/logoprimary.png";
import axios from "axios";
import Layout from "../shared/layout/Layout";
import { withRouter } from "react-router";
import { toast, ToastContainer } from "react-toastify";
const ConfirmCode = ({match}) => {
  const [password, setPassword] = useState("");
  const { token } = match.params;
  console.log("token", token);
  let data = {
    token,
    password,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/v1/user/forgot-password`, data)
      .then((data) => {
      toast(data?.data?.message)
        e.target.reset();
        setPassword("")
      })
      .catch((error) => {
        toast(error?.response?.data?.error)
      });
  };
  return (
    <Layout>
   <div class="antialiased bg-white mt-36">
      <ToastContainer />
      <div class="max-w-lg mx-auto mt-20 my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 class="text-4xl font-medium">Reset password</h1>
        <p class="text-slate-500">Fill up the form to reset the password</p>

        <form action="" class="my-10"  onSubmit={handleSubmit}>
          <div class="flex flex-col space-y-5">
            <label for="email">
              <p class="font-medium text-slate-700 pb-2">Enter New Password</p>
              <input
                id="password"
                name="password"
                type="password"
                class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter new password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>

            <button class="w-full py-3 font-medium text-white bg-rose-900 hover:bg-rose-900 rounded-lg border-rose-900 hover:shadow inline-flex space-x-2 items-center justify-center"  type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>

              <span>Reset password</span>
            </button>
            <p class="text-center">
              Not registered yet?{" "}
              <a
                href="/registration"
                class="text-rose-900 font-medium inline-flex space-x-1 items-center"
              >
                <span>Register now </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </Layout>
  
  );
};

export default ConfirmCode;
