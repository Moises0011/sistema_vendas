import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "primereact/button";
import { TabMenu } from "primereact/tabmenu";

export default function Menu() {
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Calendario", icon: "pi pi-fw pi-calendar" },
    { label: "Lista", icon: "pi pi-fw pi-pencil" },
    { label: "Configurações", icon: "pi pi-fw pi-cog" },
    { label: "Perfil", icon: "pi pi-user" },
  ];

  return (
    <div className="setores">
      <div className="card">
        <TabMenu model={items} />
      </div>

      <h1>Setores</h1>

      <Link to="/acougue">
        <Button
          label="Açougue"
          size="large"
          style={{ backgroundColor: "LimeGreen", color: "white" }}
        />
      </Link>

      <Link to="/verduras">
        <Button
          label="Verduras"
          size="large"
          style={{ backgroundColor: "LimeGreen", color: "white" }}
        />
      </Link>

      <Link to="/padaria">
        <Button
          label="Padaria"
          size="large"
          style={{ backgroundColor: "LimeGreen", color: "white" }}
        />
      </Link>

      <Link to="/sobre">
        <Button
          label="Cereais"
          size="large"
          style={{ backgroundColor: "LimeGreen", color: "white" }}
        />
      </Link>

      <Link to="/">
        <Button
          label="Voltar"
          size="large"
          style={{ backgroundColor: "LimeGreen", color: "white" }}
        />
      </Link>
    </div>
  );
}
