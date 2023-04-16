import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "primereact/button";

export default function Menu() {
  return (
    <div className="setores">
      <h1>Setores</h1>

      <Link to="/acougue">
        <Button label="Açougue" size="large" />
      </Link>

      <Link to="/sobre">
        <Button label="Verduras" size="large" />
      </Link>

      <Link to="/sobre">
        <Button label="Padaria" size="large" />
      </Link>

      <Link to="/sobre">
        <Button label="Cereais" size="large" />
      </Link>

      <Link to="/">
        <Button label="Voltar" size="large" />
      </Link>
    </div>
  );
}
