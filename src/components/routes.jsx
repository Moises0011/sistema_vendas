import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Home from "../pages/home";
import Menu from "../pages/menu";
import Login from "../pages/login";
import Acougue from "../pages/acougue";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/acougue" element={<Acougue />} />
      </Routes>
    </BrowserRouter>
  );
}
