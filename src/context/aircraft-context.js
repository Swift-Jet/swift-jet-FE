import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AircraftsContext = createContext();

const AircraftsContextProvider = ({ children }) => {
  const [aircrafts, setAircrafts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://swift-jet-backend-staging.onrender.com/api/v1/aircraft/all`
      );
      setAircrafts(data?.data);
    }
    fetchData();
  }, []);
  return (
    <AircraftsContext.Provider value={{ aircrafts }}>
      {children}
    </AircraftsContext.Provider>
  );
};

export default AircraftsContextProvider;
