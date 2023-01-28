import React, { useRef, useState } from "react";

import image1 from "../image/image1.png";
import WELCOMEPAGE from "..//image/WELCOMEPAGE.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import FieldBooking from "./FieldBooking.js";

export default function App() {
  return (
    <div className="mt-2 slider-div">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            {" "}
            <img alt="" src={image1} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img alt="" src={WELCOMEPAGE} />
          </SwiperSlide>
        </Swiper>
      </Swiper>
      <FieldBooking />
    </div>
  );
}
