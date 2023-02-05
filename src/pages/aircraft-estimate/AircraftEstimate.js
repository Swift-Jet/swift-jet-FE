import React, { useContext } from "react";
import Layout from "../../components/shared/layout/Layout";
import EstimateCost from "../../components/estimate-cost/EstimateCost";

const AircraftEstimate = () => {
  return (
    <Layout>
      <EstimateCost />
    </Layout>
  );
};

export default AircraftEstimate;