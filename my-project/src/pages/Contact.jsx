import React, { useState } from "react";
import banner from "../assets/banner.jpg";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitToWhatsApp = () => {
    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setFormError(true);
      return;
    }

    // Get the form data
    const { name, email, message } = formData;
    const whatsappLink = `https://wa.me/2348107193064?text=${encodeURIComponent(
      `Name: ${name} Email: ${email} Message: ${message}`
    )}`;

    // Open WhatsApp link in a new tab or window
    window.open(whatsappLink, "_blank");

    // Reset form and error state after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setFormError(false);
  };

  return (
    <>
      <img src={banner} alt="" className="h-44 w-full bg-contain" />

      <div className="max-w-6xl text-black mx-auto block lg:flex justify-between items-center  p-6 mt-9 mb-9">
        <div>
          <h1 className=" text-3xl font-bold mb-5">Get in touch</h1>
          <p>Contact</p>
          <p className="mb-5">Information</p>
          <p>No. 44 Cemetery Road</p>
          <p>Sapele</p>
          <p className="mb-5">Delta State</p>
          <p className="mb-5">Call Us: 08107193064</p>
          <p>We are open from Monday-Friday</p>
          <p className="mb-8">08:00am - 05:00pm</p>{" "}
          <p className="font-bold mb-3">Share on</p>
          <div className="flex gap-2 w-20 h-2 mb-9">
            <AiOutlineInstagram />
            <RiTwitterXFill />
            <FiFacebook />
            <CiLinkedin />
          </div>
        </div>

        <div className="border-none w-full h-full p-10 bg-yellow-600 rounded text-center">
          <form className="p-8">
            <input
              type="text"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              placeholder="Full Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              placeholder="Email address"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {formError && (
              <p className="text-red-500 text-sm mb-3">
                Please fill in all required fields.
              </p>
            )}
            <button
              onClick={() => submitToWhatsApp()}
              type="button"
              className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 border-1 border-solid text-white py-2 px-10 mx-auto rounded-[3px] mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
