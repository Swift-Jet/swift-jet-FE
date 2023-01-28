import React, { useContext } from "react";
import "./aircraft-banner.css";
import Card from "../shared/aircraft-type-card/card";

const AircraftBanner = () => {
  return (
    <div>
      <div className="aircraft-banner-body">
        <div className="aircraft-banner-body-div">
          <div>
            <h3 className="ac-title">Our Aircrafts</h3>
          </div>
          <div>
            <div className="-mx-3 mt-12 p-2 border rounded-lg border-[#e695a7]">
              <div class=" md:flex">
                <div class="md:w-1/4">
                  <button
                    class="appearance-none block w-full border bg-white border-red rounded-l-lg py-3 px-4 text-start justify-between flex"
                    id="grid-first-name"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9999 6.18V1C17.9999 0.734784 17.8946 0.48043 17.707 0.292893C17.5195 0.105357 17.2651 0 16.9999 0C16.7347 0 16.4803 0.105357 16.2928 0.292893C16.1053 0.48043 15.9999 0.734784 15.9999 1V6.18C15.4208 6.3902 14.9204 6.77363 14.5668 7.27816C14.2131 7.7827 14.0234 8.38388 14.0234 9C14.0234 9.61612 14.2131 10.2173 14.5668 10.7218C14.9204 11.2264 15.4208 11.6098 15.9999 11.82V19C15.9999 19.2652 16.1053 19.5196 16.2928 19.7071C16.4803 19.8946 16.7347 20 16.9999 20C17.2651 20 17.5195 19.8946 17.707 19.7071C17.8946 19.5196 17.9999 19.2652 17.9999 19V11.82C18.5791 11.6098 19.0795 11.2264 19.4331 10.7218C19.7867 10.2173 19.9764 9.61612 19.9764 9C19.9764 8.38388 19.7867 7.7827 19.4331 7.27816C19.0795 6.77363 18.5791 6.3902 17.9999 6.18ZM16.9999 10C16.8021 10 16.6088 9.94135 16.4443 9.83147C16.2799 9.72159 16.1517 9.56541 16.076 9.38268C16.0003 9.19996 15.9805 8.99889 16.0191 8.80491C16.0577 8.61093 16.153 8.43275 16.2928 8.29289C16.4327 8.15304 16.6108 8.0578 16.8048 8.01921C16.9988 7.98063 17.1999 8.00043 17.3826 8.07612C17.5653 8.15181 17.7215 8.27998 17.8314 8.44443C17.9413 8.60888 17.9999 8.80222 17.9999 9C17.9999 9.26522 17.8946 9.51957 17.707 9.70711C17.5195 9.89464 17.2651 10 16.9999 10ZM10.9999 12.18V1C10.9999 0.734784 10.8946 0.48043 10.707 0.292893C10.5195 0.105357 10.2651 0 9.99991 0C9.7347 0 9.48034 0.105357 9.29281 0.292893C9.10527 0.48043 8.99991 0.734784 8.99991 1V12.18C8.42076 12.3902 7.92037 12.7736 7.56676 13.2782C7.21314 13.7827 7.02344 14.3839 7.02344 15C7.02344 15.6161 7.21314 16.2173 7.56676 16.7218C7.92037 17.2264 8.42076 17.6098 8.99991 17.82V19C8.99991 19.2652 9.10527 19.5196 9.29281 19.7071C9.48034 19.8946 9.7347 20 9.99991 20C10.2651 20 10.5195 19.8946 10.707 19.7071C10.8946 19.5196 10.9999 19.2652 10.9999 19V17.82C11.5791 17.6098 12.0795 17.2264 12.4331 16.7218C12.7867 16.2173 12.9764 15.6161 12.9764 15C12.9764 14.3839 12.7867 13.7827 12.4331 13.2782C12.0795 12.7736 11.5791 12.3902 10.9999 12.18ZM9.99991 16C9.80213 16 9.60879 15.9414 9.44434 15.8315C9.27989 15.7216 9.15172 15.5654 9.07603 15.3827C9.00035 15.2 8.98054 14.9989 9.01913 14.8049C9.05771 14.6109 9.15296 14.4327 9.29281 14.2929C9.43266 14.153 9.61084 14.0578 9.80482 14.0192C9.99881 13.9806 10.1999 14.0004 10.3826 14.0761C10.5653 14.1518 10.7215 14.28 10.8314 14.4444C10.9413 14.6089 10.9999 14.8022 10.9999 15C10.9999 15.2652 10.8946 15.5196 10.707 15.7071C10.5195 15.8946 10.2651 16 9.99991 16ZM3.99991 4.18V1C3.99991 0.734784 3.89456 0.48043 3.70702 0.292893C3.51948 0.105357 3.26513 0 2.99991 0C2.7347 0 2.48034 0.105357 2.29281 0.292893C2.10527 0.48043 1.99991 0.734784 1.99991 1V4.18C1.42076 4.3902 0.920374 4.77363 0.566756 5.27817C0.213137 5.7827 0.0234375 6.38388 0.0234375 7C0.0234375 7.61612 0.213137 8.2173 0.566756 8.72184C0.920374 9.22637 1.42076 9.6098 1.99991 9.82V19C1.99991 19.2652 2.10527 19.5196 2.29281 19.7071C2.48034 19.8946 2.7347 20 2.99991 20C3.26513 20 3.51948 19.8946 3.70702 19.7071C3.89456 19.5196 3.99991 19.2652 3.99991 19V9.82C4.57907 9.6098 5.07945 9.22637 5.43307 8.72184C5.78669 8.2173 5.97639 7.61612 5.97639 7C5.97639 6.38388 5.78669 5.7827 5.43307 5.27817C5.07945 4.77363 4.57907 4.3902 3.99991 4.18ZM2.99991 8C2.80213 8 2.60879 7.94135 2.44434 7.83147C2.27989 7.72159 2.15172 7.56541 2.07603 7.38268C2.00035 7.19996 1.98054 6.99889 2.01913 6.80491C2.05771 6.61093 2.15296 6.43275 2.29281 6.29289C2.43266 6.15304 2.61084 6.0578 2.80482 6.01921C2.9988 5.98063 3.19987 6.00043 3.3826 6.07612C3.56532 6.15181 3.7215 6.27998 3.83138 6.44443C3.94127 6.60888 3.99991 6.80222 3.99991 7C3.99991 7.26522 3.89456 7.51957 3.70702 7.70711C3.51948 7.89464 3.26513 8 2.99991 8Z"
                        fill="#B9BBC0"
                      />
                    </svg>
                    Filter By
                    <svg
                      width="8"
                      height="14"
                      className="mt-1"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
                <div class="md:w-1/2">
                  <input
                    class="appearance-none block w-full border border-grey-lighter py-3 px-4"
                    id="grid-last-name"
                    type="text"
                    placeholder="Search Aircraft"
                  />
                </div>
                <div class="md:w-1/4">
                  <button
                    class="appearance-none block w-full border border-red rounded-r-lg py-3 px-4 ac-search-btn justify-center flex"
                    id="grid-first-name"
                  >
                    Search{" "}
                    <svg
                      width="21"
                      height="21"
                      className="pt-1 ml-3"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.2099 19.2899L16.4999 15.6099C17.94 13.8143 18.6374 11.5352 18.4487 9.2412C18.26 6.94721 17.1996 4.81269 15.4854 3.27655C13.7713 1.74041 11.5337 0.919414 9.23283 0.982375C6.93194 1.04534 4.74263 1.98747 3.11505 3.61505C1.48747 5.24263 0.545335 7.43194 0.482375 9.73283C0.419414 12.0337 1.24041 14.2713 2.77655 15.9854C4.31269 17.6996 6.44721 18.76 8.7412 18.9487C11.0352 19.1374 13.3143 18.44 15.1099 16.9999L18.7899 20.6799C18.8829 20.7736 18.9935 20.848 19.1153 20.8988C19.2372 20.9496 19.3679 20.9757 19.4999 20.9757C19.6319 20.9757 19.7626 20.9496 19.8845 20.8988C20.0063 20.848 20.1169 20.7736 20.2099 20.6799C20.3901 20.4934 20.4909 20.2442 20.4909 19.9849C20.4909 19.7256 20.3901 19.4764 20.2099 19.2899ZM9.4999 16.9999C8.11544 16.9999 6.76206 16.5894 5.61091 15.8202C4.45977 15.051 3.56256 13.9578 3.03275 12.6787C2.50293 11.3996 2.36431 9.99214 2.63441 8.63427C2.9045 7.27641 3.57119 6.02912 4.55016 5.05016C5.52912 4.07119 6.77641 3.4045 8.13427 3.13441C9.49214 2.86431 10.8996 3.00293 12.1787 3.53275C13.4578 4.06256 14.551 4.95977 15.3202 6.11091C16.0894 7.26206 16.4999 8.61544 16.4999 9.9999C16.4999 11.8564 15.7624 13.6369 14.4497 14.9497C13.1369 16.2624 11.3564 16.9999 9.4999 16.9999Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center m-auto flex justify-center mt-20">
        <p className="w-1/2 text-xl leading-6 ac-stn-quote">
          Swift Jets has access to 1000+ private aircraft. Every aircraft and
          private jet operator is accredited for safety and VIP service levels.
          Our expert team can find the best available price for your private jet
          hire on the most suitable private aircraft. For private jet charter
          advice call +234 707 8965 234
        </p>
      </div>
      <div className="2xl:grid-cols-3 2xl:grid xl:grid-cols-3 xl:grid lg:grid-cols-3 lg:grid md:grid-cols-3 md:grid  mt-12 justify-center md:flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default AircraftBanner;
