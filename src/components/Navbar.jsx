import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './Logo1.jpeg'; // Asegúrate de ajustar la ruta a tu archivo de imagen



function NavbarComponent({ mostrarInicioHandler, mostrarMenuHandler,numeroMesa, cartCount,estadoPedido,handleNuevoPedido }) {
  console.log('numeroMesa:', numeroMesa);
  console.log('cartCount:', cartCount);
  console.log('estadoPedido:', estadoPedido);
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#ec5853" }}>
      <Container direction="horizontal" gap={6} className='contact-Nav' >
        <Navbar.Brand href="/inicio" style={{ color: "#ffdfd0" }}>
        <img
            src={logo}
            alt="Logo del Restaurante"
            width="70"
            height="70"
            className="d-inline-block align-top"
          />

          Restaurante
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/inicio" style={{ color: "#ffdfd0" }} onClick={mostrarInicioHandler}>
              Inicio
            </Nav.Link>
            
            <Nav.Link href="/menu" style={{ color: "#ffdfd0" }} onClick={mostrarMenuHandler}>
              Menú
            </Nav.Link>
            <Nav.Link href="/cart" style={{ color: "#ffdfd0" }}>Pedido({cartCount}) {/* Mostrar la cantidad de elementos en el carrito */}
            </Nav.Link>
            <NavDropdown title={`Mesa ${numeroMesa} - ${estadoPedido}`} id="basic-nav-dropdown">
  {/* ... */}
  {estadoPedido === 'Pedido realizado' && (
    <Nav.Link href="#" style={{ color: "#ffdfd0" }} onClick={handleNuevoPedido}>
      Nuevo Pedido
    </Nav.Link>
  )}
</NavDropdown>

<NavDropdown title={`Iniciar Sesion`} id="basic-nav-dropdown">
              <NavDropdown.Item href="#log-in" style={{ color: "black" }}>Iniciar sesión</NavDropdown.Item>
              <NavDropdown.Item href="#sign-in" style={{ color: "black" }}>Registrarse</NavDropdown.Item>
              <NavDropdown.Item href="#change-data" style={{ color: "black" }}>Cambiar mis datos</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;