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
const FieldBooking = () => {
  const [showAircraft, setShowAircraft] = useState(true);
  const [showAircraftDest, setShowAircraftDest] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [oneWayTrip, setOneWayTrip] = useState(true);
  const [sourceAirport, setSourceAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [tripType, setTripType] = useState("One way Trip");
  const [passengers, setPassengers] = useState("");
  const [depatureDate, setDepatureDate] = useState("");
  const [returningDate, setReturningDate] = useState("");
  const [depatureTime, setDepatureTime] = useState("");
  const [returningTime, setReturningTime] = useState("");

  const { airports } = useContext(AirportsContext);
  const history = useHistory();

  const bookingDetails = {
    tripType,
    sourceAirport,
    destinationAirport,
    passengers,
    depatureDate,
    returningDate,
    depatureTime,
    returningTime,
  };
  let form_no = 1;

  

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = airports.filter((item) => {
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

  return (
    <>
      <div className="w-full text-left font-Aeonik text-rgba(77,77,77,1) field-booking ">
        <div className="justify-between flex acb-icons overflow-x-auto w-2/5">
          <AircraftBtn
            btnText="One way trip"
            toggleText={() => {
              setOneWayTrip(true);
              setTripType("One way Trip");
            }}
          />
          <AircraftBtn
            btnText="Round Trip"
            toggleText={() => {
              setOneWayTrip(false);
              setTripType("Round Trip");
            }}
          />
          <AircraftBtn
            btnText="Multi-city Trip"
            toggleText={() => {
              setOneWayTrip(false);
              setTripType("Multi-city Trip");
            }}
          />
        </div>
        <div className="bg-white 2xl:w-fit xl:w-fit lg:w-fit md:w-3/5 sm:w-4/5 mr-auto ml-auto border rounded rounded-lg mb-12">
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
                            class="text-xs cursor-pointer px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-600 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
                            onClick={() => {
                              document.getElementById("id-1").value = item.name;
                              setShowAircraft(true);
                              setSourceAirport(item.name);
                            }}
                          >
                            {item.name} ({item.country_code}) / {item.icao_code}{" "}
                            / {item.iata_code}
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
                              setDestinationAirport(item.name);
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
                onChange={(e) => {
                  setDepatureDate(e.target.value);
                }}
              />
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
          <div className="bg-white flex justify-end rounded rounded-lg">
            <button
              type="button"
              class="py-4 px-10 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#5C0632] rounded-full border border-[#5C0632] hover:border-[#ffffff] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5C0632] w-48 ac-button"
              onClick={() => {
                localStorage.setItem(
                  "bookingDetails",
                  JSON.stringify(bookingDetails)
                );

                history.push("/aircraft-estimate");
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
