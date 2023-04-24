import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Head from './components/Head';
import Footer from './components/Footer';
import Mypage from './Pages/Mypage';


function App() {
  
  return (
    <>
    <Router>
    <Navbar/> 
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path="/sports" element={<Mypage cat="sports"/>}/>
      <Route exact path="/education" element={<Mypage cat="education"/>}/>
      <Route exact path="/entertainment" element={<Mypage cat="entertainment"/>}/>
      <Route exact path="/business" element={<Mypage cat="business"/>}/>
      <Route exact path="/technology" element={<Mypage cat="technology"/>}/>
      <Route exact path="/health" element={<Mypage cat="health"/>}/>
      
    </Routes>
    </Router>
    <Footer/>
    </>
    )
      
} 

export default App