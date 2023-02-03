import React from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar, Carosuel } from "./components";
import AircraftCategory from "./pages/aircraft-category/AircraftCategory";
import HomePage from "./pages/home-page/HomePage";
<<<<<<< Updated upstream
=======
import AircraftDetails from "./pages/aircraft-details/AircraftDetails";
import SignForm from "./components/signInlayout/SignForm";
import RegisterForm from "./pages/registration/Register";


>>>>>>> Stashed changes

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
<<<<<<< Updated upstream
      <Route path="/aircraft" component={AircraftCategory}></Route>
=======
      <Route path="/aircraft-category" component={AircraftCategory}></Route>{" "}
      <Route path="/aircraft" component={Aircraft}></Route>
      <Route path="/destination" component={Destination}></Route>
      <Route path="/aircraft-details/1" component={AircraftDetails}></Route>
      <Route path="/signInlayout" component={SignForm}></Route>
      <Route path="/registration" component={RegisterForm}></Route>
      
  
     
      
>>>>>>> Stashed changes
    </Switch>
  );
};

export default App;
