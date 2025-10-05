import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SecureContactForm from '../components/ContactForm';
import { personalInfo } from '../data/personal';

const Contact: React.FC = () => (
  <motion.section 
    id="contact"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }} 
    className="py-5"
  >
    <Container>
      <motion.h2 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center mb-5 display-4 fw-bold text-primary-custom"
      >
        Secure Contact
      </motion.h2>
      
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="border-primary-custom shadow">
            <Card.Header className="bg-primary-custom text-white">
              <h4 className="mb-0">
                <i className="fas fa-shield-alt me-2"></i>
                Get In Touch - Securely
              </h4>
            </Card.Header>
            <Card.Body className="p-4">
              <Row className="mb-4">
                <Col md={6}>
                  <h6 className="text-primary-custom">Direct Contact</h6>
                  <p className="mb-1">
                    <strong>Email:</strong><br />
                    <a href={`mailto:${personalInfo.email}`} className="text-decoration-underline">
                      {personalInfo.email}
                    </a>
                  </p>
                  <p className="mb-0">
                    <strong>Phone:</strong><br />
                    <a href={`tel:${personalInfo.phone}`} className="text-decoration-underline">
                      {personalInfo.phone}
                    </a>
                  </p>
                </Col>
                <Col md={6}>
                  <h6 className="text-primary-custom">Location</h6>
                  <p className="mb-0">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    {personalInfo.location}
                  </p>
                </Col>
              </Row>
              
              <div className="border-top pt-4">
                <SecureContactForm />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col lg={8} className="mx-auto">
          <div className="text-center">
            <small className="text-muted">
              <i className="fas fa-lock me-1"></i>
              All form submissions are encrypted and protected by Google reCAPTCHA
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  </motion.section>
);

export default Contact;