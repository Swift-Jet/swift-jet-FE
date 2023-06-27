import React from "react";
import Layout from "../shared/layout/Layout";

const SingleBooking = () => {
    let _booking = JSON.parse(localStorage.getItem("single-booking"))
    let booking = _booking.booking_details.formData[0]
  
  return (
    <Layout>
      <div class="w-full md:w-1/2 mt-24">
        <div className="">
          <div className="flex flex-col p-5 bg-white rounded-xl gap-y-8 display-trip">
            <div className="flex flex-row justify-between align-center">
              <p>{}</p>
              <button
                type="button"
                class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
              >
                {_booking.booking_details.tripType}
              </button>
            </div>
            <div class="flex justify-between items-center  text-gray-600">
              <div class="flex items-center">
                <p className="font-bold">
                  {booking?.source.iata_code}
                  <br />
                  {booking?.source.value.name} <br />
                  {booking?.source.value.city},{" "}
                  {booking?.source.value.country}
                </p>
              </div>
              <div class="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-600 fill-current svg-icon "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                >
                  <path d="M271 936 80 745l192-192 42 42-120 120h649v60H194l119 119-42 42Zm418-337-42-42 119-119H117v-60h649L646 258l42-42 192 192-191 191Z" />
                </svg>
              </div>
              <div class="flex items-center text-center">
                <p className="font-bold text-end">
                  {booking?.destination.iata_code}
                  <br />
                  {booking?.destination.value.name} <br />
                  {booking?.destination.value.city},{" "}
                  {booking?.destination.value.country}
                </p>
              </div>
            </div>
            <div class="flex justify-between items-center text-gray-600">
              <div class="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-600 fill-current svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                >
                  <path d="M180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Zm0-490h600V296H180v130Zm0 0V296v130Zm300 230q-17 0-28.5-11.5T440 616q0-17 11.5-28.5T480 576q17 0 28.5 11.5T520 616q0 17-11.5 28.5T480 656Zm-160 0q-17 0-28.5-11.5T280 616q0-17 11.5-28.5T320 576q17 0 28.5 11.5T360 616q0 17-11.5 28.5T320 656Zm320 0q-17 0-28.5-11.5T600 616q0-17 11.5-28.5T640 576q17 0 28.5 11.5T680 616q0 17-11.5 28.5T640 656ZM480 816q-17 0-28.5-11.5T440 776q0-17 11.5-28.5T480 736q17 0 28.5 11.5T520 776q0 17-11.5 28.5T480 816Zm-160 0q-17 0-28.5-11.5T280 776q0-17 11.5-28.5T320 736q17 0 28.5 11.5T360 776q0 17-11.5 28.5T320 816Zm320 0q-17 0-28.5-11.5T600 776q0-17 11.5-28.5T640 736q17 0 28.5 11.5T680 776q0 17-11.5 28.5T640 816Z" />
                </svg>
                <p className="text-sm">
                  <span class="text-sm text-gray-400">
                    {booking?.depatureDate?.slice(0, 10)}
                  </span>
                  <span className="ml-2">AT</span>
                  <span className="ml-2">{booking?.depatureTime}</span>
                </p>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-gray-600 fill-current svg-icon"
                  viewBox="0 96 960 960"
                >
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
                <p>
                  <span class="text-sm text-gray-400">
                    {booking?.adults} Passengers(s)
                  </span>
                </p>
              </div>
            </div>
            <button
              type="button"
              class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
            //   onClick={() => {
            //     history.push("/");
            //   }}
            >
              Search Again
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBooking;
