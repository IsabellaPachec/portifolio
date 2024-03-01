import './App.css';
import { BrowserRouter as Router, swith, Route, link} from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import Hero from "./Componentes/Hero/Hero";
import React, {useEffect} from 'react';
function App() {
  useEffect(() => {
    alert("Bem-vindo ao meu Portfólio em desenvolvimento! Estou empenhado em criar uma experiência incrível para você. Enquanto isso, sinta-se à vontade para explorar meu perfil no LinkedIn. Clique no ícone abaixo do texto para acessá-lo. Agradeço pela sua visita! 😊😊")
  })
  return (
    <Router>
      <header>
        <Navbar/>
      </header>
      <Hero/>
    </Router>
  );
}

export default App;
