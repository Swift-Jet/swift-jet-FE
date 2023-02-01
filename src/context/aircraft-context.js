import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AircraftsContext = createContext();

const AircraftsContextProvider = ({ children }) => {
  const [aircrafts, setAircrafts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/airport/all`
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
