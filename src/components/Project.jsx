import React from 'react';
import styles from '../css_modules/Project.module.css';

const projectsData = [
  {
    id: 1,
    category: "AI E-Commerce",
    title: "Quickcom AI",
    desc: "A quick-commerce web app featuring an AI-powered smart cart that automatically reads user-provided grocery lists.",
    image: "/Quick_com.png", // Loading directly from your public folder
    link: "https://quick-com-ai.vercel.app"
  },
  {
    id: 2,
    category: "3D React Website",
    title: "Cyber Fleets",
    desc: "A fully responsive and interactive 3D website built with React, featuring optimized animations and cross-device rendering.",
    image: "/Cyberfleet.png", // Loading directly from your public folder
    link: "https://cyber-fleets.vercel.app"
  },
  {
    id: 3,
    category: "Web Development",
    title: "Personal Portfolio",
    desc: "A responsive and visually appealing portfolio website to showcase technical skills, projects, and achievements.",
    image: "/Portfolio.png", // Loading directly from your public folder
    link: "https://manishportfolio-virid.vercel.app/"
  }
];

const Project = () => {
  return (
    <section className={styles['project-section']}>
      <div className={styles['content-wrapper']}>
        
        {/* Header Section */}
        <div className={styles['header-container']}>
          <p className={styles.subtitle}>Work</p>
          <h2 className={styles.title}>RECENT PROJECTS</h2>
        </div>

        {/* Projects Grid */}
        <div className={styles['projects-grid']}>
          {projectsData.map((project) => (
            <a 
              href={project.link} 
              key={project.id} 
              className={styles['project-card']}
              target={project.link !== "#" ? "_blank" : "_self"} 
              rel="noopener noreferrer"
            >
              
              {/* Left Side: Text and Icon */}
              <div className={styles['card-left']}>
                <div className={styles['text-content']}>
                  <p className={styles['project-category']}>{project.category}</p>
                  <h3 className={styles['project-title']}>{project.title}</h3>
                  <p className={styles['project-desc']}>{project.desc}</p>
                </div>
                
                {/* Diagonal Arrow SVG */}
                <div className={styles['arrow-icon']}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

              {/* Right Side: Image */}
              <div className={styles['card-right']}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles['project-image']} 
                />
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;