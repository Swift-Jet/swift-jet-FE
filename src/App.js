import React from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar, Carosuel } from "./components";
import AircraftCategory from "./pages/aircraft-category/AircraftCategory";
import Aircraft from "./pages/aircrafts/Aircrafts";
import Destination from "./pages/destination/Destination";
import HomePage from "./pages/home-page/HomePage";
import AircraftDetails from "./pages/aircraft-details/AircraftDetails";
import AircraftEstimate from "./pages/aircraft-estimate/AircraftEstimate";
import SignForm from "./components/signInlayout/SignForm";
import RegisterForm from "./pages/registration/Register";
import EstimateLayout from "./pages/EstimatedPrice/EstimstedPage";
import GoogleLoginForm from "./components/Login-Card/GoogleLoginForm";
import Booking from "./pages/booking/booking";


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/aircraft-category" component={AircraftCategory}></Route>
      <Route path="/aircraft" component={Aircraft}></Route>
      <Route path="/destination" component={Destination}></Route>
      <Route path="/aircraft-details/:id" component={AircraftDetails}></Route>
      <Route path="/aircraft-estimate" component={AircraftEstimate}></Route>
      <Route path="/signInlayout" component={SignForm}></Route>
      <Route path="/registration" component={RegisterForm}></Route>
      <Route path="/EstimatedPage" component={EstimateLayout}></Route>
      <Route path="/google" component={GoogleLoginForm}></Route>
      <Route path="/bookings" component={Booking}></Route>
    </Switch>
  );
};

export default App;
