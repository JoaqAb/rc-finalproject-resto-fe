import React from 'react';
import {Container,Nav,Navbar,NavDropdown}from 'react-bootstrap';
import './navbar.css';
import { Link } from 'react-router-dom';
import imgnavlogo from '../images/logo-appetito.png';

function NavbarComponent({numeroMesa, cartCount,estadoPedido}) {
  console.log('numeroMesa:', numeroMesa);
  console.log('cartCount:', cartCount);
  console.log('estadoPedido:', estadoPedido);
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#ec5853" }}>
      <Container direction="horizontal" gap={6} className='contact-Nav' >
        <Navbar.Brand className='logo-Navbar'> 
                  <Link to="/"><img className='logo-img' src={imgnavlogo} alt="Logo de appetito" /></Link>
                  <Link to="/" className='logo-letter'><h5><strong>APPETITO</strong></h5></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item><Link to="/menu" style={{ color: "#ffdfd0" }}>Menú</Link></Nav.Item>
            <Nav.Item><Link to="/cart" style={{ color: "#ffdfd0" }}>Pedido({cartCount}) {/* Mostrar la cantidad de elementos en el carrito */}</Link></Nav.Item>
            <Nav.Item><Link style={{ color: "#ffdfd0" }}>{`Mesa ${numeroMesa} - ${estadoPedido}`}</Link></Nav.Item>
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

export default NavbarComponent;