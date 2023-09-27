import React from 'react';
import {Container,Nav,Navbar,NavDropdown}from 'react-bootstrap';
import './navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" variant="dark" style={{backgroundColor: "#ec5853",}}>
      <Container direction="horizontal" gap={6} className='contact-Nav' >
        <Navbar.Brand className='logo-Navbar'> 
                  <Link to="/home"><img className='logo-img' src="./src/images/Logo-Appetito.png" alt="Logo de appetito" /></Link>
                  <Link to="/home" className='logo-letter'><h5><strong>APPETITO</strong></h5></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto">
              <Nav.Link >
                  <Link to="/home" className='nav-links'>Inicio</Link>
              </Nav.Link>
              <Nav.Link >
                  <Link to="/create" className='nav-links'>Pedido</Link>
              </Nav.Link>
              <Nav.Link>
                  <Link to="/menu" className='nav-links'>Menu</Link>
              </Nav.Link>
              <Nav.Link >
                  <Link to="/cart" className='nav-links'>Carrito</Link>
              </Nav.Link>
            <NavDropdown title="Tu cuenta" id="basic-nav-dropdown">
                  <NavDropdown.Item > 
                        <Link to="/login" className='nav-letter'>Iniciar sesion</Link> 
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                      <Link to="/register" className='nav-letter'>Registrarse</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                      <Link to="/account" className='nav-letter'>Cambiar mis datos</Link> 
                  </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;