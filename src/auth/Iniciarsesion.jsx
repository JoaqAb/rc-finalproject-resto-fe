import RegisterScreen from "./RegisterScreen";
import React, { useState } from "react";

export const IniciarSesion = () => {
    
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [msjError, setMsjError] = useState ("");
    
    const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\[a-zA-Z]{2,}$/;
    const isValidedEmail = emailRegex.test(email);
    const validarFormulario = (e) => {
       e.preventDeFault ()

       if (
        nombre === "" ||
         email === "" ||
         password === ""
         ) 


         msjError("Usuario registrado correctamente");
         };

         };
         
export default IniciarSesion