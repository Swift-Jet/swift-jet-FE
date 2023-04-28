import { useState } from "react";
import logoprimary from "../image/logoprimary.png";
import { useHistory } from "react-router-dom";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import "../components/styles.css";
import { AccountCircle, Flight, Logout, Person2Outlined, Person2Sharp } from "@mui/icons-material";

export default function NavBar() {
  const history = useHistory();
  const [navbar, setNavbar] = useState(false);

  const logout = () => {
    localStorage.setItem("authenticated", JSON.stringify(false));
    localStorage.removeItem("user");
    localStorage.removeItem("airports");
    history.push("/");
  };

  return (
    <header class="absolute top-0 left-0 w-full flex justify-center">
      <nav class="absolute w-full mt-3">
        <div class="relative z-30   dark:bg-white">
          <div class="container nav-inner w-9/10 bg-white rounded-[50px] m-auto md:px-12 lg:py-0 lg:px-5">
            <div class="flex flex-wrap items-center justify-between py-2.5 gap-6 md:gap-0">
              <input
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                class="peer hidden"
              />
              <div class="w-full flex justify-between md:w-max md:px-0 z-30">
                <a href="#" aria-label="logo">
                  <img
                    src={logoprimary}
                    class="w-36 dark:hidden"
                    alt="swift logo"
                    width="144"
                    height="68"
                  />
                  <img
                    src="images/logo-white.svg"
                    class="w-36 hidden dark:block"
                    alt="tailus logo"
                    width="144"
                    height="68"
                  />
                </a>
                <div class="flex items-center md:hidden ">
                  <label
                    role="button"
                    for="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    class="relative mb-0"
                  >
                    <div
                      id="line"
                      class="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                    <div
                      id="line2"
                      class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                    <div
                      id="line3"
                      class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
              <label
                for="toggle_nav"
                class="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-rose-100 bg-opacity-30 backdrop-blur backdrop-filter"
              ></label>
              <div class="hidden z-40 peer-checked:flex w-11/12  md:mx-0 flex-col justify-end items-center gap-y-8 p-6 rounded-xl bg-white dark:bg-gray-800 md:flex md:w-full  md:gap-y-0 md:gap-x-1 md:divide-x md:p-0  md:flex-row md:bg-transparent lg:w-7/12 mx-lg-none">
                <div class="block w-full md:w-max">
                  <ul class="gap-y-6 tracking-wide text-gray-500 dark:text-gray-300 font-medium flex flex-col md:flex-row md:gap-y-0">
                    <li>
                      <a href="/" class="block md:px-8">
                        <div
                          class="relative text-rose-900 dark:text-rose-900
                                                            before:absolute before:-bottom-2 md:before:-bottom-3 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-t-full before:bg-rose-900"
                        >
                          <span className="lg:text-xs">Home</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/Aboutuspage" class="block md:pr-4 group">
                        <div
                          class="relative group
                                                            before:absolute before:-bottom-2 md:before:-bottom-3 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-rose-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                          id="about-us"
                        >
                          <span class="group-hover:text-rose-900 lg:text-xs ">
                            About Us
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/aircraft" class="block md:pr-4 group">
                        <div
                          class="relative group
                                                            before:absolute before:-bottom-2 md:before:-bottom-3 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-rose-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                        >
                          <span class="group-hover:text-rose-900 lg:text-xs">
                            Fleet
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/destination" class="block md:pr-4 group">
                        <div
                          class="relative group
                                                            before:absolute before:-bottom-2 md:before:-bottom-3 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-rose-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                        >
                          <span class="group-hover:text-rose-900 lg:text-xs">
                            Destinations
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/services" class="block md:pr-4 group">
                        <div
                          class="relative group
                                                            before:absolute before:-bottom-2 md:before:-bottom-3 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-rose-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                        >
                          <span class="group-hover:text-rose-900 lg:text-xs">
                            Services
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/contact" class="block md:pr-4 group">
                        <div
                          class="relative group
                                                            before:absolute before:-bottom-2 md:before:-bottom-3 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-rose-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                        >
                          <span class="group-hover:text-rose-900 lg:text-xs">
                            Contact
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/faq" class="block md:pr-4 group">
                        <div
                          class="relative group
                                                            before:absolute before:-bottom-2 md:before:-bottom-3 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-rose-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                        >
                          <span class="group-hover:text-rose-900 lg:text-xs">
                            FAQ
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                {JSON.parse(localStorage.getItem("authenticated")) != true ? (
                  <div class="w-full sm:w-max gap-4 flex min-w-max flex-col sm:flex-row text-xs">
                    <button
                      class="text-rose-900 button-2  border-2 item-center border-rose-900 hover:bg-[#5C0632] hover:text-white active:bg-rose-900  rounded-full outline-none focus:outline-none  ease-linear transition-all duration-150  px-3 py-1"
                      type="button"
                      onClick={() => {
                        history.push("/signInlayout");
                      }}
                    >
                      <ArrowCircleLeftOutlinedIcon /> Sign In
                    </button>
                    <button
                      class="text-white button-2 border-2 border-rose-900 bg-[#961054] hover:bg-rose-900 hover:text-white active:bg-rose-900  rounded-full outline-none focus:outline-none ease-linear transition-all duration-150- px-3 py-1  "
                      type="button"
                      onClick={() => {
                        history.push("/registration");
                      }}
                    >
                      <PersonAddAltOutlinedIcon /> Sign Up
                    </button>
                  </div>
                ) : (
                  <div className="dropdown dropdown-end dropdown-hover">
                  <label
                    tabIndex={0}
                    className="bg-white text-[#5c0632] text-xs m-1"
                  >
                   <Person2Outlined />
                  </label>
                  <ul
                    tabIndex={0}
                    className="p-2 bg-white shadow dropdown-content menu rounded-box w-52 "
                  >
                    
                      <div>
                        <div>
                          <li className="bg-white hover:bg-[#ececec] hover:text-white ">
                            <a className="text-xs text-black hover:text-white" >Profile  <Person2Sharp /></a>
                            <a className="text-xs text-black hover:text-white">Flights <Flight /> </a>
                            <a className="text-xs text-black hover:text-white text-end" onClick={() => {logout()}}>Logout <Logout/></a>
                          </li>
                        </div>
                      </div>
                   
                  </ul>
                </div>
                //   <button
                //   class="text-white button-2 border-2 border-rose-900 bg-[#961054] hover:bg-rose-900 hover:text-white active:bg-rose-900  rounded-full outline-none focus:outline-none ease-linear transition-all duration-150- px-3 py-1  "
                //   type="button"
                //   onClick={() => {
                //     history.push("/registration");
                //   }}
                // >
                //   <AccountCircle /> 
                // </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          class="container h-4 -mt-6 mx-auto bg-green-600/30 dark:bg-green-900/30 blur md:-mt-4"
        ></div>
      </nav>
    </header>
  );
}