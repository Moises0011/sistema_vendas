import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="titulo">
      <div>
        <h1 style={{ textShadow: "3px 3px black" }}>SALES AGILITY</h1>
      </div>
      <div className="btn">
        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to="/login"
        >
          <button
            style={{
              fontWeight: "bold",
              width: "10px",
              padding: "15px",
              border: "none",
              borderRadius: "8px",
              width: "150px",
              fontSize: "20px",
              backgroundColor: "limegreen",
              cursor: "pointer",
            }}
          >
            Começar
          </button>
        </Link>
      </div>
    </div>
  );
}
