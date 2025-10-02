import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';
import type { Project } from '../data/projects';

const ProjectCard: React.FC<Project> = ({ title, description, image, link, details }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="h-100">
      <Card.Img variant="top" src={image} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body className="bg-light">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="text-muted small">{details}</Card.Text>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary-custom text-decoration-underline">View Details</a>
      </Card.Body>
    </Card>
  </motion.div>
);

export default ProjectCard;