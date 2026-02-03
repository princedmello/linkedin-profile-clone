"use client";

import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    title?: string;
    onEdit?: () => void;
    className?: string;
    action?: React.ReactNode;
}

export default function Section({ children, title, onEdit, className = '', action }: SectionProps) {
    return (
        <section className={`card ${styles.section} ${className}`}>
            {(title || onEdit) && (
                <div className={styles.header}>
                    {title && <h2 className={styles.title}>{title}</h2>}
                    <div className={styles.actions}>
                        {action}

                    </div>
                </div>
            )}
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}
