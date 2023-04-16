import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "primereact/button";

export default function Acougue() {
  return (
    <div className="acougue">
      <img
        src="https://site.moki.com.br/wp-content/uploads/2021/02/setorizacao-supermercado-pontos-com-maior-circulacao.png"
        alt="oi"
        height={500}
        style={{ alignSelf: "center" }}
      />
      <Link to="/menu">
        <Button label="Voltar" size="large" />
      </Link>
    </div>
  );
}
