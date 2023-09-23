import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaRegEnvelope, FaRegPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
      <>
          <div className='Footer'>
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 col-lg-4 col-12 ft-1">
                      <a href="/home"><img className='logo-footer' src="/src/images/logo-footer.jpg" alt="" /></a>
                          <div className="footer-icons pt-3 ">
                          <a href="https://www.facebook.com/" className='p-2'><FaFacebook style={{color: "#ffdfd0",}} /></a>
                          <a href="https://www.instagram.com/" className='p-2'><FaInstagram style={{color: "#ffdfd0",}} /></a>
                          <a href="https://twitter.com/" className='p-2'><FaTwitter style={{color: "#ffdfd0",}} /></a>
                          </div>
                      </div>
                      <div className="col-md-4 col-lg-4 col-12 ft-2 ">
                            <h3 style={{color: "#ffdfd0",}}>Sobre nosotros</h3>
                            <ul>
                                <li className="nav-item ">
                                    <Link to="/Aboutus" style={{color: "#ffdfd0",}}>¿Quienes somos?</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Frequentquestion" style={{color: "#ffdfd0",}}>Preguntas frecuentes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contact" style={{color: "#ffdfd0",}}>Envianos tu opinion</Link>
                                </li>
                            </ul>
                        </div>
                      <div className="col-md-4 col-lg-4 col-12 ft-3">
                          <h3 style={{color: "#ffdfd0",}} >Contacto</h3>
                          <p style={{color: "#ffdfd0",}}><FaPhoneAlt />  381-3040031</p>
                          <p style={{color: "#ffdfd0",}}><FaRegEnvelope />  RestauranteRolling1@gmail.com</p>
                          <p style={{color: "#ffdfd0",}}><FaRegPaperPlane /> General Paz 576, San Miguel de Tucuman, Argentina</p>
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