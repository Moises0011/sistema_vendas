import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "primereact/button";
import acougue from "../assets/acougue.jpg";

export default function Acougue() {
  return (
    <div
      style={{
        backgroundImage: `url(${acougue})`,
        backgroundRepeat: "no-repeat",
        height: "650px",
        backgroundPosition: "center",
      }}
    >
      <div style={{ textAlign: "center", color: "limegreen", margin: "10px" }}>
        <h1>Açougue</h1>
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
