import React from 'react'
import './ProjectPage.css';
/* React router */

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';


const Project = () => {

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='coming-soon'
              defaultMessage='Coming Soon'
            />
          </h1>
          <nav className="navbar nav-proj">
          </nav>
        </section>

        <section className="projects__grid paginas-web">
        </section>
      </main>
      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;