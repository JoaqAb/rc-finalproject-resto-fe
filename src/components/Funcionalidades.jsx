import { useState, useEffect } from 'react';

export function useAppFuncionalidades() {
  const [numeroMesa, setNumeroMesa] = useState(localStorage.getItem('numeroMesa') || '');
  const [mostrarMesaInput, setMostrarMesaInput] = useState(!localStorage.getItem('numeroMesa'));
  const [cart, setCart] = useState(() => {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  });
  const [estadoPedido, setEstadoPedido] = useState('En espera');
  const [mostrarModal, setMostrarModal] = useState(false); // Estado para mostrar/ocultar el modal

  const handleNumeroMesaSubmit = (numeroMesa) => {
    setNumeroMesa(numeroMesa);
    localStorage.setItem('numeroMesa', numeroMesa);
    setMostrarMesaInput(false);
  };

  const addToCart = (item) => {
    const precioNumero = parseFloat(item.price);
    setCart([...cart, { ...item, precio: precioNumero }]);
    console.log('Guardando en localStorage:', [...cart, item]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleNuevoPedido = () => {
    setCart([]);
    setNumeroMesa('');
    localStorage.removeItem('numeroMesa');
    setEstadoPedido('En espera');
  };

  const handlePagar = () => {
    // Aquí puedes realizar cualquier otra acción relacionada con el pago si es necesario
    // Mostrar el modal cuando se confirma el pago
    setMostrarModal(true);

    // Luego, limpiamos el carrito y establecemos el estado del pedido como "En espera"
    setCart([]);
    setEstadoPedido('En espera');
  };
  

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return {
    numeroMesa,
    mostrarMesaInput,
    cart,
    estadoPedido,
    handleNuevoPedido,
    handlePagar,
    handleNumeroMesaSubmit,
    addToCart,
    setCart,
    mostrarModal,
    setMostrarModal,
    handleRemoveFromCart, // Agregamos la función handleRemoveFromCart aquí
  };
}
