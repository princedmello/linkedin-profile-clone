"use client";

import Section from './Section';
import styles from './Experience.module.css';

export default function Certifications() {
    return (
        <Section title="Licenses & certifications" onEdit={() => console.log('Edit Certifications')}>
            <CertItem
                logo="/assets/ernstandyoung_logo.jpg"
                title="AI Skills Passport"
                issuer="EY"
                date="" // No date in screenshot
                credentialUrl="#"
            />
            <CertItem
                logo="/assets/openai_logo.jpg"
                title="Prompt Engineering for Developers"
                issuer="OpenAI"
                date="Issued Jul 2025"
                credentialUrl="#"
            />
        </Section>
    );
}

function CertItem({ logo, title, issuer, date, credentialUrl }: any) {
    return (
        <div className={styles.item}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt={issuer} className={styles.logo} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.roleTitle}>{title}</h3>
                <p className={styles.companyName}>{issuer}</p>
                {date && <p className={styles.dateLocation}>{date}</p>}
                {credentialUrl && (
                    <button className="btn-outline" style={{ marginTop: '12px', padding: '6px 16px', fontSize: '16px', borderRadius: '24px', fontWeight: '600', color: 'var(--linkedin-gray)', border: '1px solid var(--linkedin-gray)', display: 'inline-flex', alignItems: 'center', transition: 'box-shadow 0.2s, background 0.2s', background: 'transparent' }}>
                        Show credential
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" focusable="false" style={{ marginLeft: '6px' }}>
                            <path d="M21 3L21 9 19 9 19 6.41 10.41 15 9 13.59 17.59 5 15 5 15 3 21 3zM21 13L19 13 19 19 5 19 5 5 11 5 11 3 3 3 3 21 21 21 21 13z"></path>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    )
}
