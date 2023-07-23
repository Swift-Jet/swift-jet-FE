import React, { useContext, useState } from "react";
import { withRouter } from "react-router";
import "./single-aircraft.css";
import Card from "../shared/aircraft-type-card/card";
import AircraftSharedBanner from "../shared/aircraft-shared-banner/AircraftSharedBanner";
import AircraftBtn from "../shared/aircraft-shared-button/AircraftBtn";
import AircraftProperties from "../shared/aircraft-properties/AircraftProperties";
import { AircraftsContext } from "../../context/aircraft-context";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const aircraftTypes0bj = [
  {
    id: 1,
    name: "Gallery",
    description:
      "Propeller Aircraft are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
  },
  {
    id: 2,
    name: "Overview",
    description:
      "Turboprop are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
  },
  {
    id: 3,
    name: "Comfort",
    description:
      "Light Jet Aircraft are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
  },
  {
    id: 4,
    name: "Specifications",

    description:
      "Propeller Aircraft are the most economical choice for short to mid-range trips. While operating in and out of regional airports with short runways, propeller aircraft can cruise at speeds of 300 knots and non-stop ranges of about 1,500 miles, with an average flight duration of approximately 3 hours.",
  },
];
const SingleAircraftOverLay = ({ match }) => {
  let { id } = match.params;
  if(!id){
    id = JSON.parse(localStorage.getItem("aircract-id"));
  }
  const { aircrafts } = useContext(AircraftsContext);
  const aircraft = aircrafts.filter((item) => {
    return item._id === id;
  });


  const [link, setLink] = useState("All");
  const [name, setName] = useState("Beech BE200 Super King Air");
  const [summary, setSummary] = useState(
    "The next generation of the highly successful King Air turboprops"
  );
  const [description, setDescription] = useState(
    aircraftTypes0bj[0].description
  );


  return (
    <div className="p-2">
      <div className="w-full">
        <div>
          <div className="">
            <p className="text-black ac-name flex text-[26px] pb-4">
              {aircraft[0]?.model}
            </p>

          </div>
        </div>
        <div className="columns-2 w-full flex">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <img
                  src={aircraft[0]?.image_url}
                  className="h-full w-full rounded-3xl object-cover object-center lg:h-full lg:w-full lg:transform lg:hover:scale-110"
                  alt="Image 1"
                />
              </div>
              <div>
                <img
                  src={aircraft[0]?.image_url_2}
                  className="h-full w-full rounded-3xl object-cover object-center lg:h-full lg:w-full lg:transform lg:hover:scale-110"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-20 mt-10">
              <div>
                <img
                  src={aircraft[0]?.image_url_3}
                  className="h-full w-full rounded-3xl object-cover object-center lg:h-full lg:w-full lg:transform lg:hover:scale-110"
                  alt="Image 1"
                />
              </div>
              <div>
                <img
                  src={aircraft[0]?.image_url_4}
                  className="h-full w-full rounded-3xl object-cover object-center lg:h-full lg:w-full lg:transform lg:hover:scale-110"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="mt-10">
              <AircraftProperties
                icon="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675100480/Vector_o7hscm.png"
                title="Overview Summary"
              />
              <div>
                <p className="mt-3">{aircraft[0]?.overview_summary}</p>
              </div>
            </div>
            <div>
              <AircraftProperties
                icon="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675100480/Vector_o7hscm.png"
                title="Comfort & Size"
              />
              <p className="mt-3">{aircraft[0]?.overview_summary}</p>
              <div>
                <p></p>
              </div>
            </div>
            <div>
              <AircraftProperties
                icon="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675100480/Vector_o7hscm.png"
                title="Specifications"
              />
              <div>
                <p></p>
              </div>
            </div>

            <div className="bg-white pb-12 pt-4 justify-around flex mt-4 rounded-lg sa-props">
              <div>
                <div className="pt-4">
                  <div className="font-normal text-[13px]">MANUFACTURER</div>
                  <div className="font-semibold">
                    {aircraft[0]?.manufacturer}
                  </div>
                </div>
                <div className="pt-4">
                  <div className="font-normal text-[13px]">SEATS</div>
                  <div className="font-semibold">
                    {aircraft[0]?.no_of_seats}
                  </div>
                </div>
                <div className="pt-4">
                  <div className="font-normal text-[13px]">
                    LUGGAGE CAPACITY
                  </div>
                  <div className="font-semibold">
                    {aircraft[0]?.luggage_capacity}
                  </div>
                </div>
              </div>
              <div>
                <div className="pt-4">
                  <div className="font-normal text-[13px]">MODEL</div>
                  <div className="font-semibold">{aircraft[0]?.model}</div>
                </div>
                <div className="pt-4">
                  <div className="font-normal text-[13px]">SPEED</div>
                  <div className="font-semibold">{aircraft[0]?.speed}</div>
                </div>
                <div className="pt-4">
                  <div className="font-normal text-[13px]">INTERIOR HEIGHT</div>
                  <div className="font-semibold">
                    {aircraft[0]?.interior_height}
                  </div>
                </div>
              </div>
              <div>
                <div className="pt-4">
                  <div className="font-normal text-[13px]">CLASSIFICATION</div>
                  <div className="font-semibold">
                    {aircraft[0]?.classification}
                  </div>
                </div>
                <div className="pt-4">
                  <div className="font-normal text-[13px]">RANGE</div>
                  <div className="font-semibold">{aircraft[0]?.range} nm</div>
                </div>

                <div className="pt-4">
                  <div className="font-normal text-[13px]">INTERIOR WIDTH</div>
                  <div className="font-semibold">
                    {aircraft[0]?.interior_width}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=""></div>

        </div>
      </div>
    </div>
  );
};

export default withRouter(SingleAircraftOverLay);
