  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'semantic-ui-css/semantic.min.css'
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import HomeScreen from "./components/HomeScreen";
  import Footer from './components/Footer';
  import NavbarComponent from './components/Navbar';
  import AboutUs from './components/AboutUs';
  import AppAuth from "./components/App";
  import Formulario  from './components/Contact';
  import MenuPage from './components/MenuPage';
  import CartPage from './components/CartPage';
  import CuentaScreen from "./components/CuentaScreen";
  import Error404 from './components/Error404';
  import Frequentquestion from './components/Frequentquestion';
  import { Login } from "./components/Login";
  import { RegisterScreen } from "./components/RegisterScreen";
  import { useAppFuncionalidades } from './components/Funcionalidades';
  import { MesaModal } from './components/MesaModal';
  import { AdminProducts } from "./components/AdminPages/AdminProducts";


  function App() {
    const { numeroMesa, mostrarMesaInput, cart, estadoPedido, handleNuevoPedido, handleNumeroMesaSubmit, addToCart } = useAppFuncionalidades();
    return (  
      
      <>
        <BrowserRouter>
        <NavbarComponent
        numeroMesa={numeroMesa}
        cartCount={cart.length}
        estadoPedido={estadoPedido}
        handleNuevoPedido={handleNuevoPedido}
      />
            <Routes>
                <Route path="/" exact element={<HomeScreen />} />
                <Route path= "/Aboutus" element = {<AboutUs/>}/> 
                <Route path="/App" element={<AppAuth />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path= "/Contact" element = {<Formulario/>}/> 
                <Route path="/account" element={<CuentaScreen/> }/>
                <Route path= "/Error404" element = {<Error404/>}/> 
                <Route path= "/Frequentquestion" element = {<Frequentquestion/>}/> 
                <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/admin/products" element={<AdminProducts />} />
            </Routes>
            <Footer/>
            {mostrarMesaInput && ( <MesaModal show={mostrarMesaInput} onClose={() => handleNuevoPedido()} onSubmit={handleNumeroMesaSubmit} /> )}
        </BrowserRouter>
        </>
    )
  }

  export default App