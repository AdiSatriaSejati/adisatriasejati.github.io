import React, { createContext, useState, useRef } from 'react';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(process.env.PUBLIC_URL + '/ambient.mp3'));
    const hasInteractedRef = useRef(false);

    // Setup audio
    audioRef.current.loop = true;
    audioRef.current.volume = 0.45;
    audioRef.current.preload = 'auto';
    audioRef.current.playsInline = true;

    return (
        <MusicContext.Provider value={{ isPlaying, setIsPlaying, audioRef, hasInteractedRef }}>
            {children}
        </MusicContext.Provider>
    );
}; 