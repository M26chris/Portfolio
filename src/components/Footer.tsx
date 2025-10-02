import { Container } from 'react-bootstrap';

const Footer: React.FC = () => (
  <footer className="bg-dark text-white py-3 mt-5">
    <Container className="text-center">
      <p className="mb-1">&copy; 2025 Musasa Christopher. All rights reserved.</p>
      <p className="mb-0">
        <a href="https://https://github.com/M26chris" className="text-white text-decoration-underline me-3">GitHub</a> 
        | 
        <a href="https://www.linkedin.com/in/musasa-christopher-396b60117/" className="text-white text-decoration-underline ms-3">LinkedIn</a>
        |
        <a href="tel:+256778129221, +256755281260" className="text-white text-decoration-underline ms-3">Phone: +256 778 129 221, +256 755 281 260</a>
      </p>
    </Container>
  </footer>
);

export default Footer;