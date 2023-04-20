import React from "react";
import NavBar from "../../NavBar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <NavBar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
