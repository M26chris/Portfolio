import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // ADD THIS IMPORT
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { personalInfo } from '../data/personal';

const Home: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="min-vh-100 d-flex align-items-center"
    >
      <div className="w-100">
        {/* Hero Section */}
        <Container className="text-center py-5">
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="display-4 fw-bold text-primary-custom mb-3"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
            className="lead text-dark mb-4"
          >
            {personalInfo.title}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted mb-4 mx-auto"
            style={{ maxWidth: '600px' }}
          >
            {personalInfo.bio}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              variant="primary-custom" 
              size="lg" 
              className="me-3"
              as={Link} // CHANGE THIS
              to="/contact" // CHANGE THIS
            >
              Contact Me
            </Button>
            <Button 
              variant="outline-primary-custom" 
              size="lg"
              as={Link} // CHANGE THIS
              to="/resume" // CHANGE THIS
            >
              Download CV
            </Button>
          </motion.div>
        </Container>

        {/* Featured Projects Section */}
        <Container className="py-5">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mb-4"
          >
            Featured Projects
          </motion.h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {featuredProjects.map((project, index) => (
              <Col key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              </Col>
            ))}
          </Row>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-center mt-4"
          >
            <Button 
              variant="primary-custom" 
              as={Link} // CHANGE THIS
              to="/projects" // CHANGE THIS
              size="lg"
            >
              View All Projects
            </Button>
          </motion.div>
        </Container>
      </div>
    </motion.section>
  );
};

export default Home;