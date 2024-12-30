import { React, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './work.css';

import image1 from '../../assets/designing.png';
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
      image: image1,
      title: 'Project One',
      description: 'This is the description for project one.',
      view: 'https://example.com',
      githubLink: 'https://github.com/example/project-one',
    },
    {
      id: 2,
      image: image1,
      title: 'Project Two',
      description: 'This is the description for project two.',
      view: 'https://example.com',
      githubLink: 'https://github.com/example/project-two',
    },
    {
      id: 3,
      image: image1,
      title: 'Project Three',
      description: 'This is the description for project three.',
      view: 'https://example.com',
      githubLink: 'https://github.com/example/project-three',
    },
    {
      id: 4,
      image: image1,
      title: 'Project Four',
      description: 'This is the description for project four.',
      view: 'https://example.com',
      githubLink: 'https://github.com/example/project-four',
    },
    {
      id: 5,
      image: image1,
      title: 'Project Five',
      description: 'This is the description for project five.',
      view: 'https://example.com',
      githubLink: 'https://github.com/example/project-five',
    },
    {
      id: 6,
      image: image1,
      title: 'Project Six',
      description: 'This is the description for project six.',
      view: 'https://example.com',
      githubLink: 'https://github.com/example/project-six',
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
    <div className='work' ref={ref}>
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
            whileHover={{ scale: 1.05, boxShadow: '0px 15px 40px rgba(0,0,0,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <div className='image-overlay'>
              <motion.img
                src={project.image}
                alt={project.title}
                className='project-image'
                whileHover={{ scale: 1.1 }}
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
