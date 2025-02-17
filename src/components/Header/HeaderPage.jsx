import React, { useContext } from "react";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import './Header.css';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

const HeaderPage = () => {
    // Buttom language
    const idioma = useContext(langContext);
    // Menu desplegable
    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <NavLink className="logo" to="/">
                <p>Adi Satria Sejati</p>
            </NavLink>

            <nav className="navbar">
                <NavLink to="/" offset={-150} duration={500}>
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </NavLink>
                <NavLink to="/about" offset={-150} duration={500}>
                    <FormattedMessage
                        id='about'
                        defaultMessage='About'
                    />
                </NavLink>
                <NavLink to="/Certifications" offset={-150} duration={500}>
                    <FormattedMessage
                        id='certifications'
                        defaultMessage='Certifications'
                    />
                </NavLink>
                <NavLink to="/project" offset={-150} duration={500}>
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </NavLink>
                <div id="buttons">
                    <img 
                    onClick={() => idioma.selectLanguage('en-EN')} 
                    src="img/language/english.webp" 
                    alt="English" 
                    width="30" 
                    height="20" 
                    />
                    <img 
                    onClick={() => idioma.selectLanguage('id-ID')} 
                    src="img/language/indonesia.webp" 
                    alt="Indonesian" 
                    width="30" 
                    height="20" 
                    />
                    <MusicPlayer />
                </div>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(HeaderPage);