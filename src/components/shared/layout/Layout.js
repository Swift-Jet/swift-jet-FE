import React from "react";
import NavBar from "../../NavBar";

const Layout = ({ children }) => {
  return (
    <div className=" md:container md:mx-auto ">
      <NavBar />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
