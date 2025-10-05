import { motion } from 'framer-motion';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { testimonials } from '../data/testimonials';

const Resume: React.FC = () => (
  <motion.section 
    id="resume"
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
        Resume & Credentials
      </motion.h2>
      
      {/* Download CV Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-5"
      >
        <Card className="border-primary-custom shadow">
          <Card.Body className="py-4">
            <h3 className="h4 text-primary-custom mb-3">Download My CV</h3>
            <p className="text-muted mb-4">
              Get the complete details of my experience, education, and professional background
            </p>
            <Button 
              variant="primary-custom" 
              size="lg"
              href="/cv.pdf"
              target="_blank"
            >
              📄 Download CV (PDF)
            </Button>
          </Card.Body>
        </Card>
      </motion.div>

      {/* Professional Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-5"
      >
        <h3 className="text-center text-primary-custom mb-4 display-5">Professional Testimonials</h3>
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={testimonial.id} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-100 shadow-sm border-light">
                  <Card.Body className="d-flex flex-column">
                    <div className="text-center mb-3">
                      <span className="display-4">{testimonial.avatar}</span>
                    </div>
                    <p className="card-text flex-grow-1 fst-italic">
                      "{testimonial.text}"
                    </p>
                    <footer className="mt-auto">
                      <strong>{testimonial.name}</strong>
                      <br />
                      <small className="text-muted">
                        {testimonial.role}, {testimonial.company}
                      </small>
                    </footer>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      {/* Certifications Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-5 text-center"
      >
        <Card className="bg-light border-0">
          <Card.Body className="py-4">
            <h4 className="text-primary-custom mb-3">Professional Certifications</h4>
            <Row className="g-3">
              <Col md={3}>
                <div className="p-3 bg-white rounded shadow-sm">
                  <h6 className="mb-1">Cybersecurity</h6>
                  <small className="text-muted">Cisco Networking Academy</small>
                </div>
              </Col>
              <Col md={3}>
                <div className="p-3 bg-white rounded shadow-sm">
                  <h6 className="mb-1">Data Science</h6>
                  <small className="text-muted">Datamites</small>
                </div>
              </Col>
              <Col md={3}>
                <div className="p-3 bg-white rounded shadow-sm">
                  <h6 className="mb-1">Python</h6>
                  <small className="text-muted">DataQuest</small>
                </div>
              </Col>
              <Col md={3}>
                <div className="p-3 bg-white rounded shadow-sm">
                  <h6 className="mb-1">Medical Laboratory</h6>
                  <small className="text-muted">Nsambya Hospital</small>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  </motion.section>
);

export default Resume;