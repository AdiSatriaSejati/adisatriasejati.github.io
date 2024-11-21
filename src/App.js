import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import DOMPurify from 'dompurify';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Certifications from "./pages/Certifications/CertificationsPage";
import Project from "./pages/Project/ProjectPage";

/* Components */
import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer"; // Import MusicPlayer
import Cursor from "./components/Cursor/Cursor"; // Import Cursor component

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);

        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === "visible") {
                document.title = "Adi Satria Sejati";
                document.querySelector("#favicon").setAttribute("href", "https://ik.imagekit.io/AdiSatriaSejati/Adi-Satria-Sejati.ico?updatedAt=1730032961594");
            } else {
                document.title = "Come Back";
                document.querySelector("#favicon").setAttribute("href", "https://ik.imagekit.io/AdiSatriaSejati/folded.png?updatedAt=1729174775087");
            }
        });

        // Menonaktifkan klik kanan
        document.addEventListener('contextmenu', (event) => event.preventDefault());

        // Menonaktifkan drag and drop
        document.addEventListener('dragstart', (event) => event.preventDefault());

        // Menonaktifkan Control + A
        document.addEventListener('keydown', (event) => {
            if (event.ctrlKey && event.key === 'a') {
                event.preventDefault();
            }
        });

        // Menonaktifkan tombol F12
        document.addEventListener('keydown', (event) => {
            if (event.key === 'F12') {
                event.preventDefault();
            }
        });

        // Menonaktifkan Control + P
        document.addEventListener('keydown', (event) => {
            if (event.ctrlKey && event.key === 'p') {
                event.preventDefault();
            }
        });

        // Menonaktifkan Control + S
        document.addEventListener('keydown', (event) => {
            if (event.ctrlKey && event.key === 's') {
                event.preventDefault();
            }
        });

        // Menonaktifkan semua tombol keyboard
        document.addEventListener('keydown', (event) => {
            event.preventDefault();
        });

        return () => {
            document.removeEventListener('visibilitychange', function () {});
            document.removeEventListener('contextmenu', (event) => event.preventDefault());
            document.removeEventListener('dragstart', (event) => event.preventDefault());
            // Menghapus listener untuk menonaktifkan semua tombol keyboard
            document.removeEventListener('keydown', (event) => {
                event.preventDefault();
            });
        };
    }, []);

    return (
        <>
            <RouterScrollTop />
            <MusicPlayer />
            <Cursor />
            {loading ? (
                <div className='loading-pag'>
                    <div className="loader">
                        <span className="typing-animation">Wa'alaikumsalam</span>
                    </div>
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Certifications" element={<Certifications />} />
                    <Route path="/project" element={<Project />} />
                </Routes>
            )}
        </>
    );
}

export default App;
