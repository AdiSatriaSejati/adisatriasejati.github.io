import React, { useEffect } from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Content = () => {
    useEffect(() => {
        // Animasi untuk social media icons
        const socialIcons = document.querySelectorAll('.redes-sociales a');
        socialIcons.forEach((icon, index) => {
            icon.style.animationDelay = `${index * 0.2}s`;
        });
    }, []);

    return (
        <div className="contenido">
            <ParticleHeaderBg/>
            <section className="inicio" id="inicio">
                <div className="titulo">
                    <p data-aos="fade-up" data-aos-delay="600">
                        <FormattedMessage
                            id='greeting'
                            defaultMessage='Hello'
                        />
                        <span>
                            <img 
                                src="https://raw.githubusercontent.com/jigar-sable/next-portfolio/refs/heads/main/public/waving-hand.gif" 
                                alt="wave" 
                                width="45px"
                                style={{ marginLeft: '10px', marginRight: '5px' }}
                            />
                        </span>
                    </p>
                    
                    <h1 data-aos="fade-up" data-aos-delay="800">
                        <FormattedMessage
                            id='name'
                            defaultMessage='I am '
                        />
                        <span className="nama">Adi Satria Sejati</span>
                    </h1>
                    
                    <p data-aos="fade-up" data-aos-delay="1000">
                        <FormattedMessage
                            id='rol'
                            defaultMessage='Full-Stack Developer'
                        />
                    </p>

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

                    <Link 
                        to="sobre-mi" 
                        spy={true} 
                        smooth={true} 
                        offset={-10} 
                        duration={500}
                        href="#sobre-mi"
                        className="scroll-down"
                        aria-label="Scroll to About section"
                        role="button"
                        tabIndex={0}
                    >
                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                        <span className="sr-only">Scroll to About section</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Content;