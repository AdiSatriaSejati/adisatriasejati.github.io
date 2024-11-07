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

            <NavLink className="logo" to="/">
                <p>Adi Satria Sejati</p>
            </NavLink>

            <nav className="navbar">
                <Link to="inicio" spy={true} offset={-150} href="#inicio">
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
                    <FormattedMessage
                        id='about'
                        defaultMessage='About'
                    />
                </Link>
                <Link to="sertifikasi" spy={true} offset={-150} href="#sertifikasi">
                    <FormattedMessage
                        id='certifications'
                        defaultMessage='Certifications'
                    />
                </Link>
                <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </Link>
                <Link to="contactos" spy={true} offset={-150} href="#contactos">
                    <FormattedMessage
                        id='contact'
                        defaultMessage='Contact'
                    />
                </Link>
                <div id="buttons">
                    <img onClick={() => idioma.selectLanguage('en-EN')} src="https://ik.imagekit.io/AdiSatriaSejati/English.webp?updatedAt=1684558198256" alt="English" />
                    <img onClick={() => idioma.selectLanguage('id-ID')} src="https://ik.imagekit.io/AdiSatriaSejati/Indonesia.webp?updatedAt=1684558198225" alt="Indonesian" />
                </div>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(Header);