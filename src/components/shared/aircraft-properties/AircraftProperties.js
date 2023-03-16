import React, { useContext } from "react";
import "./aircraft-properties.css";

const AircraftProperties = ({ title, icon }) => {
  return (
    <div className="flex bg-[#CDCDCD]  mt-4 p-3 rounded-lg">
      <div>
        <img src={icon} className="mr-3 mt-1" />
      </div>
      <div className="ac-props-header">{title}</div>
    </div>
  );
};

export default AircraftProperties;
