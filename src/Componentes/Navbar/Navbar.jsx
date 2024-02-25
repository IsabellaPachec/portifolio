import "./Navbar.css";
import { Link } from 'react-router-dom';
//ICONS
import { RxHamburgerMenu } from "react-icons/rx";


function Navbarcomponent(){
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-link">INICIO</li>
                <li className="navbar-link">FORMAÇÃO</li>
                <li className="navbar-link">SKILLS</li>
                <li className="navbar-link">OBJETIVO</li>
                <li className="navbar-link">PROJETOS</li>
                <li><button className="burg"></button></li>
            </ul>
        </nav>
    );
}

export default Navbarcomponent;