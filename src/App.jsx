import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Slidebar from './components/Slidebar.jsx'
import PortfolioHero from './components/PortfolioHero.jsx';
import About from './components/About.jsx'; // Import your new About component!
import Myimage from './components/Myimg.jsx';
import layoutStyles from './css_modules/Layout.module.css';
import Specialties from './components/Specialties.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <Router>
      <div className={layoutStyles['page-wrapper']}>

        {/* 20% Sidebar - Outside the Routes so it NEVER reloads */}
        <div className={layoutStyles['sidebar-area']}>
          <Slidebar />
        </div>
        
        {/* 80% Content Area - The Routes component swaps the pages here */}
        <div className={layoutStyles['hero-area']}>
          <Routes>
            <Route path="/" element={<PortfolioHero />} />
            <Route path="/about" element={<About />} />
            <Route element={<Specialties></Specialties>} path="/specialties"/>
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact/>} />
            
            {/* If Myimage is meant to be its own page, you can route it like this: */}
            {/* <Route path="/image-gallery" element={<Myimage />} /> */}
          </Routes>
        </div>

      </div>

      {/* A quick note on this Myimage component: 
          If you leave it floating down here outside the layout wrapper, 
          it will display at the very bottom of every single page. 
          If it belongs to a specific page, move it inside one of the Route elements above! */}
      {/* 
      <div>
        <Myimage />
      </div> 
      */}

    </Router>
  )
}

export default App