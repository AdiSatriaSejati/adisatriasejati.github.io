import React, { useContext } from "react";
import './Header.css';
/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

/* MusicPlayer */
import MusicPlayer from '../MusicPlayer/MusicPlayer';

const Header = () => {
    const idioma = useContext(langContext);
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

            <NavLink className="logo" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <p>Adi Satria Sejati</p>
            </NavLink>

            <nav className="navbar">
                <Link to="inicio" spy={true} offset={0} href="#inicio" aria-label="Home">
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to="sobre-mi" spy={true} offset={-100} href="#sobre-mi" aria-label="About">
                    <FormattedMessage
                        id='about'
                        defaultMessage='About'
                    />
                </Link>
                <Link to="sertifikasi" spy={true} offset={-100} href="#sertifikasi" aria-label="Certifications">
                    <FormattedMessage
                        id='certifications'
                        defaultMessage='Certifications'
                    />
                </Link>
                <Link to="proyectos" spy={true} offset={-100} href="#proyectos" aria-label="Projects">
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </Link>
                <Link to="contactos" spy={true} offset={0} href="#contactos" aria-label="Contact">
                    <FormattedMessage
                        id='contact'
                        defaultMessage='Contact'
                    />
                </Link>
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

export default React.memo(Header);