import React from 'react';
import {Container,Nav,Navbar,NavDropdown}from 'react-bootstrap';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" variant="dark" style={{backgroundColor: "#ec5853",}}>
      <Container direction="horizontal" gap={6} className='contact-Nav' >
        <Navbar.Brand className='logo-Navbar'> 
                  <Link to="/home"><img className='logo-img' src="./src/logo-Appetito.png" alt="" /></Link>
                  <Link to="" className='logo-letter'><h5>APPETITO</h5></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto">
              <Nav.Link >
                  <Link to="/" className='nav-links'>Inicio</Link>
              </Nav.Link>
              <Nav.Link >
                  <Link to="/" className='nav-links'>Pedidos</Link>
              </Nav.Link>
              <Nav.Link>
                  <Link to="/" className='nav-links'>Menu</Link>
              </Nav.Link>
              <Nav.Link >
                  <Link to="/" className='nav-links'>Carrito</Link>
              </Nav.Link>
            <NavDropdown title="Tu cuenta" id="basic-nav-dropdown" >
                  <NavDropdown.Item > 
                        <Link to="/login" className='nav-letter'>Iniciar sesion</Link> 
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                      <Link to="/register" className='nav-letter'>Registrarse</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                      <Link to="/Error404" className='nav-letter'>Cambiar mis datos</Link> 
                  </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;