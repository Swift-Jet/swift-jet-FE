import React, { useContext, useState, useEffect } from "react";
import "./estimate-cost.css";
import Card from "../shared/aircraft-type-card/card";
import AircraftSharedBanner from "../shared/aircraft-shared-banner/AircraftSharedBanner";
import { BookingContext } from "../../context/booking-context";
import { AircraftsContext } from "../../context/aircraft-context";

const EstimateCost = () => {
  const booking = JSON.parse(localStorage.getItem("bookingDetails"));
  const [bookDetails, setBookDetails] = useState(booking);
  const [filteredResults, setFilteredResults] = useState([]);
  const [showModal, setShowModal] = React.useState(true);
  const { aircrafts } = useContext(AircraftsContext);

  console.log("booking", booking);

  return (
    <div>
      <AircraftSharedBanner
        title="Your booking"
        banner_img_url="bg-[url('https://res.cloudinary.com/dzv98o7ds/image/upload/v1675067157/Frame_75_gcoxuj.png')]"
        hidden="true"
      />
      <div>
        <div id="" className="">
          <div className="estimate-cost-body-div">
            <div className="row">
              <div className="col-sm-6">
                <div class="text-center bg-[#5C0632] p-4">
                  <div class="row w-full shadow">
                    <div className="text-white-900 dark:text-white">
                      You searched for {bookDetails?.tripType}
                    </div>
                    <div class="col-sm-5 text-start">
                      <div class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0"></div>
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-500  dark:text-white">
                              {bookDetails?.sourceAirport}
                            </p>
                            <p class="text-sm text-gray-400  dark:text-gray-400">
                              {bookDetails?.depatureDate} @{" "}
                              {bookDetails?.depatureTime} hrs
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2 mt-4 flex justify-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="20" fill="#5C0632" />
                        <rect
                          x="4"
                          y="4"
                          width="32"
                          height="32"
                          rx="16"
                          fill="#FCF9FC"
                        />
                        <path
                          d="M19.29 23.71C19.4299 23.851 19.6086 23.9472 19.8033 23.9863C19.9981 24.0253 20.2 24.0055 20.3835 23.9294C20.5669 23.8532 20.7235 23.7241 20.8333 23.5586C20.9431 23.3931 21.0012 23.1986 21 23C20.9963 22.7352 20.8927 22.4816 20.71 22.29C20.5694 22.1512 20.3908 22.0572 20.1968 22.0199C20.0028 21.9825 19.8021 22.0034 19.62 22.08C19.4972 22.1276 19.3851 22.199 19.29 22.29C19.1073 22.4816 19.0037 22.7352 19 23C18.9992 23.1316 19.0245 23.2621 19.0742 23.3839C19.124 23.5057 19.1973 23.6166 19.29 23.71ZM27.91 23.51H23.38C23.1148 23.51 22.8604 23.6154 22.6729 23.8029C22.4854 23.9904 22.38 24.2448 22.38 24.51C22.38 24.7752 22.4854 25.0296 22.6729 25.2171C22.8604 25.4046 23.1148 25.51 23.38 25.51H25.78C24.6769 26.6627 23.2544 27.4593 21.6952 27.7974C20.1359 28.1355 18.5112 27.9996 17.0298 27.4072C15.5483 26.8149 14.2779 25.7931 13.3816 24.4732C12.4853 23.1532 12.0042 21.5955 12 20C12 19.7348 11.8946 19.4804 11.7071 19.2929C11.5196 19.1054 11.2652 19 11 19C10.7348 19 10.4804 19.1054 10.2929 19.2929C10.1054 19.4804 10 19.7348 10 20C10.0053 21.9528 10.5822 23.8613 11.6596 25.49C12.737 27.1187 14.2677 28.3964 16.0627 29.1652C17.8578 29.9341 19.8387 30.1605 21.761 29.8166C23.6833 29.4727 25.4628 28.5735 26.88 27.23V29C26.88 29.2652 26.9854 29.5196 27.1729 29.7071C27.3604 29.8946 27.6148 30 27.88 30C28.1452 30 28.3996 29.8946 28.5871 29.7071C28.7746 29.5196 28.88 29.2652 28.88 29V24.5C28.8775 24.2416 28.7752 23.9943 28.5943 23.8097C28.4135 23.6251 28.1683 23.5177 27.91 23.51ZM20 10C17.4364 10.0073 14.9735 10.9989 13.12 12.77V11C13.12 10.7348 13.0146 10.4804 12.8271 10.2929C12.6396 10.1054 12.3852 10 12.12 10C11.8548 10 11.6004 10.1054 11.4129 10.2929C11.2254 10.4804 11.12 10.7348 11.12 11V15.5C11.12 15.7652 11.2254 16.0196 11.4129 16.2071C11.6004 16.3946 11.8548 16.5 12.12 16.5H16.62C16.8852 16.5 17.1396 16.3946 17.3271 16.2071C17.5146 16.0196 17.62 15.7652 17.62 15.5C17.62 15.2348 17.5146 14.9804 17.3271 14.7929C17.1396 14.6054 16.8852 14.5 16.62 14.5H14.22C15.3225 13.3479 16.7441 12.5515 18.3024 12.2131C19.8607 11.8747 21.4846 12.0097 22.9656 12.6009C24.4466 13.192 25.7172 14.2122 26.6142 15.5306C27.5113 16.849 27.9938 18.4054 28 20C28 20.2652 28.1054 20.5196 28.2929 20.7071C28.4804 20.8946 28.7348 21 29 21C29.2652 21 29.5196 20.8946 29.7071 20.7071C29.8946 20.5196 30 20.2652 30 20C30 18.6868 29.7413 17.3864 29.2388 16.1732C28.7362 14.9599 27.9997 13.8575 27.0711 12.9289C26.1425 12.0003 25.0401 11.2638 23.8268 10.7612C22.6136 10.2587 21.3132 10 20 10ZM20 21C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V17C21 16.7348 20.8946 16.4804 20.7071 16.2929C20.5196 16.1054 20.2652 16 20 16C19.7348 16 19.4804 16.1054 19.2929 16.2929C19.1054 16.4804 19 16.7348 19 17V20C19 20.2652 19.1054 20.5196 19.2929 20.7071C19.4804 20.8946 19.7348 21 20 21Z"
                          fill="#5C0632"
                        />
                        <rect
                          x="18"
                          y="15"
                          width="4"
                          height="10"
                          fill="#FCF9FC"
                        />
                      </svg>
                    </div>
                    <div class="col-sm-5 text-end">
                      <div class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4 text-center">
                          <div class="flex-shrink-0"></div>
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-500  dark:text-white">
                              {bookDetails?.destinationAirport}
                            </p>

                            <p class="text-sm text-gray-400  dark:text-gray-400">
                              {bookDetails?.passengers} passenger(s)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {bookDetails.tripType === "Round Trip" ? (
                    <div class="row w-full shadow pt-3">
                      <div class="col-sm-5 text-start">
                        <div class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0"></div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-500  dark:text-white">
                                {bookDetails?.destinationAirport}
                              </p>
                              <p class="text-sm text-gray-400  dark:text-gray-400">
                                {bookDetails?.returningDate} @{" "}
                                {bookDetails?.returningTime} hrs
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-2 mt-4 flex justify-center">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="40" height="40" rx="20" fill="#5C0632" />
                          <rect
                            x="4"
                            y="4"
                            width="32"
                            height="32"
                            rx="16"
                            fill="#FCF9FC"
                          />
                          <path
                            d="M19.29 23.71C19.4299 23.851 19.6086 23.9472 19.8033 23.9863C19.9981 24.0253 20.2 24.0055 20.3835 23.9294C20.5669 23.8532 20.7235 23.7241 20.8333 23.5586C20.9431 23.3931 21.0012 23.1986 21 23C20.9963 22.7352 20.8927 22.4816 20.71 22.29C20.5694 22.1512 20.3908 22.0572 20.1968 22.0199C20.0028 21.9825 19.8021 22.0034 19.62 22.08C19.4972 22.1276 19.3851 22.199 19.29 22.29C19.1073 22.4816 19.0037 22.7352 19 23C18.9992 23.1316 19.0245 23.2621 19.0742 23.3839C19.124 23.5057 19.1973 23.6166 19.29 23.71ZM27.91 23.51H23.38C23.1148 23.51 22.8604 23.6154 22.6729 23.8029C22.4854 23.9904 22.38 24.2448 22.38 24.51C22.38 24.7752 22.4854 25.0296 22.6729 25.2171C22.8604 25.4046 23.1148 25.51 23.38 25.51H25.78C24.6769 26.6627 23.2544 27.4593 21.6952 27.7974C20.1359 28.1355 18.5112 27.9996 17.0298 27.4072C15.5483 26.8149 14.2779 25.7931 13.3816 24.4732C12.4853 23.1532 12.0042 21.5955 12 20C12 19.7348 11.8946 19.4804 11.7071 19.2929C11.5196 19.1054 11.2652 19 11 19C10.7348 19 10.4804 19.1054 10.2929 19.2929C10.1054 19.4804 10 19.7348 10 20C10.0053 21.9528 10.5822 23.8613 11.6596 25.49C12.737 27.1187 14.2677 28.3964 16.0627 29.1652C17.8578 29.9341 19.8387 30.1605 21.761 29.8166C23.6833 29.4727 25.4628 28.5735 26.88 27.23V29C26.88 29.2652 26.9854 29.5196 27.1729 29.7071C27.3604 29.8946 27.6148 30 27.88 30C28.1452 30 28.3996 29.8946 28.5871 29.7071C28.7746 29.5196 28.88 29.2652 28.88 29V24.5C28.8775 24.2416 28.7752 23.9943 28.5943 23.8097C28.4135 23.6251 28.1683 23.5177 27.91 23.51ZM20 10C17.4364 10.0073 14.9735 10.9989 13.12 12.77V11C13.12 10.7348 13.0146 10.4804 12.8271 10.2929C12.6396 10.1054 12.3852 10 12.12 10C11.8548 10 11.6004 10.1054 11.4129 10.2929C11.2254 10.4804 11.12 10.7348 11.12 11V15.5C11.12 15.7652 11.2254 16.0196 11.4129 16.2071C11.6004 16.3946 11.8548 16.5 12.12 16.5H16.62C16.8852 16.5 17.1396 16.3946 17.3271 16.2071C17.5146 16.0196 17.62 15.7652 17.62 15.5C17.62 15.2348 17.5146 14.9804 17.3271 14.7929C17.1396 14.6054 16.8852 14.5 16.62 14.5H14.22C15.3225 13.3479 16.7441 12.5515 18.3024 12.2131C19.8607 11.8747 21.4846 12.0097 22.9656 12.6009C24.4466 13.192 25.7172 14.2122 26.6142 15.5306C27.5113 16.849 27.9938 18.4054 28 20C28 20.2652 28.1054 20.5196 28.2929 20.7071C28.4804 20.8946 28.7348 21 29 21C29.2652 21 29.5196 20.8946 29.7071 20.7071C29.8946 20.5196 30 20.2652 30 20C30 18.6868 29.7413 17.3864 29.2388 16.1732C28.7362 14.9599 27.9997 13.8575 27.0711 12.9289C26.1425 12.0003 25.0401 11.2638 23.8268 10.7612C22.6136 10.2587 21.3132 10 20 10ZM20 21C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V17C21 16.7348 20.8946 16.4804 20.7071 16.2929C20.5196 16.1054 20.2652 16 20 16C19.7348 16 19.4804 16.1054 19.2929 16.2929C19.1054 16.4804 19 16.7348 19 17V20C19 20.2652 19.1054 20.5196 19.2929 20.7071C19.4804 20.8946 19.7348 21 20 21Z"
                            fill="#5C0632"
                          />
                          <rect
                            x="18"
                            y="15"
                            width="4"
                            height="10"
                            fill="#FCF9FC"
                          />
                        </svg>
                      </div>
                      <div class="col-sm-5 text-end">
                        <div class="py-3 sm:py-4">
                          <div class="flex items-center text-center space-x-4">
                            <div class="flex-shrink-0"></div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-500  dark:text-white">
                                {bookDetails?.sourceAirport}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-sm-6">
                <div class="w-full ">
                  <h5 class="mb-4 text-xl font-medium text-gray-900 dark:text-gray-900">
                    Flexible private flying.
                  </h5>

                  <ul role="list" class="space-y-5 my-7">
                    <li class="flex space-x-3">
                      <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        Fixed hourly rates
                      </span>
                    </li>
                    <li class="flex space-x-3">
                      <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        Flexible cancellation
                      </span>
                    </li>
                    <li class="flex space-x-3">
                      <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        Guaranteed availability
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="relative overflow-x-auto shadow-md mt-8">
              <table class="w-full text-sm text-left">
                <thead class="text-xs text-white uppercase bg-[#5C0632]">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Image</span>
                    </th>
                    <th scope="col" class="px-6 py-3">
                     Estimate
                    </th>
                    <th scope="col" class="px-6 py-3">
                     Capacity
                    </th>
                  
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {aircrafts?.map((item, i) => (
                    <tr
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 "
                      key={i}
                    >
                      <td class="w-40 pt-4 pb-4 pl-2">
                        <img src={item.image_url} alt="Apple Imac" />
                      </td>
                      <td class="px-6 py-4 font-semibold text-gray-900">
                        {item?.model}
                      </td>

                      <td class="px-6 py-4 font-semibold text-gray-900">
                        {item?.luggage_capacity}
                      </td>
                      <td class="px-6 py-4">
                        <a
                          href="#"
                          class="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          ADD TO QUOTE
                        </a>  
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


    <div>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <div>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>

    </div>
  );
};

export default EstimateCost;
