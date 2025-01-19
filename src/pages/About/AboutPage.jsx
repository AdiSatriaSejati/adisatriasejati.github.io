import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import ScrollReveal from 'scrollreveal';
import './AboutPage.css';

import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from '../../components/ParticlesBg/ParticleBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgUrl = "https://ik.imagekit.io/AdiSatriaSejati/Aing.jpg?updatedAt=1729184207940";

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const srtop = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 1000,
      reset: false
    });

    srtop.reveal('.education .timeline', { delay: 400 });
    srtop.reveal('.education .timeline .container', { interval: 400 });
  }, []);

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              {/* Using img tag directly with error handling */}
              <img 
                src='img/about/profile.webp' 
                alt="profile" 
                className="sobre-mi-img"
              />
              
              <a 
                href={cv} 
                target="_blank" 
                rel="noopener noreferrer" 
                download="cv.pdf" 
                className="btn-codigo cv buttonDownload"
              >
                <FormattedMessage
                  id='btn-cv'
                  defaultMessage='Download CV'
                />
              </a>
            </div>

            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="Hi, I am Adi Satria Sejati, an Information Systems student at Bina Sarana Informatika University with a GPA of 3.73. My educational background in SMK Computer and Network Engineering and internship experience at PT PLN (Persero) opened my insight into the application of technology in various sectors, especially in human resource management and information system development."
                />
              </p>

              <div className={`hide parrafo-active ${isExpanded ? 'show' : ''}`}>
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage='I am an adaptive and dedicated individual, with diverse professional experiences - from being a driver to working as a Sales and E-Commerce Admin. During my time at PT Musika Indonesia Jaya, I managed seven e-commerce platforms simultaneously, optimized product content, and led cross-departmental coordination to ensure smooth operations and customer satisfaction.'
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="One of my significant experiences was joining PT Leholeh Rasa Nusantara Jaya, a startup company that focuses on the marketplace of Indonesian souvenirs. In the internship program, I contributed to the development and documentation of APIs for the Leholeh.id marketplace. My tasks included the implementation of Laravel-based APIs, MySQL database management, and integration of third-party services such as payment gateways, all of which effectively supported business operations."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-4'
                    defaultMessage="I believe that the combination of technical knowledge, practical experience, and management ability makes me capable of facing challenges in the world of information technology. Currently, I continue to hone my skills through formal education, while actively working on website development projects and participating in technology seminars to broaden my horizons and enrich my portfolio."
                  />
                </p>
              </div>

              <div className="btn-info">
                <button 
                  className="custom-btn btn-codigo" 
                  onClick={toggleReadMore}
                >
                  {isExpanded ? '↑' : 'Read more'}
                </button>
              </div>
            </div>
          </div>

          <div className="education" id="education" data-aos="fade-up" data-aos-delay="600">
            <h2 className="heading">
              <i className="fas fa-graduation-cap"></i>
              <span> </span>
              <FormattedMessage
                id='education'
                defaultMessage='Education'
              />
            </h2>
            <div className="timeline">
              <div className="container right">
                <div className="content">
                  <div className="tag">
                    <h2>
                      <FormattedMessage
                        id='education1'
                        defaultMessage='Vocational High School Angkasa 2 Sepatan'
                      />
                    </h2>
                  </div>
                  <div className="desc">
                    <h3>
                      <FormattedMessage
                        id='major1'
                        defaultMessage='Computer & Network Engineering'
                      />
                    </h3>
                    <img 
                      src="img/about/education/smk.webp"
                      alt="Logo SMK Agkasa 2 Sepatan"
                      className="logo-smk"/>
                    <p>
                      <FormattedMessage
                        id='rate1'
                        defaultMessage='GPA : 73,93'
                      />
                    </p>
                    <p>
                      <FormattedMessage
                        id='date1'
                        defaultMessage='July 2015 - May 2018'
                      />
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="container left">
                <div className="content">
                  <div className="tag">
                    <h2>
                      <FormattedMessage
                        id='education2'
                        defaultMessage='Bina Sarana Informatika University'
                      />
                    </h2>
                  </div>
                  <div className="desc">
                    <h3>
                      <FormattedMessage
                        id='major2'
                        defaultMessage='Information Systems (Associate Degree III)'
                      />
                    </h3>
                    <img 
                        src="img/about/education/BSI.webp"
                        alt="Logo Bina Sarana Informatika"
                        className="logo-bsi"/>
                    <p>
                      <FormattedMessage
                        id='rate2'
                        defaultMessage='GPA : 3.73'
                      />
                    </p>
                    <p>
                      <FormattedMessage
                        id='date2'
                        defaultMessage='August 2022 - Present'
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="experience" id="experience" data-aos="fade-up" data-aos-delay="800">
              <h2 className="heading">
                <i className="fas fa-briefcase"></i>
                <span> </span>
                <FormattedMessage
                  id='experience'
                  defaultMessage='Experience'
                />
              </h2>
              <div className="timeline">
              <div className="container right">
                <div className="content">
                  <div className="tag">
                    <h2>
                      <FormattedMessage
                        id='experience1'
                        defaultMessage='Internship Human Resources Division'
                      />
                    </h2>
                  </div>
                  <div className="desc">
                    <h3>
                      <FormattedMessage
                        id='work1'
                        defaultMessage='PT PLN (Persero) Banten'
                      />
                    </h3>
                    <p>
                      <FormattedMessage
                        id='date-work1'
                        defaultMessage='02 January 2017 - 02 March 2017'
                      />
                    </p>
                    <img 
                      src="img/about/experience/PT.PLN-(Persero).webp"
                      alt="Surat-Keterangan"
                      className="imagecertifications"/>
                  </div>
                </div>
              </div>
              </div>
              <div className="timeline">
              <div className="container left">
                <div className="content">
                  <div className="tag">
                    <h2>
                      <FormattedMessage
                        id='experience3'
                        defaultMessage='Sales Administrators'
                      />
                    </h2>
                  </div>
                  <div className="desc">
                    <h3>
                      <FormattedMessage
                        id='work3'
                        defaultMessage='PT Sultan Muda Indonesia'
                      />
                    </h3>
                    <p>
                      <FormattedMessage
                        id='date-work3'
                        defaultMessage='06 February 2023 - 06 February 2024'
                      />
                    </p>
                    <img 
                      src="img/about/experience/PT.SULTAN-MUDA-INDONESIA.webp"
                      alt="Surat-Keterangan"
                      className="imagecertifications"/>
                  </div>
                </div>
              </div>
              </div>
              <div className="timeline">
              <div className="container right">
                <div className="content">
                  <div className="tag">
                    <h2>
                      <FormattedMessage
                        id='experience4'
                        defaultMessage='E-commerce Administration'
                      />
                    </h2>
                  </div>
                  <div className="desc">
                    <h3>
                      <FormattedMessage
                        id='work3'
                        defaultMessage='PT Musika Indonesia Jaya'
                      />
                    </h3>
                    <p>
                      <FormattedMessage
                        id='date-work4'
                        defaultMessage='04 March 2024 - 09 September 2024'
                      />
                    </p>
                    <img 
                      src="img/about/experience/PT.Musika-Indonesia-Jaya.webp"
                      alt="Surat-Keterangan"
                      className="imagecertifications"/>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default About;