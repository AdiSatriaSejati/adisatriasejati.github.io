import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg/>
        <section className="inicio" id="inicio">
        
            <div className="titulo">
            
                <p data-aos="fade-up" data-aos-delay="600">
                    <FormattedMessage
                        id='greeting'
                        defaultMessage='Hello'
                    /><span> <img src="https://github.com/AdiSatriaSejati/Home/blob/main/assets/images/Hand.gif?raw=true" alt="gif" width="45px" /> ,</span>
                </p>
                <h1 data-aos="fade-up" data-aos-delay="800">
                    <FormattedMessage
                        id='name'
                        defaultMessage='I am '
                    /><span className="nama">Adi Satria Sejati</span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="1000">
                    <FormattedMessage
                        id='rol'
                        defaultMessage='Full-Stack Developer'
                    />
                </p>

                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/adi-satria-sejati-8058a3163/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/AdiSatriaSejati/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/adisatriasejati/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"><i className="fab fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=6285819991215" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"><i className="fab fa-whatsapp"></i></a>
                </div>
                <div className="wrapper">
                    <a className="button" href="https://www.linkedin.com/in/adi-satria-sejati-8058a3163/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a className="button" href="https://github.com/AdiSatriaSejati/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="button" href="https://www.instagram.com/adisatriasejati/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <span>Instagram</span>
                    </a>
                    <a className="button" href="https://api.whatsapp.com/send?phone=6285819991215" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
                        <div className="icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <span>Whatsapp</span>
                    </a>
                </div>

                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;