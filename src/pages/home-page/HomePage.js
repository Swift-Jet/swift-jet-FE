import React from "react";
import Layout from "../../components/shared/layout/Layout";
import { Carosuel } from "../../components";
import BookingEngine from "../../components/booking-engine/BookingEngine";

const HomePage = () => {
  return (
    <Layout>
      <Carosuel />
      {/* <BookingEngine /> */}
    </Layout>
  );
};

export default HomePage;
