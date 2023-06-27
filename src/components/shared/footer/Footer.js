import { FlightClass, FlightTakeoffOutlined, Send, Mail } from "@mui/icons-material";
import React, {useRef} from "react";
import "./aircraft-input.css";

const Footer = () => {
  const pageBottomRef = useRef(null);

  // const handleButtonClick = () => {
  //   pageBottomRef.current.scrollIntoView({ behavior: 'smooth' });
  // };
  return (
    <div class="flex items-end w-full min-h-screen bg-white">
      <footer ref={pageBottomRef}  class="w-full text-gray-700 bg-[#5c0632] body-font">
        <div class="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a class="flex items-center justify-center font-medium text-white title-font md:justify-start">
            
            </a>
            <p class="mt-2 text-xl text-white">Book, Fly and Explore!</p>
            <div class="mt-4">
              <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a class="text-white cursor-pointer hover:text-gray-700">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-white cursor-pointer hover:text-gray-700">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-white cursor-pointer hover:text-gray-700">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-white cursor-pointer hover:text-gray-700">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 class="mb-3 text-2xl font-medium tracking-widest text-white uppercase title-font">
                About
                
              </h2>
              <nav class="mb-10 list-none">
                <li class="mt-3">
                  <a class="text-white cursor-pointer  text-lg hover:text-white">
                    Company
                  </a>
                </li>
                <li class="mt-3">
                  <a class="text-white cursor-pointer  text-lg hover:text-white">
                    Careers
                  </a>
                </li>
                <li class="mt-3">
                  <a class="text-white cursor-pointer  text-lg hover:text-white" href="/blogList">
                    Blog
                  </a>
                </li>
              </nav>
            </div>
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 class="mb-3 text-2xl font-medium tracking-widest text-white uppercase title-font">
                Support
              </h2>
              <nav class="mb-10 list-none">
                <li class="mt-3">
                  <a href="/contact" class="text-white cursor-pointer  text-lg hover:text-white">
                    Contact Support
                  </a>
                </li>
                <li class="mt-3">
                  <a  href="/contact" class="text-white cursor-pointer  text-lg hover:text-white">
                    Help Resources
                  </a>
                </li>
                <li class="mt-3">
                  <a class="text-white cursor-pointer  text-lg hover:text-white">
                    Release Updates
                  </a>
                </li>
              </nav>
            </div>
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 class="mb-3 text-2xl font-medium tracking-widest text-white uppercase title-font">
                Platform
              </h2>
              <nav class="mb-10 list-none">
                <li class="mt-3">
                  <a class="text-white cursor-pointer  text-lg hover:text-white">
                    Terms &amp; Privacy
                  </a>
                </li>
                <li class="mt-3">
                  <a class="text-white cursor-pointer  text-lg hover:text-white">
                    Pricing
                  </a>
                </li>
                <li class="mt-3">
                  <a href="/faq" class="text-white cursor-pointer  text-lg hover:text-white">
                    FAQ
                  </a>
                </li>
              </nav>
            </div>
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 class="mb-3 text-2xl font-medium tracking-widest text-white uppercase title-font">
              
                Contact
              
              </h2>
              <nav class="mb-10 list-none">
                <li class="mt-3">
                  <a  href="/contact" class="text-white cursor-pointer  text-lg hover:text-white">
                    Send a Message
                  </a>
                </li>
                <li class="mt-3">
                  <a  href="/contact" class="text-white cursor-pointer  text-lg hover:text-white">
                    Request a Quote
                  </a>
                </li>
                <li class="mt-3">
                  <a class="text-white cursor-pointer  text-lg hover:text-white">
                  info@swiftjetscs.com or +2348058444378
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

  

        <footer class="bg-secondary-100 text-center dark:bg-secondary-600">
          <div class="px-6 pt-6">
            <form action="">
              <div class="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                <div class="md:mb-6 md:ml-auto">
                  <p class="text-white">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div class="mb-6">
              <input
                type="email"
                placeholder="Email"
                class="text-body-color text-xs border-[f0f0f0] focus:border-[#961054] w-full contact-input rounded border p-2.5 text-base outline-none focus-visible:shadow-none"
              />
            </div>

                <div class="mb-6 md:mr-auto">
                <button
                type="submit"
                class="bg-[#fff]  w-full rounded border px-4 py-1.5 text-[#961054] transition hover:bg-opacity-90"
              >
                Subscribe < Mail className='ml-2'/>
              </button>
                </div>
              </div>
            </form>
          </div>

          <div class="bg-gray-300">
          <div class="container px-5 py-4 mx-auto">
            <p class="text-sm text-gray-700 capitalize xl:text-center">
              © 2023 All rights reserved{" "}
            </p>
          </div>
        </div>
        </footer>
      </footer>
    </div>
  );
};

export default Footer;
