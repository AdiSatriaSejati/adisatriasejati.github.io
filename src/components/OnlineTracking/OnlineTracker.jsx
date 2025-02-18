import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { 
    getDatabase, 
    ref, 
    onValue, 
    set,
    remove,
    serverTimestamp 
} from 'firebase/database';
import './OnlineTracker.css';

const OnlineTracker = () => {
    const [onlineUsers, setOnlineUsers] = useState(0);
    const [connectionError, setConnectionError] = useState(false);

    useEffect(() => {
        let userRef;
        let onlineRef;
        let unsubscribe;

        const initFirebase = async () => {
            try {
                // Initialize Firebase
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
                const userId = `user-${Date.now()}`;
                userRef = ref(db, `users/${userId}`);
                onlineRef = ref(db, 'users');

                // Set user online
                await set(userRef, {
                    timestamp: serverTimestamp(),
                    online: true
                });

                // Listen for online users
                unsubscribe = onValue(onlineRef, (snapshot) => {
                    if (snapshot.exists()) {
                        const users = snapshot.val();
                        const count = Object.keys(users).length;
                        setOnlineUsers(count);
                        setConnectionError(false);
                    } else {
                        setOnlineUsers(0);
                    }
                }, (error) => {
                    console.error('Database error:', error);
                    setConnectionError(true);
                });

            } catch (error) {
                console.error('Firebase init error:', error);
                setConnectionError(true);
            }
        };

        initFirebase();

        // Cleanup
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
            if (userRef) {
                remove(userRef).catch(console.error);
            }
        };
    }, []);

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

export default React.memo(OnlineTracker);