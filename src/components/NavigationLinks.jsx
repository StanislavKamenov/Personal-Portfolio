import { useState, useEffect } from 'react';
import './navStyles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

function NavigationLinks() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#About' },
    { name: 'Work', href: '#Work' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Contact', href: '#Contact' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function toggleMobileNav() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="navbar-container">
      <motion.div 
        className="navbar-pill glass-panel"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="logo">ST.</div>

        {isMobileView ? (
          <>
            <div className="hamburger" onClick={toggleMobileNav}>
              {isMobileMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </div>
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.ul
                  className="nav-links-mobile glass-panel"
                  initial={{ opacity: 0, scale: 0.95, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {links.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <a className="link-mobile" href={link.href} aria-label={link.name}>
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        ) : (
          <ul className="nav-links">
            {links.map((link, index) => (
              <li key={index}>
                <a className="link" href={link.href} aria-label={link.name}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </nav>
  );
}

export default NavigationLinks;

