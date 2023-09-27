import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Login.css";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msjError, setMsjError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  const validarFormulario = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return setMsjError("Todos los campos son obligatorios");
    } else if (!isValidEmail) {
      return setMsjError("El email no es válido");
    }

    setMsjError("Inició sesión correctamente");
  };

  return (
    <Row className="row-login">
      <Col xs={8} lg={4} className="col-login" >
          <div className="container">
            {msjError ? <p className="bg-danger text-white p-3">{msjError}</p> : ""}

          <Form onSubmit={validarFormulario}>
              <Form.Group className="mt-2" controlId="email" >
                  <Form.Label style={{color: "#ffdfd0",}}><strong>Email</strong></Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
              </Form.Group>

              <Form.Group className="mt-2 mb-3" controlId="password">
                  <Form.Label style={{color: "#ffdfd0",}}> <strong>Contraseña</strong></Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
              </Form.Group>

              <Button className="mt-4 w-100 p-2" variant="primary" type="submit">
                  Iniciar Sesión
              </Button>
              <br />

              <p className="text-center mb-1 mt-3" style={{color: "#ffdfd0",}}> <strong>Si todavia no estas registrado↓↓</strong></p>
              <NavLink to="/register">
                  <Button className=" w-100 p-2" variant="danger">
                    Register
                  </Button>
              </NavLink>
          </Form>
          <div className="text-center"><a href="/Error404" className="border-password mb-1 mt-3" style={{color: "#2b2b2b",}}> <strong>Olvidaste tu contraseña? hace click aqui</strong></a></div>
        </div>
    </Col>
    </Row>
  );
};

export default Login;
