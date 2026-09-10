import React from 'react';
import { motion } from 'framer-motion';
import './work.css';
import images from '../../components/images';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Work() {
  const projects = [
    { id: 8, image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop', title: 'XenoShop', view: 'https://xenoshop.net/', githubLink: null },
    { id: 1, image: images.ResumeAI, title: 'ResumeAI', view: 'https://resumeai-rosy.vercel.app/' },
    { id: 2, image: images.nebulonStudios, title: 'Nebulon Studios', view: 'https://apex-photos.vercel.app/' },
    { id: 3, image: images.EagleDetailed, title: 'Eagle Detailed', view: 'https://eagle-detail-site.vercel.app/' },
    { id: 4, image: images.SkillMatch, title: 'SkillMatch', view: 'https://tech-pro-nu.vercel.app/' },
    { id: 5, image: images.TrendFlow, title: 'TrendFlow', view: 'https://shop-jijo.vercel.app/' },
    { id: 6, image: images.SplineProject, title: '3D Website', view: 'https://3-d-website-react.vercel.app/', githubLink: 'https://github.com/StanislavKamenov/3D-Website-react' },
    { id: 7, image: images.personalPortoflio, title: 'Portfolio', view: 'https://personal-portfolio-rose-omega.vercel.app/', githubLink: 'https://github.com/StanislavKamenov/Personal-Portfolio' },
  ];

  return (
    <section className='work-section' id='Work'>
      <motion.div
        className="work-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='work-title'>Selected <span className="accent">Works</span></h2>
      </motion.div>

      <div className='projects-grid'>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className='project-item glass-panel'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className='project-image-wrapper'>
              <img src={project.image} alt={project.title} className='project-img' />
              <div className='project-overlay'>
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='project-link-btn'>
                      <FaGithub />
                    </a>
                  )}
                  <a href={project.view} target='_blank' rel='noopener noreferrer' className='project-link-btn'>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Work;

