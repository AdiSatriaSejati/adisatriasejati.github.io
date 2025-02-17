import React, { Suspense } from 'react';
import './CertificationsPage.css'
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { FormattedMessage } from 'react-intl';

// Lazy load ParticleBackground and Accordion components
const ParticleBackground = React.lazy(() => import('../../components/ParticlesBg/ParticleBackground'));

const Certifications = () => {
  return (
    <div>

      <HeaderPage />

      <Suspense fallback={<div>Loading...</div>}>
        <ParticleBackground />
      </Suspense>

      <main className="certifications-page">
      <section className="sertifikasi" id="sertifikasi">
      <h2 className="heading">
            <FormattedMessage
                id='certifications'
                defaultMessage='Certifications'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <h3>
                    <FormattedMessage
                        id='certifications1'
                        defaultMessage='Learn Basic Web Programming'
                    />
                </h3>
                <img 
                src="img/certifications/BelajarDasarPemrogramanWeb.webp" 
                alt="Learn Basic Web Programming" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='certifications2'
                        defaultMessage='Front End Development Libraries'
                    />
                </h3>
                <img 
                src="img/certifications/FrontEndDevelopmentLibraries.webp" 
                alt="Front End Development Libraries"
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <h3>
                    <FormattedMessage
                        id='certifications3'
                        defaultMessage='cPanel User Interface Proficiency'
                    />
                </h3>
                <img 
                src="img/certifications/cPanelUserInterfaceProficiency.webp" 
                alt="cPanel User Interface Proficiency" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <h3>
                    <FormattedMessage
                        id='certifications4'
                        defaultMessage='Early Financial Planning'
                    />
                </h3>
                <img 
                src="img/certifications/PerencanaanKeuanganSejakDini.webp" 
                alt="Perencanaan Keuangan Sejak Dini" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <h3>
                    <FormattedMessage
                        id='certifications5'
                        defaultMessage='Accelerate Digital Transformation'
                    />
                </h3>
                <img 
                src="img/certifications/AkselerasiTransformasiDigitalUntukMendukungEkonomiKreatif.webp" 
                alt="Akselerasi Transformasi Digital" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <h3>
                    <FormattedMessage
                        id='certifications6'
                        defaultMessage='Creativity Expert Training'
                    />
                </h3>
                <img 
                src="img/certifications/PPKM(PelatihanPakarKreatifitasMahasiswa).webp" 
                alt="PPM" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="800">
                <h3>
                    <FormattedMessage
                        id='certifications7'
                        defaultMessage='Professional Engineer Registration'
                    />
                </h3>
                <img 
                src="img/certifications/ProfesiInsinyurDanSuratTandaRegistrasiInsinyur(STRI).webp" 
                alt="STRI" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="900">
                <h3>
                    <FormattedMessage
                        id='certifications8'
                        defaultMessage='Self Preparation & Action Strategy'
                    />
                </h3>
                <img 
                src="img/certifications/StrategiPersiapanDiri.webp" 
                alt="SP&AS" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1000">
                <h3>
                    <FormattedMessage
                        id='certifications9'
                        defaultMessage='Computer & Network Engineering'
                    />
                </h3>
                <img 
                src="img/certifications/TKJ.webp" 
                alt="TKJ" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1100">
                <h3>
                    <FormattedMessage
                        id='certifications10'
                        defaultMessage='2nd Moderna Covid-19 Vaccination'
                    />
                </h3>
                <img 
                src="img/certifications/VaksinasiCovid-19Modernake-2.webp" 
                alt="vaccination" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1200">
                <h3>
                    <FormattedMessage
                        id='certifications11'
                        defaultMessage='Algorithms & Basic Programming'
                    />
                </h3>
                <img 
                src="img/certifications/AlgoritmadanPemrogramanDasar.webp" 
                alt="ABP" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1300">
                <h3>
                    <FormattedMessage
                        id='certifications12'
                        defaultMessage='Learn GIT for Beginners'
                    />
                </h3>
                <img 
                src="img/certifications/BelajarGITuntukPemula.webp" 
                alt="GIT" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1400">
                <h3>
                    <FormattedMessage
                        id='certifications13'
                        defaultMessage='Learn Basic JavaScript'
                    />
                </h3>
                <img 
                src="img/certifications/BelajarJavaScriptDasar.webp" 
                alt="JavaScript" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1500">
                <h3>
                    <FormattedMessage
                        id='certifications14'
                        defaultMessage='Basic HTML & CSS'
                    />
                </h3>
                <img 
                src="img/certifications/HTML&CSS.webp" 
                alt="HTML-CSS" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1600">
                <h3>
                    <FormattedMessage
                        id='certifications15'
                        defaultMessage='Advanced Text Editor'
                    />
                </h3>
                <img 
                src="img/certifications/MahirmenggunakanTextEditorbuatPemula.webp" 
                alt="IDE" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1700">
                <h3>
                    <FormattedMessage
                        id='certifications16'
                        defaultMessage='Legendary Js Library'
                    />
                </h3>
                <img 
                src="img/certifications/MembangunFrontenddenganJquery.webp" 
                alt="Legendary Js Library" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1800">
                <h3>
                    <FormattedMessage
                        id='certifications17'
                        defaultMessage='Get to know programming'
                    />
                </h3>
                <img 
                src="img/certifications/MengenalPemrogramankomputer.webp" 
                alt="Get to know programming" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1900">
                <h3>
                    <FormattedMessage
                        id='certifications18'
                        defaultMessage='Python for Beginners'
                    />
                </h3>
                <img 
                src="img/certifications/PemrogramanPythonuntukPemula.webp" 
                alt="Python for Beginners" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="2000">
                <h3>
                    <FormattedMessage
                        id='certifications19'
                        defaultMessage='MySQL Introduction'
                    />
                </h3>
                <img 
                src="img/certifications/PengenalanDatabaseMenggunakanMySQL.webp" 
                alt="MySQL Introduction" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="2100">
                <h3>
                    <FormattedMessage
                        id='coming-soon'
                        defaultMessage='Coming Soon'
                    />
                </h3>
                <img 
                src="" 
                alt="" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="2200">
                <h3>
                    <FormattedMessage
                        id='coming-soon'
                        defaultMessage='Coming Soon'
                    />
                </h3>
                <img 
                src="" 
                alt="" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="2300">
                <h3>
                    <FormattedMessage
                        id='certifications22'
                        defaultMessage='Database System IAII'
                    />
                </h3>
                <img 
                src="img/certifications/DatabasesSystemIAII.webp" 
                alt="Database System IAII" 
                style={{ width: '100%', height: 'auto' }} 
                />
            </div>
        </div>
    </section>
      </main>


      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default Certifications;