import React from 'react';
import {Container,Nav,Navbar,NavDropdown}from 'react-bootstrap';

function BasicExample() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#ec5853" }}>
      <Container direction="horizontal" gap={6} className='contact-Nav' >
        <Navbar.Brand href="/" style={{color: "#ffdfd0",}}>Restaurante</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto">
            <Nav.Link href="/"style={{color: "#ffdfd0",}} >Inicio</Nav.Link>
            <Nav.Link href="/cantidadPedidos" style={{color: "#ffdfd0",}}>Pedidos</Nav.Link>
            <Nav.Link href="/menu" style={{color: "#ffdfd0",}}>Menu</Nav.Link>
            <Nav.Link href="/contact" style={{color: "#ffdfd0",}}>Carrito</Nav.Link>
            <NavDropdown title="Tu cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login" style={{color: "black",}}>Iniciar sesion</NavDropdown.Item>
              <NavDropdown.Item href="/register" style={{color: "black",}}>Registrarse</NavDropdown.Item>
              <NavDropdown.Item href="/cuenta" style={{color: "black ",}}>Cambiar mis datos</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;