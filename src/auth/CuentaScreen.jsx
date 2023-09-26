import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Css/Cuenta.css";


const DatosUsuario = ({ nombre, email, cantidadPedidos }) => {
  return (
    <div className="datos-usuario">
      <h3>Datos del Usuario</h3>
      <p>Nombre: {nombre}</p>
      <p>Email: {email}</p>
      {cantidadPedidos !== undefined && (
        <p>Cantidad de Pedidos: {cantidadPedidos}</p>
      )}
    </div>
  );
};


const EditarDatosUsuario = ({ nombre, email, actualizarUsuario }) => {
  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [nuevoEmail, setNuevoEmail] = useState(email);

  const handleGuardarCambios = () => {
 
    const nuevosDatos = { nombre: nuevoNombre, email: nuevoEmail };
    actualizarUsuario(nuevosDatos);
  };

  return (
    <div className="editar-datos-usuario">
      <h3>Editar Datos del Usuario</h3>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={nuevoEmail}
          onChange={(e) => setNuevoEmail(e.target.value)}
        />
      </div>
      <button onClick={handleGuardarCambios}>Guardar Cambios</button>
    </div>
  );
};

const CuentaScreen = ({ usuario, actualizarUsuario, cerrarSesion }) => {
  const { nombre, email, cantidadPedidos } = usuario;

  return (
    <div className="cuenta-screen">
      <h1>Mi Cuenta</h1>
      <DatosUsuario
        nombre={nombre}
        email={email}
        cantidadPedidos={cantidadPedidos}
      />
      <EditarDatosUsuario
        nombre={nombre}
        email={email}
        actualizarUsuario={actualizarUsuario}
      />
      <div className="cerrar-sesion">
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default CuentaScreen;
