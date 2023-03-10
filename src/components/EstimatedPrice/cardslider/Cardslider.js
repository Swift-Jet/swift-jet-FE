import React from "react";
import "../cardslider/cardslider.css"

function Gallery() {
  return (
<section class="gallery m-8 align-items-center">
  <div class="gallery__item">
    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://img.freepik.com/free-photo/airplane-sunset_1150-8338.jpg?w=996&t=st=1676534763~exp=1676535363~hmac=983773bda9a337c3f97f81154a49c009394c41d8919fd28f156ed82da64dc332" alt=""/>
    <label for="img-1" class="gallery__thumb rounded-"><img className="rounded" src="https://img.freepik.com/free-photo/airplane-sunset_1150-8338.jpg?w=996&t=st=1676534763~exp=1676535363~hmac=983773bda9a337c3f97f81154a49c009394c41d8919fd28f156ed82da64dc332" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://img.freepik.com/free-photo/private-luxury-jet-airport-terminal_657883-449.jpg?w=900&t=st=1676534818~exp=1676535418~hmac=9869f2491ca35c50e1907a1b8ee8c329e211ae595343a12ed11226ed134db150" alt=""/>
    <label for="img-2" class="gallery__thumb"><img className="rounded" src="https://img.freepik.com/free-photo/private-luxury-jet-airport-terminal_657883-449.jpg?w=900&t=st=1676534818~exp=1676535418~hmac=9869f2491ca35c50e1907a1b8ee8c329e211ae595343a12ed11226ed134db150" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://img.freepik.com/free-photo/airplane-sunset_1150-8368.jpg?w=996&t=st=1676535000~exp=1676535600~hmac=2081b18e7d3e4b6830ac9536ad798fabd5df95b8186ae2e5287bb7c1f79ef55d" alt=""/>
    <label for="img-3" class="gallery__thumb"><img className="rounded" src="https://img.freepik.com/free-photo/airplane-sunset_1150-8368.jpg?w=996&t=st=1676535000~exp=1676535600~hmac=2081b18e7d3e4b6830ac9536ad798fabd5df95b8186ae2e5287bb7c1f79ef55d" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://img.freepik.com/free-photo/airplane-sunset_1150-8338.jpg?w=996&t=st=1676535166~exp=1676535766~hmac=516deea9b35288988675df3790fa804f6d05d1c229cb7daef47fcbd6a5255c53" alt=""/>
    <label for="img-4" class="gallery__thumb"><img className="rounded" src="https://img.freepik.com/free-photo/airplane-sunset_1150-8338.jpg?w=996&t=st=1676535166~exp=1676535766~hmac=516deea9b35288988675df3790fa804f6d05d1c229cb7daef47fcbd6a5255c53" alt=""/></label>
  </div>
</section>


  

  

  );
}

export default Gallery;