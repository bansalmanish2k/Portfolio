import React, { useState } from 'react';
import styles from '../css_modules/Sidebar.module.css';
import Logo from './Logo.jsx';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'; // Added FaBars & FaTimes for mobile menu
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Slidebar() {
    // State to handle the mobile menu toggle
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to close menu when a link is clicked on mobile
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className={styles.sidebar}>
            
            {/* Mobile Header: Holds Logo and Hamburger Button */}
            <div className={styles.mobileHeader}>
                <Logo />
                <button 
                    className={styles.hamburgerBtn} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Navigation Menu */}
            <nav className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
                <Link to="/" className={styles.navBtn} onClick={closeMenu}>Home</Link>
                <Link to="/about" className={styles.navBtn} onClick={closeMenu}>About</Link>
                <Link to="/specialties" className={styles.navBtn} onClick={closeMenu}>Specialties</Link>
                <Link to="/project" className={styles.navBtn} onClick={closeMenu}>Project</Link>
                <Link to="/contact" className={styles.navBtn} onClick={closeMenu}>Contact</Link>
            </nav>

            {/* Social Icons */}
            <div className={`${styles.socialContainer} ${isMenuOpen ? styles.active : ''}`}>
                <a href="https://github.com/bansalmanish2k" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/manishbansal200" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FaLinkedin />
                </a>
                <a href="https://leetcode.com/bansalmanish" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <SiLeetcode />
                </a>
            </div>
            
        </div>
    );
}

export default Slidebar;