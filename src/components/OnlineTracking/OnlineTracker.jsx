import React, { useEffect, useState, useCallback } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, serverTimestamp } from 'firebase/database';
import './OnlineTracker.css';

// Pindahkan config ke .env
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const OnlineTracker = () => {
    const [onlineUsers, setOnlineUsers] = useState(0);
    const [userLocation, setUserLocation] = useState(null);
    const [db, setDb] = useState(null);
    const [connectionError, setConnectionError] = useState(false);

    // Inisialisasi Firebase dengan error handling
    useEffect(() => {
        try {
            const app = initializeApp(firebaseConfig);
            const database = getDatabase(app);
            setDb(database);

            // Cek koneksi database
            const connectedRef = ref(database, '.info/connected');
            onValue(connectedRef, (snap) => {
                if (snap.val() === false) {
                    setConnectionError(true);
                } else {
                    setConnectionError(false);
                }
            });

        } catch (error) {
            console.error('Firebase initialization error:', error);
            setConnectionError(true);
        }
    }, []);

    // Fungsi untuk mendapatkan lokasi user menggunakan API alternatif
    const getUserLocation = useCallback(async () => {
        try {
            // Menggunakan API alternatif yang mendukung CORS
            const response = await fetch('https://api.db-ip.com/v2/free/self', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (!response.ok) throw new Error('Location fetch failed');
            
            const data = await response.json();
            return {
                city: data.city || 'Unknown City',
                country: data.countryName || 'Unknown Country'
            };
        } catch (error) {
            console.error('Location fetch error:', error);
            return {
                city: 'Unknown City',
                country: 'Unknown Country'
            };
        }
    }, []);

    // Fungsi untuk update user status
    const updateUserStatus = useCallback(async (userRef, status, locationData) => {
        try {
            await set(userRef, {
                timestamp: serverTimestamp(),
                lastPing: Date.now(),
                location: locationData?.city || 'Unknown City',
                country: locationData?.country || 'Unknown Country',
                status: status
            });
        } catch (error) {
            console.error('Status update error:', error);
        }
    }, []);

    useEffect(() => {
        if (!db) return;

        let intervalId;
        let unsubscribe;
        const sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        const setupRealtimeListeners = async () => {
            try {
                const locationData = await getUserLocation();
                setUserLocation(locationData?.city);

                const userRef = ref(db, `online_users/${sessionId}`);
                await updateUserStatus(userRef, 'online', locationData);

                // Realtime listener
                const usersRef = ref(db, 'online_users');
                unsubscribe = onValue(usersRef, (snapshot) => {
                    if (snapshot.exists()) {
                        const users = snapshot.val();
                        const now = Date.now();
                        const activeUsers = Object.values(users).filter(user => 
                            now - user.lastPing < 10000 && user.status === 'online'
                        );
                        setOnlineUsers(activeUsers.length);
                    } else {
                        setOnlineUsers(0);
                    }
                });

                // Update interval
                intervalId = setInterval(async () => {
                    await updateUserStatus(userRef, 'online', locationData);
                }, 5000);
            } catch (error) {
                console.error('Setup error:', error);
            }
        };

        setupRealtimeListeners();

        // Cleanup
        return () => {
            if (intervalId) clearInterval(intervalId);
            if (unsubscribe) unsubscribe();
            
            const userRef = ref(db, `online_users/${sessionId}`);
            updateUserStatus(userRef, 'offline', null)
                .then(() => {
                    setTimeout(() => {
                        set(userRef, null);
                    }, 10000);
                })
                .catch(console.error);
        };
    }, [db, getUserLocation, updateUserStatus]);

    // Render dengan error handling
    if (connectionError) {
        return null; // Atau tampilkan fallback UI yang sesuai
    }

    return (
        <div className="online-tracker">
            <div className="tracker-container">
                <div className="online-count">
                    <span className="pulse"></span>
                    <span>{onlineUsers} online</span>
                </div>
                {userLocation && (
                    <div className="location-info">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{userLocation}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default React.memo(OnlineTracker);