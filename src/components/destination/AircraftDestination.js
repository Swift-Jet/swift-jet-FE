import React, { useContext } from "react";
import "./aircraft-destination.css";
import Card from "../shared/aircraft-type-card/card";
import AircraftSharedBanner from "../shared/aircraft-shared-banner/AircraftSharedBanner";

const AircraftDestination = () => {
  return (
    <div className="font-[poppins]">
      <AircraftSharedBanner
        title="Destinations"
        banner_img_url="bg-[url('https://res.cloudinary.com/dzv98o7ds/image/upload/v1675067157/Frame_75_gcoxuj.png')]"
      />
      <div className="text-center m-auto flex justify-center mt-20 font-[poppins]">
        <p className="w-3/5 lg:text-[20px] leading-6 ac-stn-quote mt-5 text-justify lg:text-center font-[poppins]">
          Swift Jets has access to 1000+ private aircraft. Every aircraft and
          private jet operator is accredited for safety and VIP service levels.
          Our expert team can find the best available price for your private jet
          hire on the most suitable private aircraft. For private jet charter
          advice call +234 707 8965 234x
        </p>
      </div>
      <div className="justify-center mt-12 2xl:grid-cols-3 2xl:grid xl:grid-cols-3 xl:grid lg:grid-cols-3 lg:grid md:grid-cols-3 md:grid md:flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default AircraftDestination;