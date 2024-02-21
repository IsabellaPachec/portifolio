import './App.css';
import { BrowserRouter as Router, swith, Route, link} from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Hero from "./Componentes/Hero/Hero";
function App() {
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
