import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Menghitung progress scroll dan visibility
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / winHeight) * 100;
        
        setScrollProgress(scrolled);
        setIsVisible(scrollTop > 300);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Menghitung stroke-dashoffset untuk progress circle
    const calculateProgress = () => {
        const progress = 150 - (scrollProgress * 1.5);
        return Math.min(Math.max(progress, 0), 150);
    };

    return (
        <button 
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <div className="scroll-circle">
                <svg className="progress-circle" viewBox="0 0 50 50">
                    <circle
                        cx="25"
                        cy="25"
                        r="24"
                        style={{ strokeDashoffset: calculateProgress() }}
                    />
                </svg>
                <i className="fas fa-chevron-up"></i>
            </div>
        </button>
    );
};

export default ScrollToTop;