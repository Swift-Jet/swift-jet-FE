import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const BookingsContext = createContext();

const BookingsContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/booking/all`
      );
      setBookings(data?.data);
    }
    fetchData();
  }, [])

  return (
    <BookingsContext.Provider value={{ bookings }}>
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsContextProvider;
