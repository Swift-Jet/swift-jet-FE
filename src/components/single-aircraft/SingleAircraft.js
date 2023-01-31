import React, { useContext, useState } from "react";
import "./single-aircraft.css";
import Card from "../shared/aircraft-type-card/card";
import AircraftSharedBanner from "../shared/aircraft-shared-banner/AircraftSharedBanner";
import AircraftBtn from "../shared/aircraft-shared-button/AircraftBtn";
import AircraftProperties from "../shared/aircraft-properties/AircraftProperties";

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
    name: "Comfort & Size",
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
const SingleAircraft = () => {
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
    <div className="aircraft-details-head">
      <div>
        <div className="w-3/5 mr-auto ml-24">
          <p className="text-black flex">
            Aircraft /{" "}
            <p className="px-1" onClick={() => {}}>
              {link} / {link}
            </p>{" "}
          </p>
          <p className="text-black ac-name flex text-[36px] font-['Minion Pro'] pt-5">
            {name}
          </p>
          <p className="text-black flex pt-5">{summary}</p>
        </div>

        <div className="pt-4 justify-start flex ml-24 overflow-x-auto pb-3 w-3/5">
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
        <div className="w-3/5 ml-24">
          <div className="">
            <img
              src="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675091085/Frame_104_lq9pu4.png"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              alt="main-img"
            />
          </div>

          <div class="">
            <div class="columns-4 w-full mt-12">
              {aircraftTypes0bj.map((item, i) => (
                <div>
                  <div>
                    {" "}
                    <div class="group relative">
                      <div class="w-full overflow-hidden rounded-md">
                        <img
                          src="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675092054/Rectangle_132_1_x63obs.png"
                          alt="Front of men&#039;s Basic Tee in black."
                          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <AircraftProperties
              icon="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675100480/Vector_o7hscm.png"
              title="Overview Summary"
            />
            <div>
              <p className="mt-3">
                Step inside the next-generation Beechcraft King Air B200 and you
                are immediately steeped in a sense of awe. This is the aircraft
                that changed an industry and now stands alone as the most
                successful turbine-powered business aircraft model of all time.
                It earned this distinction by establishing and maintaining a
                tradition of engineering excellence and exceptional value. The
                King Air can often be cheaper for customers when compared to
                light jets on short routes. The aircraft does however fly very
                slightly slower. The King Air is a very versatile aircraft. It
                is used across the world by the military and also for medical
                excursion flights.
              </p>
            </div>
          </div>
          <div>
            <AircraftProperties
              icon="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675100480/Vector_o7hscm.png"
              title="Comfort & Size"
            />
            <p className="mt-3">
              Featuring enhancements like a Collins Pro Line 21® avionics
              package and the quietest cabin ever, the latest King Air B200
              offers greater capability, comfort and dependability than any
              other comparable airplane.
            </p>
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

          <div className="columns-3 bg-white p-5 justify-around flex">
            <div>
              <div className="pt-5">
                <div>Hello</div>
                <div>Hello</div>
              </div>
              <div className="pt-5">
                <div>Hello</div>
                <div>Hello</div>
              </div>
             <div className="pt-5">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </div>
            <div >
             <div className="pt-5">
                <div>Hello</div>
                <div>Hello</div>
              </div>
             <div className="pt-5">
                <div>Hello</div>
                <div>Hello</div>
              </div>
             <div className="pt-5">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </div>
            <div>
             <div className="pt-5">
                <div>Hello</div>
                <div>Hello</div>
              </div>
             <div className="pt-5">
                <div>Hello</div>
                <div>Hello</div>
              </div>
             <div className="pt-5">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default SingleAircraft;
