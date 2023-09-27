  import React from 'react'
  import { Formik } from 'formik';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'semantic-ui-css/semantic.min.css'
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import NavBar from './components/Navbar';
  import Footer from './components/Footer';
  import Aboutus from './components/Aboutus';
  import AppAuth from "./components/App";
  import Formulario  from './components/Contact';
  import CuentaScreen from "./components/CuentaScreen";
  import Error404 from './components/Error404';
  import Frequentquestion from './components/Frequentquestion';
  import HomeScreen from "./components/HomeScreen";
  import { Login } from "./components/Login";
  import { RegisterScreen } from "./components/RegisterScreen";


  function App() {
    return (  
      
      <div>
        <BrowserRouter>
          <NavBar/>
            <Routes>
                <Route path= "/Aboutus" element = {<Aboutus/>}/> 
                <Route path="/App" element={<AppAuth />} />
                <Route path= "/Contact" element = {<Formulario/>}/> 
                <Route path="/account" element={<CuentaScreen/> }/>
                <Route path= "/Error404" element = {<Error404/>}/> 
                <Route path= "/Frequentquestion" element = {<Frequentquestion/>}/> 
                <Route path="/" element={<HomeScreen />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterScreen />} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }

  export default App