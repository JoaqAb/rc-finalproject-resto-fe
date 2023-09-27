import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario  from './Contact';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaRegEnvelope, FaRegPaperPlane } from 'react-icons/fa';



const Footer = () => {
  return (
      <>
          <div className='Footer'>
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 col-lg-4 col-12 ft-1">
                          <img className='logo-footer' src="./src/logo.png" alt="" />
                          <div className="footer-icons pt-3 ">
                          <a href="" className='p-2'><FaFacebook style={{color: "#ffdfd0",}} /></a>
                          <a href="" className='p-2'><FaInstagram style={{color: "#ffdfd0",}} /></a>
                          <a href="" className='p-2'><FaTwitter style={{color: "#ffdfd0",}} /></a>  
                          </div>
                      </div>
                      <div className="col-md-4 col-lg-4 col-12 ft-2 ">
                            <h3 style={{color: "#ffdfd0",}}>Sobre nosotros</h3>
                            <ul>
                                <li className="nav-item ">
                                    <a className="" href="/contact" style={{color: "#ffdfd0",}}>¿Quienes somos?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/" style={{color: "#ffdfd0",}}>Preguntas frecuentes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/" style={{color: "#ffdfd0",}}>Envianos tu opinion</a>
                                </li>
                            </ul>
                        </div>
                    <div className="col-md-4 col-lg-4 col-12 ft-3">
                        <h3>
                        <Link to="/Contact" style={{ color: "#ffdfd0" }}>Contacto</Link>
                        </h3>
                        <p style={{color: "#ffdfd0",}}><FaPhoneAlt />  381-3040031</p>
                        <p style={{color: "#ffdfd0",}}><FaRegEnvelope />  RestauranteRolling1@gmail.com</p>
                        <p style={{color: "#ffdfd0",}}><FaRegPaperPlane />  San Miguel de Tucuman, Argentina</p>

                    </div>
                </div>
            </div>
        </div>
    
        <div className='Last-footer'>
            <p>©copyright 2023-2030</p>
        </div>
    </>
)
}

export default Footer