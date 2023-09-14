import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterScreen } from "../auth/RegisterScreen";

export const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/register" element={<RegisterScreen/>}>
            <Route></Route>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}; 
export default AppRouter
