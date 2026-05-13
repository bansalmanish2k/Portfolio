import React, { useState } from 'react';
import styles from '../css_modules/Specialties.module.css';

const specialtiesData = [
  {
    id: 1,
    title: "REACT.JS FRONTEND",
    desc: "Building fast, interactive, and scalable user interfaces using React. Experienced in modern hooks, component architecture, and managing complex application state.",
  },
  {
    id: 2,
    title: "NODE.JS & EXPRESS",
    desc: "Developing robust, RESTful backend APIs and server-side logic to power dynamic web applications securely and efficiently handling routing and middleware.",
  },
  {
    id: 3,
    title: "MONGODB DATABASE",
    desc: "Designing flexible NoSQL database schemas for efficient data storage, complex querying, retrieval, and high-performance scaling in production environments.",
  },
  {
    id: 4,
    title: "ADVANCED JAVASCRIPT",
    desc: "Deep understanding of core JS, ES6+ features, asynchronous programming, DOM manipulation, and building scalable full-stack architectures.",
  },
  {
    id: 5,
    title: "BOOTSTRAP & CSS",
    desc: "Crafting responsive, mobile-first layouts and polished UI components quickly utilizing the Bootstrap framework and custom CSS styling.",
  }
];

const Specialties = () => {
  const [activeId, setActiveId] = useState(1); // Defaults to opening the first item

  const toggleAccordion = (id) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className={styles['specialties-section']}>
      <div className={styles['content-wrapper']}>
        
        {/* Header */}
        <div className={styles['header-container']}>
          <p className={styles.subtitle}>Service</p>
          <h2 className={styles.title}>MY SPECIALTIES</h2>
        </div>

        {/* Accordion List */}
        <div className={styles['accordion-list']}>
          {specialtiesData.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div 
                key={item.id} 
                className={`${styles['accordion-item']} ${isActive ? styles.active : ''}`}
                onClick={() => toggleAccordion(item.id)}
              >
                {/* Left Side: Bullet and Title */}
                <div className={styles['item-left']}>
                  <span className={styles.bullet}>•</span>
                  <h3 className={styles['item-title']}>{item.title}</h3>
                </div>

                {/* Middle: Content (NOW CONDITIONALLY RENDERED!) */}
                {isActive && (
                  <div className={styles['item-middle']}>
                    <p className={styles['item-desc']}>{item.desc}</p>
                  </div>
                )}

                {/* Right Side: Plus/Minus Icon */}
                <div className={styles['item-right']}>
                  <span className={styles['toggle-icon']}>
                    {isActive ? '−' : '+'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Specialties;