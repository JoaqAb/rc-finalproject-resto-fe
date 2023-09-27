import React, { useState, useEffect } from 'react';
import MesaModal from './components/MesaModal';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import Inicio from './components/Inicio';
import CartPage from './components/CartPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formulario from './components/Contact';

function App() {
  const [numeroMesa, setNumeroMesa] = useState(localStorage.getItem('numeroMesa') || '');
  const [mostrarMesaInput, setMostrarMesaInput] = useState(!localStorage.getItem('numeroMesa'));
  const [cart, setCart] = useState(() => {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  });
  const [estadoPedido, setEstadoPedido] = useState('En espera');

  const handleNumeroMesaSubmit = (numeroMesa) => {
    setNumeroMesa(numeroMesa);
    localStorage.setItem('numeroMesa', numeroMesa);
    setMostrarMesaInput(false);
  };

  const addToCart = (item) => {
    const precioNumero = parseFloat(item.price);
    setCart([...cart, { ...item, precio: precioNumero }]);
    //saveCartToLocalStorage([...cart, item]);
    console.log('Guardando en localStorage:', [...cart, item]);
  };
  
  const handleNuevoPedido = () => {
    setCart([]);
    setNumeroMesa('');
    localStorage.removeItem('numeroMesa');
    setEstadoPedido('En espera');
  };

  const handlePagar = () => {
    // Aquí puedes realizar cualquier otra acción relacionada con el pago si es necesario
    // Luego, limpiamos el carrito y establecemos el estado del pedido como "En espera"
    setCart([]);
    setEstadoPedido('En espera');
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <NavbarComponent
        numeroMesa={numeroMesa}
        cartCount={cart.length}
        estadoPedido={estadoPedido}
        handleNuevoPedido={handleNuevoPedido}
      />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route
          path="/menu"
          element={
            estadoPedido === 'Pedido realizado' ? (
              <div>
                <p>No se pueden hacer cambios en un pedido realizado.</p>
              </div>
            ) : (
              <MenuPage
        addToCart={addToCart} // Asegúrate de pasar addToCart aquí
        cart={cart}
        setCart={setCart}
        estadoPedido={estadoPedido}
        setEstadoPedido={setEstadoPedido}
      />
      
    )
  }
/>
<Route path= "/Contact" element = {<Formulario/>}/>
        <Route
          path="/cart"
          element={
            <CartPage cart={cart} setCart={setCart} handlePagar={handlePagar} estadoPedido={estadoPedido} />
          }
        />
      </Routes>
      <Footer />
      {mostrarMesaInput && (
        <MesaModal
          show={mostrarMesaInput}
          onClose={() => setMostrarMesaInput(false)}
          onSubmit={handleNumeroMesaSubmit}
        />
      )}
    </Router>
  );
}

export default App;
