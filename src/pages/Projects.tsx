import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Lab' | 'Data' | 'Tech'>('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    // ADD ID="PROJECTS" HERE
    <motion.section 
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-5"
    >
      <Container>
        <motion.h2 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-4 display-4 fw-bold text-primary-custom"
        >
          Projects
        </motion.h2>
        
        {/* Filter buttons and project grid */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          <Button 
            variant={activeFilter === 'All' ? 'primary-custom' : 'outline-primary-custom'}
            onClick={() => setActiveFilter('All')}
          >
            All
          </Button>
          <Button 
            variant={activeFilter === 'Lab' ? 'primary-custom' : 'outline-primary-custom'}
            onClick={() => setActiveFilter('Lab')}
          >
            Lab
          </Button>
          <Button 
            variant={activeFilter === 'Data' ? 'primary-custom' : 'outline-primary-custom'}
            onClick={() => setActiveFilter('Data')}
          >
            Data
          </Button>
          <Button 
            variant={activeFilter === 'Tech' ? 'primary-custom' : 'outline-primary-custom'}
            onClick={() => setActiveFilter('Tech')}
          >
            Tech
          </Button>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredProjects.map(project => (
            <Col key={project.id}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
};

export default Projects;