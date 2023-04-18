import React from "react";
import { useState } from "react";
import "../App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="email">
        <h2 style={{ color: "limegreen", width: "71%", margin: "5px" }}>
          E-mail
        </h2>
        <InputText
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite seu email aqui"
          size={50}
        />
      </div>

      <br />

      <div className="senha">
        <h2 style={{ color: "limegreen", width: "71%", margin: "5px" }}>
          Senha
        </h2>
        <Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          toggleMask
          placeholder="Digite sua senha aqui"
          size={47}
        />
      </div>

      <br />

      <div style={{ color: "limegreen", width: "85%" }}>
        <h7>Manter-me conectado</h7>
      </div>

      <br />
      <Link to="/menu">
        <Button
          label="Entrar"
          style={{ backgroundColor: "LimeGreen", color: "white" }}
        />
      </Link>
    </div>
  );
}
