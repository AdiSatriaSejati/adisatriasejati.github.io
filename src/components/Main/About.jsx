import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Adi Satria Sejati and I am a Full-Stack Developer.'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='Diploma 3 Information Systems student with experience in e-commerce administration, IT support, and web development. Having the ability to manage marketplaces, product content optimization, and understanding of ERP systems. Skilled in using Laravel, MySQL, and GitHub for software project management. Accustomed to working independently or in a team in a remote or hybrid work environment.'
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age:'
                                />
                            </span>
                            25
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='Hobbies'
                                    defaultMessage='Hobbies: '
                                />
                            </span>
                            <FormattedMessage
                        id='my-Hobbies'
                        defaultMessage='Billiards, Badminton, Cycling, Chess, Futsal & Programming'
                    />
                                
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> 12221455@bsi.ac.id</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            Tangerang, Indonesia
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>
                    <FormattedMessage
                        id='skills'
                        defaultMessage='Skills'
                    />
                </h3>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="Dart" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" />
                        <h5>Dart</h5>
                    </div>
                    <div>
                        <img alt="Sass" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                        <h5>Sass</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <img alt="jQuery" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
                        <h5>jQuery</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    <div>
                        <img alt="Flutter" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/flutter/flutter-original.svg" />
                        <h5>Flutter</h5>
                    </div>
                </div>
                <h4>Back-End</h4>
                <div className="skill">
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="php" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                        <h5>PHP</h5>
                    </div>
                    <div>
                        <img alt="laravel" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                        <h5>Laravel</h5>
                    </div>
                    <div>
                        <img alt="codeigniter" className="icons-skils" src="https://www.svgrepo.com/show/353579/codeigniter.svg" />
                        <h5>CodeIgniter</h5>
                    </div>
                    <div>
                        <img alt="mysql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <img alt="python" className="icons-skils" src="https://www.vectorlogo.zone/logos/python/python-icon.svg" />
                        <h5>Python</h5>
                    </div>
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h4>
                <div className="skill">
                    <div>
                        <img alt="laragon" className="icons-skils" src="https://cdn.worldvectorlogo.com/logos/laragon.svg" title="laragon" />
                        <h5>Laragon</h5>
                    </div>
                    <div>
                        <img alt="cisco" className="icons-skils" src="https://raw.githubusercontent.com/bwks/vendor-icons-svg/702f2ac88acc71759ce623bc5000a596195e9db3/cisco-blue.svg" title="Cisco Packet Tracer" />
                        <h5>Packet Tracer</h5>
                    </div>
                    <div>
                        <img alt="VSCode" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="VS Code" />
                        <h5>VS Code</h5>
                    </div>
                    <div>
                        <img alt="Cursor" className="icons-skils" src="https://static.cdnlogo.com/logos/c/23/cursor.svg" title="Cursor" />
                        <h5>Cursor</h5>
                    </div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="Postman" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" title="Postman" />
                        <h5>Postman</h5>
                    </div>
                    <div>
                        <img alt="github" className="icons-skils" src="https://www.svgrepo.com/show/475654/github-color.svg" title="GitHub" />
                        <h5>GitHub</h5>
                    </div>
                    <div>
                        <img alt="virtualbox" className="icons-skils" src="https://www.vectorlogo.zone/logos/virtualbox/virtualbox-icon.svg" title="VirtualBox" />
                        <h5>VirtualBox</h5>
                    </div>
                    <div>
                        <img alt="obsstudio" className="icons-skils" src="https://raw.githubusercontent.com/obsproject/obs-studio/34735be09441101217c1efc625b1b8d32fccac65/UI/cmake/linux/icons/obs-logo-scalable.svg" title="OBS" />
                        <h5>OBS</h5>
                    </div>
                    <div>
                        <img alt="androidstudio" className="icons-skils" src="https://ik.imagekit.io/AdiSatriaSejati/logo-google-android-studio-2-svgrepo-com.svg?updatedAt=1729096345025" title="Android Studio" />
                        <h5>Android Studio</h5>
                    </div>
                    <div>
                        <img alt="Gimp" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" title="Gimp" id="Gimp" />
                        <h5>Gimp</h5>
                    </div>
                    <div>
                        <img alt="Filmora" className="icons-skils" src="https://ik.imagekit.io/AdiSatriaSejati/filmora-logo-icon.svg?updatedAt=1729202334732" title="Filmora" />
                        <h5>Filmora</h5>
                    </div>
                    <div>
                        <img alt="Photoshop" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" title="Adobe Photoshop" />
                        <h5>Adobe Photoshop</h5>
                    </div>
                    <div>
                        <img alt="PremierePro" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" title="Adobe Premiere Pro" />
                        <h5>Adobe Premiere Pro</h5>
                    </div>
                    <div>
                        <img alt="Claude" className="icons-skils" src="https://ik.imagekit.io/AdiSatriaSejati/claude-ai-icon.svg?updatedAt=1729096683479" title="Claude-AI" />
                        <h5>Claude AI</h5>
                    </div>
                    <div>
                        <img alt="ChatGPT" className="icons-skils" src="https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg" title="ChatGPT" />
                        <h5>ChatGPT</h5>
                    </div>
                    <div>
                        <img alt="Excel" className="icons-skils" src="https://www.svgrepo.com/show/373589/excel.svg" title="Excel" />
                        <h5>Excel</h5>
                    </div>
                    <div>
                        <img alt="PowerPoint" className="icons-skils" src="https://www.svgrepo.com/show/373989/powerpoint.svg" title="Power Point" />
                        <h5>Power Point</h5>
                    </div>
                    <div>
                        <img alt="Word" className="icons-skils" src="https://www.svgrepo.com/show/374187/word.svg" title="Word" />
                        <h5>Word</h5>
                    </div>
                    <div>
                        <img alt="ERP-System" className="icons-skils" src="https://ik.imagekit.io/AdiSatriaSejati/erp_9518635.png?updatedAt=1729205945128" title="ERP System" />
                        <h5>ERP System</h5>
                    </div>
                    <div>
                        <img alt="Vercel" className="icons-skils" src="https://github.com/devicons/devicon/raw/master/icons/vercel/vercel-original.svg" title="Vercel" />
                        <h5>Vercel</h5>
                    </div>
                </div>
                <h4>
                <FormattedMessage
                    id='soft-skills'
                    defaultMessage='Soft Skills'
                />
                </h4>
                <div className="skill">
                    <div>
                        <img alt="Independence" className="icons-skils" src="https://www.svgrepo.com/show/416659/user-profile-person.svg" />
                        <h5>
                            <FormattedMessage
                        id='independence'
                        defaultMessage='Independence'
                        />
                    </h5>
                    </div>
                    <div>
                        <img alt="TeamWork" className="icons-skils" src="https://www.svgrepo.com/show/416652/leadership-team-group.svg" />
                        <h5>
                            <FormattedMessage
                        id='team-work'
                        defaultMessage='TeamWork'
                        />
                    </h5>
                    </div>
                    <div>
                        <img alt="Persistence" className="icons-skils" src="https://freesvg.org/img/Power-Fist-bw-2015060409.png" />
                        <h5>
                            <FormattedMessage
                        id='persistence'
                        defaultMessage='Persistence'
                        />
                    </h5>
                    </div>
                    <div>
                        <img alt="Work-Ethic" className="icons-skils" src="https://www.svgrepo.com/show/491897/quality-certification.svg" />
                        <h5>
                            <FormattedMessage
                        id='work-ethic'
                        defaultMessage='Work Ethic'
                        />
                    </h5>
                    </div>
                    <div>
                        <img alt="Creativity" className="icons-skils" src="https://www.svgrepo.com/show/530399/inspiration.svg" />
                        <h5>
                            <FormattedMessage
                        id='creativity'
                        defaultMessage='Creativity'
                        />
                    </h5>
                    </div>
                    <div>
                        <img alt="Adaptability" className="icons-skils" src="https://ik.imagekit.io/AdiSatriaSejati/adaptation-svgrepo-com%20(1).svg?updatedAt=1729094492017" />
                        <h5>
                            <FormattedMessage
                        id='adaptability'
                        defaultMessage='Adaptability'
                        />
                    </h5>
                    </div>
                    <div>
                        <img alt="Patience" className="icons-skils" src="https://ik.imagekit.io/AdiSatriaSejati/heart-in-hands-svgrepo-com.svg?updatedAt=1729094361615" />
                        <h5>
                            <FormattedMessage
                            id='patience'
                            defaultMessage='Patience'
                            />
                        </h5>
                    </div>
                    <div>
                        <img alt="Orientation-Details" className="icons-skils" src="https://www.svgrepo.com/show/491892/details.svg" />
                        <h5>
                            <FormattedMessage
                            id='orientation-details'
                            defaultMessage='Orientation Details'
                            />
                        </h5>
                    </div>
                    <div>
                        <img alt="Emotional-Intelligence" className="icons-skils" src="https://ik.imagekit.io/AdiSatriaSejati/intelligence-svgrepo-com.svg?updatedAt=1729094841435" />
                        <h5>
                            <FormattedMessage
                            id='emotional-intelligence'
                            defaultMessage='Emotional Intelligence'
                            />
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);