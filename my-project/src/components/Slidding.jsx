import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Slidding.css";

import imageone from "../assets/hero.jpg";
import imagetwo from "../assets/herotwo.jpg";
import imagethree from "../assets/herothree.jpg";
import imagefour from "../assets/herofour.jpg";
import imagefive from "../assets/herofive.jpg";
import imagesix from "../assets/herosix.jpg";
export default function Slidding() {
  return (
    <Splide
      options={{
        type: "fade",
        autoplay: true,
        interval: 3000,
        perPage: 1,
        pagination: true,
        arrows: true,
        pauseOnHover: false,
        autoplayResetOnResume: true,
      }}
    >
      <SplideSlide className="transition duration-150 ease-in-out">
        <img
          src={imageone}
          alt="Slide 1"
          className="bg-cover bg-no-repeat w-full h-[500px] overflow-hidden bg-center"
        />
      </SplideSlide>
      <SplideSlide className="transition duration-150 ease-in-out">
        <img
          src={imagetwo}
          alt="Slide 2"
          className="bg-cover bg-no-repeat w-full h-[500px] overflow-hidden bg-center"
        />
      </SplideSlide>
      <SplideSlide className="transition duration-150 ease-in-out">
        <img
          src={imagethree}
          alt="Slide 3"
          className="bg-cover bg-no-repeat w-full h-[500px] overflow-hidden bg-center"
        />
      </SplideSlide>
      <SplideSlide className="transition duration-150 ease-in-out">
        <img
          src={imagefour}
          alt="Slide 4"
          className="bg-cover bg-no-repeat w-full h-[500px] overflow-hidden bg-center"
        />
      </SplideSlide>
      <SplideSlide className="transition duration-150 ease-in-out">
        <img
          src={imagefive}
          alt="Slide 5"
          className="bg-cover bg-no-repeat w-full h-[500px] overflow-hidden bg-center"
        />
      </SplideSlide>
      <SplideSlide className="transition duration-150 ease-in-out">
        <img
          src={imagesix}
          alt="Slide 6"
          className="bg-cover bg-no-repeat w-full h-[500px] overflow-hidden bg-center"
        />
      </SplideSlide>
    </Splide>
  );
}
