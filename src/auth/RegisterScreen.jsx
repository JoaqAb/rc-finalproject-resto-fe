import React, { useState } from "react";
import  {Form, Button } from "react-bootstrap";

export const RegisterScreen = () => {
    const [nombre, setNombre] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    
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
       return console.log ( "el usuario debe tener más de 3 caracteres")
    }

       
    console.log("Formulado enviado");
 };

    return (
        <div className="container">
            
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