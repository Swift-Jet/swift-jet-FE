import React, { useState, useContext } from "react";
import "./aircraft-list.css";
import AircraftCard from "../shared/aircraft-type-card/aircraft-card";
import AircraftBtn from "../shared/aircraft-shared-button/AircraftBtn";
import { AircraftsContext } from "../../context/aircraft-context";
import TuneIcon from "@mui/icons-material/Tune";

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
  const { aircrafts } = useContext(AircraftsContext);
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
      <div className="aircraft-list-head ">
        <div className="alh-links justify-between flex w-4/5">
          <p className="text-white flex">
            Aircraft /{" "}
            <p className="px-1" onClick={() => {}}>
              {link}
            </p>{" "}
          </p>
          <div className="dropdown dropdown-end dropdown-hover">
            <label
              tabIndex={0}
              className="bg-transparent text-white text-xs m-1"
            >
              Filter Aircraft <TuneIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white "
            >
              {aircraftTypes0bj.map((item, i) => (
                <div>
                  <div>
                    <li className="hover:bg-[#ececec] hover:text-white">
                      <a className="text-black text-xs hover:text-white">{item.name}</a>
                    </li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mt-24  ml-auto mr-auto w-4/5">
          <h2 className="pb-3 text-[#5C0632] text-[2rem] text-bold alh-title">
            {link}
          </h2>
          <p className="alh-desc-stn 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full">
            {description}
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3 ml-auto mr-auto w-4/5">
          {aircrafts.map((data, i) => (
            <AircraftCard item={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AircraftList;
