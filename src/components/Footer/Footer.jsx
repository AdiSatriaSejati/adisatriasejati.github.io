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
                <div className="copyright">
                    <p><a href="https://www.iubenda.com/privacy-policy/19135665" class="iubenda-white iubenda-noiframe iubenda-embed iub-no-markup iubenda-noiframe iub-body-embed" title="Privacy Policy">Privacy Policy</a> <a href="https://www.iubenda.com/privacy-policy/19135665/cookie-policy" class="iubenda-white iubenda-noiframe iubenda-embed iub-no-markup iubenda-noiframe iub-body-embed" title="Cookie Policy">Cookie Policy</a> <a href="https://www.iubenda.com/terms-and-conditions/19135665" class="iubenda-white iubenda-noiframe iubenda-embed iub-no-markup iubenda-noiframe iub-body-embed" title="Terms and Conditions">Terms and Conditions</a></p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/adi-satria-sejati-8058a3163/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/AdiSatriaSejati/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/adisatriasejati/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=6285819991215" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);