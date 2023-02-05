import React, { createContext, useReducer } from "react";

export const BookingContext = createContext();

const booking = localStorage.getItem("bookingDetails")
  ? JSON.parse(localStorage.getItem("bookingDetails"))
  : [];

const bookingDetails = {
  booking,
};

const BookingContextProvider = ({ children }) => {
  return (
    <BookingContext.Provider value={bookingDetails}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
