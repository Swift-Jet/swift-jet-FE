import React from "react";
import './aircraft-input.css';

const AircraftInput = ({
  type,
  placeholder,
  disabled,
  labelText,
  id,
  onChange,
  onClick,
  hidden,
  name,
  required
}) => {
  return (
    <div class="bg-white border-[#5c0632]-400 border rounded-lg m-2 ai-div" hidden={hidden}>
      <label class="block text-[#5c0632] py-2 px-3 text-sm mb-2 pl-3 font-semibold">
        {labelText}
      </label>
      <input
        class=" appearance-none border border-white rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onClick={onClick}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default AircraftInput;
