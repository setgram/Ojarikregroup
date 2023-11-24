import React from "react";

import banner from "../assets/bannerone.jpg";
import imageone from "../assets/slideeight.jpg";
import imagetwo from "../assets/slidenine.jpg";
import imagethree from "../assets/slidesix.jpg";

export default function Products() {
  return (
    <>
      <div className="max-w-6xl mx-auto items-center">
        <img
          src={banner}
          alt="banner"
          className="bg-cover bg-no-repeat w-full h-64"
        />
        <div>
          <h2 className="text-center text-3xl font-bold mt-5 mb-5">
            FEATURE PRODUCTS
          </h2>
          <div className="flex space-x-16">
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img
                src={imageone}
                alt=""
                className="w-full h-full rounded-lg "
              />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img
                src={imagetwo}
                alt=""
                className="w-full h-full rounded-lg "
              />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img
                src={imagethree}
                alt=""
                className="w-full h-full rounded-lg "
              />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
          </div>
          <div className="flex space-x-16">
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
          </div>
          <div className="flex space-x-16">
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
          </div>
          <div className="flex space-x-16">
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
          </div>
          <div className="flex space-x-16">
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
          </div>
          <div className="flex space-x-16">
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
            <div className="h-60 w-60 p-5 rounded-lg bg-slate-400 mb-7">
              <img src={banner} alt="" className="w-full h-full rounded-lg " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
