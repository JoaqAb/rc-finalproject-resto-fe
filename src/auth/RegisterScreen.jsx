import React from "react";
import {Form, Button} from "react-bootstrap";
export const RegisterScreen = () => {
    return (
        <div className="container">
            <form>
<Form.Group className="mt-2" controlId="nombre">
<Form.Label>Nombre</Form.Label>
<Form.Control type="text" placeholder="Ingrese su nombre"/>
</Form.Group>


<Form.Group className="mt-2" controlId="edad">
<Form.Label>Edad</Form.Label>
<Form.Control type="numer" placeholder="Ingrese su edad"/>
</Form.Group>

<Form.Group className="mt-2" controlId="email">
<Form.Label>Email</Form.Label>
<Form.Control type="text" placeholder="Ingrese su Email"/>
</Form.Group>

<Form.Group className="mt-2" controlId="contraseña">
<Form.Label>Contraseña</Form.Label>
<Form.Control type="password" placeholder="Ingrese su contraseña"/>
</Form.Group>
            </form>
            
            </div>
    );
};