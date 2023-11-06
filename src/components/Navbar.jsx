import React from 'react';
import {Container,Nav,Navbar,NavDropdown}from 'react-bootstrap';
import './navbar.css';
import { Link } from 'react-router-dom';
import imgnavlogo from '../images/logo-appetito.png';

function NavbarComponent({ mostrarInicioHandler, mostrarMenuHandler,numeroMesa, cartCount,estadoPedido,handleNuevoPedido }) {
  console.log('numeroMesa:', numeroMesa);
  console.log('cartCount:', cartCount);
  console.log('estadoPedido:', estadoPedido);
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#ec5853" }}>
      <Container direction="horizontal" gap={6} className='contact-Nav' >
        <Navbar.Brand href="/inicio" style={{ color: "#ffdfd0" }}>
    

          Apettito Bar
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/inicio" style={{ color: "#ffdfd0" }} onClick={mostrarInicioHandler}>
              
            </Nav.Link>
            
            <Nav.Link href="/menu" style={{ color: "#ffdfd0" }} onClick={mostrarMenuHandler}>
              Menú
            </Nav.Link>
            <Nav.Link href="/cart" style={{ color: "#ffdfd0" }}>Pedido({cartCount}) {/* Mostrar la cantidad de elementos en el carrito */}
            </Nav.Link>
            <NavDropdown title={`Mesa ${numeroMesa} - ${estadoPedido}`} id="basic-nav-dropdown">
                {estadoPedido === 'Pedido realizado' && (
              <Nav.Link href="#" style={{ color: "#ffdfd0" }} onClick={handleNuevoPedido}>
                  Nuevo Pedido
              </Nav.Link>
  )}
</NavDropdown>

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