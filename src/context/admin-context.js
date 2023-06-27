import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SummaryContext = createContext();

const SummaryContextProvider = ({ children }) => {
  const [summary, setSummary] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://swift-jet-backend.onrender.com/api/v1/admin/summary`
      );
      setSummary(data?.data);
    }
    fetchData();
   
  }, []);
  return (
    <SummaryContext.Provider value={{ summary }}>
      {children}
    </SummaryContext.Provider>
  );
};

export default SummaryContextProvider;
