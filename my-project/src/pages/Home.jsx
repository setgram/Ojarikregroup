import React from "react";
import Slidding from "../components/Slidding";
import sectionone from "../assets/sectionone.jpg";
import sectiontwo from "../assets/sectiontwo.jpg";
import ImageSlider from "../components/ImageSlider";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Slidding />
      <section className="max-w-6xl mx-auto justify-around flex gap-5">
        <div
          className="bg-cover bg-center h-60 w-[96.1] mt-10 pt-10 px-10 transition-all ease-in-out hover:transform hover:scale-105 rounded"
          style={{ backgroundImage: `url(${sectionone})` }}
        >
          <h2 className="text-5xl text-white text-right">Drilling Machine</h2>
          <p className="text-lg text-left text-yellow-500">
            Your One Stop Tools and Appliances Station
          </p>
          <button className="p-3 bg-yellow-600 text-white rounded-full mt-5 hover:bg-green-500 hover:text-black">
            Learn More
          </button>
        </div>
        <div
          className="bg-cover bg-center h-60 w-[96.1] mt-10 pt-10 px-10  transition-all ease-in-out hover:transform hover:scale-105 rounded
          "
          style={{ backgroundImage: `url(${sectiontwo})` }}
        >
          <h2 className="text-5xl text-white">Handy Man Tools</h2>
          <p className="text-lg text-yellow-500">
            Your One Stop Tools and Appliances Station
          </p>
          <button className="p-3 bg-yellow-600 text-white rounded-full mt-5 hover:bg-green-500 hover:text-black">
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
