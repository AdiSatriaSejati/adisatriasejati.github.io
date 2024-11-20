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
      reset: true
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
                src={imgUrl} 
                alt="profile" 
                className="sobre-mi-img"
                onError={(e) => {
                  e.target.src = '/path/to/fallback-image.jpg'; // Add a fallback image
                  console.log('Image failed to load, using fallback');
                }}
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
                  defaultMessage="Hi, I am Adi Satria Sejati, an Information Systems student at Bina Sarana Informatika University with a GPA of 3.73. I have a great interest in the world of information technology, which starts from the educational background of SMK Computer and Network Engineering. My internship experience at PT PLN opened my insight into the application of technology in a corporate environment."
                />
              </p>

              <div className={`hide parrafo-active ${isExpanded ? 'show' : ''}`}>
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage='I consider myself an adaptive and dedicated person, as evidenced by my diverse career journey - from being a Gojek driver to managing e-commerce operations. My recent experience at PT Musika Indonesia Jaya has sharpened my skills in managing seven e-commerce platforms at once, optimizing digital content, and coordinating business processes across departments.'
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="As a developer, I am proficient in various programming languages such as PHP, HTML, CSS, JavaScript, and Python, and familiar with modern frameworks such as Flutter, CodeIgniter, Laravel and others. I always strive to develop myself and keep up with the latest technology, which is reflected in my active participation in various technology seminars and webinars."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-4'
                    defaultMessage="I believe that the combination of technical knowledge and practical experience in the business world gives me a unique perspective in facing challenges in the field of information technology. Currently, I continue to hone my skills through formal education while actively working on website development projects to enrich my portfolio."
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
                      src="https://ik.imagekit.io/AdiSatriaSejati/images.png?updatedAt=1730305332064"
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
                        src="https://ik.imagekit.io/AdiSatriaSejati/Ico-BSI.webp?updatedAt=1684558198215" // Ganti dengan URL logo yang sesuai
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
              {/* 
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
                      src="https://ik.imagekit.io/AdiSatriaSejati/PT.PLN%20(Persero).jpg?updatedAt=1730373562936"
                      alt="Surat-Keterangan"
                      className="imagecertifications"/>
                  </div>
                </div>
              </div>
              </div>
              */}
              <div className="timeline">
              <div className="container right">
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
                      src="https://ik.imagekit.io/AdiSatriaSejati/PT.%20SULTAN%20MUDA%20INDONESIA.jpg?updatedAt=1730393344489"
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
                      src="https://ik.imagekit.io/AdiSatriaSejati/PT.Musika%20Indonesia%20Jaya.jpg?updatedAt=1730393941190"
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