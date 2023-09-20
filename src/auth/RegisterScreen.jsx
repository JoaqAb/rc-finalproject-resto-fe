import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Css/RegisterScreen.css";
import { NavLink } from "react-router-dom";

export const RegisterScreen = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msjError, setMsjError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);
  console.log(nombre);

  const validarContrasena = (contrasena) => {
    //Expresiones regulares para validar la contraseña
    const tieneDosNumeros = /[0-9].*[0-9]/.test(contrasena);
    const tieneDosLetras = /[a-zA-Z].*[a-zA-Z]/.test(contrasena);
    const tieneLongitudMinima = contrasena.length >= 6;

    return tieneDosNumeros && tieneDosLetras && tieneLongitudMinima;
  };
  const validarFormulario = (e) => {
    e.preventDefault();
    //validaciones
    if (nombre.trim() === "" || email === "" || password === "") {
      return setMsjError("todos los campos deben ser obligatorios");
    } else if (nombre.length < 3) {
      return setMsjError("el usuario debe tener más de 3 caracteres");
    } else if (!isValidEmail) {
      return setMsjError("no es un email valido");
    } else if (!validarContrasena(password)) {
      return setMsjError("el usuario debe tener entre 6 caracteres, 2 números y 2 letras");
    }

    setMsjError("Usuario registrado correctamente");
    window.location.href = "http://localhost:5173/";
  };

  return (
    <div className="container">
      {msjError ? <p className="bg-danger text white p-3">{msjError} </p> : ""}

      <Form onSubmit={validarFormulario}>
        <Form.Group className="mt-2" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mt-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mt-2" controlId="contraseña">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="mt-5 w-100 p-2" variant="primary" type="submit">
          Registrarse
        </Button>

        <NavLink to="/login">
          <Button className="mt-5 w-100 p-2" variant="danger">
            Iniciar Sesion
          </Button>
        </NavLink>
      </Form>
    </div>
  );
};

export default RegisterScreen;
