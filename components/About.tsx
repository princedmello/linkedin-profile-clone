"use client";

import Section from './Section';
import { useState } from 'react';
import styles from './About.module.css';

export default function About() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Section title="About" onEdit={() => console.log('Edit About')}>
            <div className={styles.text}>
                <strong>𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 | 𝐀𝐖𝐒 𝐂𝐞𝐫𝐭𝐢𝐟𝐢𝐞𝐝 𝐀𝐈 𝐏𝐫𝐚𝐜𝐭𝐢𝐭𝐢𝐨𝐧𝐞𝐫 | 𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 & 𝐂𝐥𝐨𝐮𝐝 𝐀𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐞</strong>
                <br /><br />
                I am a Software Engineer with 4+ years of experience building scalable production systems, currently bridging the gap between robust full-stack architecture and AI-driven solutions. I specialize
                {!expanded ? (
                    <> ...<button className={styles.seeMoreBtn} onClick={() => setExpanded(true)}>see more</button></>
                ) : (
                    <>
                        {' '}in reducing operational friction and costs through intelligent automation and cloud efficiency.
                        <br /><br />
                        Currently, I serve as a Software Engineer at the University of Texas at Arlington, where I build production-grade LLM services on Google Vertex AI.
                        <br /><br />
                        <strong>𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝑯𝒊𝒈𝒉𝒍𝒊𝒈𝒉𝒕𝒔:</strong><br />
                        <strong>𝐀𝐈 & 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧:</strong> Deployed LLM-backed services that reduced manual scheduling workflows by 80%, saving teams 30+ hours monthly.<br />
                        <strong>𝐒𝐜𝐚𝐥𝐞 & 𝐑𝐞𝐥𝐢𝐚𝐛𝐢𝐥𝐢𝐭𝐲:</strong> Architected streaming workflows on Azure achieving 99.99% uptime and managed data pipelines processing 10K+ hours of video content.<br />
                        <strong>𝐅𝐢𝐧𝐓𝐞𝐜𝐡 𝐈𝐦𝐩𝐚𝐜𝐭:</strong> Previously built a VC platform at Bizdateup managing $10M+ in assets, optimizing API response times by 46% via Redis caching.
                        <br /><br />
                        <strong>𝑻𝒆𝒄𝒉𝒏𝒊𝒄𝒂𝒍 𝑨𝒓𝒔𝒆𝒏𝒂𝒍:</strong><br />
                        <strong>Languages:</strong> Java, Python, JavaScript/TypeScript.<br />
                        <strong>Stack:</strong> Spring Boot, React, Next.js, Node.js.<br />
                        <strong>Cloud & DevOps:</strong> AWS, GCP, Azure, Terraform, Docker, Kubernetes.<br />
                        <strong>AI/ML:</strong> RAG Workflows, LangChain, Google Vertex AI, Vector Databases (Chroma).
                        <br /><br />
                        I am finishing my MS in Information Systems (Dec 2025) and am open to discussing roles that require deep technical ownership and innovation.
                        <br /><br />
                        Let’s connect: princedmello13@gmail.com
                    </>
                )}
            </div>

            <div className={styles.topSkills}>
                <div className={styles.topSkillsContent}>
                    <div className={styles.topSkillsTitle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.diamondIcon} width="20" height="20"><path d="M6 3h12l4 6-10 13L2 9z"></path></svg>
                        Top skills
                    </div>
                    <p className={styles.topSkillsList}>
                        Software Development • Full-Stack Development • DevOps • Product Management
                    </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.arrowIcon} width="24" height="24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
            </div>
        </Section>
    );
}
