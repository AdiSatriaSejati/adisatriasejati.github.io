import React from 'react';
import './CertificationsPage.css'
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion'
import { FormattedMessage } from 'react-intl';

const Certifications = () => {
  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

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
            <div className="columns" data-aos="fade-up" data-aos-delay="800">
                <h3>
                    <FormattedMessage
                        id='certifications7'
                        defaultMessage='Professional Engineer Registration'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Profesi%20Insinyur%20Dan%20Surat%20Tanda%20Registrasi%20Insinyur%20(STRI).png?updatedAt=1729186038221" alt="STRI" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="900">
                <h3>
                    <FormattedMessage
                        id='certifications8'
                        defaultMessage='Self Preparation & Action Strategy'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Strategi%20Persiapan%20Diri%20&%20Aksi%20Untuk%20Meraih%20Pekerjaan.png?updatedAt=1729186038452" alt="SP&AS" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1000">
                <h3>
                    <FormattedMessage
                        id='certifications9'
                        defaultMessage='Computer & Network Engineering'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/SERTIFIKAT%20TKJ.jpg?updatedAt=1729187200599" alt="TKJ" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1100">
                <h3>
                    <FormattedMessage
                        id='certifications10'
                        defaultMessage='2nd Moderna Covid-19 Vaccination'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Vaksinasi%20Covid-19%20Moderna%20ke-2.png?updatedAt=1729187697481" alt="vaccination" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1200">
                <h3>
                    <FormattedMessage
                        id='certifications11'
                        defaultMessage='Algorithms & Basic Programming'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Algoritma%20dan%20Pemrograman%20Dasar.png?updatedAt=1729188459488" alt="ABP" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1300">
                <h3>
                    <FormattedMessage
                        id='certifications12'
                        defaultMessage='Learn GIT for Beginners'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Belajar%20GIT%20untuk%20Pemula.png?updatedAt=1729188739194" alt="GIT" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1400">
                <h3>
                    <FormattedMessage
                        id='certifications13'
                        defaultMessage='Learn Basic JavaScript'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Belajar%20JavaScript%20Dasar.png?updatedAt=1729188896747" alt="JavaScript" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1500">
                <h3>
                    <FormattedMessage
                        id='certifications14'
                        defaultMessage='Basic HTML & CSS'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/HTML%20&%20CSS%20Dasar.png?updatedAt=1729189192428" alt="HTML-CSS" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1600">
                <h3>
                    <FormattedMessage
                        id='certifications15'
                        defaultMessage='Advanced Text Editor'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Mahir%20menggunakan%20Text%20Editor%20buat%20Pemula.png?updatedAt=1729189551828" alt="IDE" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1700">
                <h3>
                    <FormattedMessage
                        id='certifications16'
                        defaultMessage='Legendary Js Library'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Membangun%20Frontend%20dengan%20Jquery,%20Library%20Js%20Legendaris.png?updatedAt=1729190924788" alt="Legendary Js Library" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1800">
                <h3>
                    <FormattedMessage
                        id='certifications17'
                        defaultMessage='Get to know programming'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Mengenal%20Pemrograman%20komputer.png?updatedAt=1729190924792" alt="Get to know programming" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="1900">
                <h3>
                    <FormattedMessage
                        id='certifications18'
                        defaultMessage='Python for Beginners'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Pengenalan%20Database%20Menggunakan%20MySQL.png?updatedAt=1729190924856" alt="Python for Beginners" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="2000">
                <h3>
                    <FormattedMessage
                        id='certifications19'
                        defaultMessage='MySQL Introduction'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Pemrograman%20Python%20untuk%20Pemula.png?updatedAt=1729190924864" alt="MySQL Introduction" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="2100">
                <h3>
                    <FormattedMessage
                        id='coming-soon'
                        defaultMessage='Coming Soon'
                    />
                </h3>
                <img src="" alt="" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="2200">
                <h3>
                    <FormattedMessage
                        id='coming-soon'
                        defaultMessage='Coming Soon'
                    />
                </h3>
                <img src="" alt="" />
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="2300">
                <h3>
                    <FormattedMessage
                        id='certifications22'
                        defaultMessage='Database System IAII'
                    />
                </h3>
                <img src="https://ik.imagekit.io/AdiSatriaSejati/Databases%20System%20IAII.png?updatedAt=1729191519415" alt="Database System IAII" />
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