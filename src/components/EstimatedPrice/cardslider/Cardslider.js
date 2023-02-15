import React from "react";
import "../cardslider/cardslider.css"

function Gallery() {
  return (
<section class="gallery m-8">
  <div class="gallery__item">
    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675091085/Frame_104_lq9pu4.png" alt=""/>
    <label for="img-1" class="gallery__thumb"><img src="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675091085/Frame_104_lq9pu4.png" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675091085/Frame_104_lq9pu4.png" alt=""/>
    <label for="img-2" class="gallery__thumb"><img src="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675091085/Frame_104_lq9pu4.png" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675091085/Frame_104_lq9pu4.png" alt=""/>
    <label for="img-3" class="gallery__thumb"><img src="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675091085/Frame_104_lq9pu4.png" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675091085/Frame_104_lq9pu4.png" alt=""/>
    <label for="img-4" class="gallery__thumb"><img src="https://res.cloudinary.com/dzv98o7ds/image/upload/v1675091085/Frame_104_lq9pu4.png" alt=""/></label>
  </div>
</section>


  

  

  );
}

export default Gallery;