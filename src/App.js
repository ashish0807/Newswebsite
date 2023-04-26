import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Footer from './components/Foot/Footer';
import Home from './components/Home';



function App() {
  
  return (
    <>
    <Router>
    <Navbar/> 
    <Routes>
      <Route exact path='/' element={<Home key="general" category="general"/>} />
      <Route exact path="/sports" element={<Home key="sports"  category="sports"/>}/>
      <Route exact path="/education" element={<Home key="education" category="education"/>}/>
      <Route exact path="/entertainment" element={<Home key="entertainment" category="entertainment"/>}/>
      <Route exact path="/business" element={<Home key="business" category="business"/>}/>
      <Route exact path="/technology" element={<Home key="technology" category="technology"/>}/>
      <Route exact path="/health" element={<Home key="health" category="health"/>}/>
      
    </Routes>
    </Router>
    <Footer/>
    </>
    )
      
} 

export default App