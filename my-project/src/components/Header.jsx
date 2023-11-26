// ... (previous imports)

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logotwo.png";
import Categories from "./Categories";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = (route) => {
    return route === location.pathname;
  };

  return (
    <div>
      <div className="flex mx-auto items-center justify-between max-w-6xl p-4">
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="cursor-pointer w-52 transition-all ease-in-out hover:transform hover:scale-105"
        />

        <p className="hidden lg:flex text-slate-900 gap-3 items-center">
          <CiMail /> elvisojarikre21@gmail.com <LuPhone />
          <span className="text-yellow-600">+2348107193064</span>
        </p>
      </div>
      <div className="bg-yellow-600 border-b shadow-sm sticky top-0 z-40">
        <header className="flex justify-between items-center px-5 max-w-6xl mx-auto py-4">
          <span className="flex mx-auto items-center">
            <Categories />
          </span>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <GiCancel className="h-6 w-6" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div
            className={`md:flex items-center space-x-5 ${
              isMobileMenuOpen ? "flex-col" : "hidden"
            } md:absolute top-0 right-0 md:static bg-yellow-600 py-3 md:bg-transparent`}
          >
            <ul
              className={`flex flex-col md:flex-row space-x-5 cursor-pointer items-center mt-3 mr-4 ${
                isMobileMenuOpen ? "md:items-start" : ""
              }`}
            >
              <li
                className={`transition duration-150 ease-in-out cursor-pointer text-sm font-semibold border-b-2 border-b-transparent hover:text-green-950 ${
                  pathMatchRoute("/") && "border-b-slate-500 text-green-950"
                }`}
                onClick={() => {
                  navigate("/");
                  closeMobileMenu();
                }}
              >
                Home
              </li>
              <li
                className={`hover:text-green-950 transition duration-150 ease-in-out cursor-pointer text-sm font-semibold border-b-2 border-b-transparent ${
                  pathMatchRoute("/about-us") &&
                  "border-b-slate-500 text-green-950"
                }`}
                onClick={() => {
                  navigate("/about-us");
                  closeMobileMenu();
                }}
              >
                About Us
              </li>
              <li
                className={`hover:text-green-950 transition duration-150 ease-in-out cursor-pointer text-sm font-semibold border-b-2 border-b-transparent ${
                  pathMatchRoute("/products") &&
                  "border-b-slate-500 text-green-950"
                }`}
                onClick={() => {
                  navigate("/products");
                  closeMobileMenu();
                }}
              >
                Products
              </li>
              <li
                className={`hover:text-green-950 transition duration-150 ease-in-out cursor-pointer text-sm font-semibold border-b-2 border-b-transparent ${
                  pathMatchRoute("/contact-us") &&
                  "border-b-slate-500 text-green-950"
                }`}
                onClick={() => {
                  navigate("/contact-us");
                  closeMobileMenu();
                }}
              >
                Contact Us
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}
