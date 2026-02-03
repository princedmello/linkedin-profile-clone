"use client";

import { useState, useEffect } from 'react';
import styles from './WelcomePopup.module.css';

export default function WelcomePopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage to see if already visited content
        const hasVisited = localStorage.getItem('hasVisitedLinkedInPortfolio');

        if (!hasVisited) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000); // 2 seconds delay

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('hasVisitedLinkedInPortfolio', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className={styles.title}>This is not LinkedIn</h2>
                    <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                            <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                        </svg>
                    </button>
                </div>
                <div className={styles.body}>
                    Portfolio is designed in format of LinkedIn.
                </div>
                <div className={styles.footer}>
                    <button className={styles.primaryBtn} onClick={handleClose}>
                        Great Work
                    </button>
                </div>
            </div>
        </div>
    );
}
