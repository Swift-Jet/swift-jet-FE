import React, { useContext } from "react";
import Aircraft from "../../pages/aircrafts/Aircrafts";
import "./assets/css/style.css";
import Navigation from "./assets/js/Naviagation";

const ScheduledTrip = () => {
  return (
    <div class="xl:container">
      <div class="navigation">
        <Navigation />
      </div>
      <div class="main">
        <div class="topbar">
          <div class="toggle">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
        <div class="container mx-auto bg-gray-50 min-h-screen p-8 antialiased">
        <div class="flex justify-between">
              <div className="flex">
                <a href="/Flight">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 96 960 960"
                    width="28"
                  >
                    <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                  </svg>
                </a>
              </div>
              <div class="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                <div class="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                  <div class="flex">
                    <span class="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                      <svg
                        width="18"
                        height="18"
                        class="w-4 lg:w-auto"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                          stroke="#455A64"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.9993 16.9993L13.1328 13.1328"
                          stroke="#455A64"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          <div>
            <div class="bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-30">
              <div class="flex p-3 border-l-8 border-yellow-600">
                <div class="space-y-1 border-r-2 pr-3">
                  <div class="text-sm leading-5 font-semibold">
                    <span class="text-xs leading-4 font-normal text-gray-500">
                      {" "}
                      Release #
                    </span>{" "}
                    LTC08762304
                  </div>
                  <div class="text-sm leading-5 font-semibold">
                    <span class="text-xs leading-4 font-normal text-gray-500 pr">
                      {" "}
                      BOL #
                    </span>{" "}
                    10937
                  </div>
                  <div class="text-sm leading-5 font-semibold">
                    JUN 14. 9:30 PM
                  </div>
                </div>
                <div class="flex-1">
                  <div class="ml-3 space-y-1 border-r-2 pr-3">
                    <div class="text-base leading-6 font-normal">
                      KROGER MEMPHIS
                    </div>
                    <div class="text-sm leading-4 font-normal">
                      <span class="text-xs leading-4 font-normal text-gray-500">
                        {" "}
                        Carrier
                      </span>{" "}
                      PAPER TRANSPORT INC.
                    </div>
                    <div class="text-sm leading-4 font-normal">
                      <span class="text-xs leading-4 font-normal text-gray-500">
                        {" "}
                        Destination
                      </span>{" "}
                      WestRock Jacksonville - 9469 Eastport Rd, Jacksonville, FL
                      32218
                    </div>
                  </div>
                </div>
                <div class="border-r-2 pr-3">
                  <div>
                    <div class="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                      <div class="uppercase text-xs leading-4 font-medium">
                      Jet ID
                      </div>
                      <div class="text-center text-sm leading-4 font-semibold text-gray-800">
                        89732
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="ml-3 my-5 bg-yellow-600 p-1 w-20">
                    <div class="uppercase text-xs leading-4 font-semibold text-center text-yellow-100">
                      Loaded
                    </div>
                  </div>
                </div>
                <div>
                  <button class="text-gray-100 rounded-sm my-5 ml-2 focus:outline-none bg-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="bg-gray-100 mx-auto border-gray-500 border rounded-sm  text-gray-700 mb-0.5">
              <div class="flex p-3  border-l-8 border-green-600">
                <div class="space-y-1 border-r-2 pr-3">
                  <div class="text-sm leading-5 font-semibold">
                    <span class="text-xs leading-4 font-normal text-gray-500">
                      {" "}
                      Release #
                    </span>{" "}
                    LTC08762304
                  </div>
                  <div class="text-sm leading-5 font-semibold">
                    <span class="text-xs leading-4 font-normal text-gray-500 pr">
                      {" "}
                      BOL #
                    </span>{" "}
                    10937
                  </div>
                  <div class="text-sm leading-5 font-semibold">
                    JUN 14. 9:30 PM
                  </div>
                </div>
                <div class="flex-1">
                  <div class="ml-3 space-y-1 border-r-2 pr-3">
                    <div class="text-base leading-6 font-normal">
                      KROGER MEMPHIS
                    </div>
                    <div class="text-sm leading-4 font-normal">
                      <span class="text-xs leading-4 font-normal text-gray-500">
                        {" "}
                        Carrier
                      </span>{" "}
                      PAPER TRANSPORT INC.
                    </div>
                    <div class="text-sm leading-4 font-normal">
                      <span class="text-xs leading-4 font-normal text-gray-500">
                        {" "}
                        Destination
                      </span>{" "}
                      WestRock Jacksonville - 9469 Eastport Rd, Jacksonville, FL
                      32218
                    </div>
                  </div>
                </div>
                <div class="border-r-2 pr-3">
                  <div>
                    <div class="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                      <div class="uppercase text-xs leading-4 font-medium">
                      Jet ID
                      </div>
                      <div class="text-center text-sm leading-4 font-semibold text-gray-800">
                        89732
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="ml-3 my-5 bg-green-600 p-1 w-20">
                    <div class="uppercase text-xs leading-4 font-semibold text-center text-green-100">
                      Picked UP
                    </div>
                  </div>
                </div>
                <div>
                  <button class="text-gray-100 rounded-sm my-5 ml-2 focus:outline-none bg-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="bg-gray-100 mx-auto border-gray-500 border rounded-sm  text-gray-700 mb-0.5">
              <div class="flex p-3  border-l-8 border-red-600">
                <div class="space-y-1 border-r-2 pr-3">
                  <div class="text-sm leading-5 font-semibold">
                    <span class="text-xs leading-4 font-normal text-gray-500">
                      {" "}
                      Release #
                    </span>{" "}
                    LTC08762304
                  </div>
                  <div class="text-sm leading-5 font-semibold">
                    <span class="text-xs leading-4 font-normal text-gray-500 pr">
                      {" "}
                      BOL #
                    </span>{" "}
                    10937
                  </div>
                  <div class="text-sm leading-5 font-semibold">
                    JUN 14. 9:30 PM
                  </div>
                </div>
                <div class="flex-1">
                  <div class="ml-3 space-y-1 border-r-2 pr-3">
                    <div class="text-base leading-6 font-normal">
                      KROGER MEMPHIS
                    </div>
                    <div class="text-sm leading-4 font-normal">
                      <span class="text-xs leading-4 font-normal text-gray-500">
                        {" "}
                        Carrier
                      </span>{" "}
                      PAPER TRANSPORT INC.
                    </div>
                    <div class="text-sm leading-4 font-normal">
                      <span class="text-xs leading-4 font-normal text-gray-500">
                        {" "}
                        Destination
                      </span>{" "}
                      WestRock Jacksonville - 9469 Eastport Rd, Jacksonville, FL
                      32218
                    </div>
                  </div>
                </div>
                <div class="border-r-2 pr-3">
                  <div>
                    <div class="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                      <div class="uppercase text-xs leading-4 font-medium">
                        Jet ID
                      </div>
                      <div class="text-center text-sm leading-4 font-semibold text-gray-800">
                        89732
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="ml-3 my-5 bg-red-600 p-1 w-20">
                    <div class="uppercase text-xs leading-4 font-semibold text-center text-red-100">
                      Canceled
                    </div>
                  </div>
                </div>
                <div>
                  <button class="text-gray-100 rounded-sm my-5 ml-2 focus:outline-none bg-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduledTrip;
