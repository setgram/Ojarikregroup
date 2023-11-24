import React from "react";
import slideone from "../assets/slideone.jpg";
import slidetwo from "../assets/slidetwo.jpg";
import slidethree from "../assets/slidethree.jpg";
import slidefour from "../assets/slidefour.jpg";
import slidefive from "../assets/slidefive.jpg";
import slidesix from "../assets/slidesix.jpg";
import slideseven from "../assets/slideseven.jpg";
import slideeight from "../assets/slideeight.jpg";
import slidenine from "../assets/slidenine.jpg";
import slideten from "../assets/slidenine.jpg";

import "./ImageSlider.css";

export default function ImageSlider() {
  return (
    <>
      <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 mt-10">
        <h2 className="text-lg text-center font-semibold mx-4">
          Explore Our Offerings Today
        </h2>
      </div>{" "}
      <div className="moving-image-container">
        <img src={slideone} alt="Moving Image" className="moving-image" />
        <img src={slidetwo} alt="Moving Image" className="moving-image" />
        <img src={slideten} alt="Moving Image" className="moving-image" />
        <img src={slidefour} alt="Moving Image" className="moving-image" />
        <img src={slidefive} alt="Moving Image" className="moving-image" />
        <img src={slidesix} alt="Moving Image" className="moving-image" />
        <img src={slideseven} alt="Moving Image" className="moving-image" />
        <img src={slideeight} alt="Moving Image" className="moving-image" />
        <img src={slidenine} alt="Moving Image" className="moving-image" />
        <img src={slidethree} alt="Moving Image" className="moving-image" />
      </div>
    </>
  );
}
