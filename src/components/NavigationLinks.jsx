import { useState, useEffect } from 'react';
import './navStyles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";

function NavigationLinks() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function toggleMobileNav() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="navbar">
      <motion.div
        className="logo"
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        transition={{ duration: 1 }}
      >
        STANISLAV
      </motion.div>

      {isMobileView ? (
        <>
          <RxHamburgerMenu className="hamburger" onClick={toggleMobileNav} />
          <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.ul
      className="nav-links-mobile"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {links.map((link, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
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
    </nav>
  );
}

export default NavigationLinks;
