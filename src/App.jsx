import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import AppRouter from "./router/AppRouter";
import { RegisterScreen } from "./auth/RegisterScreen";
import { Login } from "./auth/Login";
import CuentaScreen from "./auth/CuentaScreen";

function App() {
  return (
    <>
      <AppRouter />
    
    </>
  );
}

export default App;
