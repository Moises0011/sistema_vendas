import React from "react";
import { useState } from "react";
import "../App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de validação e envio de dados
  };

  return (
    <div className="login">
      <h1 style={{ fontSize: "50px", color: "White" }}>Login</h1>
      <div className="email">
        <h2 style={{ color: "limegreen", width: "21%", margin: "5px" }}>
          E-mail
        </h2>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{
            width: "10px",
            padding: "15px",
            border: "none",
            borderRadius: "8px",
            width: "400px",
            fontSize: "20px",
          }}
          placeholder="Email"
        />
      </div>

      <div className="senha">
        <h2 style={{ color: "limegreen", width: "21%", margin: "5px" }}>
          Senha
        </h2>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{
            width: "10px",
            padding: "15px",
            border: "none",
            borderRadius: "8px",
            width: "400px",
            fontSize: "20px",
          }}
          placeholder="Senha"
        />
      </div>

      <br />

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
            width: "10px",
            padding: "15px",
            border: "none",
            borderRadius: "8px",
            width: "100px",
            fontSize: "20px",
            backgroundColor: "limegreen",
            cursor: "pointer",
          }}
        >
          Entrar
        </button>
      </Link>

      {/* <div style={{ color: "limegreen", width: "81%" }}>
        <Checkbox
          onChange={(e) => setChecked(e.checked)}
          checked={checked}
          style={{ width: "3%" }}
        ></Checkbox>
        Manter-me conectado
      </div>

      <br />
      <Link to="/menu">
        <Button
          label="Entrar"
          style={{ backgroundColor: "limegreen", color: "white" }}
        />
      </Link> */}
    </div>
  );
}
