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
import ResetPassword from "./pages/reset-password/ForgetPassword"
import Bookingspage from "./pages/BookingPage/Bookingspage";
import Adminspage from "./pages/admin-page.js/Adminspage";
import Flight from "./components/admin-page/Flight";
import Contacts from "./components/admin-page/Contacts";
import Quotes from "./components/admin-page/Quotes";
import Addaircraft from "./components/admin-page/Add-aircraft";
import ScheduledTrip from "./components/admin-page/ScheduledTrip";
import Deals from "./components/admin-page/Deals";


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
      <Route path="/orders" component={Booking}></Route>
      <Route path="/reset-password" component={ResetPassword}></Route>
      <Route path="/Bookingspage" component={Bookingspage}></Route>
      <Route path="/Adminspage" component={Adminspage}></Route>
      <Route path="/Flight" component={Flight}></Route>
      <Route path="/Contacts" component={Contacts}></Route>
      <Route path="/Quotes" component={Quotes}></Route>
      <Route path="/Addaircraft" component={Addaircraft}></Route>
      <Route path="/ScheduledTrip" component={ScheduledTrip}></Route>
      <Route path="/Deals" component={Deals}></Route>
      
      



    </Switch>
  );
};

export default App;
