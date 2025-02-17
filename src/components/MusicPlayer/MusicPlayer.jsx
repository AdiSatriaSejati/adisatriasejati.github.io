import React, { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(process.env.PUBLIC_URL + '/ambient.mp3'));

    useEffect(() => {
        // Setup audio
        audioRef.current.loop = true;
        audioRef.current.volume = 0.45;

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