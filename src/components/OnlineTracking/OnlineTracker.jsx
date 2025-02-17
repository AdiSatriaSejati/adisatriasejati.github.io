import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, serverTimestamp } from 'firebase/database';
import './OnlineTracker.css';

const firebaseConfig = {
  apiKey: "AIzaSyD_q9Cf_7-8BXdcM3z-5sT23saMDke8sQ4",
  authDomain: "adisatriasejati-1512.firebaseapp.com",
  databaseURL: "https://adisatriasejati-1512-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "adisatriasejati-1512",
  storageBucket: "adisatriasejati-1512.firebasestorage.app",
  messagingSenderId: "953799261500",
  appId: "1:953799261500:web:be24c74d27fc05b7887239",
  measurementId: "G-3KSPEETE36"
};

const OnlineTracker = () => {
    const [onlineUsers, setOnlineUsers] = useState(0);
    const [userLocation, setUserLocation] = useState(null);
    const [db, setDb] = useState(null);

    useEffect(() => {
        try {
            // Inisialisasi Firebase sekali saja
            const app = initializeApp(firebaseConfig);
            const database = getDatabase(app);
            setDb(database);
        } catch (error) {
            console.error("Firebase initialization error:", error);
        }
    }, []);

    useEffect(() => {
        if (!db) return;

        // Generate unique ID untuk setiap sesi
        const sessionId = Math.random().toString(36).substr(2, 9);
        
        // Dapatkan lokasi user menggunakan ipapi.co
        const getUserLocation = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                setUserLocation(data.city);
                
                // Update data user dengan timestamp server
                const userRef = ref(db, `online_users/${sessionId}`);
                await set(userRef, {
                    timestamp: serverTimestamp(),
                    lastPing: Date.now(),
                    location: data.city,
                    country: data.country_name,
                    browser: navigator.userAgent,
                    status: 'online'
                });
            } catch (error) {
                console.error('Error getting location:', error);
            }
        };

        getUserLocation();

        // Realtime listener untuk user online
        const usersRef = ref(db, 'online_users');
        const unsubscribe = onValue(usersRef, (snapshot) => {
            if (snapshot.exists()) {
                const users = snapshot.val();
                const now = Date.now();
                const activeUsers = Object.values(users).filter(user => {
                    // Menganggap user online jika ping terakhir < 10 detik
                    return now - user.lastPing < 10000;
                });
                setOnlineUsers(activeUsers.length);
            } else {
                setOnlineUsers(0);
            }
        });

        // Update status setiap 5 detik
        const intervalId = setInterval(async () => {
            const userRef = ref(db, `online_users/${sessionId}`);
            await set(userRef, {
                timestamp: serverTimestamp(),
                lastPing: Date.now(),
                location: userLocation,
                status: 'online'
            });
        }, 5000);

        // Cleanup saat component unmount
        return () => {
            const userRef = ref(db, `online_users/${sessionId}`);
            set(userRef, {
                status: 'offline',
                lastPing: Date.now()
            }).then(() => {
                // Hapus data user setelah 10 detik
                setTimeout(() => {
                    set(userRef, null);
                }, 10000);
            });
            unsubscribe();
            clearInterval(intervalId);
        };
    }, [db, userLocation]);

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

export default OnlineTracker;