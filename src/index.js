import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AirportsContextProvider from "./context/airport-context";
import BookingContextProvider from "./context/booking-context";
import AircraftsContextProvider from "./context/aircraft-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AirportsContextProvider>
      <AircraftsContextProvider>
        <BookingContextProvider>
          <App />
        </BookingContextProvider>
      </AircraftsContextProvider>
    </AirportsContextProvider>
  </BrowserRouter>
);

reportWebVitals();
