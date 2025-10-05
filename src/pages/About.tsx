import { motion } from 'framer-motion';
import { Container, Row, Col, Card, ProgressBar, Button } from 'react-bootstrap';
import { personalInfo } from '../data/personal';
import Timeline from '../components/Timeline';

const About: React.FC = () => (
  <motion.section 
    id="about"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }} 
    className="py-5"  
  >
    <Container>
      {/* Hero About Section */}
      <Row className="align-items-center mb-5">
        <Col lg={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="display-4 fw-bold text-primary-custom mb-4">
              About {personalInfo.name.split(' ')[0]} {/* Use first name */}
            </h1>
            <p className="lead text-dark mb-4">
              {personalInfo.title}
            </p>
            <div className="mb-4">
              <p>
                {personalInfo.bio}
              </p>
              <p>
                What sets me apart is my ability to connect healthcare practices with modern technology. 
                I've achieved <mark className="bg-warning bg-opacity-25"><strong>99.7% accuracy</strong></mark> in laboratory diagnostics while implementing 
                data systems that improved efficiency by <mark className="bg-warning bg-opacity-25"><strong>30%</strong></mark> in community health projects.
              </p>
            </div>
            
            <div className="d-flex gap-3 flex-wrap">
              <Button 
                variant="primary-custom" 
                size="lg"
                href="/contact"
              >
                Contact Me
              </Button>
              <Button 
                variant="outline-primary-custom" 
                size="lg"
                href="/projects"
              >
                View Projects
              </Button>
              <Button 
                variant="outline-secondary" 
                size="lg"
                href="/cv.pdf"
                target="_blank"
              >
                Download CV
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-4 p-3 bg-light rounded">
              <h6 className="text-primary-custom mb-2">Get In Touch</h6>
              <p className="mb-1">
                <strong>Email:</strong> {personalInfo.email}
              </p>
              <p className="mb-1">
                <strong>Phone:</strong> {personalInfo.phone}
              </p>
              <p className="mb-0">
                <strong>Location:</strong> {personalInfo.location}
              </p>
            </div>
          </motion.div>
        </Col>
        
        <Col lg={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="ps-lg-5"
          >
            {/* Achievement Cards */}
            <Row className="g-3 mb-4">
              <Col sm={6}>
                <Card className="border-primary-custom text-center h-100 shadow-sm">
                  <Card.Body className="py-4">
                    <h3 className="text-primary-custom display-6 mb-2">99.7%</h3>
                    <small className="text-muted">Diagnostic Accuracy Rate</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6}>
                <Card className="border-primary-custom text-center h-100 shadow-sm">
                  <Card.Body className="py-4">
                    <h3 className="text-primary-custom display-6 mb-2">30%</h3>
                    <small className="text-muted">Efficiency Improvement</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6}>
                <Card className="border-primary-custom text-center h-100 shadow-sm">
                  <Card.Body className="py-4">
                    <h3 className="text-primary-custom display-6 mb-2">10K+</h3>
                    <small className="text-muted">Health Certifications</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6}>
                <Card className="border-primary-custom text-center h-100 shadow-sm">
                  <Card.Body className="py-4">
                    <h3 className="text-primary-custom display-6 mb-2">4</h3>
                    <small className="text-muted">Certifications</small>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Skills Progress */}
            <Card className="border-primary-custom shadow">
              <Card.Header className="bg-primary-custom text-white">
                <h4 className="mb-0">Core Competencies</h4>
              </Card.Header>
              <Card.Body>
                {[
                  { skill: "Medical Laboratory Technology", level: 95 },
                  { skill: "Data Analysis & Excel", level: 90 },
                  { skill: "Cybersecurity Protocols", level: 85 },
                  { skill: "Python & Automation", level: 80 },
                  { skill: "Technical Support", level: 88 }
                ].map((item, index) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span>{item.skill}</span>
                      <span className="text-primary-custom fw-bold">{item.level}%</span>
                    </div>
                    <ProgressBar 
                      now={item.level} 
                      variant="primary-custom"
                      className="shadow-sm"
                    />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>

      {/* Career Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-5"
      >
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="text-center display-5 fw-bold text-primary-custom mb-5">
              Professional Journey
            </h2>
            <Timeline />
          </Col>
        </Row>
      </motion.div>
    </Container>
  </motion.section>
);

export default About;