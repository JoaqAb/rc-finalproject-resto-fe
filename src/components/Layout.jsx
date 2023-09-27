// Layout.jsx
import React from 'react';
import Navbar from './Navbar'; // Importa tu componente de Navbar
import Footer from './Footer'; // Importa tu componente de Footer

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
