import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CartPage.css'; // Importa el archivo de estilos CSS

function CartPage({ cart, setCart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const handlePagar = () => {
    setTimeout(() => {
      alert('Pago completado con éxito. El carrito se ha vaciado.');
      setCart([]);
    }, 1000);
  };
  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  

  return (
    <div className="cart-container"> {/* Aplica la clase al contenedor principal */}
      <h2 className="cart-header">Carrito de Compras</h2>
      <ul className="cart-list">
        {cart.length > 0 ? (
          cart.map((item, id) => (
            <li className="cart-item" key={id}>
  <span>{item.name}</span>
  <span>${item.price}</span>
  <button className="remove-button" onClick={() => handleRemoveFromCart(id)}>
    Eliminar
  </button>
</li>

          ))
        ) : (
          <p>El carrito de compras está vacío.</p>
        )}
      </ul>
      {cart.length > 0 && (
        <p className="cart-total">Total: ${calculateTotal()}</p>
      )}
      <Button className="pay-button" onClick={handlePagar}>
        Pagar
      </Button>
    </div>
  );
}

export default CartPage;
