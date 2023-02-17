import * as React from "react";
import Cardslider from "../cardslider/Cardslider";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

export default function BasicGrid() {
  return (
    <div class=" bg-[#eeece1] mx-auto px-4 md:px-8 lg:px-16">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-5/6">
          <div class="py-16">
            <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
              <div class="lg:bg-white  dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-start md:space-y-0 lg:items-center">
                <div class="md:5/12 lg:w-3/5">
                  <Cardslider />
                </div>
                <div class="md:7/12 lg:w-1/2 flex flex-column gap-y-3  ">
                  <h2 class="text-sm font-bold text-gray-900 md:text-xl dark:text-white ">
                    Beachcraft
                  </h2>
                  <p class=" text-gray-600 dark:text-gray-300">Turboprop</p>
                  <p class="text-xs text-rose-900 dark:text-gray-300 font-bold md:text-3xl">
                    <span>&#8358;</span> 150,000
                  </p>
                  <p class="text-gray-600 dark:text-gray-300">
                    Model: Beech BE200 Super King Air
                  </p>
                  <div class="flex  text-gray-700">
                    <div class="flex inline-flex items-center ">
                    <svg className="svg-icon h-6 w-6 text-gray-600 fill-current mr-2" viewBox="0 0 20 20">
							<path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
						</svg>
                      <p className="text-xs">
                        <span class="text-xs text-gray-900 font-bold">Passenger: 8</span>{" "} | </p>
                    </div>
                    <div class="flex inline-flex items-center m-2">
                     
                      <p className="text-xs">
                        <span class="text-xs text-gray-900 font-bold">
                          Bedrooms
                        </span>{" "}
                        |
                      </p>
                    </div>
                    <div class="flex inline-flex items-center m-2">
                      <PersonAddAltOutlinedIcon className="h-3 w-3 text-gray-600 fill-current mr-2" />
                      <p className="text-xs">
                        <span class="text-xs text-gray-900 font-bold">
                          Bedrooms
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://tailus.io/contact"
                    class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                  >
                    <span class="relative text-base font-semibold text-sky-600 dark:text-white">
                      Browse now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">02</div>
      </div>
    </div>
  );
}
