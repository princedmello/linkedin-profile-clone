"use client";

import Section from './Section';
import styles from './Activity.module.css';

export default function Activity() {
    return (
        <Section
            title="Activity"
            onEdit={() => console.log('Edit Activity')}
        >
            <div className={styles.followers}>5,614 followers</div>

            <div className={styles.filters}>
                <button className={`${styles.filterBtn} ${styles.active}`}>Posts</button>
                <button className={styles.filterBtn}>Comments</button>
                <button className={styles.filterBtn}>Videos</button>
                <button className={styles.filterBtn}>Images</button>
            </div>

            <div className={styles.carouselContainer}>
                <ActivityCard
                    author="Prince Dmello"
                    headline="Software Engineer | Building AI Products"
                    time="4d"
                    content="Google won. n8n lost. (Or did it?) Building a peer-to-peer rental marketplace where renters, owners, and admins each need different real-time workflows and notifications. Manual processes eating 15 hours/week. Need automation yesterday. Google Opal: → Native cloud integration reduces setup time..."
                    likes={24}
                />
                <ActivityCard
                    author="Prince Dmello"
                    headline="Software Engineer | Building AI Products"
                    time="1w"
                    content="𝐓𝐡𝐞 𝐢𝐧𝐭𝐞𝐫𝐧𝐞𝐭 𝐝𝐢𝐝𝐧'𝐭 𝐬𝐥𝐞𝐞𝐩 𝐭𝐡𝐢𝐬 𝐥𝐨𝐧𝐠 𝐰𝐞𝐞𝐤𝐞𝐧𝐝. Most people were off. Google and Apple were busy breaking the internet. If you missed the news, here are the 3 shocking updates you need to know: 1️⃣ The $21 Billion Handshake One deal. One brain. 4.6 billion devices..."
                    likes={23}
                />
                <ActivityCard
                    author="Prince Dmello"
                    headline="Software Engineer | Building AI Products"
                    time="2w • Edited"
                    content="I got rejected by Google last week. And honestly? It validated my engineering approach more than an offer letter would have. 𝐇𝐞𝐫𝐞’𝐬 𝐭𝐡𝐞 𝐭𝐡𝐢𝐧𝐠: I didn’t get the interview because my resume was a 10/10 keyword match for the JD..."
                    likes={156}
                />
            </div>

            <div className={styles.footer}>
                <a href="#" className={styles.showAll}>Show all posts
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="icon" width="16" height="16" focusable="false">
                        <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
                    </svg>
                </a>
            </div>
        </Section>
    );
}

function ActivityCard({ author, headline, time, content, likes }: any) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img src="/assets/Profile Pic.jpg" alt={author} className={styles.avatar} />
                <div className={styles.headerContent}>
                    <div className={styles.authorName}>
                        {author}
                        {/* Verified Icon - reduced to 12px and ensured correct alignment */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="icon" width="12" height="12" focusable="false" style={{ color: '#666' }}>
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                        </svg>
                        <span style={{ fontSize: '12px', color: '#666', fontWeight: '400' }}>• 1st</span>
                    </div>
                    <div className={styles.authorHeadline}>{headline}</div>
                    <div className={styles.postTime}>
                        {time} • <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="12" height="12" focusable="false"><path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-1.45l9 6A5 5 0 018 13v-5zM8 3a5 5 0 015 5H8z"></path></svg>
                    </div>
                </div>
                <button className={styles.menuBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                        <path d="M2 10h4v4H2v-4zm8 4h4v-4h-4v4zm8-4v4h4v-4h-4z"></path>
                    </svg>
                </button>
            </div>

            <div className={styles.postContent}>
                {content} <span style={{ color: '#666', cursor: 'pointer' }}>...more</span>
            </div>

            <div className={styles.cardFooter}>
                <div className={styles.stats}>
                    {/* Like Reaction */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.likeIcon} width="16" height="16" focusable="false">
                        <defs>
                            <linearGradient id="like-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                                <stop offset="0%" stopColor="#378fe9"></stop>
                                <stop offset="100%" stopColor="#0055b3"></stop>
                            </linearGradient>
                        </defs>
                        <circle cx="12" cy="12" r="12" fill="url(#like-gradient)"></circle>
                        <path d="M19.5 12h-5V5a2 2 0 0 0-2-2h-3a1 1 0 0 0-1 1v7l-2 4h-2V12h2a1 1 0 0 1 1-1h1v-4h-2v4h-1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2z" fill="#fff" transform="scale(0.8) translate(3,3)" fillRule="evenodd"></path>
                        <path d="M14.5 11h-3.8l1-5.6a1.3 1.3 0 0 0-1.7-1.4L6 11H3v9h13a1.9 1.9 0 0 0 2-2v-5a1.9 1.9 0 0 0-3.5-2z" fill="#fff" transform="translate(2,1) scale(0.7)"></path>
                        {/* Simplified Path for Thumb inside circle */}
                        <g transform="translate(4, 4) scale(0.66)">
                            <path d="M21.3 10.08l-2.6-6.5A2.9 2.9 0 0016 1.77h-6a2.95 2.95 0 00-3 3v2a2.95 2.95 0 003 3h.59l-.38 2.31c-.13.78.43 1.48 1.22 1.48h0a1.27 1.27 0 001.2-.84l2.11-6.8a.93.93 0 01.88-.66h3.68a.93.93 0 01.9.66l2.1 6.8a1.26 1.26 0 001.2.84h0c.79 0 1.35-.7 1.22-1.48l-.38-2.31h.59a2.95 2.95 0 003-3v-2a2.95 2.95 0 00-3-2.99zM8 7H5V4h3v3z" fill="none"></path>
                            <path d="M22 12h-2.5l-1.6 5H22v-5zM10 7V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1z" fill="none"></path>
                            <path d="M3 21h4v-8H3v8zm2-6h0v4h0v-4z" fill="#fff"></path>
                            <path d="M22 10h-6.2c.2-.6.3-1.3.3-2 0-2.8-2.2-5-5-5-2.2 0-4 1.3-4.7 3.2L6 8v12h12.5c1.3 0 2.5-.9 2.9-2.2l2-7c.4-1.2-.5-2.8-1.4-2.8zM10.2 6.8c.4-1.2 1.6-2 2.9-2 1.7 0 3 1.3 3 3 0 .7-.2 1.3-.4 1.9l-.6 1.6H22l-2 7H7.6l.3-1 2.3-7.5z" fill="#fff"></path>
                        </g>
                    </svg>

                    {/* Insightful Reaction */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.likeIcon} width="16" height="16" focusable="false">
                        <defs>
                            <linearGradient id="insight-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                                <stop offset="0%" stopColor="#f5bb07"></stop>
                                <stop offset="100%" stopColor="#cb8705"></stop>
                            </linearGradient>
                        </defs>
                        <circle cx="12" cy="12" r="12" fill="url(#insight-gradient)"></circle>
                        <g transform="translate(6, 6) scale(0.5)">
                            <path d="M20.2 12.87A9 9 0 106.3 17.5a1.53 1.53 0 00.3 2.1l2.3 1.7a1.53 1.53 0 002.1-.3 1.53 1.53 0 00-.3-2.1L9.1 17.7a6 6 0 118.8-.9h.1a1.51 1.51 0 001.1 2.5h.4a1.53 1.53 0 00.7-2.93z" fill="#fff"></path>
                        </g>
                        <path d="M9 14h6v2H9z" fill="#fff" transform="translate(0, 1)"></path>
                    </svg>

                    <span style={{ marginLeft: '4px' }}>{author} and {likes} others</span>
                </div>
                <div className={styles.actions}>
                    {/* Like Button */}
                    <button className={styles.actionBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" focusable="false">
                            <path d="M7 10v12"></path>
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                        </svg>
                    </button>
                    {/* Comment Button */}
                    <button className={styles.actionBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" focusable="false">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                    </button>
                    {/* Repost Button */}
                    <button className={styles.actionBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" focusable="false">
                            <path d="m17 2 4 4-4 4"></path>
                            <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                            <path d="m7 22-4-4 4-4"></path>
                            <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                        </svg>
                    </button>
                    {/* Send Button */}
                    <button className={styles.actionBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" focusable="false">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
