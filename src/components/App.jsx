import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import CuentaScreen from "./CuentaScreen";


function AppAuth() {
  const [usuario, setUsuario] = useState({
    nombre: "Nombre de ejemplo",
    email: "correo@example.com",
    cantidadPedidos: 5,
  });

  const actualizarUsuario = (nuevosDatos) => {
    setUsuario({ ...usuario, ...nuevosDatos });
  };

  const cerrarSesion = () => {};

  return (
    <div className="App">
      {/* Pasa la prop 'usuario' al componente CuentaScreen */}
      <CuentaScreen
        usuario={usuario}
        actualizarUsuario={actualizarUsuario}
        cerrarSesion={cerrarSesion}
      />
    </div>
  );
}

export default AppAuth;
