import React from "react";
import "../cardslider/cardslider.css"

function Gallery({aircraft_details}) {
  console.log("aircraft_details", aircraft_details);
  return (
<section class="gallery m-8 align-items-center">
  <div class="gallery__item">
    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src={aircraft_details?.image_url} alt=""/>
    <label for="img-1" class="gallery__thumb rounded-"><img className="rounded" src={aircraft_details?.image_url} alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src={aircraft_details?.image_url} alt=""/>
    <label for="img-2" class="gallery__thumb"><img className="rounded" src={aircraft_details?.image_url} alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src={aircraft_details?.image_url} alt=""/>
    <label for="img-3" class="gallery__thumb"><img className="rounded" src={aircraft_details?.image_url} alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src={aircraft_details?.image_url} alt=""/>
    <label for="img-4" class="gallery__thumb"><img className="rounded" src={aircraft_details?.image_url} alt=""/></label>
  </div>
</section>


  

  

  );
}

export default Gallery;