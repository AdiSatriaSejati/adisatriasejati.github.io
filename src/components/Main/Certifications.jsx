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
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Belajar%20Dasar%20Pemrograman%20Web.png?updatedAt=1729105707846" alt="Learn Basic Web Programming" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='certifications2'
                        defaultMessage='Front End Development Libraries'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Front%20End%20Development%20Libraries.png?updatedAt=1729106041951" alt="Front End Development Libraries" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <h3>
                    <FormattedMessage
                        id='certifications3'
                        defaultMessage='cPanel User Interface Proficiency'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/cPanel%20User%20Interface%20Proficiency.png?updatedAt=1729143736944" alt="cPanel User Interface Proficiency" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <h3>
                    <FormattedMessage
                        id='certifications4'
                        defaultMessage='Early Financial Planning'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Perencanaan%20Keuangan%20Sejak%20Dini.png?updatedAt=1729143914899" alt="Perencanaan Keuangan Sejak Dini" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <h3>
                    <FormattedMessage
                        id='certifications5'
                        defaultMessage='Accelerate Digital Transformation'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Akselerasi%20Transformasi%20Digital%20Untuk%20Mendukung%20Ekonomi%20Kreatif.png?updatedAt=1729144027028" alt="Akselerasi Transformasi Digital" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <h3>
                    <FormattedMessage
                        id='certifications6'
                        defaultMessage='Creativity Expert Training'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/PPKM%20(Pelatihan%20Pakar%20Kreatifitas%20Mahasiswa).png?updatedAt=1729144214630" alt="PPM" />
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