import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppAuth from "./components/App";
import MesaModal from './components/MesaModal';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import Formulario from './components/Contact';
import MenuPage from './components/MenuPage';
import CartPage from './components/CartPage';
import CuentaScreen from "./components/CuentaScreen";
import Error404 from './components/Error404';
import Frequentquestion from './components/Frequentquestion';
import HomeScreen from "./components/HomeScreen";
import { Login } from "./components/Login";
import { RegisterScreen } from "./components/RegisterScreen";
import { useAppFuncionalidades } from './components/Funcionalidades';

function App() {
  const { numeroMesa, mostrarMesaInput, cart, estadoPedido, handleNuevoPedido, handleNumeroMesaSubmit, addToCart } = useAppFuncionalidades();

  return (
    
    <Router>
      <NavbarComponent
        numeroMesa={numeroMesa}
        cartCount={cart.length}
        estadoPedido={estadoPedido}
        handleNuevoPedido={handleNuevoPedido}
      />
      <Routes>
      <Route path="/" element={<HomeScreen />} />
  <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
  <Route path="/cart" element={<CartPage />} />
  <Route path="/contacto" element={<Formulario />} />
  <Route path="/App" element={<AppAuth />} />
  <Route path= "/Contact" element = {<Formulario/>}/> 
  <Route path="/account" element={<CuentaScreen/> }/>
  <Route path= "/Error404" element = {<Error404/>}/> 
  <Route path= "/Frequentquestion" element = {<Frequentquestion/>}/> 
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<RegisterScreen />} />
  
</Routes>

      <Footer />
      {mostrarMesaInput && (
        <MesaModal
          show={mostrarMesaInput}
          onClose={() => handleNuevoPedido()}
          onSubmit={handleNumeroMesaSubmit}
        />
      )}
    </Router>
  );
}

export default App;
