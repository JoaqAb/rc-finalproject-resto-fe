  import React from 'react'
  import { Formik } from 'formik';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { BrowserRouter, Route, Routes } from 'react-router-dom';

  import Navbar from './components/Navbar';
  import Footer from './components/Footer';

  import Formulario  from './components/Contact';
  import Frequentquestion from './components/Frequentquestion';
  import Error404 from './components/Error404';

  function App() {
    return (  
      
      <div>
        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path= "/Contact" element = {<Formulario/>}/> 
                <Route path= "/Frequentquestion" element = {<Frequentquestion/>}/> 
                <Route path= "/Error404" element = {<Error404/>}/> 
            </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }

  export default App