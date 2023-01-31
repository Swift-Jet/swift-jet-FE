import React, { useContext } from "react";
import Layout from "../../components/shared/layout/Layout";
import SingleAircraft from "../../components/single-aircraft/SingleAircraft";

const AircraftDetails = () => {
  return (
    <Layout>
      <SingleAircraft />
    </Layout>
  );
};

export default AircraftDetails;