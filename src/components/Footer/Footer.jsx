import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/adi-satria-sejati-8058a3163/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" aria-label="LinkedIn"></i></a>
                    <a href="https://github.com/AdiSatriaSejati/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" aria-label="GitHub"></i></a>
                    <a href="https://www.instagram.com/adisatriasejati/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-label="Instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=6285819991215" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-label="WhatsApp"></i></a>
                </div>
                <div className="copyright">
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);