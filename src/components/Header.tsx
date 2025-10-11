// Updated Header.tsx with background color and proper positioning
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // Close navbar when route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const getActiveSection = () => {
    const path = location.pathname;
    const routes = {
      '/': 'home',
      '/about': 'about', 
      '/projects': 'projects',
      '/skills': 'skills',
      '/resume': 'resume',
      '/contact': 'contact'
    };
    return routes[path as keyof typeof routes] || 'home';
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

  const handleToggle = (isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  const navbarClass = `py-2 ${scrolled ? 'shadow-sm ' : ''}${isDarkMode ? 'bg-dark' : 'bg-light'}`;
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
        onToggle={handleToggle}
        collapseOnSelect
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
            className="border-0" // Remove border from toggle
          />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.path}
                  as={Link}
                  to={item.path}
                  className={`mx-lg-2 fw-medium position-relative ${
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
                className="ms-lg-3 mt-2 mt-lg-0"
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Spacer for fixed navbar */}
      <div style={{ height: scrolled ? '70px' : '80px' }} />

      {/* Custom CSS for mobile dropdown */}
      <style>
        {`
          @media (max-width: 991.98px) {
            .navbar-collapse {
              position: absolute !important; /* Position below the navbar/hamburger */
              top: 100% !important;
              left: auto !important;
              right: 0 !important;
              width: 200px !important;
              background-color: ${isDarkMode ? '#212529' : '#ffffff'} !important;
              border-top: 1px solid ${isDarkMode ? '#343a40' : '#dee2e6'} !important;
              box-shadow: 0 4px 6px ${isDarkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)'} !important; /* Consistent shadow */
              z-index: 1000 !important;
              padding: 1rem !important;
              transform: translateY(0); /* For smooth animation if using transitions */
              transition: transform 0.3s ease-in-out;
            }

            /* Show/hide with Bootstrap's collapse classes */
            .navbar-collapse.show {
              transform: translateY(0);
            }

            .navbar-collapse.collapsing {
              transform: translateY(-10px); /* Slight offset during animation */
            }
              
            .navbar-nav {
              text-align: left !important; /* Align text to right */
              justify-content: flex-end !important; /* Justify nav items to the right end */
              padding: 0 !important; /* Removed excessive padding; adjust if needed */
              width: 100%;
            }
            
            .navbar-nav .nav-link {
              padding: 0.75rem 0 !important;
              border-bottom: 1px solid ${isDarkMode ? '#343a40' : '#e9ecef'} !important;
              font-size: 1.1rem !important;
            }
            
            .navbar-nav .nav-link:last-child {
              border-bottom: none !important;
            }
            
            .navbar-nav .btn {
              margin-top: 1rem !important;
              display: inline-block !important;
            }
          }
        `}
      </style>
    </motion.div>
  );
};

export default Header;