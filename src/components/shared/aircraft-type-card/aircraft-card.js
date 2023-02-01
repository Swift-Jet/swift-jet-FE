import React, { useContext } from "react";
import "./card.css";

const AircraftCard = () => {
  return (
    <div>
      <div class="max-w-sm bg-white border-gray-200 2xl:rounded-[180px] xl:rounded-[180px] sm:rounded-full lg:rounded-[180px] md:rounded-[180px]  mt-8 mb-8 2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-3/5 sm:w-4/5 ac-group-list">
        <a href="#">
          <img
            class="rounded-full py-4 px-4"
            src="https://thumbs.dreamstime.com/b/air-travel-concept-jet-above-clouds-square-composition-39585443.jpg"
            alt=""
          />
        </a>

        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#4D4D4D]">
              Turboprop
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 inline-grid">
            <p className="flex pt-3">
              {" "}
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-4"
              >
                <path
                  d="M19.5 7.5H18.5V6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5V7.5H15.5C15.2348 7.5 14.9804 7.60536 14.7929 7.79289C14.6054 7.98043 14.5 8.23478 14.5 8.5C14.5 8.76522 14.6054 9.01957 14.7929 9.20711C14.9804 9.39464 15.2348 9.5 15.5 9.5H16.5V10.5C16.5 10.7652 16.6054 11.0196 16.7929 11.2071C16.9804 11.3946 17.2348 11.5 17.5 11.5C17.7652 11.5 18.0196 11.3946 18.2071 11.2071C18.3946 11.0196 18.5 10.7652 18.5 10.5V9.5H19.5C19.7652 9.5 20.0196 9.39464 20.2071 9.20711C20.3946 9.01957 20.5 8.76522 20.5 8.5C20.5 8.23478 20.3946 7.98043 20.2071 7.79289C20.0196 7.60536 19.7652 7.5 19.5 7.5ZM11.8 9.22C12.3336 8.75813 12.7616 8.18688 13.0549 7.54502C13.3482 6.90316 13.5 6.20571 13.5 5.5C13.5 4.17392 12.9732 2.90215 12.0355 1.96447C11.0979 1.02678 9.82608 0.5 8.5 0.5C7.17392 0.5 5.90215 1.02678 4.96447 1.96447C4.02678 2.90215 3.5 4.17392 3.5 5.5C3.49999 6.20571 3.6518 6.90316 3.94513 7.54502C4.23845 8.18688 4.66642 8.75813 5.2 9.22C3.80014 9.85388 2.61247 10.8775 1.77898 12.1685C0.945495 13.4596 0.501472 14.9633 0.5 16.5C0.5 16.7652 0.605357 17.0196 0.792893 17.2071C0.98043 17.3946 1.23478 17.5 1.5 17.5C1.76522 17.5 2.01957 17.3946 2.20711 17.2071C2.39464 17.0196 2.5 16.7652 2.5 16.5C2.5 14.9087 3.13214 13.3826 4.25736 12.2574C5.38258 11.1321 6.9087 10.5 8.5 10.5C10.0913 10.5 11.6174 11.1321 12.7426 12.2574C13.8679 13.3826 14.5 14.9087 14.5 16.5C14.5 16.7652 14.6054 17.0196 14.7929 17.2071C14.9804 17.3946 15.2348 17.5 15.5 17.5C15.7652 17.5 16.0196 17.3946 16.2071 17.2071C16.3946 17.0196 16.5 16.7652 16.5 16.5C16.4985 14.9633 16.0545 13.4596 15.221 12.1685C14.3875 10.8775 13.1999 9.85388 11.8 9.22ZM8.5 8.5C7.90666 8.5 7.32664 8.32405 6.83329 7.99441C6.33994 7.66476 5.95542 7.19623 5.72836 6.64805C5.5013 6.09987 5.44189 5.49667 5.55764 4.91473C5.6734 4.33279 5.95912 3.79824 6.37868 3.37868C6.79824 2.95912 7.33279 2.6734 7.91473 2.55764C8.49667 2.44189 9.09987 2.5013 9.64805 2.72836C10.1962 2.95542 10.6648 3.33994 10.9944 3.83329C11.3241 4.32664 11.5 4.90666 11.5 5.5C11.5 6.29565 11.1839 7.05871 10.6213 7.62132C10.0587 8.18393 9.29565 8.5 8.5 8.5Z"
                  fill="#9D9D9D"
                />
              </svg>
              <svg
                width="2"
                height="20"
                viewBox="0 0 2 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-4"
              >
                <line
                  x1="1"
                  y1="2.18557e-08"
                  x2="0.999999"
                  y2="24"
                  stroke="#4D4D4D"
                />
              </svg>
              Passenger: 19
            </p>
            <p className="flex pt-3">
              {" "}
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-4"
              >
                <path
                  d="M20.5001 4.07996C20.5009 3.47018 20.3207 2.87387 19.9823 2.36659C19.644 1.85931 19.1626 1.46388 18.5993 1.23042C18.036 0.99695 17.416 0.935949 16.818 1.05514C16.22 1.17433 15.6708 1.46836 15.2401 1.89996L12.4301 4.70996L5.94006 2.54996C5.76727 2.49565 5.58297 2.48929 5.40685 2.53156C5.23072 2.57383 5.06938 2.66314 4.94006 2.78996L2.56006 5.14996C2.44729 5.26403 2.36362 5.40357 2.31611 5.55678C2.26859 5.70999 2.25863 5.87238 2.28707 6.03025C2.31551 6.18811 2.3815 6.33682 2.47949 6.46383C2.57747 6.59083 2.70457 6.6924 2.85006 6.75996L8.03006 9.10996L5.43006 11.71L3.72006 10.85C3.53543 10.75 3.32404 10.7107 3.11584 10.7377C2.90764 10.7646 2.7132 10.8564 2.56006 11L0.79006 12.81C0.603809 12.9973 0.499268 13.2508 0.499268 13.515C0.499268 13.7791 0.603809 14.0326 0.79006 14.22L7.28006 20.71C7.46742 20.8962 7.72087 21.0007 7.98506 21.0007C8.24925 21.0007 8.5027 20.8962 8.69006 20.71L10.5001 18.94C10.6501 18.7914 10.7494 18.5992 10.7835 18.3908C10.8176 18.1824 10.7849 17.9686 10.6901 17.78L9.83006 16.07L12.4301 13.47L14.7801 18.65C14.8476 18.7954 14.9492 18.9225 15.0762 19.0205C15.2032 19.1185 15.3519 19.1845 15.5098 19.2129C15.6676 19.2414 15.83 19.2314 15.9832 19.1839C16.1364 19.1364 16.276 19.0527 16.3901 18.94L18.7501 16.58C18.8769 16.4506 18.9662 16.2893 19.0085 16.1132C19.0507 15.937 19.0444 15.7527 18.9901 15.58L16.8301 9.08996L19.6001 6.25996C19.8873 5.97452 20.1148 5.63475 20.2693 5.26047C20.4238 4.88618 20.5023 4.48488 20.5001 4.07996ZM18.1801 4.84996L14.9401 8.08996C14.8132 8.21928 14.7239 8.38062 14.6817 8.55674C14.6394 8.73287 14.6458 8.91716 14.7001 9.08996L16.8601 15.57L15.9601 16.47L13.6101 11.3C13.5434 11.1531 13.4421 11.0246 13.315 10.9253C13.1879 10.8261 13.0387 10.7591 12.8801 10.73C12.7201 10.7008 12.5555 10.711 12.4004 10.7598C12.2453 10.8086 12.1045 10.8945 11.9901 11.01L7.87006 15.17C7.72215 15.3177 7.62427 15.5081 7.59019 15.7144C7.5561 15.9207 7.58754 16.1325 7.68006 16.32L8.50006 18L7.94006 18.56L2.91006 13.52L3.50006 13L5.21006 13.86C5.39755 13.9525 5.60932 13.9839 5.81561 13.9498C6.02189 13.9157 6.2123 13.8179 6.36006 13.67L10.5001 9.50996C10.615 9.39595 10.7005 9.25576 10.7492 9.10142C10.798 8.94708 10.8086 8.7832 10.7801 8.62387C10.7516 8.46454 10.6848 8.31451 10.5855 8.18668C10.4862 8.05884 10.3574 7.95702 10.2101 7.88996L5.00006 5.53996L5.90006 4.63996L12.3801 6.79996C12.5529 6.85427 12.7372 6.86062 12.9133 6.81835C13.0894 6.77608 13.2507 6.68677 13.3801 6.55996L16.6201 3.31996C16.7197 3.21806 16.8387 3.13709 16.9701 3.08182C17.1014 3.02654 17.2425 2.99807 17.3851 2.99807C17.5276 2.99807 17.6687 3.02654 17.8 3.08182C17.9314 3.13709 18.0504 3.21806 18.1501 3.31996C18.2544 3.4166 18.3369 3.53438 18.392 3.66544C18.4472 3.79649 18.4738 3.93781 18.4701 4.07996C18.4755 4.22115 18.4526 4.36201 18.4028 4.49424C18.353 4.62648 18.2773 4.74742 18.1801 4.84996Z"
                  fill="#9D9D9D"
                />
              </svg>
              <svg
                width="2"
                height="20"
                viewBox="0 0 2 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-4"
              >
                <line
                  x1="1"
                  y1="2.18557e-08"
                  x2="0.999999"
                  y2="24"
                  stroke="#4D4D4D"
                />
              </svg>
              Speed: 719 km/hr
            </p>
            <p className="flex pt-3">
              {" "}
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-4"
              >
                <path
                  d="M19.91 6.64C19.91 6.64 19.91 6.64 19.91 6.59C19.2053 4.66623 17.9269 3.00529 16.2474 1.83187C14.568 0.658447 12.5687 0.0291748 10.52 0.0291748C8.4712 0.0291748 6.47189 0.658447 4.79246 1.83187C3.11304 3.00529 1.83455 4.66623 1.12995 6.59C1.12995 6.59 1.12995 6.59 1.12995 6.64C0.343076 8.8109 0.343076 11.1891 1.12995 13.36C1.12995 13.36 1.12995 13.36 1.12995 13.41C1.83455 15.3338 3.11304 16.9947 4.79246 18.1681C6.47189 19.3416 8.4712 19.9708 10.52 19.9708C12.5687 19.9708 14.568 19.3416 16.2474 18.1681C17.9269 16.9947 19.2053 15.3338 19.91 13.41C19.91 13.41 19.91 13.41 19.91 13.36C20.6968 11.1891 20.6968 8.8109 19.91 6.64ZM2.75995 12C2.41318 10.6892 2.41318 9.31079 2.75995 8H4.61995C4.45998 9.32854 4.45998 10.6715 4.61995 12H2.75995ZM3.57995 14H4.97995C5.21467 14.8918 5.55016 15.7541 5.97995 16.57C4.99925 15.9019 4.17945 15.0241 3.57995 14ZM4.97995 6H3.57995C4.17082 4.97909 4.98014 4.10147 5.94995 3.43C5.53051 4.24725 5.20509 5.10942 4.97995 6ZM9.49995 17.7C8.27172 16.7987 7.4091 15.4852 7.06995 14H9.49995V17.7ZM9.49995 12H6.63995C6.45334 10.6732 6.45334 9.32681 6.63995 8H9.49995V12ZM9.49995 6H7.06995C7.4091 4.51477 8.27172 3.20132 9.49995 2.3V6ZM17.42 6H16.02C15.7852 5.10816 15.4497 4.24594 15.02 3.43C16.0007 4.09807 16.8205 4.97594 17.42 6ZM11.5 2.3C12.7282 3.20132 13.5908 4.51477 13.93 6H11.5V2.3ZM11.5 17.7V14H13.93C13.5908 15.4852 12.7282 16.7987 11.5 17.7ZM14.36 12H11.5V8H14.36C14.5466 9.32681 14.5466 10.6732 14.36 12ZM15.05 16.57C15.4797 15.7541 15.8152 14.8918 16.05 14H17.45C16.8505 15.0241 16.0307 15.9019 15.05 16.57ZM18.24 12H16.38C16.4613 11.3365 16.5014 10.6685 16.5 10C16.5011 9.33151 16.461 8.66357 16.38 8H18.24C18.5867 9.31079 18.5867 10.6892 18.24 12Z"
                  fill="#9D9D9D"
                />
              </svg>
              <svg
                width="2"
                height="20"
                viewBox="0 0 2 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-4"
              >
                <line
                  x1="1"
                  y1="2.18557e-08"
                  x2="0.999999"
                  y2="24"
                  stroke="#4D4D4D"
                />
              </svg>
              Range: 19 ktx
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AircraftCard;