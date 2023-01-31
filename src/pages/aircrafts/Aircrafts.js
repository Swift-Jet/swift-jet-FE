import React, { useContext } from "react";
import Layout from "../../components/shared/layout/Layout";
import AircraftList from "../../components/aircraft-list/AircraftList";

const Aircraft = () => {
  return (
    <Layout>
      <AircraftList />
    </Layout>
  );
};

export default Aircraft;