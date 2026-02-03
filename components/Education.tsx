"use client";

import Section from './Section';
import styles from './Experience.module.css'; // Reusing experience styles

export default function Education() {
    return (
        <Section title="Education" onEdit={() => console.log('Edit Education')}>
            <EducationItem
                logo="/assets/university_of_texas_at_arlington_logo.jpg"
                school="The University of Texas at Arlington"
                degree="Master's degree, Information Systems"
                date="Jan 2024 - Dec 2025"
                grade=""
                description=""
            />
            <EducationItem
                logo="/assets/fr_conceicao_rodrigues_college_of_engineering_logo.jpg"
                school="Fr. Conceicao Rodrigues College of Engineering"
                degree="Bachelor of Engineering - BE, Computer Programming"
                date="2017 - 2021"
                grade=""
                description=""
                skills="Machine Learning, MySQL and +12 skills"
            />
        </Section>
    );
}

function EducationItem({ logo, school, degree, date, grade, description, skills }: any) {
    return (
        <div className={styles.item}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt={school} className={styles.logo} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.roleTitle}>{school}</h3>
                <p className={styles.companyName}>{degree}</p>
                <p className={styles.dateLocation}>{date}</p>
                {grade && <p className={styles.description}>{grade}</p>}
                {description && <p className={styles.description}>{description}</p>}
                {skills && (
                    <div className={styles.skillsWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.diamondIcon} width="16" height="16">
                            <path d="M6 3h12l4 6-10 13L2 9z"></path>
                        </svg>
                        <span>{skills}</span>
                    </div>
                )}
            </div>
        </div>
    )
}
