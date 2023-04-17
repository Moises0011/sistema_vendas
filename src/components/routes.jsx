import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Home from "../pages/home";
import Menu from "../pages/menu";
import Login from "../pages/login";
import Acougue from "../pages/acougue";
import Verduras from "../pages/verduras";
import Padaria from "../pages/padaria";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/acougue" element={<Acougue />} />
        <Route path="/verduras" element={<Verduras />} />
        <Route path="/padaria" element={<Padaria />} />
      </Routes>
    </BrowserRouter>
  );
}
