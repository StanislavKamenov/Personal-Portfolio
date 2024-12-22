import { motion } from 'framer-motion';
import React from 'react';
import NavigationLinks from '../NavigationLinks';

function Navbar() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <NavigationLinks />
    </motion.header>
  );
}

export default Navbar;
