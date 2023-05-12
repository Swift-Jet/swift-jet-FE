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
import ResetPassword from "./pages/reset-password/ForgetPassword";
import Bookingspage from "./pages/BookingPage/Bookingspage";
import Adminspage from "./pages/admin-page.js/Adminspage";
import ContactPage from "./pages/contact-page/ContactPage";
import ServicesPage from "./pages/services/ServicesPage";
import FrequentQuestionsPage from "./pages/frequent-page/FrequentPage";
import Aboutuspage from "./pages/about-us/Aboutuspage";
import Medicalpage from "./pages/Medical-Evac/medicalpage"
import Cateringpage from "./pages/Catering-Serivce/Cateringpage";
import UserProfile from "./components/profile/user-profile";
import Contacts from "./components/admin-page/Contacts";
import Flight from "./components/admin-page/Flight";
import Deals from "./components/admin-page/Deals";
import Quotes from "./components/admin-page/Quotes";
import ScheduledTrip from "./components/admin-page/ScheduledTrip";
import Addaircraft from "./components/admin-page/Add-aircraft";

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
      <Route path="/services" component={ServicesPage}></Route>
      <Route path="/contact" component={ContactPage}></Route>
      <Route path="/faq" component={FrequentQuestionsPage}></Route>
      <Route path="/Aboutuspage" component={Aboutuspage}></Route>
      <Route path="/Medicalpage" component={Medicalpage}></Route>
      <Route path="/Cateringpage" component={Cateringpage}></Route>
      <Route path="/UserProfile" component={UserProfile}></Route>
      <Route path="/Addaircraft" component={Addaircraft}></Route>
      <Route path="/Flight" component={Flight}></Route>
      <Route path="/Quotes" component={Quotes}></Route>
      <Route path="/ScheduledTrip" component={ScheduledTrip}></Route>
       <Route path="/Deals" component={Deals}></Route>
      <Route path="/Contacts" component={Contacts}></Route> 

    </Switch>
  );
};

export default App;
