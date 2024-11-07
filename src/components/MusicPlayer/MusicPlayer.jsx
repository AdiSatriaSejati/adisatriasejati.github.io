import React, { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true); // Set default to true
    const audioRef = useRef(new Audio(process.env.PUBLIC_URL + '/ambient.mp3'));

    useEffect(() => {
        // Setup audio
        audioRef.current.loop = true;

        const playAudio = async () => {
            try {
                await audioRef.current.play();
            } catch (err) {
                console.error("Autoplay failed:", err);
            }
        };

        // Cek jika audio sudah dimuat
        audioRef.current.oncanplaythrough = playAudio;

        // Cleanup function
        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
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
            className="music-toggle"
            style={{ cursor: 'pointer' }}
        >
            {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
        </button>
    );
};

export default MusicPlayer;