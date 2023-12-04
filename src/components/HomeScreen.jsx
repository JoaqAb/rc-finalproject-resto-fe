import React from 'react';
import './HomeScreen.css'
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div className="homepage">
      <div className='home-content'>

      <h1 className='Text-homepage'>Descubre nuestros deliciosos platos</h1>
      <Link to="/menu">
      <button className='btn' >Menu</button>
      </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
