import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Reset category selection when navigating away from category pages
    if (!location.pathname.includes(selectedCategory)) {
      setSelectedCategory("");
    }
  }, [location.pathname, selectedCategory]);

  const handleCategoryChange = (event) => {
    const newSelectedCategory = event.target.value;

    // Navigate only if a new category is selected
    if (newSelectedCategory !== selectedCategory) {
      setSelectedCategory(newSelectedCategory);

      switch (newSelectedCategory) {
        case "power-tools":
          navigate("/power-tools");
          break;
        case "welding-machine":
          navigate("/welding-machine");
          break;
        case "generators":
          navigate("/generators");
          break;
        case "electronics":
          navigate("/electronics");
          break;
        default:
          navigate("/");
      }
    }
  };

  return (
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
        className="bg-slate-600 text-white px-4 py-2"
        onChange={handleCategoryChange}
        value={selectedCategory}
      >
        <option value="">Select a category</option>
        <option value="power-tools">Power Tools</option>
        <option value="welding-machine">Welding Machines</option>
        <option value="generators">Generators</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
}
