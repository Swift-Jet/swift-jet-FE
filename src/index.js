import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AirportsContextProvider from "./context/airport-context";
import BookingContextProvider from "./context/booking-context";
import AircraftsContextProvider from "./context/aircraft-context";
import FlightsContextProvider from "./context/flight-context";
import SummaryContextProvider from "./context/admin-context";

import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="868391289862-k9jn1r61o982h5jq7q04t1gd1tr8semb.apps.googleusercontent.com">
      <SummaryContextProvider>
        <FlightsContextProvider>
          <AirportsContextProvider>
            <AircraftsContextProvider>
              <BookingContextProvider>
                <App />
              </BookingContextProvider>
            </AircraftsContextProvider>
          </AirportsContextProvider>
        </FlightsContextProvider>
      </SummaryContextProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
);

reportWebVitals();
