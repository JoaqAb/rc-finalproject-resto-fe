import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./RegisterScreen.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisterScreen = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const [msjError, setMsjError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

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
    if (nombre.trim() === "" || email === "" || password === "" || passwordRep === "") {
      return setMsjError("Todos los campos son obligatorios");
    } else if (nombre.length < 3) {
      return setMsjError("El usuario debe tener más de 3 caracteres");
    } else if (!isValidEmail) {
      return setMsjError("No es un email valido");
    } else if (!validarContrasena(password)) {
      return setMsjError("La contraseña debe tener entre 6 caracteres, 2 números y 2 letras");
    } else if (password !== passwordRep) {
      return setMsjError("Las contraseñas no coinciden");
    }

    var parametros = {
      name:nombre,
      email:email,
      password:password
    }

    registrarUsuario(parametros);    
  };

  const registrarUsuario = async(parametros) => {
    await axios({
      method:"POST",
      url:"https://resto-rolling.onrender.com/api/users/register",
      data:parametros
    }).then(function(respuesta){
      setMsjError("Usuario creado correctamente. Redirigiendo al inicio de sesión");
      navigate("/login");
    }).catch(function(error){
      return setMsjError("Ha ocurrido un error. Intenta nuevamente.");
    })
  }

  return (
    <Row className="row-register">
      <Col xs={8} lg={4} className="col-register">

              <div className="container-regisiter">
                {msjError ? <p className="bg-danger text white p-3">{msjError} </p> : ""}

                <Form onSubmit={validarFormulario}>
                  <Form.Group className="mt-2" controlId="nombre">
                    <Form.Label style={{color: "#ffdfd0",}}><strong>Nombre</strong></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su nombre"
                      onChange={(e) => setNombre(e.target.value)}
                      />
                  </Form.Group>

                  <Form.Group className="mt-2" controlId="email">
                    <Form.Label style={{color: "#ffdfd0",}}><strong>Email</strong></Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su Email"
                      onChange={(e) => setEmail(e.target.value)}
                      />
                  </Form.Group>

                  <Form.Group className="mt-2" controlId="contraseña">
                    <Form.Label style={{color: "#ffdfd0",}}> <strong>Contraseña</strong></Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingrese su contraseña"
                      onChange={(e) => setPassword(e.target.value)}
                      />
                  </Form.Group>

                  <Form.Group className="mt-2" controlId="repetirContraseña">
                    <Form.Label style={{color: "#ffdfd0",}}> <strong>Repetir Contraseña</strong></Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Repita su contraseña"
                      onChange={(e) => setPasswordRep(e.target.value)}
                      />
                  </Form.Group>

                  <Button className="mt-5 w-100 p-2" variant="primary" type="submit">
                    Registrarse
                  </Button>

                  <NavLink to="/login">
                    <Button className="mt-3 w-100 p-2" variant="danger">
                      Iniciar Sesion
                    </Button>
                  </NavLink>
                </Form>
              </div>
      </Col>
      </Row>
  );
};

export default RegisterScreen;
