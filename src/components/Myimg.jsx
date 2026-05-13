import React from 'react';
import profileImg from '../assets/profile-img.png'; // Make sure to import an image!
import styles from '../css_modules/Profile.module.css';

function Myimage() {
    return (
        <img 
            src={profileImg} 
            alt="My Profile" 
            className={styles.profile} 
        />
    );
}

export default Myimage;