import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { 
    getDatabase, 
    ref, 
    onValue, 
    set,
    remove,
    serverTimestamp,
    query,
    orderByChild 
} from 'firebase/database';
import './OnlineTracker.css';

const CLEANUP_INTERVAL = 5000; // 5 detik
const SESSION_TIMEOUT = 30000; // 30 menit

const OnlineTracker = () => {
    const [onlineUsers, setOnlineUsers] = useState(0);
    const [connectionError, setConnectionError] = useState(false);

    useEffect(() => {
        let userRef;
        let onlineRef;
        let unsubscribe;
        let cleanupInterval;

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
                
                // Gunakan sessionStorage untuk menyimpan userId
                let userId = sessionStorage.getItem('userId');
                if (!userId) {
                    userId = `user-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
                    sessionStorage.setItem('userId', userId);
                }

                userRef = ref(db, `users/${userId}`);
                onlineRef = ref(db, 'users');

                // Set user online dengan timestamp
                await set(userRef, {
                    timestamp: serverTimestamp(),
                    lastActive: Date.now()
                });

                // Update lastActive setiap 30 detik
                const updateLastActive = async () => {
                    try {
                        await set(userRef, {
                            timestamp: serverTimestamp(),
                            lastActive: Date.now()
                        });
                    } catch (error) {
                        console.error('Error updating lastActive:', error);
                    }
                };

                // Cleanup inactive users
                const cleanupInactiveUsers = async () => {
                    const usersQuery = query(onlineRef, orderByChild('lastActive'));
                    onValue(usersQuery, async (snapshot) => {
                        if (snapshot.exists()) {
                            const now = Date.now();
                            const users = snapshot.val();
                            let activeCount = 0;

                            for (const [key, user] of Object.entries(users)) {
                                if (now - user.lastActive > SESSION_TIMEOUT) {
                                    // Remove inactive user
                                    await remove(ref(db, `users/${key}`));
                                } else {
                                    activeCount++;
                                }
                            }
                            setOnlineUsers(activeCount);
                        } else {
                            setOnlineUsers(0);
                        }
                    }, {
                        onlyOnce: true
                    });
                };

                // Set intervals for updates
                const activeInterval = setInterval(updateLastActive, CLEANUP_INTERVAL);
                cleanupInterval = setInterval(cleanupInactiveUsers, CLEANUP_INTERVAL);

                // Initial cleanup and count
                await cleanupInactiveUsers();

                // Listen for changes
                unsubscribe = onValue(onlineRef, (snapshot) => {
                    if (snapshot.exists()) {
                        const now = Date.now();
                        const users = snapshot.val();
                        const activeUsers = Object.values(users).filter(
                            user => now - user.lastActive <= SESSION_TIMEOUT
                        );
                        setOnlineUsers(activeUsers.length);
                        setConnectionError(false);
                    } else {
                        setOnlineUsers(0);
                    }
                }, (error) => {
                    console.error('Database error:', error);
                    setConnectionError(true);
                });

                // Cleanup on page unload
                window.addEventListener('beforeunload', async () => {
                    await remove(userRef);
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
            if (cleanupInterval) {
                clearInterval(cleanupInterval);
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