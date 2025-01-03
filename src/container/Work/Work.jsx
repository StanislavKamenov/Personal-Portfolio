import { React, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './work.css';

import image1 from '../../assets/designing.png';
import padaura from '../../assets/padaura.png'
import SplineProject from '../../assets/3DWebsite.png'
import Delivery from '../../assets/delivery.png'
import oldPortfolio from '../../assets/oldPortfolio.png'
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
      image: padaura,
      title: 'Padaura',
      description: 'Woocomerce website based on WordPress',
      view: 'https://padaura.com',
    },
    {
      id: 2,
      image: SplineProject,
      title: '3D Website',
      description: '3D Website created with Spline',
      view: 'https://3-d-website-react.vercel.app/',
      githubLink: 'https://github.com/StanislavKamenov/3D-Website-react',
    },
    {
      id: 3,
      image: Delivery,
      title: 'Delivery Website',
      description: 'Simple one page Website for Delivery',
      view: 'https://zing7-project2.vercel.app/',
      githubLink: 'https://github.com/StanislavKamenov/Zing7-Project2',
    },
    {
      id: 4,
      image: oldPortfolio,
      title: 'Old Portfolio',
      description: 'This is my Old and outdated portfolio',
      view: 'https://st-dev-blond.vercel.app/',
      githubLink: 'https://github.com/StanislavKamenov/PortFolio-2',
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
