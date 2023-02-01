import LocationAndMapLocationPin1 from "./assets/LocationAndMapLocationPin1";
import React, { useState, useContext } from "react";
import BusinessCalendar from "./assets/BusinessCalendar";
import BusinessCalendar1 from "./assets/BusinessCalendar1";
import UsersAccount from "./assets/UsersAccount";
import LocationAndMapLocationPin from "./assets/LocationAndMapLocationPin";
import AircraftInput from "./shared/aircraft-input/AircraftInput";
import ListComponent from "./list-component/ListComponent";
import "./styles.css";
import { AircraftsContext } from "../context/aircraft-context";
import AircraftBtn from "./shared/aircraft-shared-button/AircraftBtn";
const FieldBooking = () => {
  const [showAircraft, setShowAircraft] = useState(true);
  const [showAircraftDest, setShowAircraftDest] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const { aircrafts } = useContext(AircraftsContext);

  const bookingType = [
    {
      id: 1,
      name: "One Way Trip",
      description:
        "Propeller Aircraft are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
    },
    {
      id: 2,
      name: "Two Way Trip",
      description:
        "Turboprop are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
    },
    {
      id: 3,
      name: "Round Trip",
      description:
        "Light Jet Aircraft are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
    },
  ];
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = aircrafts.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
      console.log("filteredResults", filteredResults);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <>
      <div className="w-full text-left font-Aeonik text-rgba(77,77,77,1) field-booking ">
        <div className="justify-between flex acb-icons overflow-x-auto w-2/5">
          {bookingType.map((item, i) => (
            <div>
              <div key={i}>
                {" "}
                <AircraftBtn btnText={item.name} />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white 2xl:w-fit xl:w-fit lg:w-fit md:w-3/5 sm:w-4/5 mr-auto ml-auto border rounded rounded-lg">
          <div class="2xl:flex xl:flex  lg:flex md:grid sm:grid p-3">
            <div>
              <AircraftInput
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
              />

              <div className="absolute">
                <ul
                  class="rounded overflow-hidden shadow-md w-64 h-96 overflow-y-auto"
                  hidden={showAircraft}
                >
                  {searchInput && searchInput.length > 1
                    ? filteredResults.map((item, i) => (
                        <div key={i}>
                          <li
                            class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
                            onClick={() => {
                              document.getElementById("id-1").value = item.name;
                              setShowAircraft(true);
                            }}
                          >
                            {item.name}
                          </li>
                        </div>
                      ))
                    : null}
                </ul>
              </div>
            </div>
            <div>
              <AircraftInput
                type="text"
                placeholder="City or Airport"
                labelText="To Where"
                id="id-2"
                onClick={() => {}}
                onChange={(e) => {
                  setShowAircraftDest(false);
                  setShowAircraft(true);
                  searchItems(e.target.value);
                }}
              />
              <div className="absolute">
                <ul
                  class="rounded overflow-hidden shadow-md w-64 h-96 overflow-y-auto"
                  hidden={showAircraftDest}
                >
                  {searchInput && searchInput.length > 1
                    ? filteredResults.map((item, i) => (
                        <div key={i}>
                          <li
                            class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
                            onClick={() => {
                              document.getElementById("id-2").value = item.name;
                              setShowAircraftDest(true);
                            }}
                          >
                            {item.name}
                          </li>
                        </div>
                      ))
                    : null}
                </ul>
              </div>
            </div>
            <div>
              <AircraftInput
                type="date"
                placeholder="Please Select Date"
                labelText="Leaving On"
                id="id-3"
                onClick={() => {}}
                onChange={() => {}}
              />
            </div>
            <div>
              <AircraftInput
                type="date"
                placeholder="Please Select Date"
                labelText="Returning On"
                id="id-4"
                onClick={() => {}}
                onChange={() => {}}
              />
            </div>
            <div>
              <AircraftInput
                type="text"
                placeholder="1 passenger"
                labelText="Passengers"
                id="id-4"
                onClick={() => {}}
                onChange={() => {}}
              />
            </div>
            <div>
              <AircraftInput
                type="text"
                placeholder="1 passenger"
                labelText="Passengers"
                id="id-4"
                onClick={() => {}}
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="bg-white flex justify-end rounded rounded-lg">
            <button
              type="button"
              class="py-4 px-10 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#5C0632] rounded-full border border-[#5C0632] hover:border-[#ffffff] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5C0632] w-48 ac-button"
            >
              Let's go
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FieldBooking;
