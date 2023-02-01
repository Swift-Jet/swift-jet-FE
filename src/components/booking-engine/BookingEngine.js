import React from "react";
import AircraftInput from "../shared/aircraft-input/AircraftInput";

const BookingEngine = () => {
  return (
    <div class="mb-4">
      <AircraftInput
        type="text"
        placeholder="Destination"
        disabled="false"
        labelText="City"
        id="id-1"
        onClick={() => {}}
        onChange={() => {}}
        
      />
        <AircraftInput
        type="text"
        placeholder="Destination"
        disabled="false"
        labelText="City"
        id="id-2"
        onClick={() => {}}
        onChange={() => {}}
      />
        <AircraftInput
        type="text"
        placeholder="Destination"
        disabled="false"
        labelText="City"
        id="id-3"
        onClick={() => {}}
        onChange={() => {}}
      />
        <AircraftInput
        type="text"
        placeholder="Destination"
        disabled="false"
        labelText="City"
        id="id-4"
        onClick={() => {}}
        onChange={() => {}}
      />
    </div>
  );
};

export default BookingEngine;
