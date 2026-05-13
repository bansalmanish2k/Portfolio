import React from 'react';
import styles from '../css_modules/PortfolioHero.module.css';
import profile from '../assets/profile-img.png';
import { Link } from 'react-router-dom';

const PortfolioHero = () => {
  return (
    <div className={styles['portfolio-container']}>
      
      <div className={styles['content-wrapper']}>
        
        {/* LEFT SECTION */}
        <div className={styles['text-section']}>
          <h1 className={styles['main-heading']}>
            MY NAME <br />
            IS <strong>Manish</strong> <br />
            <strong>Bansal...</strong>
          </h1>
          
          <p className={styles.subtitle}>
            <strong>Software Developer</strong> based in <strong>India</strong>
          </p>

          <Link to="/contact" className={styles['cta-button']}>
  Let's talk with me
  <div className={styles['btn-icon']}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </div>
</Link>

          <div className={styles['contact-info']}>
            <div className={styles['contact-item']}>
              <span className={styles['icon-circle']}>📞</span>
              +91 999-60-57-141
            </div>
            <div className={styles['contact-item']}>
              <span className={styles['icon-circle']}>✉️</span>
              bansal.manish.2k@gmail.com
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className={styles['image-section']}>
          <div className={`${styles['gradient-shape']} ${styles['shape-top']}`}></div>
          <div className={`${styles['gradient-shape']} ${styles['shape-bottom']}`}></div>
          
          <img 
            src={profile}
            alt="Manish Bansal" 
            className={styles['portrait-img']}
          />
        </div>
      </div>

      {/* SOCIAL SIDEBAR */}
      <div className={styles['social-sidebar']}>
        <a href="#instagram" className={styles['social-link']}>Ig</a>
        <a href="#dribbble" className={styles['social-link']}>Dr</a>
        <a href="#facebook" className={styles['social-link']}>Fb</a>
        <div className={styles['vertical-line']}></div>
      </div>

    </div>
  );
};

export default PortfolioHero;