import React, { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(process.env.PUBLIC_URL + '/ambient.mp3'));
    const hasInteractedRef = useRef(false);

    useEffect(() => {
        // Setup audio dengan konfigurasi untuk mobile
        audioRef.current.loop = true;
        audioRef.current.volume = 0.45;
        audioRef.current.preload = 'auto';
        audioRef.current.playsInline = true; // Penting untuk iOS

        const handleInteraction = async () => {
            if (!hasInteractedRef.current) {
                hasInteractedRef.current = true;
                try {
                    // Unlock audio context untuk mobile browsers
                    if (typeof AudioContext !== 'undefined') {
                        const audioContext = new AudioContext();
                        await audioContext.resume();
                    }
                    
                    // Play dengan promise handling
                    const playPromise = audioRef.current.play();
                    if (playPromise !== undefined) {
                        playPromise
                            .then(() => {
                                setIsPlaying(true);
                            })
                            .catch(error => {
                                console.log('Autoplay prevented:', error);
                                setIsPlaying(false);
                            });
                    }
                } catch (error) {
                    console.log('Audio playback error:', error);
                }
            }
        };

        // Event listeners khusus untuk mobile
        const mobileEvents = ['touchstart', 'touchend'];
        const allEvents = [...mobileEvents, 'click', 'keydown', 'scroll'];

        allEvents.forEach(event => {
            document.addEventListener(event, handleInteraction, { passive: true });
        });

        // Cleanup
        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            allEvents.forEach(event => {
                document.removeEventListener(event, handleInteraction);
            });
        };
    }, []);

    const toggleMusic = async () => {
        try {
            if (isPlaying) {
                await audioRef.current.pause();
            } else {
                // Unlock audio context saat tombol ditekan
                if (typeof AudioContext !== 'undefined') {
                    const audioContext = new AudioContext();
                    await audioContext.resume();
                }
                await audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        } catch (error) {
            console.log('Toggle music error:', error);
        }
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