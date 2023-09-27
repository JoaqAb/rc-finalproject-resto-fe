import React from 'react'
import  './error404.css';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='container-404'>
       
        <img src="/src/images/error-404.png" className='img-404'alt="imagen 404"/>
        <h1 className='text-center'>Lo sentimos mucho, la página que ha solicitado no se encuentra disponible :c</h1>
        <div className="boton">
        <Link to="/"><button>Volver al inicio</button></Link>
        </div>
    </div>
  );
};

export default Error404;
