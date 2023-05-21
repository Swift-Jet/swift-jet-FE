import React, { useContext } from "react";
import Aircraft from "../../pages/aircrafts/Aircrafts";
import "./assets/css/style.css";
import Navigation from "./assets/js/Naviagation";

const Addaircraft = () => {
  return (
    <div class="xl:container">
      <div class="navigation">
        <Navigation />
      </div>
      <div class="main">
        <div class="topbar">
          <div class="">
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
            <div class="inline-flex  rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
            <div class="search">
                    <label>
                    <div class="relative text-gray-600">
                <input type="search" name="search" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" /></svg>
                </button>
              </div>
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
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
                  <div class="ml-3 my-5 bg-yellow-600 p-1 w-20"></div>
                </div>
                <div></div>
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
                  <div class="ml-3 my-5 bg-green-600 p-1 w-20"></div>
                </div>
                <div></div>
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
                  <div class="ml-3 my-5 bg-red-600 p-1 w-20"></div>
                </div>
                <div>
                  <button class="text-gray-100 rounded-sm my-5 ml-2 focus:outline-none bg-gray-500"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addaircraft;
