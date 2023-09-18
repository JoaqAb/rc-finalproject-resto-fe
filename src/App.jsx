import React from 'react'
import { Formik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Frequentquestion from './components/Frequentquestion';
import Error404 from './components/Error404';

function App() {
  return (
    <div>
      <Navbar />
      <Contact/> 
      <Footer />
    </div>
  )
}

export default App