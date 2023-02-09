import { useState } from "react";
import logoprimary from "../image/logoprimary.png";
import { useHistory } from "react-router-dom";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import "../components/styles.css";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  let Links = [
    { name: "Flight", link: "/aircraft-category" },
    { name: "Aircrafts", link: "/aircraft" },
    { name: "Destinations", link: "/destination" },
    { name: "Get a Quote", link: "/" },
    // {name:"Blog", link:"/"},
  ];

  const history = useHistory();

  return (
    <nav className="w-full mt-0 bg-white shadow-md font-[poppins] lg:max-w-8xl">
      <div className="flex flex-wrap justify-between px-4 mx-auto md:items-center md:px-8">
        <div className="w-full md:w-1/3">
          <div className="flex items-center justify-between py-3 md:py-5">
            <a href="javascript:void(0)">
              <img alt="" src={logoprimary} className="pt-2 Logo " />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:hidden"                
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-rose-900image.png"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-rose-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`block text-center md:flex md:justify-end md:items-center ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="flex-wrap items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="md:relative group hover:text-rose-900 md:my-0 my-7"
                >
                  <a href={link.link}>{link.name}</a>
                  <span className="absolute right-0 w-0 h-1 -bottom-1 bg-rose-900 group-hover:w-full group-hover:transition-all "></span>
                </li>
              ))}
              <li className="hidden md:block relative box-border w-0.5 h-[50px] border-r-[2px] border-solid border-rose-900 contact-us "></li>
              <li>
                <div className="relative contact-us">Talk To Our Team</div>
                <div className="relative mb-3 text-sm font-medium contact-us">
                  +234 707 8965 234
                </div>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <button
                class=" button-1 text-rose-900  border-2 item-center border-rose-900 hover:bg-rose-900 hover:text-white active:bg-rose-900 font-bold rounded-full outline-none focus:outline-none  ease-linear transition-all duration-150  px-3 py-1"
                type="button" onClick={() => {
                  history.push("/signInlayout");
                }}
              >
                <ArrowCircleLeftOutlinedIcon /> Sign In
              </button>
              <button
                class="text-rose-900 button-1 border-2 border-rose-900 hover:bg-rose-900 hover:text-white active:bg-rose-900 font-bold rounded-full outline-none focus:outline-none ease-linear transition-all duration-150- px-3 py-1 "
                type="button"
                onClick={() => {
                  history.push("/registration");
                }}
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
            onClick={() => {
              history.push("/signInlayout");
            }}
          >
            <ArrowCircleLeftOutlinedIcon /> Sign In
          </button>
          <button
            class="text-rose-900 button-2  border-2 border-rose-900 hover:bg-rose-900 hover:text-white active:bg-rose-900 font-bold rounded-full outline-none focus:outline-none ease-linear transition-all duration-150- px-3 py-1 "
            type="button" id="myBtn"
            onClick={() => {
              history.push("/registration");
            }}
          >
            <PersonAddAltOutlinedIcon /> Register
          </button>
        </div>
      </div>
    </nav>
  );
}
