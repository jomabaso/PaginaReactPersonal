import './App.css';
import React, { Component } from 'react';
import BarraNavegacion from './components/navbar/BarraNavegacion';
import Info from './components/info/Info'
import Lyf from './components/content/lenguajesyframeworks.js';
import Contacto from './components/contacto/contacto';
import {Container} from 'react-bootstrap';
function App() {


  return(
    <Container>
      <BarraNavegacion />
      <Info />
      <Lyf/>
      <Contacto/>
    </Container>
  );

}

export default App;
