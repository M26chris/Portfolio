// Enhanced Header.tsx with backdrop
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close navbar on route change and prevent body scroll
  useEffect(() => {
    setExpanded(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  // Handle body scroll when navbar is open
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [expanded]);

  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/projects') return 'projects';
    if (path === '/skills') return 'skills';
    if (path === '/resume') return 'resume';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const activeSection = getActiveSection();

  const navItems = [
    { path: '/', label: 'Home', id: 'home' },
    { path: '/about', label: 'About', id: 'about' },
    { path: '/projects', label: 'Projects', id: 'projects' },
    { path: '/skills', label: 'Skills', id: 'skills' },
    { path: '/resume', label: 'Resume', id: 'resume' },
    { path: '/contact', label: 'Contact', id: 'contact' }
  ];

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  const navbarClass = scrolled 
    ? `py-2 shadow-sm ${isDarkMode ? 'bg-dark' : 'bg-light'}` 
    : `py-3 ${isDarkMode ? 'bg-dark' : 'bg-light'}`;

  const textClass = isDarkMode ? 'text-light' : 'text-dark';

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={navbarClass}
        variant={isDarkMode ? 'dark' : 'light'}
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Container>
          <Navbar.Brand 
            as={Link}
            to="/" 
            className={`fw-bold ${textClass}`}
            onClick={handleNavLinkClick}
          >
            Musasa Christopher
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            aria-label="Toggle navigation"
          />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.path}
                  as={Link}
                  to={item.path}
                  className={`mx-2 fw-medium position-relative ${
                    activeSection === item.id 
                      ? 'text-primary-custom' 
                      : textClass
                  }`}
                  onClick={handleNavLinkClick}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="position-absolute bottom-0 start-0 w-100 bg-primary-custom"
                      style={{ height: '2px' }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Nav.Link>
              ))}
              
              <Button
                variant="outline-primary-custom"
                size="sm"
                onClick={toggleDarkMode}
                className="ms-3"
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Backdrop for mobile */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
            style={{ zIndex: 999 }}
            onClick={() => setExpanded(false)}
          />
        )}
      </AnimatePresence>
      
      <div style={{ height: '80px' }} />
    </motion.div>
  );
};

export default Header;