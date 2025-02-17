import React from 'react';
import './Footer.css';

const Footer = () =>{
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <div className="copyright-content">
                        <i className="far fa-copyright"></i>
                        <span>{currentYear} Adi Satria Sejati</span>
                    </div>
                </div>
                
                <div className="redes-sociales">
                    <a 
                        href="https://www.linkedin.com/in/adi-satria-sejati-8058a3163/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a 
                        href="https://github.com/AdiSatriaSejati/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a 
                        href="https://www.instagram.com/adisatriasejati/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a 
                        href="https://api.whatsapp.com/send?phone=6285819991215" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);