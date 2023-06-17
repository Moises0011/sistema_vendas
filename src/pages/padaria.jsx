import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import padaria from "../assets/padaria.jpg";

export default function Padaria() {
  return (
    <div
      style={{
        backgroundImage: `url(${padaria})`,
        backgroundRepeat: "no-repeat",
        height: "650px",
        backgroundPosition: "center",
      }}
    >
      <div style={{ textAlign: "center", color: "limegreen", margin: "10px" }}>
        <h1>Padaria</h1>
      </div>

      <div className="btnVoltar">
        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to="/menu"
        >
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
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}
