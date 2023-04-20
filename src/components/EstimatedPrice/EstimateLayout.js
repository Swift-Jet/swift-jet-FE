import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "./estimatelayout.css";
import Steps from "../stepper/Steps";
import Estimatecards from "./estimatecard/Estimatecards";
import { BookingContext } from "../../context/booking-context";
import { AircraftsContext } from "../../context/aircraft-context";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const EstimateLayout = () => {
  const booking = JSON.parse(localStorage.getItem("bookingDetails"));
  const [bookDetails, setBookDetails] = useState(booking);
  const [filteredResults, setFilteredResults] = useState([]);
  const history = useHistory();
  const { aircrafts } = useContext(AircraftsContext);

  return (
    <div className="mx-auto font-[Poppins]">
      <section className="section bg-[#eeece1]">
        <div className=" mx-auto flex items-start">
          <div class="rounded-md w-full flight-title">
            {/* <ol class="list-reset flex">
                            <li><a href="#" class="text-blue-600 hover:text-blue-700">Flight</a></li>
                            <li><span class="text-gray-500 mx-2">/</span></li>
                            <li class="text-gray-500">{bookDetails?.tripType}</li>
                        </ol> */}
            <button
              class="text-rose-900 button-2  border-1 item-center border-rose-900   rounded-full outline-none focus:outline-none  ease-linear transition-all duration-150 "
              type="button"
              onClick={() => {
                history.push(JSON.parse(localStorage.getItem("prevpath")));
                localStorage.removeItem("prevpath");
              }}
            >
              <KeyboardBackspaceIcon /> 
            </button>
            <div className="mt-10">
              <div className="">
                <h1 className="text-2xl font-bold text-rose-900">
                  Estimated Price For Your Flight
                </h1>
              </div>
              {/* <div className="mt-10">
                                <Steps />
                            </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-rose-900">
                <div className="flex flex-col sm:flex-row justify-between recommend-stn">
                    <div className="px-0 text-xs md:text-xl lg:text-xl lg: px-10 text-white m-3 ">
                        We Recommend
                    </div>
                 
                </div>
            </section> */}
      <section>
        <Estimatecards
          booking_details={bookDetails}
          aircraft_details={aircrafts}
        />
      </section>
    </div>
  );
};

export default EstimateLayout;
