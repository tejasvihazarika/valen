import React from "react";
import "./Gallery.css";
import p1 from "./p1.jpeg";
import p2 from "./p2.jpeg";
import p3 from "./p3.jpeg";
import p4 from "./p4.jpeg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Photo Gallery</h2>
      <div className="gallery">
        <img src={p1} alt="Image 1" />
        <img src={p2} alt="Image 2" />
        <img src={p3} alt="Image 3" />
        <img src={p4} alt="Image 4" />
      </div>
    </div>
  );
};

export default Gallery;