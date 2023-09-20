import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterScreen } from "../auth/RegisterScreen";
import HomeScreen from '../home/HomeScreen';
import {Login} from '../auth/Login';


export const AppRouter = () => {
  

  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path= "/" element = {<HomeScreen/>}/> 
    <Route path = "/register" element = {<RegisterScreen/>}/>
    
    <Route path= "/login" element = {<Login/>}/> 
    

  
      
    </Routes>
    </BrowserRouter>
    </>
  )
}; 
export default AppRouter
