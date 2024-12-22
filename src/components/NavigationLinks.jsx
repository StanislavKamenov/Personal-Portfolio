import './navStyles.css';
import { motion } from 'framer-motion';

function NavigationLinks() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="navbar">
      <motion.div
        className="logo"
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        transition={{ duration: 1.5 }}
      >
        STANISLAV
      </motion.div>
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={index}>
            <a className="link" href={link.href} aria-label={link.name}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationLinks;
