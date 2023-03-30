import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AirportsContext = createContext();

const AirportsContextProvider = ({ children }) => {
  const [airports, setAirports] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://swift-jet-backend.onrender.com/api/v1/airport/all`
      );
      setAirports(data?.data);
      console.log("data", data);
    
    }
    fetchData();
   
  }, []);
  return (
    <AirportsContext.Provider value={{ airports }}>
      {children}
    </AirportsContext.Provider>
  );
};

export default AirportsContextProvider;
