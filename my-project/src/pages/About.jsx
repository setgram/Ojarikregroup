import React from "react";
import about1Video from "../assets/ojavid.mp4"; // Replace with the actual video file path
import about2Video from "../assets/ojavid2.mp4"; // Replace with the actual video file path
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";

export default function About() {
  const videos = [about1Video, about2Video];

  return (
    <>
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-5 mt-10 mb-10 overflow-y-scroll">
        {" "}
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-cover bg-center h-60 md:w-[48.05%] p-10 transition-all ease-in-out hover:transform hover:scale-105 rounded relative"
          >
            <video
              className="w-full h-full object-cover rounded absolute"
              autoPlay
              loop
              muted
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2 className="text-5xl text-white relative z-10">
              {index === 0
                ? "RELIABLE"
                : index === 1
                ? "Consistent"
                : index === 2
                ? "Trust-Worthy"
                : "Quality"}
            </h2>
            <p className="text-lg text-yellow-500 relative z-10">
              Your One Stop Tools and Appliances Station
            </p>
          </div>
        ))}
      </section>
      <hr className="mt-5 mb-5" />
      <div className="max-w-6xl mx-auto text-justify">
        <h1 className="font-bold text-3xl md:text-4xl mb-5 text-center">
          About Us
        </h1>
        <p className="mb-10 text-sm md:text-base">
          Ojarikre Power tools and appliances station has been in business for
          over 30 years and counting, satisfying our customers with quality and
          efficient products. We pride ourselves as one of the sought-after
          tools and appliances stations nationwide. Contact us for any inquiries
          you may have we are happy to help you. To make an order, please
          explore our products page. Use the contact page to send us a message.
        </p>
      </div>
    </>
  );
}
