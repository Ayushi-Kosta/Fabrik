import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import Home from "./pages/Home";
import Model1 from "./pages/Model1";
import Model2 from "./pages/Model2";
import Model3 from "./pages/Model3";
import Model4 from "./pages/Model4";
import Model6 from "./pages/Model6";
import Model7 from "./pages/Model7";
import Model8 from "./pages/Model8";
import Model9 from "./pages/Model9";
import Model12 from "./pages/Model12";
import Model13 from "./pages/Model13";
import Model17 from "./pages/Model17";

export default function List() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="Model1" element={<Model1/>} />
        <Route path="Model2" element={<Model2/>} />
        <Route path="Model3" element={<Model3/>} />
        <Route path="Model4" element={<Model4/>} />
        <Route path="Model6" element={<Model6/>} />
        <Route path="Model7" element={<Model7/>} />
        <Route path="Model8" element={<Model8/>} />
        <Route path="Model9" element={<Model9/>} />
        <Route path="Model12" element={<Model12/>} />
        <Route path="Model13" element={<Model13/>} />
        <Route path="Model17" element={<Model17/>} />
      </Routes>
    </BrowserRouter>
  );
}
