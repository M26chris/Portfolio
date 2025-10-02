import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Navbar sticky="top" expand="lg" className={darkMode ? 'bg-dark' : 'bg-primary-custom'} variant={darkMode ? 'dark' : 'light'}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
          <Nav.Link as={Link} to="/projects" className="text-white">Projects</Nav.Link>
          <Nav.Link as={Link} to="/skills" className="text-white">Skills</Nav.Link>
          <Nav.Link as={Link} to="/resume" className="text-white">Resume</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>
        </Nav>
        <Button
          variant={darkMode ? 'dark' : 'light'}
          onClick={() => setDarkMode(!darkMode)}
          className="ms-3"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;