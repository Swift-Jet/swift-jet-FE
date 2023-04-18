import React, { useState, useContext } from "react";
import "./aircraft-list.css";
import AircraftCard from "../shared/aircraft-type-card/aircraft-card";
import AircraftBtn from "../shared/aircraft-shared-button/AircraftBtn";
import { AircraftsContext } from "../../context/aircraft-context";

const aircraftTypes0bj = [
  {
    id: 1,
    name: "All",
    description:
      "Propeller Aircraft are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
  },
  {
    id: 2,
    name: "Turboprop",
    description:
      "Turboprop are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
  },
  {
    id: 3,
    name: "Light Jet",
    description:
      "Light Jet Aircraft are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
  },
  {
    id: 4,
    name: "Heavy Jet",

    description:
      "Propeller Aircraft are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
  },
  {
    id: 5,
    name: "Super Midsize Jet",
    description:
      "Propeller Aircraft are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
  },
  {
    id: 6,
    name: "Airliner",
    description:
      "Propeller Aircraft are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
  },
];

const AircraftList = () => {
  const {aircrafts} = useContext(AircraftsContext);
  console.log("air craft", aircrafts);

  const [link, setLink] = useState("All");
  const [description, setDescription] = useState(
    aircraftTypes0bj[0].description
  );

  const toggleLinkText = (text, description) => {
    setLink(text);
    setDescription(description);
  };
  return (
    <div>
      <div className="aircraft-list-head">
        <div className="alh-links w-4/5">
          <p className="text-white flex">
            Aircraft /{" "}
            <p className="px-1" onClick={() => {}}>
              {link}
            </p>{" "}
          </p>
        </div>

        <div className="pt-4 justify-between flex alh-icons overflow-x-auto pb-3 w-4/5">
          {aircraftTypes0bj.map((item, i) => (
            <div>
              <div>
                {" "}
                <AircraftBtn
                  btnText={item.name}
                  toggleText={() => {
                    toggleLinkText(item.name, item.description);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="pt-3 alh-desc">
          <h2 className="pb-3 text-[#5C0632] text-[2rem] text-bold alh-title">
            {link}
          </h2>
          <p className="alh-desc-stn 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full">
            {description}
          </p>
        </div>
        <div className="2xl:grid-cols-4 2xl:grid xl:grid-cols-4 xl:grid lg:grid-cols-4 lg:grid md:grid-cols-4 md:grid  mt-12 justify-center md:flex ac-card-div">
          {aircrafts.map((data, i) => (
            <AircraftCard item={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AircraftList;
