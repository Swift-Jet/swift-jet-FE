import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FlightsContext = createContext();

const FlightsContextProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://swift-jet-backend.onrender.com/api/v1/flight/all"
      );
      setFlights(data?.data);
      console.log("data?.data", data?.data);
    }

    fetchData();
  }, []);
  return (
    <FlightsContext.Provider value={{ flights }}>
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsContextProvider;
