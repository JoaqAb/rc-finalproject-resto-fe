import React from 'react'
import error404 from '../css/error404.css';

const Error404 = () => {
  return (
    <div className='container-404'>
       
        <img src="./src/error-404.png" className='img-404'alt=""/>
        <h1>La página que ha solicitado no se encuentra disponible</h1>
        <div className="boton">
            <button>Volver atras</button>
        </div>
    </div>
  )
}

export default Error404
