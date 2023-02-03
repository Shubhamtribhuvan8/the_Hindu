import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
// import ProductDetails from "./Components/Product/ProductDetails";
// import Products from "./Components/Product/Product";
import Profile from "./Components/Profile";
import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Title from "./Components/TheHindu/Title";
import World from "./Components/TheHindu/World";
import Opinion from "./Components/TheHindu/Opinion";
import Entertainment from "./Components/TheHindu/Entertainment";
import Todays from "./Components/TheHindu/Todays";
import Menu from "./Components/TheHindu/Menu";
import Login1 from "./Components/Login1"
import Worldnews from "./Components/TheHindu/Worldnews";
function App() {
  return (
    <div className="App">
      <Title/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
       <Nav/>
        <Routes>
        <Route path="/e_commerce_site" element={<Home />} />
        <Route path='/world' element={<World/>}/>
        <Route path='/worldnews/:id' element={<Worldnews/>}/>
        <Route path="/opinion" element={<Opinion />} />
        <Route path="/Entertainment" element={<Entertainment />} />
        <Route path="/Todays" element={<Todays/>} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Login1" element={<Login1 />} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;