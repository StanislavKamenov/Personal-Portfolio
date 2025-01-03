import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaCss3Alt, FaGitlab, FaNodeJs, FaPython, FaRust, FaWordpress, FaGithub, FaJs, FaFigma, FaSass } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSolid } from 'react-icons/si';
import './skills.css';

const skills = [
  { name: 'React', icon: <FaReact />, className: 'react' },
  { name: 'TypeScript', icon: <SiTypescript />, className: 'typescript' },
  { name: 'CSS3', icon: <FaCss3Alt />, className: 'css3' },
  { name: 'Tailwind', icon: <SiTailwindcss />, className: 'tailwind' },
  { name: 'JavaScript', icon: <FaJs />, className: 'javascript' },
  { name: 'SCSS', icon: <FaSass />, className: 'scss' },
  { name: 'GitHub', icon: <FaGithub />, className: 'github' },
  { name: 'WordPress', icon: <FaWordpress />, className: 'wordpress' },
];

const experiences = [
  { year: '2020', description: 'Started learning programming.' },
  { year: '2021', description: 'Dive into front-end technologies and HTML/CSS.' },
  { year: '2022', description: 'Start creating small projects.' },
  { year: '2023', description: 'Started collaborating.' },
  { year: '2024', description: 'First client with WordPress. Started working on projects and improving skills.' },
];

function SkillsSection() {
  return (
    <section className="skills-section-modern">
      <motion.h2
        className="section-title-modern"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Journey & Skills
      </motion.h2>
      <div className="content-modern">
        <motion.div
          className="timeline-modern"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="timeline-title-modern">Timeline</h3>
          <ul>
            {experiences.map((exp, index) => (
              <motion.li
                key={index}
                className="timeline-item-modern"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="timeline-year-modern">{exp.year}</div>
                <p className="timeline-desc-modern">{exp.description}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="skills-modern"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="skills-title-modern">Skills</h3>
          <div className="skills-grid-modern">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card-modern"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <span className={`skill-icon-modern ${skill.className}`}>{skill.icon}</span>
                <span className="skill-name-modern">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
