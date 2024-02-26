import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; // Importe os ícones do menu

import "./Navbar.css";

function Navbarcomponent() {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar se o menu está aberto ou fechado

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Função para alternar o estado do menu
    };

    return (
        <nav className="navbar">
            <div className="navbar-toggle" onClick={toggleMenu}>
                {menuOpen ? <RiCloseLine /> : <RiMenuLine />} {/* Ícone do menu hamburguer ou ícone de fechar */}
            </div>
            <ul className={`navbar-list ${menuOpen ? "active" : ""}`}>
                <li className="navbar-link"><Link to="/">INICIO</Link></li>
                <li className="navbar-link"><Link to="/formacao">FORMAÇÃO</Link></li>
                <li className="navbar-link"><Link to="/skills">SKILLS</Link></li>
                <li className="navbar-link"><Link to="/objetivo">OBJETIVO</Link></li>
                <li className="navbar-link"><Link to="/projetos">PROJETOS</Link></li>
            </ul>
        </nav>
    );
}

export default Navbarcomponent;

