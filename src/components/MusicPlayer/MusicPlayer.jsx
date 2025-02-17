import React, { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(process.env.PUBLIC_URL + '/ambient.mp3'));
    const hasInteractedRef = useRef(false);

    useEffect(() => {
        // Setup audio
        audioRef.current.loop = true;
        audioRef.current.volume = 0.45;

        // Event listener untuk user interaction
        const handleInteraction = () => {
            if (!hasInteractedRef.current) {
                hasInteractedRef.current = true;
                audioRef.current.play().catch(() => {
                    // Handle jika autoplay diblokir browser
                    console.log('Autoplay blocked by browser');
                });
                setIsPlaying(true);
            }
        };

        // Tambahkan event listeners untuk berbagai interaksi user
        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);
        document.addEventListener('keydown', handleInteraction);
        document.addEventListener('scroll', handleInteraction);

        // Cleanup function
        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
            document.removeEventListener('scroll', handleInteraction);
        };
    }, []);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button 
            onClick={toggleMusic} 
            className={`music-toggle ${isPlaying ? 'active' : ''}`}
            aria-label={isPlaying ? "Pause music" : "Play music"}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default MusicPlayer;