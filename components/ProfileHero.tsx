"use client";

import styles from './ProfileHero.module.css';
import Image from 'next/image';

export default function ProfileHero() {
    return (
        <div className={`card ${styles.hero}`}>
            {/* Banner */}
            <div className={styles.banner}>
                {/* Profile Banner Image */}
                <img src="/assets/banner.jpg" alt="Profile Banner" className={styles.bannerImg} />
            </div>

            <div className={styles.content}>
                <div className={styles.avatarWrapper}>
                    <img src="/assets/profile pic.jpg" alt="Profile" className={styles.avatar} />
                </div>

                <div className={styles.actions}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.premiumIcon} width="24" height="24" focusable="false">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.53A2.02 2.02 0 0013 14.5V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.bellIcon} width="24" height="24" focusable="false">
                        <path d="M22 19h-8.28a2 2 0 11-3.44 0H2L3.6 17.38A2 2 0 004 16.12V10a8 8 0 0116 0v6.12a2 2 0 00.4 1.25zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 16.25A6.25 6.25 0 1118.25 12 6.25 6.25 0 0112 18.25zM10.5 15L7 11.5l1.41-1.41L10.5 12.17l4.59-4.58L16.5 9z" style={{ display: 'none' }}></path>
                        <path d="M22 19h-8.28a2 2 0 11-3.44 0H2L3.6 17.38A2 2 0 004 16.12V10a8 8 0 0116 0v6.12a2 2 0 00.4 1.25z"></path>
                    </svg>
                </div>

                <div className={styles.info}>
                    <div className={styles.nameSection}>
                        <h1 className={styles.name}>Prince Dmello</h1>
                        <span className={styles.verifiedBadge}>
                            {/* Verification Badge - Shield Check Outline */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon" width="20" height="20" focusable="false" style={{ color: '#666', marginLeft: '4px' }}>
                                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.82 8 10.91 4.59-1.09 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4.37-2.94 8.51-6 9.49-3.06-.98-6-5.12-6-9.49V6.3l6-2.25 6 2.25v4.79z M10 14.59l4.59-4.59L16 11.41l-6 6-4-4 1.41-1.41L10 14.59z"></path>
                            </svg>
                        </span>
                    </div>

                    <p className={styles.headline}>Software Engineer | Building AI Products | AWS, React, Spring Boot, .NET | Built Platform Managing $10M+ Assets | Ex-NVIDIA Partner Startup | MS @ UT Arlington</p>

                    <div className={styles.locationRow}>
                        <span className={styles.location}>United States</span>
                        <span className={styles.contactInfo}>Contact info</span>
                    </div>

                    <div className={styles.links}>
                        <a href="#" className={styles.link}>The University of Texas at Arlington</a>
                    </div>

                    <div className={styles.connectionCount}>
                        <a href="#" className={styles.blueLink}>500+ connections</a>
                    </div>

                    <div className={styles.mutualConnections}>
                        <div className={styles.mutualAvatars}>
                            <img src="/assets/Sunder.jpg" alt="Sundar Pichai - Mutual Connection" className={styles.mutualAvatar1} />
                            <img src="/assets/Jensen.jpg" alt="Jensen Huang - Mutual Connection" className={styles.mutualAvatar2} />
                        </div>
                        <span className={styles.mutualText}>
                            <a href="https://www.linkedin.com/in/sundarpichai" className={styles.mutualLink}>Sundar Pichai</a>, <a href="https://www.linkedin.com/in/jenhsunhuang/" className={styles.mutualLink}>Jensen Huang</a>, and <a href="#" className={styles.mutualLink}>489 other mutual connections</a>
                        </span>
                    </div>

                    <div className={styles.buttonRow}>
                        <button className={`${styles.messageBtn}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ marginRight: '6px' }}>
                                <path d="M2 12l20-9-9 20-2-9-9-2z"></path>
                            </svg>
                            Message
                        </button>
                        <button className={`${styles.moreBtn}`}>More</button>
                    </div>
                </div>

                <div className={styles.openToCard}>
                    <div className={styles.openToContent}>
                        <p className={styles.openToTitle}>Open to work</p>
                        <p className={styles.openToDesc}>Software Engineer, Product Manager, Cloud Engineer and DevOps Engineer roles</p>
                        <a href="#" className={styles.openToLink}>Show details</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
