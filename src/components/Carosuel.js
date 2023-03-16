import React from "react";

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
      {/* <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
          <SwiperSlide>
            {" "}
            <img alt="" src={image1} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img alt="" src={WELCOMEPAGE} />
          </SwiperSlide>
        </Swiper>
      </Swiper> */}
      
            {/* <div class=" z-40 absolute m-20 max-w-xl text-center text-white sm:text-left">
                <h1 class="text-3xl font-extrabold sm:text-5xl">We Are The Best Host For The Journey</h1>
                  <p class=" max-w-lg sm:text-xl mt-3 sm:leading-relaxed">
                  We provide the best flying experience for you. We help you who want to travel privately to have easy access to private jet.
                </p>
            </div> */}   
      <FieldBooking />
    </div>
   
    
  );
}
