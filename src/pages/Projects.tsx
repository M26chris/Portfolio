import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard.tsx';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="py-4">
      <Container>
        <h2 className="mb-4">Projects</h2>
        <div className="d-flex flex-wrap gap-2 mb-4">
          {categories.map(cat => (
            <Button
              key={cat}
              onClick={() => setFilter(cat)}
              variant={filter === cat ? 'primary-custom' : 'outline-secondary'}
            >
              {cat}
            </Button>
          ))}
        </div>
        <Row xs={1} md={3} className="g-4">
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