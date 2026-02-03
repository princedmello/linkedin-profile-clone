"use client";

import Section from './Section';
import styles from './Experience.module.css';
import { useState } from 'react';

export default function Volunteering() {
    return (
        <Section title="Volunteering" onEdit={() => console.log('Edit Volunteering')}>
            <VolunteerItem
                logo="/assets/ecuta_logo.jpg"
                role="Event Coordinator"
                organization="Entrepreneurship Club UTA"
                date="Feb 2024 - Dec 2024 · 11 mos"
                category="Education"
                description={`• Currently planning and executing a variety of events, ranging from small-scale gatherings to large-scale conferences, ensuring seamless coordination of founders-co founders and attendees.
• Actively engaged in networking initiatives for the club, fostering connections with relevant individuals, organizations, and potential sponsors.
• Demonstrating strong organizational skills by creating detailed event timelines, managing budgets effectively.`}
            />
        </Section>
    );
}

function VolunteerItem({ logo, role, organization, date, category, description }: any) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.item}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt={organization} className={styles.logo} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.roleTitle}>{role}</h3>
                <p className={styles.companyName}>{organization}</p>
                <p className={styles.dateLocation}>{date}</p>
                <p className={styles.dateLocation}>{category}</p>

                <div className={`${styles.description} ${!expanded ? styles.truncated : ''}`}>
                    {description}
                    {!expanded && (
                        <button className={styles.seeMoreBtn} onClick={() => setExpanded(true)}>
                            ...see more
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
