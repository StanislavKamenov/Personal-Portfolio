import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './work.css';

import image1 from '../../assets/designing.png';


function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      image: image1,
      title: 'Project One',
      description: 'This is the description for project one.',
    },
    {
      id: 2,
      image: image1,
      title: 'Project Two',
      description: 'This is the description for project two.',
    },
    {
      id: 3,
      image: image1,
      title: 'Project Three',
      description: 'This is the description for project three.',
    },
  ];

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
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='project-card'
            variants={cardVariants}
            whileHover={{ scale: 1.1, rotate: 2, boxShadow: '0px 15px 40px rgba(0,0,0,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className='project-image'
              whileHover={{ scale: 1.2, rotate: -2 }}
              transition={{ duration: 0.4 }}
            />
            <h2 className='project-title'>{project.title}</h2>
            <p className='project-desc'>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Work;
