  import React from 'react'
  import { Formik } from 'formik';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import 'semantic-ui-css/semantic.min.css'

  import NavBar from './components/Navbar';
  import Footer from './components/Footer';

  import Aboutus from './components/Aboutus';
  import Formulario  from './components/Contact';
  import Frequentquestion from './components/Frequentquestion';
  import Error404 from './components/Error404';

  function App() {
    return (  
      
      <div>
        <BrowserRouter>
          <NavBar/>
            <Routes>
                <Route path= "/Contact" element = {<Formulario/>}/> 
                <Route path= "/Aboutus" element = {<Aboutus/>}/> 
                <Route path= "/Frequentquestion" element = {<Frequentquestion/>}/> 
                <Route path= "/Error404" element = {<Error404/>}/> 
            </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }

  export default App