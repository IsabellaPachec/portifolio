import "./Navbar.css";
import { Link } from 'react-router-dom';
import Hero from './Hero/Hero';

function Navbarcomponent(){
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-link">INICIO</li>
                <li className="navbar-link">FORMAÇÃO</li>
                <li className="navbar-link">SKILLS</li>
                <li className="navbar-link">OBJETIVO</li>
                <li className="navbar-link">PROJETOS</li>
            </ul>
        </nav>
    );
}

export default Navbarcomponent;