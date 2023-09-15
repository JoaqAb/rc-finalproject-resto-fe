import React, { useState } from "react";
import  {Form, Button } from "react-bootstrap";

export const RegisterScreen = () => {
    const [nombre, serNombre] = useState ("");
    const [email, serEmail] = useState ("");
    const [password, serPassword] = useState ("");
    
    

    return (
        <div className="container">
            <form>

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
            </form>
         </div>
    );
};