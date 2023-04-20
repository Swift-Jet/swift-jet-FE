import { FlightClass, FlightTakeoffOutlined } from "@mui/icons-material";
import React from "react";
import "./aircraft-input.css";

const AircraftInput = ({
  type,
  placeholder,
  disabled,
  labelText,
  id,
  onChange,
  icon,
  onClick,
  hidden,
  name,
  value,
  required,
}) => {
  return (
    <div
      class="bg-white border-[#5c0632]-400 border rounded-lg m-2 ai-div"
      hidden={hidden}
      id={id}
    >
      <label class="block text-[#4D4D4D] py-2 px-3 text-xs mb-2 pl-3 font-medium">
        {labelText}
      </label>
      <div className="flex py-2 px-3">
        <input
          class="text-start p-0 appearance-none border border-white rounded-lg w-full text-gray-700 leading-tight focus:outline-none focus:border-white focus:shadow-outline bg-white text-[13px] acb-input"
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          onClick={onClick}
          value={value}
          onChange={onChange}
          name={name}
        />

      
        {icon}
      
      </div>
    </div>
  );
};

export default AircraftInput;
