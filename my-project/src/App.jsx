import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Appliances from "./pages/Appliances";
import PowerTools from "./pages/PowerTools";
import WeldingMachine from "./pages/WeldingMachine";
import Generators from "./pages/Generators";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/electronics" element={<Appliances />} />
        <Route path="/power-tools" element={<PowerTools />} />
        <Route path="/welding-machine" element={<WeldingMachine />} />
        <Route path="/generators" element={<Generators />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
