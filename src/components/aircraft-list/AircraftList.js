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
          {/* <p className="text-white flex mt-3 ">
            All Aircraft 
          </p> */}
          <div className="dropdown dropdown-end dropdown-hover">
            {/* <label
              tabIndex={0}
              className="bg-transparent text-white text-xs m-1 mt-3"
            >
              Filter Aircraft <TuneIcon />
            </label> */}
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
        <div className="mt-16  ml-auto mr-auto w-4/5">
          <p className="alh-desc-stn 2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full">
          Welcome to Swift Wings, where you'll find an exceptional fleet of state-of-the-art aircraft tailored to exceed all your jet service demands. Experience uncompromising elegance, versatility, and seamless connectivity with our diverse and modern jets, designed to elevate your flying experience. Your safety is our top priority, with rigorous maintenance and experienced pilots ensuring efficient and secure flights. We take pride in customizing your journey with personalized amenities and schedules. Choose from eco-friendly options, and enjoy global access to any destination. Trust our reliable reputation, and indulge in the luxury of choice as you book your personalized jet service. Contact us now to unlock a world of luxury and convenience, creating memories that last a lifetime.
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
