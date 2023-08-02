import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css'

const Dashboard = () => {
    const [userName, setUserName] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const storedUserName = localStorage.getItem('username');
        setUserName(storedUserName);

        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.user}>Welcome, {userName}!</h2>
            <div className={styles.clock}>
                <h3>Current Time:</h3>
                <p>{currentTime.toLocaleTimeString()}</p>
            </div>
        </div>
    );
};

export default Dashboard;
