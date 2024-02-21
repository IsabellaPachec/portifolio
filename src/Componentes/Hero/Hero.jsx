import Circulos from "../../IMG/circulos.png";
import "./Hero.css";
// ICONS //
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="left">
                <h1 className="title">HELLO WORLD!</h1>
                <p className="texto">Olá, sou a Isabella Pacheco, uma entusiasta Desenvolvedora Front-End. Bem-vindo ao meu portfólio com projetos envolventes em HTML, CSS e JavaScript e em breve em mais linguagens. Sinta-se à vontade para explorar e descobrir mais sobre meu trabalho!</p>
            </div>

            <div className="icons">
                <ul>
                    <li><FaGithub /></li>
                    <li><FaLinkedin /></li>
                    <li><FaRegNewspaper /></li>
                </ul>
            </div>

            <div className="right">
                <img src={Circulos} alt="circulos" className="cir" />
            </div>
        </div>
    );
}

export default HeroSection;