import './App.css';
import React, { Component } from 'react';
import BarraNavegacion from './components/navbar/BarraNavegacion';
import Info from './components/info/Info'
import Lyf from './components/content/lenguajesyframeworks.js';
import Contacto from './components/contacto/contacto';
function App() {


  return(
    <div className="container-fluid">
      <BarraNavegacion />
      <Info />
      <Lyf/>
      <Contacto/>
    </div>
  );

}

export default App;
