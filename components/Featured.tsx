"use client";

import styles from './Featured.module.css';

export default function Featured() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Featured</h2>
            </div>

            <div className={styles.carouselContainer}>
                <FeaturedCard
                    label="Post"
                    title="Graduated with Masters of Information Systems from University ..."
                    image="/assets/Banner 1.jpeg" // Changed to Banner 1
                    likes={243}
                    comments={39}
                />
                <FeaturedCard
                    label="Post"
                    title="Attached is the link to my resume ..."
                    image="/assets/Banner 2.png" // Changed to Banner 2
                    likes={212}
                    comments={41}
                />
                <FeaturedCard
                    label="Post"
                    title="I’m excited to share about my recent portfolio website ..."
                    image="/assets/Banner 3.png" // Changed to Banner 3
                    likes={155}
                    comments={4}
                />
            </div>
        </section>
    );
}

// Helper icons for reactions - Using static LinkedIn assets or inline SVGs
const LikeIcon = "https://static.licdn.com/aero-v1/sc/h/8ekq8ghq8vck8stsnh9p01bc2";
const HeartIcon = "https://static.licdn.com/aero-v1/sc/h/cpho5fghnpbn5537j9k9pdmj0";
const BulbIcon = "https://static.licdn.com/aero-v1/sc/h/3xzol5x773rxh7f42r5b7a5a8";

/**
 * FeaturedCard Component
 * Renders a single featured post/article card.
 */
function FeaturedCard({ label, title, image, likes, comments }: any) {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.label}>{label}</div>
                <div className={styles.cardTitle}>{title}</div>
            </div>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.cardContent} style={{ paddingTop: 0 }}>
                <div className={styles.footer}>
                    <div className={styles.reactionIcons}>
                        {/* Like (Blue) */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.reactionIcon} width="16" height="16" focusable="false">
                            <defs>
                                <linearGradient id="like-gradient-featured" x1="50%" y1="0%" x2="50%" y2="100%">
                                    <stop offset="0%" stopColor="#378fe9"></stop>
                                    <stop offset="100%" stopColor="#0055b3"></stop>
                                </linearGradient>
                            </defs>
                            <circle cx="12" cy="12" r="12" fill="url(#like-gradient-featured)"></circle>
                            <path d="M19.5 12h-5V5a2 2 0 0 0-2-2h-3a1 1 0 0 0-1 1v7l-2 4h-2V12h2a1 1 0 0 1 1-1h1v-4h-2v4h-1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2z" fill="#fff" transform="scale(0.8) translate(3,3)" fillRule="evenodd"></path>
                        </svg>

                        {/* Celebrate (Green Clapping) */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.reactionIcon} width="16" height="16" focusable="false">
                            <defs>
                                <linearGradient id="celebrate-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                                    <stop offset="0%" stopColor="#449d44"></stop>
                                    <stop offset="100%" stopColor="#2f7b2f"></stop>
                                </linearGradient>
                            </defs>
                            <circle cx="12" cy="12" r="12" fill="url(#celebrate-gradient)"></circle>
                            <path d="M16 13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 1.1.9 2 2 2zm-4-3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 1.1.9 2 2 2zm8 0c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 1.1.9 2 2 2zm-12 3c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 1.1.9 2 2 2zM6 14c0 1.1.9 2 2 2h2v-2c0-1.1-.9-2-2-2s-2 .9-2 2v2H6zm12 0c0 1.1.9 2 2 2h-2v-2c0-1.1.9-2 2-2s2 .9 2 2v2h-2z" fill="#fff" transform="scale(0.6) translate(8,8)"></path>
                            {/* Simplified generic clapping/hands shape placeholder if path above is not perfect */}
                            <path d="M17 14L17 14l-4-3-4 3 0 0c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4C19 14.9 18.1 14 17 14z" fill="#fff" transform="translate(0,-2) scale(0.6, 0.4) translate(8, 22)"></path>
                        </svg>

                        {/* Support (Purple/Red Heart) - Using Heart for now */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.reactionIcon} width="16" height="16" focusable="false">
                            <defs>
                                <linearGradient id="support-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                                    <stop offset="0%" stopColor="#d24d57"></stop>
                                    <stop offset="100%" stopColor="#a52a2a"></stop>
                                </linearGradient>
                            </defs>
                            <circle cx="12" cy="12" r="12" fill="url(#support-gradient)"></circle>
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#fff" transform="scale(0.6) translate(8,8)"></path>
                        </svg>
                    </div>
                    <span>{likes} • {comments} comments</span>
                </div>
            </div>
        </div>
    );
}
