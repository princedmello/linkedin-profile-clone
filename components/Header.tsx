"use client";

import styles from './Header.module.css';

/**
 * Header Component
 * Displays the top navigation bar with search and navigation icons.
 */
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.left}>
                    <a href="#" className={styles.logo}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className={styles.logoIcon} width="34" height="34" focusable="false">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.53A2.02 2.02 0 0013 14.5V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                    </a>
                    <div className={styles.search}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className={styles.searchIcon} width="24" height="24" focusable="false">
                            <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                        </svg>
                        <input type="text" placeholder="I'm looking for..." />
                    </div>
                </div>
                <nav className={styles.nav}>
                    <NavItem icon="home" text="Home" active badge />
                    <NavItem icon="network" text="My Network" />
                    <NavItem icon="jobs" text="Jobs" />
                    <NavItem icon="messaging" text="Messaging" />
                    <NavItem icon="notifications" text="Notifications" />
                    <NavItem icon="me" text="Me" avatar dropdown />
                    <div className={styles.divider}></div>
                    <NavItem icon="grid" text="For Business" dropdown className={styles.desktopOnly} />
                    <NavItem icon="advertise" text="Advertise" className={styles.desktopOnly} />
                </nav>
            </div>
        </header>
    );
}

function NavItem({ icon, text, active, avatar, dropdown, badge, className }: { icon: string; text: string; active?: boolean; avatar?: boolean; dropdown?: boolean; badge?: boolean; className?: string }) {
    return (
        <a href="#" className={`${styles.navItem} ${active ? styles.active : ''} ${className || ''}`}>
            <div className={styles.iconContainer}>
                {badge && <div className={styles.badge} style={{ position: 'absolute', top: '-5px', right: '-5px', width: '8px', height: '8px', backgroundColor: '#cc1016', borderRadius: '50%', border: '2px solid #fff' }}></div>}
                {/* Simple placeholder icons for now, mapped by string */}
                {icon === 'home' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>}
                {icon === 'network' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>}
                {icon === 'jobs' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path></svg>}
                {icon === 'messaging' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M16 4H8a7 7 0 000 14h4v4l8.16-8.16A6 6 0 0016 4z"></path></svg>}
                {icon === 'notifications' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M22 19h-8.28a2 2 0 11-3.44 0H2L3.6 17.38A2 2 0 004 16.12V10a8 8 0 0116 0v6.12a2 2 0 00.4 1.25z"></path></svg>}
                {icon === 'me' && <div className={styles.avatarPlaceholder}><img src="/assets/smallprofilepic.jpg" alt="Me" style={{ width: '100%', borderRadius: '50%' }} /></div>}
                {icon === 'grid' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z"></path></svg>}
                {icon === 'advertise' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zM12 6a6 6 0 106 6 6 6 0 00-6-6zm0 10a4 4 0 114-4 4 4 0 01-4 4z"></path></svg>}
            </div>
            <span className={styles.navText}>
                {text}
                {dropdown && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="16" height="16" style={{ marginLeft: '2px' }}>
                        <path d="M8 11L3 6h10z" />
                    </svg>
                )}
            </span>
        </a>
    );
}
