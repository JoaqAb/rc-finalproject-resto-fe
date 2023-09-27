import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './MenuPage.css';

function MenuPage({ addToCart }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET al menú de productos para clientes
    fetch('https://resto-rolling.onrender.com/api/products/menu')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setMenuItems(data.data);
        } else {
          console.error('La respuesta de la API no es un array:', data);
        }
      })
      .catch((error) => {
        console.error('Error al obtener el menú:', error);
      });
  }, []);

  // Función para agregar un producto al carrito
  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">Menú del Restaurante</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <Card className="menu-card">
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Precio: ${parseFloat(item.price).toFixed(2)}</ListGroupItem>
              </ListGroup>
              <button onClick={() => handleAddToCart(item)}>Comprar</button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
