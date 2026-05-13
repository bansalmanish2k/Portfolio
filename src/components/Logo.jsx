import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import styles from '../css_modules/Logo.module.css';

function Logo() {
    return (
        <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="Manish Bansal Logo" className={styles.logoImage} />
        </Link>
    );
}

export default Logo;