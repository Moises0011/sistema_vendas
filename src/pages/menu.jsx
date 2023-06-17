import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../App.css";

import {
  FaHome,
  FaCalendarAlt,
  FaCog,
  FaCalculator,
  FaUser,
  FaPencilAlt,
} from "react-icons/fa";

export default function Menu() {
  const items = [
    { label: "Home", icon: <FaHome />, destino: "/" },
    { label: "Calendário", icon: <FaCalendarAlt />, destino: "/" },
    { label: "Calculadora", icon: <FaCalculator />, destino: "/calculadora" },

    { label: "Lista", icon: <FaPencilAlt />, destino: "/lista" },
    {
      label: "Configurações",
      icon: <FaCog />,
      destino: "/menu/configuracoes",
    },
    { label: "Perfil", icon: <FaUser />, destino: "/" },
  ];

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <div className="setores">
      <div className="items">
        {items.map((item) => {
          return (
            <div
              className="menuitem"
              onClick={() =>
                navigate(item.destino, { state: { location: item.label } })
              }
              key={item.label}
              style={{
                display: "flex",
                gap: "0.4rem",
                color: "limegreen",
                cursor: "pointer",
              }}
            >
              {item.icon}
              <span style={{ color: "white", size: "0.4rem" }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="botoes" style={{ color: "white" }}>
        <h2>Setores</h2>

        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to="/acougue"
        >
          <button
            style={{
              fontWeight: "bold",
              backgroundColor: "limegreen",
              width: "100px",
              padding: "15px",
              border: "none",
              borderRadius: "8px",
              width: "350px",
              fontSize: "25px",
              cursor: "pointer",
            }}
          >
            Açougue
          </button>
        </Link>

        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to="/verduras"
        >
          <button
            style={{
              fontWeight: "bold",
              backgroundColor: "limegreen",
              width: "100px",
              padding: "15px",
              border: "none",
              borderRadius: "8px",
              width: "350px",
              fontSize: "25px",
              cursor: "pointer",
            }}
          >
            Verduras
          </button>
        </Link>

        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to="/padaria"
        >
          <button
            style={{
              fontWeight: "bold",
              backgroundColor: "limegreen",
              width: "100px",
              padding: "15px",
              border: "none",
              borderRadius: "8px",
              width: "350px",
              fontSize: "25px",
              cursor: "pointer",
            }}
          >
            Padaria
          </button>
        </Link>

        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to="/"
        >
          <button
            style={{
              fontWeight: "bold",
              backgroundColor: "limegreen",
              width: "100px",
              padding: "15px",
              border: "none",
              borderRadius: "8px",
              width: "350px",
              fontSize: "25px",
              cursor: "pointer",
            }}
          >
            Cereais
          </button>
        </Link>

        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to="/"
        >
          <button
            style={{
              fontWeight: "bold",
              backgroundColor: "limegreen",
              width: "100px",
              padding: "15px",
              border: "none",
              borderRadius: "8px",
              width: "350px",
              fontSize: "25px",
              cursor: "pointer",
            }}
          >
            Adega e bebidas
          </button>
        </Link>
      </div>

      {/* <Button
        onClick={() => setActiveIndex(0)}
        className="p-button-outlined mb-5"
        label="Activate 1st"
      /> */}
      {/* <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => {
          setActiveIndex(e.index), test(e.index);
        }}
      /> */}
      <Outlet />
    </div>
  );
}
