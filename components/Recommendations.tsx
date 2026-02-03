"use client";

import Section from './Section';
import styles from './Experience.module.css';

export default function Recommendations() {
    return (
        <Section title="Recommendations" onEdit={() => console.log('Edit Recommendations')}>
            <div style={{ marginBottom: '16px', borderBottom: '1px solid #e0dfdc' }}>
                <button style={{ padding: '8px 12px', borderBottom: '2px solid #01754f', color: '#01754f', fontWeight: '600' }}>Received</button>
                <button style={{ padding: '8px 12px', color: '#666', fontWeight: '600' }}>Given</button>
            </div>

            <RecItem
                logo="/assets/Jeet.jpg"
                name="Jeet Chandan"
                headline="Co-Founder @BizDateUp | Angel Investor | Startup Mentor"
                date="January 16, 2025, Jeet managed Prince directly"
                text="Prince Dmello, as Lead Developer at Bizdateup Technologies, showcased exceptional talent in transforming ideas into functional platforms, notably building a robust venture capital platform for retail investors. His problem-solving mindset, clear communication, and collaborative leadership ensured innovative solutions, seamless execution, and high-quality results, making him a valuable asset to any organization.
        
        Solid Man with Integrity"
            />
        </Section>
    );
}

function RecItem({ logo, name, headline, date, text }: any) {
    return (
        <div className={styles.item}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt={name} className={styles.logo} style={{ borderRadius: '50%' }} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.roleTitle}>{name}</h3>
                <p className={styles.companyName} style={{ fontSize: '12px', color: '#666' }}>{headline}</p>
                <p className={styles.dateLocation} style={{ marginTop: '4px', fontSize: '12px' }}>{date}</p>
                <div className={styles.description} style={{ whiteSpace: 'pre-line', fontSize: '14px', color: 'var(--linkedin-black)' }}>{text}</div>
            </div>
        </div>
    )
}
