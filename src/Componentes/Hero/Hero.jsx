import Circulos from "../../IMG/circulos.png";
import "./Hero.css";
import React, { useState, useEffect } from 'react';
// ICONS //
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";



function HeroSection() {
    return (
        <div className="hero-section">
            <div className="left">
                <h1 className="title">HELLO WORLD!</h1>
                <p className="texto">Olá, eu sou a Isabella Pacheco, uma entusiasta Desenvolvedora Front-End e futura Cientista de Dados. Bem-vindo ao meu portfólio, onde compartilho projetos envolventes desenvolvidos em HTML, CSS e JavaScript, e em breve em mais linguagens. Fique à vontade para explorar e descobrir mais sobre meu trabalho!</p>
                <div className="icons">
                    <ul>
                        <li><FaGithub /></li>
                        <li><FaLinkedin /></li>
                        <li><FaRegNewspaper /></li>
                    </ul>
                </div>
            </div>

            <div className="right">
                <img src={Circulos} alt="circulos" className="cir" />
            </div>
        </div>
    );
}



export default HeroSection;