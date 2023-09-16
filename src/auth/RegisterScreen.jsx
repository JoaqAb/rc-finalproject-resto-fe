import React, { useState } from "react";
import  {Form, Button } from "react-bootstrap";

export const RegisterScreen = () => {
    const [nombre, setNombre] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [msjError, setmsjError] = useState ("");
    
 const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\[a-zA-Z]{2,}$/;
 const isValidedEmail = emailRegex.test(email);
 const validarFormulario = (e) => {
    e.preventDeFault ();

     //validaciones
   if (
      nombre === "" ||
       edad === "" ||
       password === ""
       ) {
      return console.log ("Todos los campos son obligatorio");

   } else if (nombre.length < 3 ) {
       return setMsjError ( "el usuario debe tener más de 3 caracteres")  
   } else if (!isValidedEmail) {
      return setMsjError("no es un email valido") 
   } else if (password.length < 6) {
      return setMsjError ("la contraseña debe ser mayor a 6 caracteres")
   }

    

       
    msjError("Usuario registrado correctamente");
 };

    return (
        <div className="container">
         {msjError ? <p className="bg-danger text white p-3">{msjError} </p>: ""}
            
            <form onSubmit={validarFormulario}>

             <Form.Group className="mt-2" controlId="nombre"> 
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" onChange= {(e) => setNombre(e.target.value) }/>
             </Form.Group>


             <Form.Group className="mt-2" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su Email"onChange= {(e) => setEmail(e.target.value) }/>
             </Form.Group>

             <Form.Group className="mt-2" controlId="contraseña">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña"onChange= {(e) => setPassword(e.target.value) }/>
             </Form.Group>

             <button className="mt-5 w-100 p-2" variant= "primary" type="submit">Registrarse</button>
            </form>
         </div>
    );
};