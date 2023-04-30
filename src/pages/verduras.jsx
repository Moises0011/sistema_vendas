import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
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
      <div className="btnVoltar">
        <button
          style={{
            fontWeight: "bold",
            padding: "5px",
            border: "none",
            borderRadius: "8px",
            width: "100px",
            fontSize: "20px",
            backgroundColor: "limegreen",
            cursor: "pointer",
            margin: "5px",
          }}
        >
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/menu"
          >
            Voltar
          </Link>
        </button>
      </div>
    </div>
  );
}
