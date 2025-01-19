import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src="img/projects/turtle.webp"
                            alt='project'

                        />
                        <div className="content">
                            <h3>Logo Universitas BSI</h3>
                            <p>
                                Group Project
                            </p>
                            <p className="tecnologias">
                                Python
                                <span> -</span> Turtle
                            </p>
                            <a href="https://github.com/AdiSatriaSejati/Project_Dasar_Pemrograman_Semester-1" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src="img/projects/WebUniversity.webp"
                            alt='project'

                        />
                        <div className="content">
                            <h3>University Home Page</h3>
                            <p>
                                Group Project
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://12-2-a-03-github-io.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/AdiSatriaSejati/12.2A.03.github.io" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src="img/projects/CI4.gif"
                            alt='project'

                        />
                        <div className="content">
                            <h3>Library Administration Web</h3>
                            <p>
                                Group Project
                            </p>
                            <p className="tecnologias">
                                PHP
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> CodeIgniter 4
                                <span> -</span> Bootstrap 5
                                <span> -</span> APEXCHARTS
                                <span> -</span> Tabler Icons
                                <span> -</span> Endroid QR Code Generator
                                <span> -</span> Composer
                                <span> -</span> MySQL
                            </p>
                            <a href="https://github.com/AdiSatriaSejati/CI4_E-LibraryAradh" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src="img/projects/flutter.webp"
                            alt='project'

                        />
                        <div className="content">
                            <h3>Flame Puzzle Challenge</h3>
                            <p>
                                Group Project
                            </p>
                            <p className="tecnologias">
                                Dart
                                <span> -</span> Flutter
                                <span> -</span> Audioplayers
                                <span> -</span> Carousel_slider
                                <span> -</span> Flame
                                <span> -</span> Card_swiper
                                <span> -</span> Lottie
                            </p>
                            <a href="https://github.com/AdiSatriaSejati/flutter_kelompok_1" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src="img/projects/vigenesia.webp"
                            alt='project'

                        />
                        <div className="content">
                            <h3>Vigenesia</h3>
                            <p>
                                Group Project
                            </p>
                            <p className="tecnologias">
                                Flutter
                                <span> -</span> Dart
                                <span> -</span> CodeIgniter_3
                                <span> -</span> PHP
                                <span> -</span> MySQL
                                <span> -</span> REST API
                            </p>
                            <a href="https://github.com/AdiSatriaSejati/Vigenesia-API" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository API</a>
                            <a href="https://github.com/AdiSatriaSejati/Vigenesia-Flutter" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);