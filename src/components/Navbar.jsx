import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";
import imgnavlogo from "../images/logo-appetito.png";
import { useState, useEffect } from "react";

function NavbarComponent({
  mostrarInicioHandler,
  mostrarMenuHandler,
  numeroMesa,
  cartCount,
  estadoPedido,
  handleNuevoPedido,
}) {
  console.log("numeroMesa:", numeroMesa);
  console.log("cartCount:", cartCount);
  console.log("estadoPedido:", estadoPedido);
  const [userRol, setUserRol] = useState(null);

  useEffect(() => {
    const storedUserRol = JSON.parse(localStorage.getItem("userRol"));
    if (storedUserRol) {
      setUserRol(storedUserRol);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUserRol(null); 
    window.location.reload();
  };

  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#ec5853" }}>
      <Container direction="horizontal" gap={6} className="contact-Nav">
        <Navbar.Brand className="logo-Navbar">
          <Link to="/">
            <img className="logo-img" src={imgnavlogo} alt="Logo de appetito" />
          </Link>
          <Link to="/" className="logo-letter">
            <h5>
              <strong>APPETITO</strong>
            </h5>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userRol === "admin" && (
              <Nav.Link>
              <Nav.Item>
                <Link to="/admin/products" style={{ color: "#ffdfd0", textDecoration: "none" }}>Administrar Productos</Link>
              </Nav.Item>
              </Nav.Link>

            )}
            <Nav.Link >
            <Nav.Item
              onClick={mostrarMenuHandler}
            >
              <Link to="/menu" style={{ color: "#ffdfd0", textDecoration: "none"  }}>Menú</Link>
            </Nav.Item>
            </Nav.Link>

            <Nav.Link>
            <Nav.Item >
              <Link to="/cart" style={{ color: "#ffdfd0", textDecoration: "none"  }}>Pedido({cartCount}){" "}</Link>
            </Nav.Item>
            </Nav.Link>

            <Nav.Link>
            <Nav.Item style={{ color: "#ffdfd0", textDecoration: "none"  }}>
              {`Mesa ${numeroMesa} - ${estadoPedido}`}
            </Nav.Item>
            </Nav.Link>

            <NavDropdown title="Tu cuenta" id="basic-nav-dropdown" style={{ color: "#ffdfd0", textDecoration: "none"  }}>
              {userRol == null &&
              <>
                <NavDropdown.Item>
                  <Link to="/login" className="nav-letter">
                    Iniciar sesion
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/register" className="nav-letter">
                    Registrarse
                  </Link>
                </NavDropdown.Item>
              </>
              }
              {userRol != null &&
                <>
                  <NavDropdown.Item>
                    <Link to="/Error404" className="nav-letter">
                        Cambiar mis datos
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/" className="nav-letter">
                      <button onClick={handleLogout}className="custom-button">Cerrar Sesion</button>
                    </Link>
                  </NavDropdown.Item>
                </>
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
