import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "primereact/button";

export default function Home() {
  return (
    <div className="titulo">
      <div>
        <h1>SALES AGILITY</h1>
      </div>
      <div className="btn">
        <Link to="/login">
          <Button
            label="Começar"
            size="large"
            style={{ backgroundColor: "LimeGreen", color: "white" }}
          />
        </Link>
      </div>
    </div>
  );
}
