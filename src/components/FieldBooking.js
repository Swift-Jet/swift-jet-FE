import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import AircraftInput from "./shared/aircraft-input/AircraftInput";
import "./styles.css";
import AircraftCard from "./shared/aircraft-type-card/aircraft-card";
import { AircraftsContext } from "../context/aircraft-context";
import { useHistory } from "react-router-dom";
import Card from "./shared/aircraft-type-card/card";
import { ToastContainer, toast } from "react-toastify";
import data from "./data.json";
import time from "./time.json";
import dateFormat, { masks } from "dateformat";
import "react-datalist-input/dist/styles.css";
import Select from "react-tailwindcss-select";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Datepicker from "react-tailwindcss-datepicker";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FlightsContext } from "../context/flight-context";

const FieldBooking = () => {
  const [oneWayTrip, setOneWayTrip] = useState(true);
  const [sourceAirport, setSourceAirport] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [sourceAirportCode, setSourceAirportCode] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [destinationAirportCode, setDestinationAirportCode] = useState("");
  const [tripType, setTripType] = useState("One way Trip");
  const [passengers, setPassengers] = useState("");
  const [enableBtn, setEnableBtn] = useState(true);
  const [depatureTime, setDepatureTime] = useState("");
  const [returningTime, setReturningTime] = useState("");
  const [inputFields, setInputFields] = useState([{ name: "" }]);
  const [bookingArr, setBookingArr] = useState([]);
  const [addMoreBtn, setAddMoreBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [showModal, setShowModal] = React.useState(false);

  const { aircrafts } = useContext(AircraftsContext);
  const { flights } = useContext(FlightsContext);

  const [airports, setAirports] = useState(data);
  const [depatureDate, setDepatureDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [returningDate, setReturningDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [valueTime, setValueTime] = useState("10:00");

  const check = () => {
    if (tripType === "One way Trip") {
      if (
        source === "" ||
        destination === "" ||
        depatureDate?.startDate === null ||
        depatureTime === ""
      ) {
        setShowModal(false);
        console.log(
          "source",
          source,
          "destination,",
          destination,
          "depatureDate",
          depatureDate?.startDate,
          "depatureTime",
          depatureTime
        );
        toastMsg("Fill all fields to continue");
      } else {
        setShowModal(true);
        console.log(
          "source",
          source,
          "destination,",
          destination,
          "depatureDate",
          depatureDate?.startDate,
          "depatureTime",
          depatureTime
        );
      }
    }
    if (tripType === "Round Trip") {
      if (
        source === "" ||
        destination === "" ||
        depatureDate?.startDate === null ||
        depatureTime === "" ||
        returningDate?.startDate === null ||
        returningTime === ""
      ) {
        setShowModal(false);
        console.log(
          "source",
          source,
          "destination,",
          destination,
          "depatureDate",
          depatureDate?.startDate,
          "depatureTime",
          depatureTime
        );
        toastMsg("Fill all fields to continue");
      } else {
        setShowModal(true);
      }
    }
    if (tripType === "Multi-city Trip") {
      if (
        source === "" ||
        destination === "" ||
        depatureDate?.startDate === null ||
        depatureTime === ""
      ) {
        setShowModal(false);
        console.log(
          "source",
          source,
          "destination,",
          destination,
          "depatureDate",
          depatureDate?.startDate,
          "depatureTime",
          depatureTime
        );
        toastMsg("Fill all fields to continue");
      } else {
        setShowModal(true);
        console.log(
          "source",
          source,
          "destination,",
          destination,
          "depatureDate",
          depatureDate?.startDate,
          "depatureTime",
          depatureTime
        );
      }
    }
  };

  const handleIncrement = (value, state) => {
    value = value + 1;

    state(value);
  };
  const handleDecrement = (value, state) => {
    if (value == 0) {
      value = 0;
      state(value);
    } else if (value == 1 && state == setAdults) {
      value = 1;
      state(value);
    } else {
      value = value - 1;
      state(value);
    }
  };

  const handleDepartureDate = (currentValue) => {
    setDepatureDate(currentValue);
  };
  const handleReturningDate = (currentValue) => {
    setReturningDate(currentValue);
  };

  const handleOrigin = (currentValue) => {
    setSource(currentValue.value);
    setSourceAirport(currentValue);
  };
  const handleDestination = (currentValue) => {
    setDestination(currentValue.value);
    setDestinationAirport(currentValue);
  };

  const handleDepartTime = (currentValue) => {
    setDepatureTime(currentValue);
  };
  const handleReturnTime = (currentValue) => {
    setReturningTime(currentValue);
  };

  const history = useHistory();
  let filteredData;
  let valid = false;

  const toastMsg = (message) => toast(message);
  const viewAddMoreBtn = () => {
    setAddMoreBtn(true);
  };

  const hideAddMoreBtn = () => {
    setAddMoreBtn(false);
  };
  const bookingDetails = {
    tripType,
    source,
    destination,
    adults,
    children,
    pets,
    depatureDate,
    returningDate,
    depatureTime,
    returningTime,
  };

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue);
  //   if (searchInput !== "") {
  //     filteredData = airports.filter((item) => {
  //       return Object.values(item)
  //         .join("")
  //         .toLowerCase()
  //         .includes(searchInput.toLowerCase());
  //     });
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults([]);
  //   }
  // };
  const options = airports.map((item, i) => ({
    label:
      item.name +
      " - " +
      item.icao_code +
      " - " +
      item.iata_code +
      " - " +
      item.country_code,
    value: item,
  }));

  const storeBookingInfo = () => {
    if (tripType == "One way Trip" || tripType == "Round Trip") {
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
      setBookingArr(JSON.parse(localStorage.getItem("bookingDetails")));
    } else {
      var bookingInfoArr = [];
      bookingInfoArr = JSON.parse(localStorage.getItem("bookingDetails")) || [];
      bookingInfoArr.push(bookingDetails);
      localStorage.setItem("bookingDetails", JSON.stringify(bookingInfoArr));
      setBookingArr(JSON.parse(localStorage.getItem("bookingDetails")));
    }
  };

  const resetBookingForm = () => {
    setSourceAirport("");
    setDestinationAirport("");
    setSourceAirportCode("");
    setDestinationAirportCode("");
    setPassengers("");
    setDepatureDate("");
    setReturningDate("");
    setDepatureTime("");
    document.getElementById("flight-booking-form").reset();
  };

  const submitBookingInfo = (formType) => {
    if (formType == "multi") {
      storeBookingInfo();
    } else
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    history.push("/EstimatedPage");
  };

  const subMultiBookForm = () => {
    storeBookingInfo();
    resetBookingForm();
  };
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <>
      <ToastContainer />
      {/* <div className="fb-banner ">
        <h3 className="text-[30px] text-white font-semibold p-4">
          We Are The Best Host For The Journey
        </h3>
        <p className="p-4 text-[17px] text-white p-2">
          We provide the best flying experience for you. We help you who want to
          travel privately to have easy access to private jet.
        </p>
      </div> */}
      <div className="row mb-12 booking-engine ">
        <div className="col-sm-6 first-stn-left-div flex flex-1 justify-center items-center  fsld-special">
          <div className="w-full">
            {" "}
            {bookingArr.map((data, i) => {
              return (
                <div class="row pr-8 pl-8 2xl:w-4/5 xl:w-4/5 m-auto sm:w-full sm:pl-0 sm:pr-0">
                  <div className=" flex flex-col p-3 bg-[#eeece1] rounded-xl gap-y-3 display-trip ">
                    <div className=" flex flex-row justify-between align-center">
                      <p></p>
                      <button
                        className="remove-skill  bg-[#eeece1]"
                        onClick={() => {
                          setBookingArr(
                            JSON.parse(localStorage.getItem("bookingDetails"))
                          );
                          let index = bookingArr.indexOf(data);
                          bookingArr.splice(index, 1);
                          localStorage.setItem(
                            "bookingDetails",
                            JSON.stringify(bookingArr)
                          );
                          setBookingArr(
                            JSON.parse(localStorage.getItem("bookingDetails"))
                          );
                        }}
                      >
                        x
                      </button>
                    </div>
                    <div class="flex justify-between items-center  text-gray-600">
                      <div class="flex items-center">
                        <p className="font-bold">
                          {data?.source.code}
                          <br />
                          {data.source.name}
                        </p>
                      </div>
                      <div class="flex items-center">
                        <svg
                          className="svg-icon h-6 w-6 text-gray-600 fill-current "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                        >
                          <path d="M271 936 80 745l192-192 42 42-120 120h649v60H194l119 119-42 42Zm418-337-42-42 119-119H117v-60h649L646 258l42-42 192 192-191 191Z" />
                        </svg>
                      </div>
                      <div class="flex items-center text-center">
                        <p className="font-bold">
                          {data?.destination.code}
                          <br />
                          {data.destination.name}
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-between items-center text-gray-600">
                      <div class="flex items-center">
                        <svg
                          className="svg-icon h-5 w-5 text-gray-600 fill-current mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                        >
                          <path d="M180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Zm0-490h600V296H180v130Zm0 0V296v130Zm300 230q-17 0-28.5-11.5T440 616q0-17 11.5-28.5T480 576q17 0 28.5 11.5T520 616q0 17-11.5 28.5T480 656Zm-160 0q-17 0-28.5-11.5T280 616q0-17 11.5-28.5T320 576q17 0 28.5 11.5T360 616q0 17-11.5 28.5T320 656Zm320 0q-17 0-28.5-11.5T600 616q0-17 11.5-28.5T640 576q17 0 28.5 11.5T680 616q0 17-11.5 28.5T640 656ZM480 816q-17 0-28.5-11.5T440 776q0-17 11.5-28.5T480 736q17 0 28.5 11.5T520 776q0 17-11.5 28.5T480 816Zm-160 0q-17 0-28.5-11.5T280 776q0-17 11.5-28.5T320 736q17 0 28.5 11.5T360 776q0 17-11.5 28.5T320 816Zm320 0q-17 0-28.5-11.5T600 776q0-17 11.5-28.5T640 736q17 0 28.5 11.5T680 776q0 17-11.5 28.5T640 816Z" />
                        </svg>
                        <p className="text-sm">
                          <span class="text-sm text-gray-400">
                            {data?.depatureDate.startDate}
                          </span>
                          <span className="ml-2">@</span>
                          <span className="ml-2">
                            {data?.depatureTime?.value}
                          </span>
                        </p>
                      </div>
                      <div class="flex items-center">
                        <p>
                          <span class="text-sm text-gray-400">
                            Adults - {data?.adults}
                            <br></br>
                            Children - {data?.children} <br></br>
                            Pets - {data?.pets} <br></br>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 col text-center text-[12px]"> </div>
                </div>
              );
            })}
            <div className="left-img-page ">
              <Carousel
                showIndicators={false}
                autoPlay={true}
                showStatus={false}
                infiniteLoop={true}
                stopOnHover={true}
              >
                <div>
                  <h1 className="be-t-1">Mobility in the air</h1>
                  <h1 className="be-t-2">
                    Precisely how you had always envisioned
                  </h1>
                </div>
                <div>
                  <h1 className="be-t-1">Time to travel ?</h1>
                  <h1 className="be-t-2">Book a flight in just 60 seconds</h1>
                </div>
                <div>
                  <h1 className="be-t-1">Worried about travel cost ?</h1>
                  <h1 className="be-t-2">We offer the best flight prices</h1>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="col-sm-6 first-stn-left-div">
          <div className="first-stn-left ">
            <form class="w-full max-w-lg m-auto pt-8 pb-8 ">
              <h2 className="text-[#5c0632] booking-engine-title">
                Book Flights
              </h2>
              <div className="justify-between flex  w-full sm:p-0">
                <div class="flex items-center rounded dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    onClick={() => {
                      setOneWayTrip(true);
                      setTripType("One way Trip");
                      hideAddMoreBtn();
                      localStorage.removeItem("bookingDetails");
                    }}
                    value=""
                    name="bordered-radio"
                    class="w-4 h-4 text-blue-600 bg-[#ded8d8] border-gray-300 focus:ring-[#5c0632] dark:focus:ring-[#5c0632] dark:ring-offset-[#5c0632] focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                  />
                  <label
                    for="bordered-radio-1"
                    class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 label-fields "
                    onClick={() => {
                      setOneWayTrip(true);
                      setTripType("One way Trip");
                      hideAddMoreBtn();
                      localStorage.removeItem("bookingDetails");
                    }}
                  >
                    One Way
                  </label>
                </div>
                <div class="flex items-center rounded dark:border-gray-700">
                  <input
                    id="bordered-radio-2"
                    type="radio"
                    value=""
                    onClick={() => {
                      setOneWayTrip(false);
                      setTripType("Round Trip");
                      hideAddMoreBtn();
                      localStorage.removeItem("bookingDetails");
                    }}
                    name="bordered-radio"
                    className=" w-4 h-4 text-blue-600 bg-[#ded8d8] border-[#5c0632] focus:ring-[#5c0632] dark:focus:ring-[#5c0632] dark:ring-offset-[#5c0632]  focus:ring-2 dark:bg-gray-700 dark:border-gray-600 outline-none"
                  />
                  <label
                    for="bordered-radio-2"
                    class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 label-fields "
                    onClick={() => {
                      setOneWayTrip(false);
                      setTripType("Round Trip");
                      hideAddMoreBtn();
                      localStorage.removeItem("bookingDetails");
                    }}
                  >
                    Round Trip
                  </label>
                </div>
                <div class="flex items-center rounded dark:border-gray-700">
                  <input
                    id="bordered-radio-3"
                    type="radio"
                    value=""
                    onClick={() => {
                      setOneWayTrip(true);
                      setTripType("Multi-city Trip");
                      viewAddMoreBtn();
                      localStorage.removeItem("bookingDetails");
                    }}
                    name="bordered-radio"
                    class="w-4 h-4 text-blue-600 bg-[#ded8d8] border-gray-300 focus:ring-[#5c0632] dark:focus:ring-[#5c0632] dark:ring-offset-[#5c0632] focus:ring-2 dark:bg-gray-700 dark:border-gray-600 outline-none"
                  />
                  <label
                    for="bordered-radio-3"
                    class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 label-fields"
                    onClick={() => {
                      setOneWayTrip(true);
                      setTripType("Multi-city Trip");
                      viewAddMoreBtn();
                      localStorage.removeItem("bookingDetails");
                    }}
                  >
                    Multi City
                  </label>
                </div>
              </div>

              <div className="mt-2 mb-2">
                <Select
                  classNames={"truncate"}
                  value={sourceAirport}
                  noOptionsMessage={"No  airport found"}
                  isSearchable={true}
                  menuIsOpen={false}
                  placeholder={"Origin"}
                  primaryColor={"sky"}
                  isClearable={false}
                  onChange={handleOrigin}
                  options={options}
                />
              </div>
              <div className="divider"></div>

              <div className="mt-2 mb-2">
                <Select
                  classNames={"select-destination"}
                  noOptionsMessage={"No  airport found"}
                  value={destinationAirport}
                  isSearchable={true}
                  menuIsOpen={false}
                  placeholder={"Destination"}
                  primaryColor={"sky"}
                  loading={false}
                  isClearable={false}
                  onChange={handleDestination}
                  options={options}
                />
              </div>

              <div className="divider"></div>
              <div class="flex flex-wrap -mx-3 mt-2 mb-2">
                <div class="w-1/2  input-date-time rounded-[20px] ">
                  <div className="bg-gray-50 p-2 inner-input rounded-[20px]">
                    <label
                      class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Departure Date
                    </label>
                    <div>
                      <Datepicker
                        className="bg-black-100"
                        useRange={false}
                        primaryColor={"rose"}
                        asSingle={true}
                        value={depatureDate}
                        onChange={handleDepartureDate}
                      />
                    </div>
                  </div>
                </div>
                <div class="w-1/2  input-date-time md:mb-0  ">
                  <div className="bg-gray-50 p-2 inner-input rounded-[20px]">
                    <label
                      class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Departure Time
                    </label>
                    <div className="mt-2">
                      <Select
                        classNames={"truncate"}
                        value={depatureTime}
                        isSearchable={false}
                        menuIsOpen={false}
                        placeholder={"00:00"}
                        primaryColor={"sky"}
                        isClearable={false}
                        onChange={handleDepartTime}
                        options={time}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              <div class="flex flex-wrap -mx-3 mt-2 " hidden={oneWayTrip}>
                <div class="w-1/2  input-date-time rounded-[20px] ">
                  <div className="bg-gray-50 p-2 inner-input rounded-[20px]">
                    <label
                      class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Returning Date
                    </label>
                    <div>
                      <Datepicker
                        className="bg-black-100"
                        primaryColor={"rose"}
                        useRange={false}
                        asSingle={true}
                        value={returningDate}
                        onChange={handleReturningDate}
                      />
                    </div>
                  </div>
                </div>
                <div class="w-1/2  input-date-time md:mb-0  ">
                  <div className="bg-gray-50 p-2 inner-input rounded-[20px]">
                    <label
                      class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Returning Time
                    </label>
                    <div className="mt-2">
                      <Select
                        classNames={"truncate"}
                        value={returningTime}
                        isSearchable={false}
                        menuIsOpen={false}
                        placeholder={"00:00"}
                        primaryColor={"sky"}
                        isClearable={false}
                        onChange={handleReturnTime}
                        options={time}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="text-[#881537] active:bg-pink-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 load-passanger-form"
                  type="button"
                  onClick={() => {
                    check();
                  }}
                >
                  Next
                </button>
              </div>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative bg-white outline-none focus:outline-none passengers-modal">
                        {/*header*/}
                        <div className="flex items-start justify-between border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-xl mb-2 font-semibold text-[#5c0632]">
                            Passengers
                          </h3>

                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-red  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="text-black bg-[#fcf8f8] h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div class="flex flex-wrap -mx-3 mb-2 pt-4">
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Adult
                            </label>
                            <div class="custom-number-input h-10 w-32 sm:w-full">
                              <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleDecrement(adults, setAdults)
                                  }
                                  data-action="decrement"
                                  class=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                >
                                  <span class="m-auto text-2xl font-thin">
                                    −
                                  </span>
                                </button>
                                <input
                                  type="text"
                                  class="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                  name="custom-input-number"
                                  value={adults}
                                  readOnly
                                ></input>
                                <button
                                  type="button"
                                  data-action="increment"
                                  onClick={() =>
                                    handleIncrement(adults, setAdults)
                                  }
                                  class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                >
                                  <span class="m-auto text-2xl font-thin">
                                    +
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>

                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Children
                            </label>
                            <div class="custom-number-input h-10 w-32 sm:w-full">
                              <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button
                                  type="button"
                                  data-action="decrement"
                                  onClick={() =>
                                    handleDecrement(children, setChildren)
                                  }
                                  class=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                >
                                  <span class="m-auto text-2xl font-thin">
                                    −
                                  </span>
                                </button>
                                <input
                                  type="text"
                                  class="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                  name="custom-input-number"
                                  readOnly
                                  value={children}
                                ></input>
                                <button
                                  type="button"
                                  data-action="increment"
                                  onClick={() =>
                                    handleIncrement(children, setChildren)
                                  }
                                  class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                >
                                  <span class="m-auto text-2xl font-thin">
                                    +
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Pets
                            </label>
                            <div class="custom-number-input h-10 w-32 sm:w-full">
                              <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button
                                  type="button"
                                  data-action="decrement"
                                  onClick={() => handleDecrement(pets, setPets)}
                                  class=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                >
                                  <span class="m-auto text-2xl font-thin">
                                    −
                                  </span>
                                </button>
                                <input
                                  type="text"
                                  class="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                  name="custom-input-number"
                                  value={pets}
                                  readOnly
                                ></input>
                                <button
                                  type="button"
                                  data-action="increment"
                                  onClick={() => handleIncrement(pets, setPets)}
                                  class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                >
                                  <span class="m-auto text-2xl font-thin">
                                    +
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          {tripType === "Multi-city Trip" ? (
                            <div>
                              <button
                                className="hover:bg-[#5c0632] hover:text-white bg-[#ffffff] text-[#5c0632] active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  setShowModal(false);
                                  subMultiBookForm();
                                }}
                              >
                                + Add More
                              </button>
                              <button
                                className="bg-[#5c0632] text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  submitBookingInfo("multi");
                                }}
                              >
                                Book Now
                              </button>
                            </div>
                          ) : (
                            <div>
                              <button
                                className="bg-[#5c0632] text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  setShowModal(false);
                                  submitBookingInfo("multi");
                                }}
                              >
                                Book Now
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </form>
          </div>
        </div>
      </div>
      {loading === true ? (
        <div className="w-full text-left font-Aeonik text-rgba(77,77,77,1) field-booking-loading ">
          <div>
            <div className="bg-white 2xl:w-fit xl:w-fit lg:w-fit md:w-3/5 sm:w-full mr-auto ml-auto border rounded rounded-lg mb-12 justify-center "></div>
            <h1 className="justify-center flex  text-center">
              <svg
                width="95"
                height="110"
                viewBox="0 0 135 140"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
              >
                <rect y="10" width="15" height="120" rx="6">
                  <animate
                    attributeName="height"
                    begin="0.5s"
                    dur="1s"
                    values="120;110;100;90;80;70;60;50;40;140;120"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    begin="0.5s"
                    dur="1s"
                    values="10;15;20;25;30;35;40;45;50;0;10"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="30" y="10" width="15" height="120" rx="6">
                  <animate
                    attributeName="height"
                    begin="0.25s"
                    dur="1s"
                    values="120;110;100;90;80;70;60;50;40;140;120"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    begin="0.25s"
                    dur="1s"
                    values="10;15;20;25;30;35;40;45;50;0;10"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="60" width="15" height="140" rx="6">
                  <animate
                    attributeName="height"
                    begin="0s"
                    dur="1s"
                    values="120;110;100;90;80;70;60;50;40;140;120"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    begin="0s"
                    dur="1s"
                    values="10;15;20;25;30;35;40;45;50;0;10"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="90" y="10" width="15" height="120" rx="6">
                  <animate
                    attributeName="height"
                    begin="0.25s"
                    dur="1s"
                    values="120;110;100;90;80;70;60;50;40;140;120"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    begin="0.25s"
                    dur="1s"
                    values="10;15;20;25;30;35;40;45;50;0;10"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="120" y="10" width="15" height="120" rx="6">
                  <animate
                    attributeName="height"
                    begin="0.5s"
                    dur="1s"
                    values="120;110;100;90;80;70;60;50;40;140;120"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    begin="0.5s"
                    dur="1s"
                    values="10;15;20;25;30;35;40;45;50;0;10"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </h1>
          </div>
        </div>
      ) : (
        <div className="w-full text-left font-Aeonik text-rgba(77,77,77,1) field-booking">
          {flights && flights.length > 0 ? (
            <div className="bg-[#eeece1] pb-12">
              <div className="bg-[#ffffff] empty-legs">Empty Legs</div>
              <Slide
                slidesToScroll={4}
                slidesToShow={4}
                indicators={true}
                responsive={responsiveSettings}
                canSwipe={true}
                duration={1000}
                transitionDuration={1000}
              >
                {flights?.map((data, i) => (
                  <a
                    href="#"
                    class="block rounded-lg p-4  m-4 group/item hover:bg-[#eeece18c] sfc transition overflow-hidden h-108"
                    onClick={() => {
                      history.push(`/EstimatedPage`);
                      localStorage.setItem(
                        "bookingDetails",
                        JSON.stringify({
                          tripType: data?.flight_type,
                          source: data?.departure_airport,
                          destination: data?.destination_airport,
                          depatureDate: data?.departure_time,
                          depatureTime: data?.arrival_time,
                          adults: data?.aircraft.no_of_seats,
                          aircraft: data?.aircraft,
                        })
                      );
                      localStorage.setItem(
                        "sharedAircraft",
                        JSON.stringify({
                          aircraft: data?.aircraft,
                        })
                      );
                    }}
                  >
                    <div className="overflow-hidden rounded-lg">
                      <img
                        alt="Home"
                        src={data?.aircraft.image_url}
                        class="h-56 w-full rounded-md object-cover shared-flight-img overflow-hidden transition hover:scale-125"
                      />
                    </div>
                    <div className="mt-2 shared-flight-time">
                      <dl>
                        <div>
                          <dd class="text-white mt-2 shared-flight-time-date font-['Minion Pro']">
                            Next Flight: 24th March 2023 at {data.arrival_time}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div class="mt-0">
                      <dl>
                        <div>
                          <dt class="sr-only">Address</dt>

                          <dd class="font-medium route">
                            Abuja, Nigeria - Lagos, Nigeria
                          </dd>
                        </div>
                        <div>
                          <dt class="sr-only">Price</dt>

                          <dd class="text-md text-gray-500 cost">$5500</dd>
                        </div>
                      </dl>

                      <div class=" mt-3 flex items-center justify-between text-sm">
                        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Passengers</p>

                            <p class="font-bold">9</p>
                          </div>
                        </div>

                        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Travel Class</p>

                            <p class="font-bold">Standard</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </Slide>
              <div className="w-1/2 mr-auto ml-auto text-center sm:w-4/5">
                <h3 className=" text-[2em] pt-12">
                  Safety Accredited Aircrafts
                </h3>
                <p className="text-[1em] pt-6">
                  We give you access to a safety & service accredited aircraft
                  fleet for Jet Card and on-demand flights. As an Argus
                  Certified Broker, we work to the highest industry standards of
                  safety and best practice.
                </p>
              </div>
              <div className="2xl:grid-cols-3 2xl:grid xl:grid-cols-3 xl:grid lg:grid-cols-3 lg:grid md:grid-cols-3 md:grid pt-24 justify-center md:flex w-10/12 mr-auto ml-auto">
                {aircrafts.slice(0, 3).map((data, i) => (
                  <AircraftCard item={data} />
                ))}
              </div>
              <div className="flex justify-center">
                <button class="bg-[#5C0632] hover:bg-[#5C0632] hover:text-white border text-[#ffffff] font-bold py-3 px-6 rounded-full">
                  Explore And Find Aircrafts
                </button>
              </div>
            </div>
          ) : null}

          <div className="bg-white">
            <div className="w-1/2 mr-auto ml-auto text-center">
              <h3 className=" text-[2em] pt-12">Safety Accredited Aircrafts</h3>
              <p className="text-[1em] pt-6">
                We give you access to a safety & service accredited aircraft
                fleet for Jet Card and on-demand flights. As an Argus Certified
                Broker, we work to the highest industry standards of safety and
                best practice.
              </p>
            </div>
            <div className="2xl:grid-cols-3 2xl:grid xl:grid-cols-3 xl:grid lg:grid-cols-3 lg:grid md:grid-cols-3 md:grid pt-24 justify-center md:flex w-10/12 mr-auto ml-auto">
              <Card />
              <Card />
              <Card />
            </div>

            <div className="flex justify-center">
              <button class="bg-[#5C0632] hover:bg-[#5C0632] hover:text-white border text-[#ffffff] font-bold py-3 px-6 rounded-full">
                Explore All Destinations
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(FieldBooking);
