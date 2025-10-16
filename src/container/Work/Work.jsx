import { React, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './work.css';

import images from '../../components/images';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;

  const projects = [
    {
      id: 1,
      image: images.ResumeAI,
      title: 'ResumeAI',
      description: 'Site for personal photography',
      view: 'https://resumeai-rosy.vercel.app/',
    },
    {
      id: 2,
      image: images.nebulonStudios,
      title: 'Nebulon Studios',
      description: 'Site for personal photography',
      view: 'https://apex-photos.vercel.app/',
    },
    {
      id: 3,
      image: images.EagleDetailed,
      title: 'Eagle Detailed',
      description: 'Detailing service website',
      view: 'https://eagle-detail-site.vercel.app/',
    },
    {
      id: 4,
      image: images.SkillMatch,
      title: 'SkillMatch',
      description: 'Platform for Freelancers, Employers, workers and clients in one',
      view: 'https://tech-pro-nu.vercel.app/',
    },
    {
      id: 5,
      image: images.TrendFlow,
      title: 'TrendFlow',
      description: 'Woocomerce website from scratch',
      view: 'https://shop-jijo.vercel.app/',
    },
    {
      id: 6,
      image: images.SplineProject,
      title: '3D Website',
      description: '3D Website created with Spline',
      view: 'https://3-d-website-react.vercel.app/',
      githubLink: 'https://github.com/StanislavKamenov/3D-Website-react',
    },
    {
      id: 7,
      image: images.personalPortoflio,
      title: 'Personal Portfolio',
      description: 'This is my Personal Portfolio',
      view: 'https://personal-portfolio-rose-omega.vercel.app/',
      githubLink: 'https://github.com/StanislavKamenov/Personal-Portfolio',
    },
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : totalPages - 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage
  );

  return (
    <div className='work' ref={ref} id='Work'>
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <p className='title'>My Portfolio Section</p>
      </motion.span>

      <motion.div
        className='projects-container'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {currentProjects.map((project) => (
          <motion.div
            key={project.id}
            className='project-card'
            variants={cardVariants}
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
          >
            <div className='image-overlay'>
              <motion.img
                src={project.image}
                alt={project.title}
                className='project-image'
                transition={{ duration: 0.4 }}
              />
              <div className='overlay-content'>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link-icon'
                >
                  <FaGithub />
                </a>
                <a
                  href={project.view}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link-icon'
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <h2 className='project-title'>{project.title}</h2>
            <p className='project-desc'>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className='pagination'>
        <motion.button
          className='pagination-arrow'
          onClick={handlePrev}
          disabled={currentPage === 0}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          &#8592;
        </motion.button>
        <motion.button
          className='pagination-arrow'
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          &#8594;
        </motion.button>
      </div>
    </div>
  );
}

export default Work;
