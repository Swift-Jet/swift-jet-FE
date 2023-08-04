import React, { useContext, useState, useEffect } from "react";
import Cardslider from "../cardslider/Cardslider";
import Frame636 from "../estimatecard/Frame636.png";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AircraftsContext } from "../../../context/aircraft-context";
import AircraftBtn from "../../shared/aircraft-shared-button/AircraftBtn";
import SingleAircraft from "../../single-aircraft/SingleAircraft";
import SingleAircraftOverLay from "../../single-aircraft/SingleAircraftOverLay";
import { CloseSharp } from "@mui/icons-material";
import "./estimatedcard.css";

export default function BasicGrid({ booking_details, aircraft_details }) {
  const history = useHistory();
  const location = useLocation();

  const aircraft_detail = useContext(AircraftsContext);
  const [addQuote, setAddQuote] = useState([]);
  const [bookingPayload, setBookingPayload] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showAircraft, setShowAircraft] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [phone_number, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [bannerSuggestion, setBannerSuggestion] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(bannerSuggestion));
  }, []);
  let booking_payload = {};
  const toastMsg = (message) => toast(message);
  const setQuote = (quote) => {
    let quoteArr1 =
      JSON.parse(localStorage.getItem("quotes")) || bannerSuggestion;
    quoteArr1.push(quote);
    localStorage.setItem("quotes", JSON.stringify(quoteArr1));
    setAddQuote(quoteArr1);
  };
  const removeQuote = (quote) => {
    let quoteArr = JSON.parse(localStorage.getItem("quotes"));
    let index = quoteArr.indexOf(quote);
    quoteArr.splice(index, 1);
    localStorage.setItem("quotes", JSON.stringify(quoteArr));
  };
  const handleToggleQuote = (x, item) => {
    let toggleText =
      document.getElementsByClassName("quote-btn")[x]?.textContent;
    if (toggleText == "Add Quote") {
      setQuote(item);
      document.getElementsByClassName("quote-btn")[
        x
      ].innerText = `Remove Quote`;
    } else {
      removeQuote(item);
      document.getElementsByClassName("quote-btn")[x].innerText = `Add Quote`;
    }
  };
  const handleBookingPayload = () => {
  

    booking_payload = {
      user: JSON.parse(localStorage.getItem("user")),
      status: "New",
      booking_details,
      additional_quote: JSON.parse(localStorage.getItem("quotes")),
    };
  };
  const handleSubmit = () => {
    localStorage.setItem("prevpath", JSON.stringify(location.pathname)); 
    setLoading(true);
    axios
      .post("https://swift-jet-backend-staging.onrender.com/api/v1/booking/add", booking_payload)
      .then((data) => {
        localStorage.removeItem("quotes");
        // localStorage.removeItem("bookingDetails");
        localStorage.removeItem("default_quote");
        setBookingPayload(data?.data?.data?.booking_number);
        setLoading(false);
        setShowSuccessModal(true);
      })
      .catch((error) => {
        toastMsg(error?.response?.data?.error);
        if(error?.response?.data?.error == "User details can not be empty"){
          history.push("/signInlayout");
        }
        setLoading(false);
      });
  };

  return (
    <div class=" bg-[#eeece1] mx-auto md:px-8 lg:px-16">
      <ToastContainer />
      <div class="flex flex-col md:flex-row">
        {booking_details?.tripType === "One way Trip" ? (
          <div class="w-full md:w-1/2">
            <div className="xl:container px-6 text-gray-600 md:px-12">
              <div className="flex flex-col p-5 bg-white rounded-xl gap-y-8 display-trip md:mt-3">
                <div className="flex flex-row justify-between align-center">
                  <p>Your Search</p>
                  <button
                    type="button"
                    class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                  >
                    {booking_details?.tripType}
                  </button>
                </div>
                <div class="flex justify-between items-center  text-gray-600">
                  <div class="flex items-center">
                    <p className="font-bold">
                      {booking_details.formData[0]?.source.iata_code}
                      <br />
                      {booking_details.formData[0]?.source.value.name} <br />
                      {booking_details.formData[0]?.source.value.city},{" "}
                      {booking_details.formData[0]?.source.value.country}
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
                      {booking_details.formData[0]?.destination.value.iata_code}
                      <br />
                      {booking_details.formData[0]?.destination.value.name}{" "}
                      <br />
                      {
                        booking_details.formData[0]?.destination.value.city
                      },{" "}
                      {booking_details.formData[0]?.destination.value.country}
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
                        {booking_details?.formData[0]?.depatureDate}
                      </span>
                      <span className="ml-2">AT</span>
                      <span className="ml-2">
                        {booking_details?.formData[0]?.depatureTime}
                      </span>
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
                        {booking_details?.formData[0]?.passengers.adults}
                        Adult(s)
                        {booking_details?.formData[0]?.passengers.children}{" "}
                        Children
                        {booking_details?.formData[0]?.passengers.pets} Pets(s)
                      </span>
                    </p>
                  </div>
                </div>
                {loading === false ? (
                  <button
                    type="button"
                    class="text-white hover:text-white border border-rose-900 bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                    onClick={() => {
                      handleBookingPayload();
                      handleSubmit();
                    }}
                  >
                    Book Now
                  </button>
                ) : (
                  <button
                    type="button"
                    class="text-white hover:text-white border border-rose-900 bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                  >
                    <div class="flex items-center justify-center">
                      <div
                        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                      >
                        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                          Loading...
                        </span>
                      </div>
                    </div>
                  </button>
                )}
                <button
                  type="button"
                  class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Search Again
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {booking_details.tripType === "Round Trip" ? (
          <div class="w-full md:w-1/2">
            <div className="xl:container px-6 text-gray-600 md:px-12">
              <div className="flex flex-col p-5 bg-white rounded-xl gap-y-8 display-trip">
                <div className="flex flex-row justify-between align-center">
                  <p>Your Search</p>
                  <button
                    type="button"
                    class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                  >
                    {booking_details?.tripType}
                  </button>
                </div>
                <div class="flex justify-between items-center  text-gray-600">
                  <div class="flex items-center">
                    <p className="font-bold">
                      {booking_details.formData[0]?.source.value.iata_code}
                      <br />
                      {booking_details.formData[0]?.source.value.name} <br />
                      {booking_details.formData[0]?.source.value.city},{" "}
                      {booking_details.formData[0]?.source.value.country}
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
                      {booking_details.formData[0]?.destination.value.iata_code}
                      <br />
                      {booking_details.formData[0]?.destination.value.name}{" "}
                      <br />
                      {
                        booking_details.formData[0]?.destination.value.city
                      },{" "}
                      {booking_details.formData[0]?.destination.value.country}
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
                        {booking_details.formData[0]?.depatureDate}
                      </span>
                      <span className="ml-2">AT</span>
                      <span className="ml-2">
                        {booking_details.formData[0]?.depatureTime}
                      </span>
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
                        {booking_details?.formData[0]?.passengers.adults}
                        Adult(s)
                        {booking_details?.formData[0]?.passengers.children}{" "}
                        Children
                        {booking_details?.formData[0]?.passengers.pets} Pets(s)
                      </span>
                    </p>
                  </div>
                </div>
                <div class="border-t border-gray-300 text-gray-600">
                  <div className="flex items-center justify-between mt-4">
                    <div class="flex items-center text-center">
                      <p className="font-bold text-end">
                        {
                          booking_details.formData[0]?.destination.value
                            .iata_code
                        }
                        <br />
                        {
                          booking_details.formData[0]?.destination.value.name
                        }{" "}
                        <br />
                        {
                          booking_details.formData[0]?.destination.value.city
                        },{" "}
                        {booking_details.formData[0]?.destination.value.country}
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
                    <div class="flex items-center">
                      <p className="font-bold">
                        {booking_details.formData[0]?.source.value.iata_code}
                        <br />
                        {booking_details.formData[0]?.source.value.name} <br />
                        {booking_details.formData[0]?.source.value.city},{" "}
                        {booking_details.formData[0]?.source.value.country}
                      </p>
                    </div>
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
                        {booking_details.formData[0].returningDate}
                      </span>
                      <span className="ml-2">AT</span>
                      <span className="ml-2">
                        {booking_details.formData[0].returningTime}
                      </span>
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
                        {booking_details?.formData[0]?.passengers.adults}
                        Adult(s)
                        {booking_details?.formData[0]?.passengers.children}{" "}
                        Children
                        {booking_details?.formData[0]?.passengers.pets} Pets(s)
                      </span>
                    </p>
                  </div>
                </div>
                {loading === false ? (
                  <button
                    type="button"
                    class="text-white hover:text-white border border-rose-900 bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                    onClick={() => {
                      handleBookingPayload();
                      handleSubmit();
                    }}
                  >
                    Book Now
                  </button>
                ) : (
                  <button
                    type="button"
                    class="text-white hover:text-white border border-rose-900 bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                  >
                    <div class="flex items-center justify-center">
                      <div
                        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                      >
                        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                          Loading...
                        </span>
                      </div>
                    </div>
                  </button>
                )}
                <button
                  type="button"
                  class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Search Again
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {booking_details?.tripType === "Multi-city Trip" ? (
          <div class="w-full md:w-1/2 ">
            <div className="xl:container px-6 text-gray-600 md:px-12">
              <div></div>
              <div className="flex flex-row justify-between p-5 bg-white align-center rounded-t-xl">
                <p>Your Search</p>
                <button
                  type="button"
                  class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                >
                  {booking_details?.tripType}
                </button>
              </div>
              {booking_details?.formData.map((item, i) => {
                return (
                  <div className="flex flex-col p-5 bg-white gap-y-8 ">
                    <div class="flex justify-between items-center  text-gray-600">
                      <div class="flex items-center w-1/2">
                        <p className="font-bold">
                          {item?.source.value.iata_code}
                          <br />
                          {item?.source.value.name} <br />
                          {item?.source.value.city},{" "}
                          {item?.source.value.country}
                        </p>
                      </div>
                      <div class="flex items-center p-4 text-center">
                        <svg
                          className="w-6 h-6 text-gray-600 fill-current svg-icon "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                        >
                          <path d="M271 936 80 745l192-192 42 42-120 120h649v60H194l119 119-42 42Zm418-337-42-42 119-119H117v-60h649L646 258l42-42 192 192-191 191Z" />
                        </svg>
                      </div>
                      <div class="flex items-center text-end">
                        <p className="font-bold">
                          {item?.destination.value.iata_code}
                          <br />
                          {item?.destination.value.name} <br />
                          {item?.destination.value.city},{" "}
                          {item?.destination.value.country}
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
                            {item?.depatureDate}
                          </span>
                          <span className="ml-2">AT</span>
                          <span className="ml-2">{item?.depatureTime}</span>
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
                            <p>
                              <span class="text-sm text-gray-400">
                                {item?.passengers.adults}
                                Adult(s)
                                {item?.passengers.children} Children
                                {item?.passengers.pets} Pets(s)
                              </span>
                            </p>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
               <div className="bg-white align-center rounded-b-xl p-2">
              {loading === false ? (
                <button
                  type="button"
                  class="w-100 text-white hover:text-white border border-rose-900 bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                  onClick={() => {
                    handleBookingPayload();
                    handleSubmit();
                  }}
                >
                  Book Now
                </button>
              ) : (
                <button
                  type="button"
                  class="w-100 text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm text-center dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                >
                  <div class="flex items-center justify-center">
                    <div
                      class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  </div>
                </button>
              )}
              <button
                type="button"
                class="w-100 mt-2 text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                onClick={() => {
                  history.push("/");
                }}
              >
                Search Again
              </button>
            </div>
            </div>
           
          </div>
        ) : null}

        {booking_details?.tripType === "Shared" ? (
          <div class="w-full md:w-1/2">
            <div className="xl:container px-6 text-gray-600 md:px-12">
              <div className="flex flex-col p-5 bg-white rounded-xl gap-y-8 display-trip">
                <div className="flex flex-row justify-between align-center">
                  <p>Your Search</p>
                  <button
                    type="button"
                    class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                  >
                    Empty Leg
                  </button>
                </div>
                <div class="flex justify-between items-center  text-gray-600">
                  <div class="flex items-center">
                    <p className="font-bold">
                      {booking_details?.source.iata_code}
                      <br />
                      {booking_details?.source.value.name} <br />
                      {booking_details?.source.value.city},{" "}
                      {booking_details?.source.value.country}
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
                      {booking_details?.destination.iata_code}
                      <br />
                      {booking_details?.destination.value.name} <br />
                      {booking_details?.destination.value.city},{" "}
                      {booking_details?.destination.value.country}
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
                        {booking_details?.depatureDate?.slice(0, 10)}
                      </span>
                      <span className="ml-2">AT</span>
                      <span className="ml-2">
                        {booking_details?.depatureTime}
                      </span>
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
                        {booking_details?.adults} Passengers(s)
                      </span>
                    </p>
                  </div>
                </div>
                {loading === false ? (
                  <button
                    type="button"
                    class="text-white hover:text-white border border-rose-900 bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                    onClick={() => {
                      handleBookingPayload();
                      handleSubmit();
                    }}
                  >
                    Book Now
                  </button>
                ) : (
                  <button
                    type="button"
                    class="text-white hover:text-white border border-rose-900 bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                  >
                    <div class="flex items-center justify-center">
                      <div
                        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                      >
                        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                          Loading...
                        </span>
                      </div>
                    </div>
                  </button>
                )}
                <button
                  type="button"
                  class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Search Again
                </button>
              </div>
            </div>
          </div>
        ) : null}

        <div class="w-full md:w-3/5 ">
          <div class="">
            <div class="xl:container px-6 text-gray-600 md:px-12 overflow-x-hidden overflow-y-auto" style={{"height": "800px"}}>
              <div class="">
                <div>
                  <div class="md:5/12 lg:w-full flex flex-column gap-y-2 m-auto  ">
                    <div className="">
                      <h1 className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold text-rose-900 pt-8">
                        Available Aircrafts
                      </h1>

                      <div class="w-full">
                        {aircraft_details.map((item, i) => (
                          <div className="py-4">
                            <div className="flex flex-col bg-white flight-card-content rounded-xl gap-y-8">
                              <div className="flex flex-row justify-between align-center">
                                <img
                                  src={item?.image_url}
                                  class="rounded-full h-14 w-14"
                                  alt=""
                                />
                                <p className="ml-2 mr-2 font-bold truncate flight-card-text">
                                  {item?.model}
                                </p>
                                <button
                                  type="button"
                                  class="quote-btn text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900"
                                  onClick={() => {
                                    handleToggleQuote(i, item);
                                    setBannerSuggestion(item);
                                  }}
                                >
                                  Add Quote
                                </button>
                              </div>

                              <div class="flex justify-between items-center  text-gray-600">
                                <div class="flex items-center">
                                  <p className="text-xs">
                                    {item?.classification}
                                  </p>
                                </div>
                                <div class="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <title>First star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <title>Second star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <title>Third star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <title>Fourth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <title>Fifth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                </div>
                                <div class="flex items-center">
                                  <p
                                    class=" text-sm  cursor-pointer underline text-gray-900 dark:text-gray-700"
                                    onClick={() => {
                                      localStorage.setItem(
                                        "aircract-id",
                                        JSON.stringify(item._id)
                                      );
                                      setShowAircraft(true);
                                    }}
                                  >
                                    view details
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        {showModal ? (
                          <div>
                            <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-6 overflow-x-hidden overflow-y-auto shadow-md outline-none lg:px-8 focus:outline-none">
                              <div class="">
                                <form class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
                                  <div class="mb-4">
                                    <label
                                      class="block text-gray-700 text-xs font-bold mb-2 "
                                      for="username"
                                    >
                                      Add a reachable phone number{" "}
                                    </label>
                                    <input
                                      class="relative flex px-4 py-2  rounded-full bg-white dark:bg-gray-900 border dark:dark:border-[#670f29] border-[#670f29] shadow-md md:p-2 lg:pr-3"
                                      id="username"
                                      type="tel"
                                      placeholder="Phone number"
                                      onChange={(e) => {
                                        setPhoneNumber(e.target.value);
                                      }}
                                    />
                                    <br></br>
                                    <br></br>
                                    <label
                                      class="block text-gray-700 text-xs font-bold mb-2 flex  "
                                      for="username"
                                    >
                                      Extra Note
                                    </label>
                                    <textarea
                                      rows="4"
                                      name="comment"
                                      id="username"
                                      className="block w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-[#670f29] border-[#670f29]"
                                      placeholder="Enter text here..."
                                    />
                                  </div>

                                  <div class="flex items-center justify-between">
                                    <button
                                      class="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-[#670f29] transition duration-300 hover:border-transparent hover:bg-[#670f29] hover:text-white dark:border-gray-700 dark:text-gray-300"
                                      type="button"
                                      onClick={() => {
                                        setShowModal(false);
                                      }}
                                    >
                                      Back
                                    </button>
                                    <button
                                      class="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-[#670f29] transition duration-300 hover:border-transparent hover:bg-[#670f29] hover:text-white dark:border-gray-700 dark:text-gray-30"
                                      type="button"
                                      onClick={() => {
                                        setShowModal(false);
                                      }}
                                    >
                                      Continue
                                    </button>
                                  </div>
                                </form>
                           
                              </div>
                            </div>
                            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                          </div>
                        ) : null}
                        {showSuccessModal ? (
                          <div>
                            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto text-center outline-none focus:outline-none">
                              <div class="w-full max-w-xs">
                                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                  <div class="mb-4">
                                    <h3
                                      class="block text-gray-700 text-md font-bold mb-2 text-[#5C0632]"
                                      for="username"
                                    >
                                      Booking Successful - Booking Number :{" "}
                                      {bookingPayload}
                                    </h3>
                                    <br></br>
                                  </div>
                                  <div class="mb-4">
                                    <h5
                                      class="block text-gray-500 text-sm  mb-2 text-[#5C0632]"
                                      for="username"
                                    >
                                      Thank you for choosing Swiftwings for your
                                      travel needs. Your flight booking has been
                                      confirmed and your flight information sent
                                      to your email address.
                                    </h5>
                                  </div>

                                  <div class="w-full flex justify-between ml-auto">
                                    <button
                                      type="button"
                                      class="py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-[#5C0632] hover:border-[#ffffff] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 0 dark:text-[#5C0632] dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5C0632] w-32 ac-button ml-auto"
                                      onClick={() => {
                                        setShowSuccessModal(false);
                                        history.push("/");
                                      }}
                                    >
                                      close
                                    </button>
                                  </div>
                                </form>
                                <p class="text-center text-gray-500 text-xs">
                                  &copy;2020 Acme Corp. All rights reserved.
                                </p>
                              </div>
                            </div>
                            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                          </div>
                        ) : null}
                        {showAircraft ? (
                          <div>
                            <div className="bg-white mt-12 justify-center overflow-x-hidden overflow-y-auto sm:w-4/5 md: w-3/5 lg:w-1/2 fixed rounded-sm inset-0 z-50 px-6 py-6 pb-8  shadow-md outline-none  focus:outline-none  mr-auto ml-auto">
                              <CloseSharp
                                onClick={() => {
                                  setShowAircraft(false);
                                }}
                              />
                              <SingleAircraftOverLay />
                            </div>
                            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
