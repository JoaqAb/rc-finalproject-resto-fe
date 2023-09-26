import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import CuentaScreen from "./CuentaScreen"; 

function App() {
  const [usuario, setUsuario] = useState({
    nombre: "Nombre de ejemplo",
    email: "correo@example.com",
    cantidadPedidos: 5,
  });

  const actualizarUsuario = (nuevosDatos) => {
    // Lógica para actualizar el usuario
    setUsuario({ ...usuario, ...nuevosDatos });
  };

  const cerrarSesion = () => {
    // Lógica para cerrar sesión
  };

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

export default App;
