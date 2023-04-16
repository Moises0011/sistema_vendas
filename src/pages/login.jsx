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
        <InputText
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite seu email aqui"
          size={50}
        />
      </div>

      <br />

      <div className="senha">
        <Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          toggleMask
          placeholder="Digite sua senha aqui"
          size={47}
        />
      </div>

      <br />
      <Link to="/menu">
        <Button label="Entrar" />
      </Link>
    </div>
  );
}
