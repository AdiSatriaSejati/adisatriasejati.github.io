import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";
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
            const analytics = getAnalytics(app);
            const database = getDatabase(app);
            setDb(database);
        } catch (error) {
            console.error("Firebase initialization error:", error);
        }
    }, []);

    useEffect(() => {
        if (!db) return;

        // Generate ID unik untuk user
        const userId = Math.random().toString(36).substr(2, 9);
        
        // Dapatkan lokasi user menggunakan ipapi.co
        const getUserLocation = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                setUserLocation(data.city);
                
                // Update data user di Firebase
                const userRef = ref(db, `online_users/${userId}`);
                await set(userRef, {
                    timestamp: Date.now(),
                    location: data.city,
                    country: data.country_name,
                    lastActive: new Date().toISOString()
                });
            } catch (error) {
                console.error('Error getting location:', error);
            }
        };

        getUserLocation();

        // Listen untuk perubahan jumlah user online
        const usersRef = ref(db, 'online_users');
        const unsubscribe = onValue(usersRef, (snapshot) => {
            if (snapshot.exists()) {
                const users = snapshot.val();
                const activeUsers = Object.values(users).filter(user => 
                    Date.now() - user.timestamp < 300000 // 5 menit timeout
                );
                setOnlineUsers(activeUsers.length);
            }
        });

        // Update status user setiap 30 detik
        const intervalId = setInterval(async () => {
            if (userLocation) {
                const userRef = ref(db, `online_users/${userId}`);
                await set(userRef, {
                    timestamp: Date.now(),
                    location: userLocation,
                    lastActive: new Date().toISOString()
                });
            }
        }, 30000);

        // Cleanup saat component unmount
        return () => {
            if (db) {
                const userRef = ref(db, `online_users/${userId}`);
                set(userRef, null);
                unsubscribe();
                clearInterval(intervalId);
            }
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