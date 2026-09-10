import React from 'react';
import { motion } from 'framer-motion';
import me from '../../assets/me.png';
import './header.css';

function Header() {
  return (
    <section className="header-container">
      <div className="hero-content">
        <motion.div 
          className="text-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p 
            className="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hello, I am
          </motion.p>
          <h1 className="name-title">
            <span className="outline-text">STAN</span>
            <br />
            <span className="gradient-text">ISLAV</span>
          </h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Creative Developer, 3D Enthusiast & Fivem Developer
          </motion.p>
        </motion.div>

        <motion.div 
          className="image-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="glass-panel image-card">
            <img src={me} className="human-image" alt="Stanislav" />
            
            {/* Floating Tech Badges */}
            <motion.div className="tech-badge react" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>React</motion.div>
            <motion.div className="tech-badge js" animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }}>JS</motion.div>
            <motion.div className="tech-badge three" animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}>Three.js</motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Header;

