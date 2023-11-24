import React from "react";
import logo from "../assets/logotwo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#100B20] text-white p-16 block lg:flex justify-between text-justify space-y-4 lg:space-y-0">
        <div>
          <img src={logo} alt="" className="mb-5" />
          <p>
            Ojarikre Group is a multinational company that deals on tools <br />
            for construction and as well appliances. Excellent is our watch
            word. <br />
            We have been in business for over 30 years and counting.{" "}
          </p>
          <br />
          <p>
            Terms of Use{" "}
            <div className="w-1 h-7 bg-purple-900 inline-block"></div> Privacy
            Policy
          </p>
        </div>
        <div>
          <h1 className="text-2xl text-[#D434FE] font-bold mb-3">
            Useful Links
          </h1>
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Products</li>
            </a>
            <a href="#">
              <li>FAQs</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
          </ul>
          <div className="flex items-center gap-1">
            <h2 className="text-xl font-bold text-[#D434FE]">Follow us</h2>
            <div className="flex gap-2 w-20 h-2">
              <AiOutlineInstagram />
              <RiTwitterXFill />
              <FiFacebook />
              <CiLinkedin />
            </div>
          </div>
        </div>
        <br />
        <div>
          <h1 className="text-2xl text-[#D434FE] font-bold">Contact Us</h1>
          <br />
          <div className="flex gap-4 items-center">
            <BsFillTelephoneFill />
            <p>+234 8107193064</p>
          </div>
          <br />

          <div className="flex gap-4">
            <CiLocationOn />
            <p>
              No. 44 Cemetery Road <br />
              Off Ogodo Rd Junction <br />
              Sapele Delta State
            </p>
            <p>
              NDDC Road, Amukpe <br />
              Sapele <br />
              Delta State
            </p>
          </div>
        </div>
      </footer>
      <p className="text-center p-5">All rights reserved. © ojarikre group.</p>
    </div>
  );
}
