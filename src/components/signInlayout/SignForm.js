import React, { useState } from "react";
import axios from "axios";
import Frame584 from "../signInlayout/Frame584.png";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import "../signInlayout/signInlayout.css";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import GoogleLoginForm from "../Login-Card/GoogleLoginForm";

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const history = useHistory();

  const data = { email, password };
  const togglePasswordFunc = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const toastMsg = (message) => toast(message);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/v1/user/login`, data)
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data?.data?.data));
        localStorage.setItem("authenticated", JSON.stringify(true));
        history.push(JSON.parse(localStorage.getItem("prevpath")));
        localStorage.removeItem("prevpath");
        setLoading(false);
        e.target.reset();
      })
      .catch((error) => {
        setLoading(false);
        toastMsg(error?.response?.data?.error);
      });
  };
  return (
    <main class=" h-screen flex justify-center items-center font-[Poppins]">
      <ToastContainer />

      <div class="flex flex-col md:flex-row w-1/2 md:w-4/5 sm:w-full mx-auto ">
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
                  class="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-100 dark:border-rose-900 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-1 focus:ring-rose-100"
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
              <div class="relative flex items-center duration-300 focus:ring-2 focus:ring-rose-900">
                <KeyOutlinedIcon
                  class="w-6 h-6 absolute left-4 inset-y-0 my-auto"
                  id="KeyOutLinded"
                />
                <input
                  type={passwordType}
                  name="password"
                  id="username"
                  autocomplete="username"
                  placeholder="Enter Your Password"
                  class="focus:outline-none block w-full rounded-l-full password-class placeholder-gray-500 bg-gray-100 dark:bg-gray-100 dark:border-rose-900 pl-12 pr-4 h-12 text-gray-600 transition invalid:ring-2 invalid:ring-red-400"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button
                  className="block h-12 pl-12 pr-4 text-gray-600 placeholder-gray-500 transition bg-gray-100 rounded-r-full focus:outline-none dark:bg-gray-100 dark:border-rose-900 invalid:ring-2 invalid:ring-red-400 focus:ring-1 focus:ring-rose-100"
                  onClick={togglePasswordFunc}
                  type="button"
                >
                  {passwordType === "password" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div class="flex flex-row justify-between ">
              <a href="/reset-password" class="text-rose-900">
                {" "}
                Forget Password
              </a>
              <a href="/registration" class="text-rose-900">
                {" "}
                Register
              </a>
            </div>{" "}
            {loading === false ? (
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
            ) : (
              <button
                variant="outlined"
                size="medium"
                type="submit"
                class="relative flex h-11 w-full items-center justify-center px-6 bg-rose-900 hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded-full"
              >
                <div class="flex items-center justify-center">
                  <div
                    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  >
                    <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loading...
                    </span>
                  </div>
                </div>
              </button>
            )}
            <GoogleLoginForm />
            <p class="text-gray-500 text-sm">
              By proceeding, you consent to get calls, WhatsApp or SMS messages,
              including by automated means, from Tailus and its affiliates to
              the number provided.
            </p>
          </form>
        </section>
        <section class="hidden lg:inline-block text-white  rounded-3xl w-3/5">
          <div class="mt-16">
            <img alt="" src={Frame584} className="w-4/5 " />
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignForm;
