import React, { useContext, useState } from "react";
import { withRouter } from "react-router";
import "./single-aircraft.css";
import Card from "../shared/aircraft-type-card/card";
import AircraftSharedBanner from "../shared/aircraft-shared-banner/AircraftSharedBanner";
import AircraftBtn from "../shared/aircraft-shared-button/AircraftBtn";
import AircraftProperties from "../shared/aircraft-properties/AircraftProperties";
import { AircraftsContext } from "../../context/aircraft-context";
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
const SingleAircraft = ({ match }) => {
  const { id } = match.params;
  const { aircrafts } = useContext(AircraftsContext);
  const aircraft = aircrafts.filter((item) => {
    return item._id === id;
  });

  console.log("aircraft", aircraft, id);
  const [link, setLink] = useState("All");
  const [name, setName] = useState("Beech BE200 Super King Air");
  const [summary, setSummary] = useState(
    "The next generation of the highly successful King Air turboprops"
  );
  const [description, setDescription] = useState(
    aircraftTypes0bj[0].description
  );

  const toggleLinkText = (text, description) => {
    setLink(text);
    setDescription(description);
  };
  return (
    <div className="aircraft-details-head ">
      <div className=" aircraft-details-head-inner   mr-auto ml-24 w-3/5">
        <div>
          <div className="">
            <p className="text-black flex">
              Aircraft /{" "}
              <p className="px-1" onClick={() => {}}>
                {link} / {link}
              </p>{" "}
            </p>
            <p className="text-black ac-name flex text-[36px] font-['Poppins'] pt-4">
              {name}
            </p>
            <p className="text-black flex pt-4">{summary}</p>
          </div>

          <div className="pt-4 justify-start flex overflow-x-auto pb-3  ">
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
        <div className="columns-2 w-full flex mt-12">
          <div className="">
            <div className="">
              <img
                src={aircraft[0]?.image_url}
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                alt="main-img"
              />
            </div>

            <div class="">
              <div class="columns-4 w-full mt-12">
                <div>
                  <div>
                    {" "}
                    <div class="group relative">
                      <div class="w-full overflow-hidden rounded-md">
                        <img
                          src={aircraft[0]?.image_url_2}
                          alt="Front of men&#039;s Basic Tee in black."
                          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      {" "}
                      <div class="group relative">
                        <div class="w-full overflow-hidden rounded-md">
                          <img
                            src={aircraft[0]?.image_url_3}
                            alt="Front of men&#039;s Basic Tee in black."
                            class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      {" "}
                      <div class="group relative">
                        <div class="w-full overflow-hidden rounded-md">
                          <img
                            src={aircraft[0]?.image_url_4}
                            alt="Front of men&#039;s Basic Tee in black."
                            class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      {" "}
                      <div class="group relative">
                        <div class="w-full overflow-hidden rounded-md">
                          <img
                            src={aircraft[0]?.image_url_5}
                            alt="Front of men&#039;s Basic Tee in black."
                            class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
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
                    {aircraft[0]?.luggage_capacity} cu.ft.
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
                  <div className="font-semibold">{aircraft[0]?.speed} kts</div>
                </div>
                <div className="pt-4">
                  <div className="font-normal text-[13px]">INTERIOR HEIGHT</div>
                  <div className="font-semibold">
                    {aircraft[0]?.interior_height} m
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
                    {aircraft[0]?.interior_width} m
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

export default withRouter(SingleAircraft);
