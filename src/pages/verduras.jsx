import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "primereact/button";
import verduras from "../assets/verduras.jpg";

export default function Verduras() {
  return (
    <div
      style={{
        backgroundImage: `url(${verduras})`,
        backgroundRepeat: "no-repeat",
        height: "650px",
        backgroundPosition: "center",
      }}
    >
      <div style={{ textAlign: "center", color: "limegreen", margin: "10px" }}>
        <h1>Verduras</h1>
      </div>
      <Link to="/menu">
        <Button
          label="Voltar"
          size="large"
          style={{ backgroundColor: "LimeGreen", color: "white" }}
        />
      </Link>
    </div>
  );
}
