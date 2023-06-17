import React, { useState } from "react";
import { Link } from "react-router-dom";

function Calculadora() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="Calc">
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
      <div className="calculator">
        <h1 style={{ color: "white" }}>Calculadora</h1>

        <input
          type="text"
          value={result}
          style={{
            padding: "15px",
            border: "none",
            borderRadius: "8px",
            width: "400px",
            fontSize: "20px",
            backgroundColor: "#444",
            color: "white",
          }}
        />
        <div className="keypad">
          <button
            className="highlight"
            name="+"
            onClick={handleClick}
            style={{
              width: "10px",
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
            +
          </button>

          <button
            className="highlight"
            name="-"
            onClick={handleClick}
            style={{
              width: "10px",
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
            &ndash;
          </button>

          <button
            className="highlight"
            name="*"
            onClick={handleClick}
            style={{
              width: "10px",
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
            &times;
          </button>

          <button
            className="highlight"
            name="/"
            onClick={handleClick}
            style={{
              width: "10px",
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
            &divide;
          </button>

          <button
            name="."
            onClick={handleClick}
            style={{
              width: "10px",
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
            .
          </button>

          <button
            name="5"
            onClick={handleClick}
            style={{
              width: "10px",
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
            5
          </button>

          <button
            name="6"
            onClick={handleClick}
            style={{
              width: "10px",
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
            6
          </button>

          <button
            name="7"
            onClick={handleClick}
            style={{
              width: "10px",
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
            7
          </button>

          <button
            name="8"
            onClick={handleClick}
            style={{
              width: "10px",
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
            8
          </button>

          <button
            name="9"
            onClick={handleClick}
            style={{
              width: "10px",
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
            9
          </button>

          <button
            name="0"
            onClick={handleClick}
            style={{
              width: "10px",
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
            0
          </button>

          <button
            name="1"
            onClick={handleClick}
            style={{
              width: "10px",
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
            1
          </button>

          <button
            name="2"
            onClick={handleClick}
            style={{
              width: "10px",
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
            2
          </button>

          <button
            name="3"
            onClick={handleClick}
            style={{
              width: "10px",
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
            3
          </button>

          <button
            name="4"
            onClick={handleClick}
            style={{
              width: "10px",
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
            4
          </button>

          <button
            className="highlight"
            onClick={clear}
            id="clear"
            style={{
              width: "10px",
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
            Limpar
          </button>
          <button
            className="highlight"
            onClick={backspace}
            id="backspace"
            style={{
              width: "10px",
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
            C
          </button>

          <button
            className="highlight"
            onClick={calculate}
            id="result"
            style={{
              width: "10px",
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
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
