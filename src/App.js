import React from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar, Carosuel } from "./components";
import AircraftCategory from "./pages/aircraft-category/AircraftCategory";
import HomePage from "./pages/home-page/HomePage";
// import AircraftDetails from "./pages/aircraft-details/AircraftDetails";
import SignForm from "./components/signInlayout/SignForm";
import RegisterForm from "./pages/registration/Register";

const App = () => {
  return (
    <Switch>
      <Route path="/aircraft" component={AircraftCategory}></Route>
      <Route path="/aircraft-category" component={AircraftCategory}></Route>{" "}
      {/* <Route path="/aircraft-details/1" component={AircraftDetails}></Route> */}
      <Route path="/signInlayout" component={SignForm}></Route>
      <Route path="/registration" component={RegisterForm}></Route>
      
</Switch>
     

  );
};

export default App;
