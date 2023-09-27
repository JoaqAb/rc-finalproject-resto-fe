import React from "react";
import { Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Frequentquestion from "./components/Frequentquestion";
import Error404 from "./components/Error404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./home/HomeScreen";
import RegisterScreen from "./auth/RegisterScreen";
import Login from "./auth/Login";
import CuentaScreen from "./auth/CuentaScreen";
import AppAuth from "./auth/App";
import Formulario from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update" element={<CuentaScreen />} />
          <Route path="/app" element={<AppAuth />} />
          <Route path="/contact" element={<Formulario />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

  export default App