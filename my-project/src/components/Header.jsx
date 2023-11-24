import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logotwo.png";
import Categories from "./Categories";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <>
      <div className="flex mx-auto items-center justify-between max-w-6xl">
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="cursor-pointer w-52 transition-all ease-in-out hover:transform hover:scale-105"
        />
        <div className="flex mt-2 mb-2">
          <input
            type="text"
            placeholder="Search Products"
            className="bg-slate-600 w-96 py-1 px-1 flex-grow text-white outline-none rounded-l"
          />
          <button className="bg-yellow-600 px-10 py-2 cursor-pointer rounded-r">
            <IoSearch />{" "}
          </button>
        </div>
        <p className="text-slate-900 gap-3 flex items-center">
          <CiMail /> elvisojarikre21@gmail.com <LuPhone />
          <span className="text-yellow-600">+2348107193064</span>
        </p>
      </div>
      <div className="bg-yellow-600 border-b shadow-sm sticky top-0 z-40">
        <header className="flex justify-between items-center px-5 max-w-6xl mx-auto py-4">
          <span className="flex mx-auto items-center">
            <Categories />
          </span>
          <ul className="flex space-x-12 cursor-pointer">
            <li
              className={`transition duration-150 ease-in-out cursor-pointer text-sm font-semibold border-b-2 border-b-transparent hover:text-green-950 ${
                pathMatchRoute("/") && "border-b-slate-500 text-green-950"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`hover:text-green-950 transition duration-150 ease-in-out cursor-pointer text-sm font-semibold border-b-2 border-b-transparent ${
                pathMatchRoute("/about-us") &&
                "border-b-slate-500 text-green-950"
              }`}
              onClick={() => navigate("/about-us")}
            >
              About Us
            </li>
            <li
              className={`hover:text-green-950 transition duration-150 ease-in-out cursor-pointer text-sm font-semibold border-b-2 border-b-transparent ${
                pathMatchRoute("/products") &&
                "border-b-slate-500 text-green-950"
              }`}
              onClick={() => navigate("/products")}
            >
              Products
            </li>
            <li
              className={`hover:text-green-950 transition duration-150 ease-in-out cursor-pointer text-sm font-semibold border-b-2 border-b-transparent ${
                pathMatchRoute("/contact-us") &&
                "border-b-slate-500 text-green-950"
              }`}
              onClick={() => navigate("/contact-us")}
            >
              Contact Us
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}
