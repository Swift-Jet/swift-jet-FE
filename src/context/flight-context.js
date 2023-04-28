import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FlightsContext = createContext();

const FlightsContextProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/flight/all"
      );
      setFlights(data?.data);
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
