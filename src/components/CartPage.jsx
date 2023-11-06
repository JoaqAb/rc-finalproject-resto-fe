import React, { useState } from 'react';
import './CartPage.css';
import { useAppFuncionalidades } from './Funcionalidades';

function CartPage() {
  const {
    cart,
    handlePagar,
    handleRemoveFromCart,
    mostrarModal, // Estado para mostrar/ocultar el modal
    setMostrarModal, // Función para mostrar/ocultar el modal
  } = useAppFuncionalidades();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.precio), 0);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Carrito de Compras</h2>
      <ul className="cart-list">
        {cart.length > 0 ? (
          cart.map((item, id) => (
            <li className="cart-item" key={id}>
              <span>{item.name}</span>
              <span>${item.precio}</span>
              {/* Si tienes una función para eliminar elementos del carrito */}
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
      <button className="pay-button" onClick={() => handlePagar(setMostrarModal)}>
        Pagar
      </button>

      {/* Elemento condicional para mostrar el modal */}
      {mostrarModal && (
        <div className="modal">
          {/* Contenido del modal */}
          <div className="modal-content">
            <p>Pago confirmado. El carrito se ha vaciado.</p>
            <button onClick={() => setMostrarModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;