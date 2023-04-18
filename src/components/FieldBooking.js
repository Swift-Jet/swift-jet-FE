import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import AircraftInput from "./shared/aircraft-input/AircraftInput";
import "./styles.css";
import { AirportsContext } from "../context/airport-context";
import AircraftCard from "./shared/aircraft-type-card/aircraft-card";
import { AircraftsContext } from "../context/aircraft-context";
import AircraftBtn from "./shared/aircraft-shared-button/AircraftBtn";
import { useHistory } from "react-router-dom";
import Card from "./shared/aircraft-type-card/card";
import data from "./data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-tailwindcss-select";
import "react-datalist-input/dist/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const FieldBooking = () => {
  const [enableBtn, setEnableBtn] = useState(true);

  const [loading, setLoading] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [showModal, setShowModal] = React.useState(false);

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
  const [passengers, setPassengers] = useState("");
  const [depatureDate, setDepatureDate] = useState("");
  const [returningDate, setReturningDate] = useState("");
  const [depatureTime, setDepatureTime] = useState("");
  const [returningTime, setReturningTime] = useState("");
  const [inputFields, setInputFields] = useState([{ name: "" }]);
  const [bookingArr, setBookingArr] = useState([]);
  const [addMoreBtn, setAddMoreBtn] = useState(false);
  const [airports, setAirports] = useState(data);

  const history = useHistory();
  let filteredData;
  let valid = false;

  const toastMsg = (message) => toast(message);
  const viewAddMoreBtn = () => {
    setAddMoreBtn(true);
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
  const hideAddMoreBtn = () => {
    setAddMoreBtn(false);
  };
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

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      filteredData = airports.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }
  };

  // const addFields = () => {
  //   let newfield = { name: "" };
  //   setInputFields([...inputFields, newfield]);
  // };

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

  const validateForm = () => {
    if (tripType == "One way Trip") {
      if (
        sourceAirport == "" ||
        destinationAirport == "" ||
        depatureDate == "" ||
        depatureTime == "" ||
        passengers == ""
      ) {
        toastMsg("Please fill all fields one");
        valid = false;
      } else valid = true;
    } else if (tripType == "Round Trip") {
      if (
        sourceAirport == "" ||
        destinationAirport == "" ||
        depatureDate == "" ||
        depatureTime == "" ||
        returningDate == "" ||
        returningTime == "" ||
        passengers == ""
      ) {
        toastMsg("Please fill all fields two");
        valid = false;
      } else valid = true;
    } else if (tripType == "Multi-city Trip") {
      if (
        sourceAirport == "" ||
        destinationAirport == "" ||
        depatureDate == "" ||
        depatureTime == "" ||
        passengers == ""
      ) {
        console.log(bookingDetails, valid, "valid");
        toastMsg("Please fill all fields three");
        valid = false;
      } else valid = true;
    }
  };
  const submitBookingInfo = (formType) => {
    validateForm();
    if (valid) {
      if (formType == "multi") {
        storeBookingInfo();
      } else
        localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
      history.push("/EstimatedPage");
    }
  };

  const subMultiBookForm = () => {
    validateForm();
    if (valid) {
      storeBookingInfo();
      resetBookingForm();
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full text-left font-Aeonik text-rgba(77,77,77,1) field-booking ">
        <div className="justify-between flex acb-icons overflow-x-auto w-2/5">
          <AircraftBtn
            btnText="One way trip"
            toggleText={() => {
              setOneWayTrip(true);
              setTripType("One way Trip");
              hideAddMoreBtn();
              localStorage.removeItem("bookingDetails");
            }}
          />
          <AircraftBtn
            btnText="Round Trip"
            toggleText={() => {
              setOneWayTrip(false);
              setTripType("Round Trip");
              hideAddMoreBtn();
              localStorage.removeItem("bookingDetails");
            }}
          />
          <AircraftBtn
            btnText="Multi-city Trip"
            toggleText={() => {
              setOneWayTrip(true);
              setTripType("Multi-city Trip");
              viewAddMoreBtn();
              localStorage.removeItem("bookingDetails");
            }}
          />
        </div>

        <div className="bg-white 2xl:w-4/5 xl:w-4/5 lg:w-fit md:w-3/5 sm:w-4/5 mr-auto ml-auto border rounded rounded-lg mb-12">
          {bookingArr.map((data, i) => {
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
          })}
          <form id="flight-booking-form" autoComplete="off">
            {inputFields.map((input, index) => {
              return (
                <div>
                  <div
                    class="2xl:flex xl:flex  lg:flex md:grid sm:grid p-3"
                    key={index}
                  >
                
                      {/* <AircraftInput
                        type="text"
                        placeholder="City or Airport"
                        labelText="From Where"
                        id="id-1"
                        onClick={() => {}}
                        onChange={(e) => {
                          setShowAircraft(false);
                          setShowAircraftDest(true);
                          searchItems(e.target.value);
                        }}
                      /> */}

                      <div className="mt-2 mb-2 ai-div rounded-lg m-2">
                        <label class="block text-[#5c0632] py-2 px-3 text-sm mb-2 pl-3 font-semibold">
                          Hello
                        </label>
                        <Select
                          className="truncate-select"
                          value={sourceAirport}
                          noOptionsMessage={"No airport found"}
                          isSearchable={true}
                          menuIsOpen={false}
                          placeholder={"Origin"}
                          primaryColor={"sky"}
                          isClearable={false}
                          onChange={handleOrigin}
                          options={options}
                        />
                      </div>
                      <div className="mt-2 mb-2 ai-div rounded-lg m-2">
                      <label class="block text-[#5c0632] py-2 px-3 text-sm mb-2 pl-3 font-semibold">
                          Hello
                        </label>
                        <Select
                          classNames={"select-destination"}
                          noOptionsMessage={"No airport found"}
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
                    

                  
                      <AircraftInput
                        type="date"
                        placeholder="Please Select Date"
                        labelText="Leaving On"
                        id="id-3"
                        onClick={() => {}}
                        onChange={(e) => {
                          setDepatureDate(e.target.value);
                        }}
                      />
                   
                      <AircraftInput
                        type="time"
                        placeholder="Time"
                        labelText="Leaving Time"
                        id="id-4"
                        onClick={() => {}}
                        onChange={(e) => {
                          setDepatureTime(e.target.value);
                        }}
                      />
                
                      <AircraftInput
                        type="date"
                        placeholder="Please Select Date"
                        labelText="Returning On"
                        id="id-4"
                        onClick={() => {}}
                        onChange={(e) => {
                          setReturningDate(e.target.value);
                        }}
                        hidden={oneWayTrip}
                      />
                    
                    
                      <AircraftInput
                        type="time"
                        placeholder="Time"
                        labelText="Returning Time"
                        id="id-4"
                        onClick={() => {}}
                        onChange={(e) => {
                          setReturningTime(e.target.value);
                        }}
                        hidden={oneWayTrip}
                      />
                  
            
                      <AircraftInput
                        type="text"
                        placeholder="1"
                        labelText="Passengers"
                        id="id-4"
                        onClick={(e) => {}}
                        onChange={(e) => {
                          setPassengers(e.target.value);
                        }}
                      />
            
                  </div>
                </div>
              );
            })}
            <div
              className="justify-end flex text-end pr-8 pb-4"
              id="add-fields-multi"
            >
              {addMoreBtn && addMoreBtn === true ? (
                <button
                  type="button"
                  onClick={() => {
                    subMultiBookForm();
                  }}
                >
                  Add more
                </button>
              ) : null}
            </div>
          </form>

          <div className="bg-white flex justify-end rounded rounded-lg">
            <button
              type="submit"
              class="py-4 px-10 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#5C0632] rounded-full border border-[#5C0632] hover:border-[#ffffff] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5C0632] w-48 ac-button"
              onClick={() => {
                submitBookingInfo("multi");
              }}
            >
              Let's go
            </button>
          </div>
        </div>
        <div className="bg-[#eeece1] pb-12">
          <div className="w-1/2 mr-auto ml-auto text-center">
            <h3 className=" text-[2em] pt-12">Safety Accredited Aircrafts</h3>
            <p className="text-[1em] pt-6">
              We give you access to a safety & service accredited aircraft fleet
              for Jet Card and on-demand flights. As an Argus Certified Broker,
              we work to the highest industry standards of safety and best
              practice.
            </p>
          </div>
          <div className="2xl:grid-cols-3 2xl:grid xl:grid-cols-3 xl:grid lg:grid-cols-3 lg:grid md:grid-cols-3 md:grid pt-24 justify-center md:flex w-10/12 mr-auto ml-auto">
            <AircraftCard />
            <AircraftCard />
            <AircraftCard />
          </div>
          <div className="flex justify-center">
            <button class="bg-[#5C0632] hover:bg-[#5C0632] hover:text-white border text-[#ffffff] font-bold py-3 px-6 rounded-full">
              Explore And Find Aircrafts
            </button>
          </div>
        </div>
        <div className="">
          <div className="w-1/2 mr-auto ml-auto text-center">
            <h3 className=" text-[2em] pt-12">Safety Accredited Aircrafts</h3>
            <p className="text-[1em] pt-6">
              We give you access to a safety & service accredited aircraft fleet
              for Jet Card and on-demand flights. As an Argus Certified Broker,
              we work to the highest industry standards of safety and best
              practice.
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
    </>
  );
};

export default withRouter(FieldBooking);
