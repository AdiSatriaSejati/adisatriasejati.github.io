import React from 'react';
import '../../pages/Certifications/CertificationsPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Certifications = () => (
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
        </div>
        <div className='portafolio-btn'>
            <Link to="/Certifications">
                <ButtomGet/>
            </Link>
        </div>
    </section>
);

export default React.memo(Certifications);