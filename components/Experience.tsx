"use client";

import Section from './Section';
import styles from './Experience.module.css';
import { useState } from 'react';

export default function Experience() {
    return (
        <Section title="Experience" onEdit={() => console.log('Edit Experience')}>
            <ExperienceItem
                logo="/assets/university_of_texas_at_arlington_logo.jpg"
                title="Graduate Software Engineer"
                company="The University of Texas at Arlington · Part-time"
                date="Apr 2025 - Dec 2025 · 9 mos"
                location="Dallas, Texas, United States · Hybrid"
                description={`• Built a Next.js-based operational dashboard used by 20+ staff members, integrating an LLM-powered decision service that reduced manual scheduling effort and improved assignment correctness across daily workflows
• Developed a Python backend service to transform unstructured daily agendas into time-filtered, actionable tasks, reducing manager preparation time by 80% and saving 30+ hours per month across teams
• Deployed and operated LLM-backed services on Google Vertex AI, defining service-level objectives and request timeouts to ensure reliable inference under production load.
• Designed a team collaboration workflow using Google Firestore, enabling real-time task updates and feedback that increased end-of-shift task completion by 60%`}
                skills="Software Design and Large Language Models (LLM)"
            />
            <ExperienceItem
                logo="/assets/media stream ai_logo.jpg"
                title="Software Engineer"
                company="Media Stream AI - MSAI · Internship"
                date="Jan 2025 - Apr 2025 · 4 mos"
                location="New York, New York, United States · Hybrid"
                description={`• Contributed to an AI-powered video analysis platform by building ETL pipelines for video preprocessing, transcription, and multi-modal metadata extraction, enabling analysis of 10K+ hours of video for a new product offering
• Integrated a vector-based metadata store to manage 100TB of video, facilitating 5M+ automated tags and reducing content retrieval latency by 80%
• Implemented an LLM-backed retrieval and question-answering service for video content, improving context relevance to 90% in internal evaluations and enabling video-level summarization and search
• Assisted in migrating core services to Azure using Terraform, deploying autoscaling APIs and HLS streaming workflows that achieved 99.99% uptime while controlling infrastructure costs`}
                skills="Software Design, Cloud Computing and +11 skills"
            />
            <ExperienceItem
                logo="/assets/bizdateup_logo.jpg"
                title="Senior Software Development Engineer"
                company="BizDateUp · Full-time"
                date="Jan 2021 - Dec 2023 · 3 yrs"
                location="Mumbai, Maharashtra, India · Hybrid"
                description={`• Built a venture capital platform using React & Spring Boot, onboarding 50+ investors and managing $10M+ in assets within the first year of launch
• Enhanced CRM, KYC, and e-signature APIs, addressing security gaps and reducing potential vulnerability exposure by 20%, while achieving comprehensive test coverage across three teams
• Implemented Redis caching, reducing database load by 30% and cutting API response times by 46%
• Deployed AWS-based infrastructure and CI/CD pipelines, reducing server costs by 20%, eliminating deployment bottlenecks
• Structured an automated JUnit testing suite of 500+ cases, decreasing nightly build failures by 30% and manual regression testing time by over 90%`}
                skills="Software Design, Cloud Computing and +11 skills"
            />
            <ExperienceItem
                logo="/assets/social_tangle_media_logo.jpg"
                title="Software Developer Intern"
                company="Social Tangle Media. Think Digital, Think SocialTangle! · Internship"
                date="Jan 2020 - May 2020 · 5 mos"
                location="Mumbai, Maharashtra, India"
                description={`• Optimized front-end of multi-tier applications using JavaScript, adding animations to improve UI/UX perfor-mance by 20%
• Configured a robust project deployment system with Apache and PHP on AWS EC2 instances while implementing more than 12 intelligent triggers; this initiative improved overall system uptime by an impressive margin of 15%
• Conducted analysis using Tableau dashboards and ETL processes, optimizing resource utilization by 15% and identifying cost-saving trends that reduced maintenance expenses by 10%`}
                skills="Search Engine Optimization (SEO), On-Page Optimization and +3 skills"
            />
            <ExperienceItem
                logo="/assets/vistaardigital_logo.jpg"
                title="Software Developer"
                company="Vistaar Digital Communications Pvt. Ltd. · Internship"
                date="Dec 2019 - Jan 2020 · 2 mos"
                location="Mumbai, Maharashtra, India"
                description={`• Engineered data-driven user interfaces Cobalt CLI and JavaScript, increasing user interaction by 30%. 
• Contributed to responsive, dynamic UI development to translate wireframes and mockups into functional pages. 
• Employed Sass to reduce CSS redundancy by 40%, streamlining the styling process and improving maintainability of data visualization elements, resulting in faster development cycles. 
• Ensured comprehensive cross-browser compatibility, significantly expanding user access by 25% across various platforms and devices, thereby enhancing overall data accessibility.
• Collaborated with designers to translate data-driven wireframes into responsive interfaces, accelerating development speed by 25% and ensuring consistent design language across data dashboards.`}
                skills="WordPress, User Interface Design and +1 skill"
            />
        </Section>
    );
}

function ExperienceItem({ logo, title, company, date, location, description, skills }: any) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.item}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt={company} className={styles.logo} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.roleTitle}>{title}</h3>
                <p className={styles.companyName}>{company}</p>
                <p className={styles.dateLocation}>{date} | {location}</p>

                <div className={`${styles.description} ${!expanded ? styles.truncated : ''}`}>
                    {description}
                    {!expanded && (
                        <button className={styles.seeMoreBtn} onClick={() => setExpanded(true)}>
                            ...see more
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
