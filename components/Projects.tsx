"use client";

import Section from './Section';
import styles from './Experience.module.css'; // Reusing experience styles for list layout
import { useState } from 'react';

export default function Projects() {
    return (
        <Section title="Projects" onEdit={() => console.log('Edit Projects')}>
            <ProjectItem
                title="Contextual ChatBot (RAG System) | LangChain, Chroma, Streamlit, Llama.cpp"
                date="May 2024 - Aug 2024"
                association="Associated with The University of Texas at Arlington"
                description={`• Developed a retrieval-augmented generation chatbot integrating LangChain with Chroma vector storage, handling knowledge retrieval from structured and unstructured documents ( 10K documents)
• Implemented context management and memory features to improve response relevance, reducing internal evaluation errors by 30%`}
            />
            <ProjectItem
                title="Full Stack Storage Platform | Next.js, React, TypeScript, TailwindCSS"
                date="Jan 2024 - Apr 2024"
                association="Associated with GitHub"
                description={`• Engineered a file storage platform to solve slow access issues for 1,000+ files, collaborating with the team to gather requirements and demonstrating leadership in achieving 30% faster retrieval with Appwrite SDK
• Enhanced UI with sorting, analytics, and access controls, improving task completion efficiency by 40% through dashboard analytics`}
            />
            <ProjectItem
                title="URL Shortener Prototype"
                date="Dec 2023"
                association="Associated with GitHub"
                description={`● Formulated a React application that shortened URLs, reducing URL management time by 50% for 100+ users 
● Secured 15 REST API endpoints with JWT tokens and OAuth2, enhancing data security by 30% and deployed the application on AWS using Docker images and constructed the back end using Java Spring Boot framework`}
                skills="React, Express, MongoDB, NodeJS, AWS"
            />
            <ProjectItem
                title="Simulation of AHA Ideas: Machine Learning Prediction Application"
                date="Nov 2023 - Dec 2023"
                association="Associated with GitHub"
                description={`● Architected a 3-tier microservices web app with features for creating, voting, commenting, and searching new ideas 
● Built a CI/CD pipeline using Jenkins, deploying microservices on AWS EC2 with Docker and load balancers`}
                skills="React, AWS, Docker, Jenkins"
            />
        </Section>
    );
}

function ProjectItem({ title, date, association, description, skills }: any) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.item} style={{ paddingBottom: '16px', marginBottom: '8px' }}>
            <div className={styles.content}>
                <h3 className={styles.roleTitle} style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{title}</h3>

                {date && <div style={{ fontSize: '14px', color: 'var(--linkedin-black)', marginBottom: '8px' }}>{date}</div>}

                <div className={styles.association} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', marginBottom: '8px', color: 'var(--linkedin-black)' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#e0dfdc', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Placeholder generic association icon if specific one not available */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ color: '#666' }}>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                        </svg>
                    </div>
                    {association}
                </div>

                <div className={`${styles.description} ${!expanded ? styles.truncated : ''}`} style={{ marginBottom: '8px' }}>
                    {description}
                    {!expanded && (
                        <button className={styles.seeMoreBtn} onClick={() => setExpanded(true)} style={{ color: 'var(--linkedin-gray)' }}>
                            ...show more
                        </button>
                    )}
                </div>

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
