import react from "react";
import logoprimary from "../image/logoprimary.png";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import "../components/styles.css";

export default function NavBar() {
    return (
        <div class="relative w-full">
            <nav class=" w-full">
                <div class="container m-auto px-6 md:px-12 lg:px-7">
                    <div class="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative">
                        <input type="checkbox" name="toggle_nav" id="toggle_nav" class="peer hidden" />
                        <div class="w-full flex justify-between md:w-max md:px-0">
                            <a href="#" aria-label="logo">
                                <img src={logoprimary} class="w-36 " alt="tailus logo" width="144" height="68" />
                            </a>

<<<<<<< Updated upstream
                            <div class="flex items-center md:hidden max-h-10">
                                <label role="button" for="toggle_nav" aria-label="humburger" id="hamburger" class="relative z-40 px-2 py-3 sm:-mr-6">
                                    <div id="line"
                                        class="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                    <div id="line2"
                                        class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300">
                                    </div>
                                </label>
                            </div>
                        </div>
=======

  let Links = [
    { name: "Flight", link: "/aircraft" },
    { name: "Aircrafts", link: "/aircraft-category" },
    { name: "Destinations", link: "/destination" },
    { name: "Get a Quote", link: "/" },
    
    // {name:"Blog", link:"/"},
  ];
>>>>>>> Stashed changes

                        <label role="button" for="toggle_nav" class="fixed w-full z-30 h-full top-0 left-0 bg-gray-700 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden"></label>

<<<<<<< Updated upstream
                        <div class="flex z-50 flex-col md:flex-row justify-between 
                items-center gap-y-4 p-6 bg-white dark:bg-white md:w-8/12 
                md:gap-y-4 md:p-0 
                md:bg-transparent lg:w-7/12 fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full 
                md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0">
                            <div class="flex md:hidden w-full pb-5">
                                <a href="#" aria-label="logo">
                                    <img src={logoprimary} class="w-36" alt="tailus logo" width="144" height="68" />
                                </a>
                            </div>
                            <div class="block w-full h-full md:h-auto">
                                <ul class="space-y-8 tracking-wide font-medium md:flex md:space-y-0">
                                    <li>
                                        <a href="#" class="block md:p-3">
                                            <div class="relative text-rose-900
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-rose-900 before:mx-auto before:mt-auto before:rounded-full before:bg-rose-900 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                                <span>Flight</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="block md:p-3 group">
                                            <div class="relative text-rose-900
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-rose-900 before:mx-auto before:mt-auto before:rounded-full before:bg-rose-900 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                                <span class="transition group-hover:text-rose-900 dark:text-rose-900 dark:group-hover:text-rose-900">Aircraft</span>
                                            </div>
                                        </a>
                                    </li> <li>
                                        <a href="#" class="block md:p-3 group">
                                            <div class="relative text-rose-900
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-rose-900 before:mx-auto before:mt-auto before:rounded-full before:bg-rose-900 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                                <span class="transition group-hover:text-rose-900 dark:text-rose-900 dark:group-hover:text-yellow-300">Destinations</span>
                                            </div>
                                        </a>
                                    </li> 
                                    <li>
                                        <a href="#" class="block md:p-3 group">
                                            <div class="relative text-rose-900
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-rose-900 before:mx-auto before:mt-auto before:rounded-full before:bg-rose-900 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                                <span class="transition group-hover:text-rose-900 dark:text-rose-900 dark:group-hover:text-rose-900">Get A Quote</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="hidden p-3 md:block relative box-border w-0.5 h-[50px] border-r-[2px] border-solid border-rose-900 contact-us "></li>
                                    <li>
                                        <a href="#" class="block md:px-3 group">
                                            <div className="relative contact-us">Talk To Our Team</div>
                                            <div className="relative  text-sm font-medium contact-us">
                                                +234 707 8965 234
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <button
                class=" button-1 text-rose-900  border-2 item-center border-rose-900 hover:bg-rose-900 hover:text-white active:bg-rose-900 font-bold rounded-full outline-none focus:outline-none  ease-linear transition-all duration-150  px-3 py-1"
                type="button" 
              >
                <ArrowCircleLeftOutlinedIcon /> Sign In
              </button>
              <button
                class="text-rose-900 button-1 border-2 border-rose-900 hover:bg-rose-900 hover:text-white active:bg-rose-900 font-bold rounded-full outline-none focus:outline-none ease-linear transition-all duration-150- px-3 py-1 "
                type="button"
              >
                <PersonAddAltOutlinedIcon /> Register
              </button>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <button
            class="text-rose-900 button-2  border-2 item-center border-rose-900 hover:bg-rose-900 hover:text-white active:bg-rose-900 font-bold rounded-full outline-none focus:outline-none  ease-linear transition-all duration-150  px-3 py-1"
            type="button" id="myBtn"
          >
            <ArrowCircleLeftOutlinedIcon /> Sign In
          </button>
          <button
            class="text-rose-900 button-2  border-2 border-rose-900 hover:bg-rose-900 hover:text-white active:bg-rose-900 font-bold rounded-full outline-none focus:outline-none ease-linear transition-all duration-150- px-3 py-1 "
            type="button" id="myBtn"
          >
            <PersonAddAltOutlinedIcon /> Register
          </button>
        </div>
    );
}
