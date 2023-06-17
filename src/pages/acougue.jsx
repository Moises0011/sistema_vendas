import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
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
