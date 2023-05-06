import React, { useState, useContext, useEffect, useRef } from "react";
import AnimatedText from "react-animated-text-content";
import { withRouter } from "react-router";
import AircraftInput from "./shared/aircraft-input/AircraftInput";
import "./styles.css";
import { AirportsContext } from "../context/airport-context";
import AircraftCard from "./shared/aircraft-type-card/aircraft-card";
import { AircraftsContext } from "../context/aircraft-context";
import AircraftBtn from "./shared/aircraft-shared-button/AircraftBtn";
import { useHistory, useLocation } from "react-router-dom";
import Card from "./shared/aircraft-type-card/card";
import data from "./data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-tailwindcss-select";
import "react-datalist-input/dist/styles.css";
import "react-slideshow-image/dist/styles.css";
import AddIcon from "@mui/icons-material/Add";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SendIcon from "@mui/icons-material/Send";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-responsive-carousel";
import { FlightsContext } from "../context/flight-context";
import { Avatar, Typography } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  AccessTime,
  AirplaneTicketRounded,
  CalendarMonth,
  FlightLand,
  MultipleStop,
  Person2,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers";
import Review from "./review/Review";

const FieldBooking = () => {
  const [enableBtn, setEnableBtn] = useState(true);
  const [airports, setAirports] = useState(data);
  const [loading, setLoading] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [showReturnModal, setShowReturnModal] = React.useState(false);
  const [showAircraft, setShowAircraft] = useState(true);
  const [showAircraftDest, setShowAircraftDest] = useState(true);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [oneWayTrip, setOneWayTrip] = useState(true);
  const [sourceAirport, setSourceAirport] = useState("");
  const [sourceAirportCode, setSourceAirportCode] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [destinationAirportCode, setDestinationAirportCode] = useState("");
  const [tripType, setTripType] = useState("One way Trip");
  const [addMoreBtn, setAddMoreBtn] = useState(false);
  const [addReturnBtn, setAddReturnBtn] = useState(false);

  const [errors, setErrors] = useState([]);
  const { aircrafts } = useContext(AircraftsContext);
  const [formData, setFormData] = useState([
    {
      source: null,
      destination: null,
      depatureTime: null,
      returningTime: null,
      returningDate: null,
      depatureDate: null,
      passengers: { adults: 1, children: 0, pets: 0 },
    },
  ]);

  const history = useHistory();
  const location = useLocation();
  let valid = false;

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    console.log(name, value );
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };
  const handlePassengersChange = (type, index, value) => {
    const newFormData = [...formData];
    if (value === -1) {
      value = 0;
    }

    if (type === "adults" && value === 0) {
      value = 1;
    }
    newFormData[index].passengers[type] = value;
    setFormData(newFormData);
  };

  const handleAddForm = () => {
    setFormData([
      ...formData,
      {
        source: null,
        destination: null,
        depatureTime: null,
        returningTime: null,
        returningDate: null,
        depatureDate: null,
        passengers: { adults: 1, children: 0, pets: 0 },
      },
    ]);
  };

  const handleSelectChange = (selectedOption, index) => {
    const newFormData = [...formData];
    newFormData[index].source = selectedOption;
    setFormData(newFormData);
  };
  const handleSelectChange1 = (selectedOption, index) => {
    const newFormData = [...formData];
    newFormData[index].destination = selectedOption;
    setFormData(newFormData);
  };
  const toastMsg = (message) => toast(message);
  const viewAddMoreBtn = () => {
    setAddMoreBtn(true);
  };

  const hideAddMoreBtn = () => {
    setAddMoreBtn(false);
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
  const { flights } = useContext(FlightsContext);

  const options = airports.map((item, i) => ({
    label:
      item.name +
      " - " +
      item.city +
      " - " +
      item.iata_code +
      " - " +
      item.country,
    value: item,
  }));

  const bookingDetails = {
    tripType,
    formData,
 
  };
  const teamData = [
    {
      img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
      name: "London",
      position: "$4 / Bag",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "facebook",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },
    {
      img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
      name: "New York",
      position: "$4 / Bag",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "facebook",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },
    {
      img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
      name: "Paris",
      position: "$4 / Bag",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "facebook",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },
    {
      img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
      name: "United Kingdom",
      position: "$4 / Bag",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "facebook",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },
    {
      img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
      name: "England",
      position: "$4 / Bag",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "facebook",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },
    {
      img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
      name: "Manchester",
      position: "$4 / Bag",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "facebook",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },
    {
      img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
      name: "Burginham",
      position: "$4 / Bag",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "facebook",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },

    {
      img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
      name: "London",
      position: "$4 / Bag",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "facebook",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },
  ];

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
  const storeBookingInfo = () => {
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    localStorage.setItem("prevpath", JSON.stringify(location.pathname));
    history.push("/EstimatedPage");
  };

  const resetBookingForm = () => {

    document.getElementById("flight-booking-form").reset();
  };

  const validateForm = () => {
    const newErrors = [];
    formData.forEach((trip, index) => {
      if (!trip.source || !trip.destination) {
        newErrors.push(`Leg ${index + 1}: Please fill in all required fields.`);
      }
      setErrors(newErrors);
      toastMsg(`Leg ${index + 1}: Please fill in all required fields.`);
    });

    return newErrors.length === 0;
  };

  const handleRemoveFlight = (index) => {
    if (formData.length > 1) {
      const newFormData = [...formData];
      newFormData.splice(index, 1);
      console.log("formData", formData, index);
      setFormData(newFormData);
    }
  };
  const subMultiBookForm = () => {
    const valid = validateForm();

    if (valid == true) {
      storeBookingInfo();
      resetBookingForm();
    }
  };
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="w-full text-left font-Aeonik text-rgba(77,77,77,1) field-booking pb-12">
        <div
          className="w-4/5 m-auto advert text-white text-[30px] pt-8"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-out-cubic"
        >
          We Are The Best Host For The Journey
          <h4
            className="text-white text-[17px] pt-8 advert-1 w-1/2"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            We provide the best flying experience for you. We help you who want
            to travel privately to have easy access to private jet.
          </h4>
        </div>
        <div
          className="flex justify-between w-2/5 acb-icon"
          data-aos="fade-up"
          data-aos-duration="100"
          data-aos-easing="ease-out-cubic"
        >
          <div className="trip-item">
            <button
              type="button"
              onClick={() => {
                setFormData([
                  {
                    source: null,
                    destination: null,
                    depatureTime: null,
                    returningTime: null,
                    returningDate: null,
                    depatureDate: null,
                    passengers: { adults: 1, children: 0, pets: 0 },
                  },
                ]);
                setOneWayTrip(true);
                setTripType("One way Trip");
                hideAddMoreBtn();
                setAddReturnBtn(false);
                localStorage.removeItem("bookingDetails");
              }}
              class="flex 2xl:py-3 xl:py-3 lg:py-3 md:py-3 sm:py-2 px-4 mr-2 ml-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-[#5C0632] hover:border-[#ffffff] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 0 dark:text-[#5C0632] dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5C0632] ac-button"
              id=""
            >
              <FlightTakeoffIcon />
              <span className="ml-2">One way trip</span>
            </button>
          </div>
          <div className="trip-item">
            <button
              type="button"
              onClick={() => {
                setOneWayTrip(false);
                setTripType("Round Trip");
                setFormData([
                  {
                    source: null,
                    destination: null,
                    depatureTime: null,
                    returningTime: null,
                    returningDate: null,
                    depatureDate: null,
                    passengers: { adults: 1, children: 0, pets: 0 },
                  },
                ]);
                hideAddMoreBtn();
                setAddReturnBtn(true);
                localStorage.removeItem("bookingDetails");
              }}
              class="flex 2xl:py-3 xl:py-3 lg:py-3 md:py-3 sm:py-2 px-4 mr-2 ml-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-[#5C0632] hover:border-[#ffffff] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 0 dark:text-[#5C0632] dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5C0632] ac-button"
              id=""
            >
              <ConnectingAirportsIcon />
              <span className="ml-2">Round Trip</span>
            </button>
          </div>
          <div className="trip-item">
            <button
              type="button"
              onClick={() => {
                setOneWayTrip(true);
                setTripType("Multi-city Trip");
                viewAddMoreBtn();
                localStorage.removeItem("bookingDetails");
                setAddReturnBtn(false);
              }}
              class="flex 2xl:py-3 xl:py-3 lg:py-3 md:py-3 sm:py-2 px-4 mr-2 ml-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-[#5C0632] hover:border-[#ffffff] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 0 dark:text-[#5C0632] dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5C0632] ac-button"
              id=""
            >
              <MultipleStop />
              <span className="ml-2">Multi Trip</span>
            </button>
          </div>
        </div>

        <div
          className="bg-white 2xl:w-4/5 xl:w-4/5 lg:w-fit md:w-3/5 sm:w-full mr-auto ml-auto border border-white rounded-[20px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {/* {bookingArr.map((data, i) => {
            return (
              <div class="row">
                <div className="pt-4 col">{data?.sourceAirport}</div>
                <div className="pt-4 col">{data?.destinationAirport}</div>
                <div className="pt-4 col"> {data?.depatureDate}</div>
                <div className="pt-4 col">{data?.depatureTime}</div>
                <div className="pt-4 col">{data?.passengers}</div>
                <div className="pt-4 col">
                  {" "}
                  <button
                    className="remove-skill"
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
              </div>
            );
          })} */}
          <form id="flight-booking-form" autoComplete="off">
            {formData.map((data, index) => {
              return (
                <div key={index}>
                  {index !== 0 && (
                    <div className="pr-3 text-end">
                      <button
                        type="button"
                        data-te-toggle="tooltip"
                        title="Remove flight"
                        onClick={() => handleRemoveFlight(index)}
                        className="w-8 h-6 pt-2 pb-4 pl-2 pr-2 text-xs rounded-full text-red remove-leg"
                      >
                        <RemoveCircleOutline className="" />
                      </button>
                    </div>
                  )}
                  <div class="2xl:flex xl:flex  lg:flex  p-3">
                    <div className="m-2 mt-2 mb-2 font-medium rounded-lg ai-div">
                      <label class="block text-[#4D4D4D] py-2 px-3 text-xs mb-2 pl-3">
                        From Where
                      </label>
                      <Select
                        className="truncate-select"
                        noOptionsMessage={"No airport found"}
                        isSearchable={true}
                        menuIsOpen={false}
                        placeholder={<FlightTakeoffIcon />}
                        primaryColor={"sky"}
                        isClearable={false}
                        name={`source.${index}`}
                        options={options}
                        value={data.source}
                        onChange={(selectedOption) =>
                          handleSelectChange(selectedOption, index)
                        }
                        getOptionValue={(option) => option.value.id}
                        getOptionLabel={(option) => option.label}
                      />
                    </div>
                    <svg
                      width="40"
                      className="route-icon"
                      height="40"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill="#FCF9FC" />
                      <path
                        d="M15.29 19.71C15.4299 19.851 15.6086 19.9472 15.8033 19.9863C15.9981 20.0253 16.2 20.0055 16.3835 19.9294C16.5669 19.8532 16.7235 19.7241 16.8333 19.5586C16.9431 19.3931 17.0012 19.1986 17 19C16.9963 18.7352 16.8927 18.4816 16.71 18.29C16.5694 18.1512 16.3908 18.0572 16.1968 18.0199C16.0028 17.9825 15.8021 18.0034 15.62 18.08C15.4972 18.1276 15.3851 18.199 15.29 18.29C15.1073 18.4816 15.0037 18.7352 15 19C14.9992 19.1316 15.0245 19.2621 15.0742 19.3839C15.124 19.5057 15.1973 19.6166 15.29 19.71ZM23.91 19.51H19.38C19.1148 19.51 18.8604 19.6154 18.6729 19.8029C18.4854 19.9904 18.38 20.2448 18.38 20.51C18.38 20.7752 18.4854 21.0296 18.6729 21.2171C18.8604 21.4046 19.1148 21.51 19.38 21.51H21.78C20.6769 22.6627 19.2544 23.4593 17.6952 23.7974C16.1359 24.1355 14.5112 23.9996 13.0298 23.4072C11.5483 22.8149 10.2779 21.7931 9.38159 20.4732C8.48531 19.1532 8.00418 17.5955 8 16C8 15.7348 7.89464 15.4804 7.70711 15.2929C7.51957 15.1054 7.26522 15 7 15C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6.00529 17.9528 6.58222 19.8613 7.6596 21.49C8.73699 23.1187 10.2677 24.3964 12.0627 25.1652C13.8578 25.9341 15.8387 26.1605 17.761 25.8166C19.6833 25.4727 21.4628 24.5735 22.88 23.23V25C22.88 25.2652 22.9854 25.5196 23.1729 25.7071C23.3604 25.8946 23.6148 26 23.88 26C24.1452 26 24.3996 25.8946 24.5871 25.7071C24.7746 25.5196 24.88 25.2652 24.88 25V20.5C24.8775 20.2416 24.7752 19.9943 24.5943 19.8097C24.4135 19.6251 24.1683 19.5177 23.91 19.51ZM16 6C13.4364 6.00731 10.9735 6.99891 9.12 8.77V7C9.12 6.73478 9.01464 6.48043 8.82711 6.29289C8.63957 6.10536 8.38522 6 8.12 6C7.85478 6 7.60043 6.10536 7.41289 6.29289C7.22536 6.48043 7.12 6.73478 7.12 7V11.5C7.12 11.7652 7.22536 12.0196 7.41289 12.2071C7.60043 12.3946 7.85478 12.5 8.12 12.5H12.62C12.8852 12.5 13.1396 12.3946 13.3271 12.2071C13.5146 12.0196 13.62 11.7652 13.62 11.5C13.62 11.2348 13.5146 10.9804 13.3271 10.7929C13.1396 10.6054 12.8852 10.5 12.62 10.5H10.22C11.3225 9.34787 12.7441 8.5515 14.3024 8.21311C15.8607 7.87472 17.4846 8.00975 18.9656 8.60086C20.4466 9.19198 21.7172 10.2122 22.6142 11.5306C23.5113 12.849 23.9938 14.4054 24 16C24 16.2652 24.1054 16.5196 24.2929 16.7071C24.4804 16.8946 24.7348 17 25 17C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7362 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 17C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V13C17 12.7348 16.8946 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12C15.7348 12 15.4804 12.1054 15.2929 12.2929C15.1054 12.4804 15 12.7348 15 13V16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17Z"
                        fill="#5C0632"
                      />
                      <rect
                        x="14"
                        y="11"
                        width="4"
                        height="10"
                        fill="#FCF9FC"
                      />
                    </svg>

                    <div className="m-2 mt-2 mb-2 font-medium rounded-lg ai-div special-destination">
                      <label class="block text-[#4D4D4D] py-2 px-3 text-xs mb-2 pl-3 ">
                        To Where
                      </label>
                      <Select
                        classNames={"select-destination"}
                        noOptionsMessage={"No airport found"}
                        isSearchable={true}
                        menuIsOpen={false}
                        placeholder={<FlightLand />}
                        primaryColor={"sky"}
                        loading={false}
                        isClearable={false}
                        name={`destination.${index}`}
                        options={options}
                        value={data.destination}
                        onChange={(selectedOption) =>
                          handleSelectChange1(selectedOption, index)
                        }
                        getOptionValue={(option) => option.value.id}
                        getOptionLabel={(option) => option.label}
                      />
                    </div>

                    <AircraftInput
                      type="date"
                      name={`depatureDate`}
                      placeholder="Please Select Date"
                      labelText="Leaving On"
                      value={data.depatureDate}
                      id="id-3"
                      onClick={() => {}}
                      onChange={(e) => {
                        handleInputChange(e, index);
                      }}
                    />

                    <AircraftInput
                      type="time"
                      placeholder="Time"
                      name={`depatureTime`}
                      value={data.depatureTime}
                      labelText="Leaving Time"
                      id=""
                      onClick={() => {}}
                      onChange={(e) => {
                        handleInputChange(e, index);
                      }}
                    />
                    
                    {/* <div className="flex gap-4 pt-3">
                      <div className="">
                        <label
                          htmlFor="numPets"
                          className="text-xs font-medium"
                        >
                          Pets
                        </label>
                        <div className="flex items-center pt-2 border-t-2 border-t-gray-500">
                          <button
                            type="button"
                            className="h-4 pb-4 pl-2 focus:outline-none sign"
                            onClick={handleSubtractPet}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            id="numPets"
                            name={`numPets.${index}`}
                            className="w-12 h-6 text-center border-none outline-none"
                            value={numPets}
                            onChange={(e) => handleInputChange(e, index)}
                          />
                          <button
                            type="button"
                            className="h-4 pb-4 pr-2 focus:outline-none sign-left"
                            onClick={handleAddPet}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="numChildren"
                          className="text-xs font-medium"
                        >
                          Children
                        </label>
                        <div
                          className="flex items-center pt-2 border-t-2 border-t-gray-500 "
                        >
                          <button
                            type="button"
                            className="h-4 pb-4 pl-2 focus:outline-none sign"
                            onClick={handleSubtractChild}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            id="numChildren"
                            name="numChildren"
                            className="w-12 h-6 text-center border-none"
                            value={numChildren}
                            onChange={(e) => setNumChildren(e.target.value)}
                          />
                          <button
                            type="button"
                            className="h-4 pb-4 pr-2 focus:outline-none sign-left"
                            onClick={handleAddChild}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="numAdults"
                          className="text-xs font-medium"
                        >
                          Adults
                        </label>
                        <div className="flex items-center pt-2 border-t-2 border-t-gray-500">
                          <button
                            type="button"
                            className="h-4 pb-4 pl-2 focus:outline-none sign"
                            onClick={handleSubtractAdult}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            id="numAdults"
                            name="numAdults"
                            className="w-12 h-6 text-center border-none"
                            value={numAdults}
                            onChange={(e) => setNumAdults(e.target.value)}
                          />
                          <button
                            type="button"
                            className="h-4 pb-4 pr-2 focus:outline-none sign-left"
                            onClick={handleAddAdult}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div> */}
                    <div className="flex mt-4">
                      <div className="w-1/3 pr-2">
                        <label
                          className="block mb-2 text-xs font-medium"
                          htmlFor={`adults-${index}`}
                        >
                          Adults
                        </label>
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() =>
                              handlePassengersChange(
                                "adults",
                                index,
                                data.passengers.adults - 1
                              )
                            }
                            className="px-2 py-1 bg-gray-200 rounded-full"
                          >
                            -
                          </button>
                          <span className="mx-4">
                            {data?.passengers.adults}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              handlePassengersChange(
                                "adults",
                                index,
                                data.passengers.adults + 1
                              )
                            }
                            className="px-2 py-1 bg-gray-200 rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="w-1/3 px-2">
                        <label
                          className="block mb-2 text-xs font-medium"
                          htmlFor={`children-${index}`}
                        >
                          Children
                        </label>
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() =>
                              handlePassengersChange(
                                "children",
                                index,
                                data.passengers.children - 1
                              )
                            }
                            className="px-2 py-1 bg-gray-200 rounded-full"
                          >
                            -
                          </button>
                          <span className="mx-4">
                            {data?.passengers.children}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              handlePassengersChange(
                                "children",
                                index,
                                data.passengers.children + 1
                              )
                            }
                            className="px-2 py-1 bg-gray-200 rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="w-1/3 pl-2">
                        <label
                          className="block mb-2 text-xs font-medium"
                          htmlFor={`pets-${index}`}
                        >
                          Pets
                        </label>
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() =>
                              handlePassengersChange(
                                "pets",
                                index,
                                data.passengers.pets - 1
                              )
                            }
                            className="px-2 py-1 bg-gray-200 rounded-full"
                          >
                            -
                          </button>
                          <span className="mx-4">{data?.passengers.pets}</span>
                          <button
                            type="button"
                            onClick={() =>
                              handlePassengersChange(
                                "pets",
                                index,
                                data.passengers.pets + 1
                              )
                            }
                            className="px-2 py-1 bg-gray-200 rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {showReturnModal ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
                <div className="relative w-auto max-w-3xl mx-auto my-6">
                  {/*content*/}
                  <div className="relative w-4/5 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none passengers-modal">
                    {/*header*/}
                    <div className="flex items-start justify-between border-b border-solid rounded-t border-slate-200">
                      <h3 className="text-md font-semibold text-[#5c0632]">
                        Return Leg Details
                      </h3>

                      <button
                        className="float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none text-red close-modal focus:outline-none"
                        onClick={() => setShowReturnModal(false)}
                      >
                        <span className="text-black bg-[#fcf8f8] h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
              
                    <AircraftInput
                      type="date"
                      placeholder="Please Select Date"
                      labelText="Returning On"
                      name={`returningDate`}
                      value={data.returningDate}
                      id="id-4"
                      onClick={() => {}}
                      onChange={(e) => {
                        handleInputChange(e, index);
                      }}
                      hidden={oneWayTrip}
                    />

                    <AircraftInput
                      type="time"
                      placeholder="Time"
                      name={`returningTime`}
                      labelText="Returning Time"
                      value={data.returningTime}
                      id="id-5"
                      onClick={() => {}}
                      onChange={(e) => {
                        handleInputChange(e, index);
                      }}
                      hidden={oneWayTrip}
                    />
                    {/*footer*/}
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-rose-50 bg-opacity-30 backdrop-blur-200"></div>
            </>
          ) : null}
                </div>
              );
            })}
          
            <div className="flex justify-center pb-4 " id="add-fields-multi">
              {addReturnBtn && addReturnBtn === true ? (
                <button
                  type="button"
                  className="add-button"
                  onClick={() => {
                    setShowReturnModal(true);
                  }}
                >
                  <AddIcon /> Add Returning Details
                </button>
              ) : null}
              {addMoreBtn && addMoreBtn === true ? (
                <button
                  type="button"
                  className="add-button"
                  onClick={() => {
                    //subMultiBookForm();
                    handleAddForm();
                  }}
                >
                  <AddIcon /> Add more
                </button>
              ) : null}
            </div>
          </form>

          <div className="bg-white flex justify-end go-btn-div rounded-[20px] ">
            <button
              type="submit"
              class="py-3 space-y-0.5 px-6 mr-6 mb-4 text-sm font-medium go-btn text-[#961054] hover:text-white focus:outline-none hover:bg-[#961054] rounded-full border-2  border-[#961054]  bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5C0632] w-48"
              onClick={() => {
                subMultiBookForm();
              }}
            >
              <span className="mr-2"> Let's go</span>
              <SendIcon />
            </button>
          </div>
          {showModal ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
                <div className="relative w-auto max-w-3xl mx-auto my-6">
                  {/*content*/}
                  <div className="relative bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none passengers-modal">
                    {/*header*/}
                    <div className="flex items-start justify-between border-b border-solid rounded-t border-slate-200">
                      <h3 className="text-xl mb-2 font-semibold text-[#5c0632]">
                        Passengers
                      </h3>

                      <button
                        className="float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none text-red focus:outline-none"
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
                              onClick={() => handleDecrement(adults, setAdults)}
                              data-action="decrement"
                              class=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                            >
                              <span class="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input
                              type="text"
                              class="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold border-none text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                              name="custom-input-number"
                              value={adults}
                              readOnly
                            ></input>
                            <button
                              type="button"
                              data-action="increment"
                              onClick={() => handleIncrement(adults, setAdults)}
                              class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                            >
                              <span class="m-auto text-2xl font-thin">+</span>
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
                              <span class="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input
                              type="text"
                              class="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black border-none  md:text-basecursor-default flex items-center text-gray-700  outline-none"
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
                              <span class="m-auto text-2xl font-thin">+</span>
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
                              <span class="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input
                              type="text"
                              class="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none border-none"
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
                              <span class="m-auto text-2xl font-thin">+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-rose-50 bg-opacity-30 backdrop-blur-200"></div>
            </>
          ) : null}

        
        </div>
      </div>
      {/* {loading === true ? (
        <div className="w-full text-left font-Aeonik text-rgba(77,77,77,1) field-booking-loading ">
          <div>
            <div className="justify-center mb-12 ml-auto mr-auto bg-white border rounded rounded-lg 2xl:w-fit xl:w-fit lg:w-fit md:w-3/5 sm:w-full ">hello</div>
            <h1 className="flex justify-center text-center">
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
          <div class="flex items-center gap-2">
                <div class="bg-gray-200 border border-gray-200 w-16 h-5 animate-pulse"></div>
                <span class="bg-tertiary h-1 w-1 rounded animate-pulse"></span>
                <div class="bg-gray-200 border border-gray-200 w-16 h-5 animate-pulse"></div>
            </div>
        </div>
      ) : (
        <div className="bg-white w-full text-left font-Aeonik text-rgba(77,77,77,1)" >
          {flights && flights.length > 0 ? (
            <div className="">
              <h2 className="bg-[#ffffff] text-center text-[2em] pt-24">
                Empty Legs
              </h2>
              <Slide
                slidesToScroll={4}
                slidesToShow={4}
                indicators={false}
                responsive={responsiveSettings}
                canSwipe={true}
                duration={1000}
                transitionDuration={1000}
              >
                {flights?.map((data, i) => (
                  <a
                    href="#"
                    class="block rounded-lg p-4  m-10 group/item hover:bg-[#eeece18c] sfc transition overflow-hidden h-108"
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
                        data-aos="fade-up"
                        data-aos-duration="1000"

                        data-aos-easing="ease-in-sine"
                      />
                    </div>
                    <div className="mt-2 shared-flight-time">
                      <dl>
                        <div>
                          <dd class="text-white mt-2 shared-flight-time-date" >
                            Next Flight: 24th March 2023 at {data.arrival_time}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div class="mt-0">
                      <dl>
                        <div>
                          <dt class="sr-only">Address</dt>

                          <dd class="route">
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
            </div>
          ) : null}

        </div>
      )} */}
      <div className="bg-[#eeece1] pb-12">
        <div className="w-1/2 ml-auto mr-auto text-center aircraft-display">
          <h3
            className=" text-[2em] pt-12 "
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-easing="ease-out-sine"
          >
            Safety Accredited Aircrafts
          </h3>
          <p
            className="text-[1em] pt-6"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            We give you access to a safety & service accredited aircraft fleet
            for Jet Card and on-demand flights. As an Argus Certified Broker, we
            work to the highest industry standards of safety and best practice.
          </p>
        </div>
        <div
          className="justify-center w-10/12 pt-24 ml-auto mr-auto 2xl:grid-cols-3 2xl:grid xl:grid-cols-3 xl:grid lg:grid-cols-3 lg:grid md:grid-cols-3 md:grid md:flex"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {aircrafts.slice(0, 3).map((data, i) => (
            <div className="pl-8 pr-8">
              <AircraftCard item={data} />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="/aircraft"
            class="bg-[#5C0632] hover:bg-[#5C0632] hover:text-white border text-[#ffffff] font-bold py-3 px-6 rounded-full"
          >
            Explore And Find Aircrafts
          </a>
        </div>
      </div>
      <div className="bg-white">
        <div
          className="w-1/2 ml-auto mr-auto text-center"
          data-aos="1000"
          data-aos-duration="2000"
          data-aos-easing="ease-out-cubic"
        >
          <h3 className=" text-[2em] pt-12">We Fly You Anywhere. Any time</h3>
          <p className="text-[1em] pt-6">
            Swift Jets offers private flights between any global airports.
            Discover your closest private jet airports, see example pricing,
            destination facts & more.
          </p>
        </div>

        <div
          className="justify-center w-10/12 pt-24 ml-auto mr-auto 2xl:grid-cols-3 2xl:grid xl:grid-cols-3 xl:grid lg:grid-cols-3 lg:grid md:grid-cols-3 md:grid md:flex"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-cubic"
        >
          {teamData.slice(0, 3).map((data, i) => (
            <div className="pl-8 pr-8">
              <Card img={data.img} name={data.name} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="/destination"
            class="bg-[#5C0632] hover:bg-[#5C0632] hover:text-white border text-[#ffffff] font-bold py-3 px-6 rounded-full"
          >
            Explore All Destinations
          </a>
        
        </div>
        <div>
          
        </div>
         
      </div>
      <div className="mt-5">
      <Review/>
      </div>
     
      <ToastContainer />
    </>
  );
};

export default withRouter(FieldBooking);

// import React, { useState } from "react";
// import Select from "react-select";

// const MultiFlightForm = () => {
//   const [airports, setAirports] = useState(data);
//   const [trips, setTrips] = useState([
//     { from: "", to: "", departureDate: "", returnDate: "" },
//   ]);
//   const [addMoreBtn, setAddMoreBtn] = useState(false);
//   const [addReturnBtn, setAddReturnBtn] = useState(false);
//   const [tripType, setTripType] = useState("one-way");
//   const [errors, setErrors] = useState([]);

//   const handleAddTrip = () => {
//     setTrips([
//       ...trips,
//       { from: "", to: "", departureDate: "", returnDate: "" },
//     ]);
//   };

//   const handleTripTypeChange = (e) => {
//     setTripType(e.target.value);
//     setTrips([{ from: "", to: "", departureDate: "", returnDate: "" }]);
//     setErrors([]);
//   };

//   const validateForm = () => {
//     const newErrors = [];
//     trips.forEach((trip, index) => {
//       if (!trip.from || !trip.to || !trip.departureDate) {
//         newErrors.push(
//           `Trip ${index + 1}: Please fill in all required fields.`
//         );
//       }
//     });
//     setErrors(newErrors);
//     return newErrors.length === 0;
//   };

//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const newTrips = [...trips];
//     newTrips[index][name] = value;
//     setTrips(newTrips);
//   };

//   const handleSelectChange = (selectedOption, index, field) => {
//     const newTrips = [...trips];
//     newTrips[index][field] = selectedOption;
//     setTrips(newTrips);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log(trips);
//     }
//   };
//   const options = airports.map((item, i) => ({
//     label:
//       item.name +
//       " - " +
//       item.city +
//       " - " +
//       item.iata_code +
//       " - " +
//       item.country,
//     value: item,
//   }));
//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
//       <div className="my-4">
//         <label className="block mb-2 font-bold text-gray-700">Trip Type:</label>
//         <div className="relative inline-block w-64">
//           <select
//             className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
//             value={tripType}
//             onChange={handleTripTypeChange}
//           >
//             <option value="one-way">One-Way Trip</option>
//             <option value="round-trip">Round-Trip</option>
//             <option value="multi-city">Multi-City Trip</option>
//           </select>
//           <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
//             <svg
//               className="w-4 h-4 fill-current"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//               <path
//                 fillRule="evenodd"
//                 d="M18 10a8.944 0 0 0-.146-.277l-6-8a1.003 1.003 0 0 0-1.554 0l-6 8a1.003 1.003 0 0 0 .146 1.277l.083.083a1.003 1.003 0 0 0 1.277-.146L10 7.724l4.146 5.53a1.003 1.003 0 0 0 1.277.146l.083-.083a1.003 1.003 0 0 0 .146-1.277z"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//       {trips.map((trip, index) => (
//         <div key={index} className="p-4 mb-4 border border-gray-400 rounded">
//           <h2 className="mb-4 text-xl font-bold">Trip {index + 1}</h2>
//           <div className="mb-4">
//             <label className="block mb-2 font-bold text-gray-700">From:</label>
//             <Select
//               options={options}
//               value={trip.from}
//               onChange={(selectedOption) =>
//                 handleSelectChange(selectedOption, index, "from")
//               }
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-bold text-gray-700">To:</label>
//             <Select
//               options={options}
//               value={trip.to}
//               onChange={(selectedOption) =>
//                 handleSelectChange(selectedOption, index, "to")
//               }
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-bold text-gray-700">
//               Departure Date:
//             </label>
//             <input
//               className="w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
//               type="date"
//               name="departureDate"
//               value={trip.departureDate}
//               onChange={(e) => handleInputChange(e, index)}
//             />
//           </div>
//           {tripType === "round-trip" && (
//             <div className="mb-4">
//               <label className="block mb-2 font-bold text-gray-700">
//                 Return Date:
//               </label>
//               <input
//                 className="w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
//                 type="date"
//                 name="returnDate"
//                 value={trip.returnDate}
//                 onChange={(e) => handleInputChange(e, index)}
//               />
//             </div>
//           )}
//              <form id="flight-booking-form" autoComplete="off">

//                 <div>
//                   <div class="2xl:flex xl:flex  lg:flex  p-3" key={index}>
//                     <div className="m-2 mt-2 mb-2 font-medium rounded-lg ai-div">
//                       <label class="block text-[#4D4D4D] py-2 px-3 text-xs mb-2 pl-3">
//                         From Where
//                       </label>
//                       <Select
//                           options={options}
//                           value={trip.from}
//                           onChange={(selectedOption) =>
//                             handleSelectChange(selectedOption, index, "from")
//                           }
//                         className="truncate-select"

//                       />
//                     </div>
//                     <svg
//                       width="40"
//                       className="route-icon"
//                       height="40"
//                       viewBox="0 0 32 32"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect width="32" height="32" rx="16" fill="#FCF9FC" />
//                       <path
//                         d="M15.29 19.71C15.4299 19.851 15.6086 19.9472 15.8033 19.9863C15.9981 20.0253 16.2 20.0055 16.3835 19.9294C16.5669 19.8532 16.7235 19.7241 16.8333 19.5586C16.9431 19.3931 17.0012 19.1986 17 19C16.9963 18.7352 16.8927 18.4816 16.71 18.29C16.5694 18.1512 16.3908 18.0572 16.1968 18.0199C16.0028 17.9825 15.8021 18.0034 15.62 18.08C15.4972 18.1276 15.3851 18.199 15.29 18.29C15.1073 18.4816 15.0037 18.7352 15 19C14.9992 19.1316 15.0245 19.2621 15.0742 19.3839C15.124 19.5057 15.1973 19.6166 15.29 19.71ZM23.91 19.51H19.38C19.1148 19.51 18.8604 19.6154 18.6729 19.8029C18.4854 19.9904 18.38 20.2448 18.38 20.51C18.38 20.7752 18.4854 21.0296 18.6729 21.2171C18.8604 21.4046 19.1148 21.51 19.38 21.51H21.78C20.6769 22.6627 19.2544 23.4593 17.6952 23.7974C16.1359 24.1355 14.5112 23.9996 13.0298 23.4072C11.5483 22.8149 10.2779 21.7931 9.38159 20.4732C8.48531 19.1532 8.00418 17.5955 8 16C8 15.7348 7.89464 15.4804 7.70711 15.2929C7.51957 15.1054 7.26522 15 7 15C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6.00529 17.9528 6.58222 19.8613 7.6596 21.49C8.73699 23.1187 10.2677 24.3964 12.0627 25.1652C13.8578 25.9341 15.8387 26.1605 17.761 25.8166C19.6833 25.4727 21.4628 24.5735 22.88 23.23V25C22.88 25.2652 22.9854 25.5196 23.1729 25.7071C23.3604 25.8946 23.6148 26 23.88 26C24.1452 26 24.3996 25.8946 24.5871 25.7071C24.7746 25.5196 24.88 25.2652 24.88 25V20.5C24.8775 20.2416 24.7752 19.9943 24.5943 19.8097C24.4135 19.6251 24.1683 19.5177 23.91 19.51ZM16 6C13.4364 6.00731 10.9735 6.99891 9.12 8.77V7C9.12 6.73478 9.01464 6.48043 8.82711 6.29289C8.63957 6.10536 8.38522 6 8.12 6C7.85478 6 7.60043 6.10536 7.41289 6.29289C7.22536 6.48043 7.12 6.73478 7.12 7V11.5C7.12 11.7652 7.22536 12.0196 7.41289 12.2071C7.60043 12.3946 7.85478 12.5 8.12 12.5H12.62C12.8852 12.5 13.1396 12.3946 13.3271 12.2071C13.5146 12.0196 13.62 11.7652 13.62 11.5C13.62 11.2348 13.5146 10.9804 13.3271 10.7929C13.1396 10.6054 12.8852 10.5 12.62 10.5H10.22C11.3225 9.34787 12.7441 8.5515 14.3024 8.21311C15.8607 7.87472 17.4846 8.00975 18.9656 8.60086C20.4466 9.19198 21.7172 10.2122 22.6142 11.5306C23.5113 12.849 23.9938 14.4054 24 16C24 16.2652 24.1054 16.5196 24.2929 16.7071C24.4804 16.8946 24.7348 17 25 17C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7362 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 17C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V13C17 12.7348 16.8946 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12C15.7348 12 15.4804 12.1054 15.2929 12.2929C15.1054 12.4804 15 12.7348 15 13V16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17Z"
//                         fill="#5C0632"
//                       />
//                       <rect
//                         x="14"
//                         y="11"
//                         width="4"
//                         height="10"
//                         fill="#FCF9FC"
//                       />
//                     </svg>

//                     <div className="m-2 mt-2 mb-2 font-medium rounded-lg ai-div special-destination">
//                       <label class="block text-[#4D4D4D] py-2 px-3 text-xs mb-2 pl-3 ">
//                         To Where
//                       </label>
//                       <Select
//                         classNames={"select-destination"}
//                         options={options}
//                         value={trip.to}
//                         onChange={(selectedOption) =>
//                           handleSelectChange(selectedOption, index, "to")
//                         }
//                       />
//                     </div>

//                     <AircraftInput
//                       type="date"
//                       name={`formData[${index}].date`}
//                       placeholder="Please Select Date"
//                       labelText="Leaving On"
//                       id="id-3"
//                       onClick={() => {}}
//                       onChange={(e) => {
//                        // setDepatureDate(e.target.value);
//                       }}
//                     />

//                     <AircraftInput
//                       type="time"
//                       placeholder="Time"
//                       name={`formData[${index}].time`}
//                       labelText="Leaving Time"
//                       id=""
//                       onClick={() => {}}
//                       onChange={(e) => {
//                         //setDepatureTime(e.target.value);
//                       }}
//                     />

//                     <AircraftInput
//                       type="button"
//                       placeholder=""
//                       labelText="Passengers"
//                       value="1"
//                       id=""
//                       onClick={(e) => {
//                        // setShowModal(true);
//                       }}
//                       onChange={(e) => {
//                        // setPassengers(e.target.value);
//                       }}
//                       icon={<Person2 />}
//                     />
//                   </div>
//                 </div>

//             <div className="flex justify-center pb-4 " id="add-fields-multi">
//               {addReturnBtn && addReturnBtn === true ? (
//                 <button
//                   type="button"
//                   className="add-button"
//                   onClick={() => {
//                     //setShowReturnModal(true);
//                   }}
//                 >
//                   <AddIcon /> Add Returning Details
//                 </button>
//               ) : null}
//               {addMoreBtn && addMoreBtn === true ? (
//                 <button
//                   type="button"
//                   className="add-button"
//                   onClick={() => {
//                     //subMultiBookForm();
//                   //  handleAddForm();
//                   }}
//                 >
//                   <AddIcon /> Add more
//                 </button>
//               ) : null}
//             </div>
//           </form>
//         </div>
//       ))}
//       {errors.length > 0 && (
//         <div className="mb-4">
//           {errors.map((error) => (
//             <p key={error} className="mb-2 text-red-500">
//               {error}
//             </p>
//           ))}
//         </div>
//       )}
//       <button
//         className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
//         type="button"
//       //  onClick={handleAddTrip}
//       >
//         Add Another Trip
//       </button>
//       <button
//         className="px-4 py-2 ml-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
//         type="submit"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default MultiFlightForm;
