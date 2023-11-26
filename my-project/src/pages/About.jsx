import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";

export default function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around gap-5 mt-10 mb-10">
        {Array.from(Array(4).keys()).map((index) => (
          <div
            key={index}
            className="bg-cover bg-center h-60 md:w-[48.05%] p-10 transition-all ease-in-out hover:transform hover:scale-105 rounded"
            style={{ backgroundImage: `url(${about1})` }}
          >
            <h2 className="text-5xl text-white">
              {index === 0
                ? "RELIABLE"
                : index === 1
                ? "Consistent"
                : index === 2
                ? "Trust-Worthy"
                : "Quality"}
            </h2>
            <p className="text-lg text-yellow-500">
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
          over 30 years and counting. Satisfying our customers with quality and
          efficient products, we pride ourselves as one of the sought-after
          tools and appliances stations nationwide. Contact us for any inquiries
          you may have; we are happy to help you. To make an order, please
          explore our products page. Use the contact page to send us a message.
        </p>
      </div>
    </>
  );
}
