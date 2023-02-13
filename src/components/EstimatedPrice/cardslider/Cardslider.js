// src/component/Gallery.js
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { images } from './Gallery';
import "../cardslider/cardslider.css"

function Gallery() {
  return (
    <div className="app mr-10">
      <div className="image-gallery-wrapper w-3/4">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default Gallery