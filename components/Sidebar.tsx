"use client";

import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>

            <div className={`card ${styles.widget}`}>
                <div className={styles.group}>
                    <div className={styles.header}>
                        <span>Profile language</span>
                    </div>
                    <p className={styles.value}>English</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.group}>
                    <div className={styles.header}>
                        <span>Public profile & URL</span>
                    </div>
                    <p className={styles.value}>www.linkedin.com/in/princedmello</p>
                </div>
            </div>

            <div className={`card ${styles.widget} ${styles.adWidget}`}>
                <p className={styles.adText}>Ad</p>
                <div className={styles.adContent}>
                    <img src="/assets/profilepic.jpg" className={styles.adAvatar} alt="Ad Avatar" />
                    <img src="/assets/media stream ai_logo.jpg" className={styles.adLogo} alt="Company Logo" />
                </div>
                <p className={styles.adMsg}>Prince, explore relevant opportunities with Media Stream AI</p>
                <button className="btn-outline">Follow</button>
            </div>

            <div className={`card ${styles.widget}`}>
                <h3 className={styles.widgetTitle}>Who your viewers also viewed</h3>
                <PersonItem name="Satya Nadella" title="Chairman and CEO of Microsoft. He drives the integration of AI (Azure AI, Copilot) across enterprise products and invests in data centers." />
                <PersonItem name="Sundar Pichai" title="CEO leading Google’s AI-first strategy, including the Gemini multimodal AI models." />
                <PersonItem name="Mark Zuckerberg" title="CEO fostering open-source AI innovation with Llama models and integrating AI into consumer apps like WhatsApp and Instagram." />
                <PersonItem name="Dario Amodei" title="CEO and Co-Founder of Anthropic, a leader in AI safety and creator of Constitutional AI." />
                <PersonItem name="Andy Jassy" title="President and CEO, focusing on generative AI and machine learning via Amazon Web Services (AWS)." />
                <PersonItem name="Tim Cook" title="CEO leading the development of Apple Intelligence, an on-device AI suite." />
                <PersonItem name="Alexandr Wang" title="Founder and CEO, focused on improving data quality for AI training." />
                <div className={styles.showMore}>
                    Show all
                </div>
            </div>

        </div >
    );
}

function PersonItem({ name, title }: { name: string, title: string }) {
    return (
        <div className={styles.person}>
            <div className={styles.personAvatar}>
                {name[0]}
            </div>
            <div className={styles.personInfo}>
                <div className={styles.personName}>{name}</div>
                <div className={styles.personTitle}>{title}</div>
                <button className={styles.connectBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="icon" width="16" height="16" focusable="false">
                        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5v2z"></path>
                    </svg>
                    Follow
                </button>
            </div>
        </div>
    )
}
