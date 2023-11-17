import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopWinners from './components/TopWinners';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';


function App() {
 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <HomePage/>}/>
      {/* <Route path='/TopWinners' element={<TopWinners/>}/> */}
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
