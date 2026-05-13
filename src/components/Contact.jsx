import React from 'react';
import styles from '../css_modules/Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  return (
    <section className={styles['contact-section']}>
      <div className={styles['content-wrapper']}>
        
        {/* Header Section */}
        <div className={styles['header-container']}>
          <p className={styles.subtitle}>Get in touch</p>
          <h2 className={styles.title}>LET'S WORK TOGETHER</h2>
        </div>

        <div className={styles['contact-layout']}>
          
          <p className={styles['intro-text']}>
            I'm currently available to take on new projects or roles. Feel free to reach out directly via email or connect with me on my professional networks.
          </p>

          {/* Contact Information Grid */}
          <div className={styles['info-list']}>
            
            <a href="mailto:bansal.manish.2k@gmail.com" className={styles['info-item']}>
              <span className={styles['icon-circle']}><FaEnvelope /></span>
              <div className={styles['text-block']}>
                <span className={styles['info-label']}>Email</span>
                <span className={styles['info-value']}>bansal.manish.2k@gmail.com</span>
              </div>
            </a>

            <a href="tel:+919996057141" className={styles['info-item']}>
              <span className={styles['icon-circle']}><FaPhoneAlt /></span>
              <div className={styles['text-block']}>
                <span className={styles['info-label']}>Phone</span>
                <span className={styles['info-value']}>+91 999-60-57-141</span>
              </div>
            </a>

            <div className={styles['info-item']}>
              <span className={styles['icon-circle']}><FaMapMarkerAlt /></span>
              <div className={styles['text-block']}>
                <span className={styles['info-label']}>Location</span>
                <span className={styles['info-value']}>Zirakpur, Punjab, India</span>
              </div>
            </div>

          </div>

          {/* Social Links Centered at the bottom */}
          <div className={styles['social-links']}>
            <p className={styles['social-title']}>Find me on:</p>
            <div className={styles['social-icons']}>
              <a href="https://www.linkedin.com/in/manishbansal200" target="_blank" rel="noopener noreferrer" className={styles['social-btn']}>
                <FaLinkedin />
              </a>
              <a href="https://github.com/bansalmanish2k" target="_blank" rel="noopener noreferrer" className={styles['social-btn']}>
                <FaGithub />
              </a>
              <a href="https://leetcode.com/bansalmanish" target="_blank" rel="noopener noreferrer" className={styles['social-btn']}>
                <SiLeetcode />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;