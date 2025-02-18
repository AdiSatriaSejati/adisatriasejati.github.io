import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { 
    getDatabase, 
    ref, 
    onValue, 
    set, 
    serverTimestamp, 
    onDisconnect
} from 'firebase/database';
import './OnlineTracker.css';

const OnlineTracker = () => {
    const [onlineUsers, setOnlineUsers] = useState(0);
    const [connectionError, setConnectionError] = useState(false);

    useEffect(() => {
        let userRef;
        let connectedRef;
        
        try {
            // Inisialisasi Firebase
            const app = initializeApp({
                apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
                authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
                databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
                projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
                storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
                messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
                appId: process.env.REACT_APP_FIREBASE_APP_ID
            });

            const db = getDatabase(app);
            const userId = generateUserId();

            // Cek koneksi
            connectedRef = ref(db, '.info/connected');
            userRef = ref(db, `online-users/${userId}`);

            // Monitor koneksi
            const unsubscribe = onValue(connectedRef, (snap) => {
                if (snap.val() === true) {
                    setConnectionError(false);

                    // Set user status
                    set(userRef, {
                        timestamp: serverTimestamp()
                    }).catch(console.error);

                    // Cleanup saat disconnect
                    onDisconnect(userRef).remove();
                } else {
                    setConnectionError(true);
                }
            }, (error) => {
                console.error('Connection error:', error);
                setConnectionError(true);
            });

            // Monitor jumlah user online
            const onlineRef = ref(db, 'online-users');
            const onlineUnsubscribe = onValue(onlineRef, (snapshot) => {
                setOnlineUsers(snapshot.size || 0);
            });

            // Cleanup
            return () => {
                unsubscribe();
                onlineUnsubscribe();
                if (userRef) {
                    set(userRef, null).catch(console.error);
                }
            };

        } catch (error) {
            console.error('Firebase initialization error:', error);
            setConnectionError(true);
        }
    }, []); // Empty dependency array karena tidak ada dependencies

    // Jika ada error, tampilkan nothing
    if (connectionError) {
        return null;
    }

    return (
        <div className="online-tracker">
            <div className="tracker-container">
                <div className="online-count">
                    <span className="pulse"></span>
                    <span>{onlineUsers} online</span>
                </div>
            </div>
        </div>
    );
};

// Helper function untuk generate unique ID
const generateUserId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export default React.memo(OnlineTracker);