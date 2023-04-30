import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Home from "../pages/home";
import Menu from "../pages/menu";
import Login from "../pages/login";
import Acougue from "../pages/acougue";
import Verduras from "../pages/verduras";
import Padaria from "../pages/padaria";
import Configuracoes from "../pages/configuracoes";
import Lista from "../pages/lista";
import Calculadora from "../pages/calculadora";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/menu" element={<Menu />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/lista" element={<Lista />} />

        <Route path="/acougue" element={<Acougue />} />
        <Route path="/verduras" element={<Verduras />} />
        <Route path="/padaria" element={<Padaria />} />
        <Route path="/calculadora" element={<Calculadora />} />
      </Routes>
    </BrowserRouter>
  );
}
