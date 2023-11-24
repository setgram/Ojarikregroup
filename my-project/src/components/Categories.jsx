import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <label
          htmlFor="Category"
          className="cursor-pointer text-lg font-semibold mr-3"
        >
          Select a category:
        </label>
        <select
          name="Category"
          id="Category"
          className="bg-slate-600  text-white px-4 py-2"
        >
          <option value="" onClick={() => navigate("/")}></option>
          <option value="" onClick={() => navigate("power-tools")}>
            Power Tools
          </option>
          <option value="" onClick={() => navigate("welding-machine")}>
            Welding Machines
          </option>
          <option value="" onClick={() => navigate("generators")}>
            Generators
          </option>
          <option value="" onClick={() => navigate("/appliances")}>
            Appliances
          </option>
        </select>
      </div>
    </>
  );
}
