import React from "react";
import { useNavigate } from "react-router-dom";

import Slidding from "../components/Slidding";
import sectionone from "../assets/sectionone.jpg";
import sectiontwo from "../assets/sectiontwo.jpg";
import ImageSlider from "../components/ImageSlider";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Slidding />
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around gap-5 mt-10">
        <div
          className="bg-cover bg-center h-60 md:w-[48%] mt-10 pt-10 px-10 transition-all ease-in-out hover:transform hover:scale-105 rounded"
          style={{ backgroundImage: `url(${sectionone})` }}
        >
          <h2 className="text-3xl text-white text-left">Drilling Machine</h2>
          <p className="text-lg text-left text-yellow-500">
            Your One Stop Tools and Appliances Station
          </p>
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="p-3 cursor-pointer bg-yellow-600 text-white rounded-full mt-5 hover:bg-green-500 hover:text-black"
          >
            Learn More
          </button>
        </div>
        <div
          className="bg-cover bg-center h-60 md:w-[48%] mt-10 pt-10 px-10 transition-all ease-in-out hover:transform hover:scale-105 rounded"
          style={{ backgroundImage: `url(${sectiontwo})` }}
        >
          <h2 className="text-3xl text-white">Handy Man Tools</h2>
          <p className="text-lg text-yellow-500">
            Your One Stop Tools and Appliances Station
          </p>
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="p-3 cursor-pointer bg-yellow-600 text-white rounded-full mt-5 hover:bg-green-500 hover:text-black"
          >
            Learn More
          </button>
        </div>{" "}
      </section>
      <section>
        <ImageSlider />
      </section>
      <section>
        <NewsLetter />
      </section>
    </>
  );
}
