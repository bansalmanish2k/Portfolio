import React from 'react';
import styles from '../css_modules/About.module.css';
import profile from '../assets/profile-img.png';

const About = () => {
  return (
    <section className={styles['about-section']} id="about">
      <div className={styles['content-wrapper']}>
        
        {/* LEFT COLUMN: Profile & Title */}
        <div className={styles['left-column']}>
          <p className={styles['greeting']}>Nice to meet you!</p>
          <h2 className={styles['main-title']}>WELCOME TO...</h2>
          
          <div className={styles['image-container']}>
            <div className={styles['image-backdrop']}></div>
            <img src={profile} alt="Manish Bansal" className={styles['profile-img']} />
          </div>

          <h3 className={styles['name-gradient']}>MANISH BANSAL</h3>
          <p className={styles['role']}>
            <strong>Full Stack Developer</strong> based in <strong>India</strong>
          </p>

          <a href="/Manish_Bansal_CV.pdf" download className={styles['download-btn']}>
            Download Resume 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        {/* RIGHT COLUMN: Info & Bio */}
        <div className={styles['right-column']}>
          
          {/* Top Info Grid */}
          <div className={styles['info-grid']}>
            <div className={styles['info-item']}>
              <span className={styles['icon']}>📞</span>
              <span>+91 999-60-57-141</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['icon']}>👤</span>
              <span>26 yrs</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['icon']}>✉️</span>
              <span>bansal.manish.2k@gmail.com</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['icon']}>📍</span>
              <span>Punjab, India</span>
            </div>
          </div>

          <hr className={styles['divider']} />

          {/* Stats Section */}
          <div className={styles['stats-grid']}>
            <div className={styles['stat-block']}>
              <span className={`${styles['stat-number']} ${styles['text-pink']}`}>MCA</span>
              <span className={styles['stat-label']}>Pursuing MCA<br/>from CHANDIGARH <br/>UNIVERSITY...</span>
            </div>
            <div className={styles['stat-block']}>
              <span className={`${styles['stat-number']} ${styles['text-orange']}`}>2</span>
              <span className={styles['stat-label']}>Projects<br/>Completed...</span>
            </div>
          </div>

          {/* Bio Text Grid */}
          <div className={styles['bio-grid']}>
            <p className={styles['bio-text']}>
              Hello there! My name is <span className={styles['highlight']}>Manish Bansal</span>. I am a Full Stack Developer, highly passionate and dedicated to building scalable web applications and intuitive interfaces.
            </p>
            <p className={styles['bio-text']}>
              I have acquired the MERN stack and Python skills necessary to make your next project a complete success.
            </p>
          </div>

          {/* Quote Box */}
          <div className={styles['quote-box']}>
            <span className={styles['quote-marks']}>“</span>
            <p>
              "Great developers don't just write code; they solve problems and create seamless experiences."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;