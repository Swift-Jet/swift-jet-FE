import React, { useContext } from "react";
import ViewBookings from "../../components/bookings/ViewBookings";
import Layout from "../../components/shared/layout/Layout";

const Booking = () => {
  return (
    <Layout>
      <ViewBookings />
    </Layout>
  );
};

export default Booking;