import React, { useEffect, useContext } from 'react';
import { MusicContext } from '../../context/MusicContext';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const { isPlaying, setIsPlaying, audioRef, hasInteractedRef } = useContext(MusicContext);

    useEffect(() => {
        const audio = audioRef.current;
        
        const handleInteraction = async () => {
            if (!hasInteractedRef.current) {
                hasInteractedRef.current = true;
                try {
                    if (typeof AudioContext !== 'undefined') {
                        const audioContext = new AudioContext();
                        await audioContext.resume();
                    }
                    
                    const playPromise = audio.play();
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

        const mobileEvents = ['touchstart', 'touchend'];
        const allEvents = [...mobileEvents, 'click', 'keydown', 'scroll'];

        allEvents.forEach(event => {
            document.addEventListener(event, handleInteraction, { passive: true });
        });

        return () => {
            allEvents.forEach(event => {
                document.removeEventListener(event, handleInteraction);
            });
        };
    }, [setIsPlaying]);

    const toggleMusic = async () => {
        const audio = audioRef.current;
        try {
            if (isPlaying) {
                await audio.pause();
            } else {
                if (typeof AudioContext !== 'undefined') {
                    const audioContext = new AudioContext();
                    await audioContext.resume();
                }
                await audio.play();
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