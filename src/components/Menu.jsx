import React, { useEffect, useState } from 'react';
import NavbarComponent from './Navbar';
import Producto from './Producto';
import Footer from './Footer';

function Menu() {
  const [productos, setProductos] = useState([]);
  const [pedido, setPedido] = useState([]);
  const [error, setError] = useState(null); // Estado para gestionar errores

  useEffect(() => {
    // Realizar una solicitud GET a la API para obtener los productos del menú
    fetch('https://resto-rolling.onrender.com/api/products/menu')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        return response.json();
      })
      .then((data) => {
        // Almacenar los productos en el estado
        setProductos(data);
      })
      .catch((error) => {
        // Capturar y gestionar errores
        setError(error.message);
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  const agregarAlPedido = (producto) => {
    setPedido([...pedido, producto]);
  };

  return (
    <div>
      <NavbarComponent />
      <div className="menu">
        <h2>Menú</h2>
        {/* Verifica si hay un error y muestra un mensaje de error si es necesario */}
        {error ? (
          <p>Error al cargar el menú: {error}</p>
        ) : (
          <div className="lista-productos">
            {/* Mapear y mostrar los productos */}
            {productos.map((producto) => (
              <Producto
                key={producto.id}
                producto={producto}
                onAgregarAlPedido={() => agregarAlPedido(producto)}
              />
            ))}
          </div>
        )}
      </div>
      {/* Mostrar el pedido actual */}
      {pedido.length > 0 && (
        <div className="pedido">
          <h2>Tu Pedido</h2>
          <ul>
            {pedido.map((producto) => (
              <li key={producto.id}>
                {producto.nombre} - ${producto.precio}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Menu;
