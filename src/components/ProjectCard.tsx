import { motion } from 'framer-motion';
import { Card, Button, Badge } from 'react-bootstrap';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: 'Lab' | 'Data' | 'Tech';
  description: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  link?: string;
  image: string;
  featured?: boolean;
}

interface ProjectCardProps {
  id: number;
  title: string;
  category: 'Lab' | 'Data' | 'Tech';
  description: string;
  details: string;
  technologies: string[];
  link?: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  // Convert props to match the enhanced structure
  const project: Project = {
    id: props.id,
    title: props.title,
    category: props.category,
    description: props.description,
    problem: "High accuracy requirements in diagnostic testing", // You can customize these
    solution: "Implemented quality control protocols and precision testing",
    impact: "Achieved 99.7% accuracy rate in diagnostic reporting",
    technologies: props.technologies,
    link: props.link,
    image: props.image
  };

  const categoryColors = {
    Lab: 'success',
    Data: 'info', 
    Tech: 'warning'
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-100 shadow-sm border-0 overflow-hidden">
        {/* Project Image */}
        <div className="position-relative overflow-hidden">
          <Card.Img 
            variant="top" 
            src={project.image} 
            style={{ height: '200px', objectFit: 'cover' }}
            alt={project.title}
          />
          <Badge 
            bg={categoryColors[project.category]} 
            className="position-absolute top-0 end-0 m-2"
          >
            {project.category}
          </Badge>
          {project.featured && (
            <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
              ⭐ Featured
            </Badge>
          )}
        </div>

        <Card.Body className="d-flex flex-column">
          {/* Basic Info */}
          <div className="flex-grow-1">
            <Card.Title className="text-primary-custom h5">
              {project.title}
            </Card.Title>
            <Card.Text className="text-muted small">
              {project.description}
            </Card.Text>

            {/* Technologies */}
            <div className="mb-3">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <Badge 
                  key={index}
                  bg="light" 
                  text="dark" 
                  className="me-1 mb-1 small"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge bg="light" text="dark" className="small">
                  +{project.technologies.length - 3} more
                </Badge>
              )}
            </div>

            {/* Expandable Details */}
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3"
              >
                <div className="border-start border-primary-custom ps-3">
                  <h6 className="text-primary-custom small">Challenge</h6>
                  <p className="small text-muted mb-2">{project.problem}</p>
                  
                  <h6 className="text-primary-custom small">Approach</h6>
                  <p className="small text-muted mb-2">{project.solution}</p>
                  
                  <h6 className="text-primary-custom small">Result</h6>
                  <p className="small text-muted">{project.impact}</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Actions */}
          <div className="d-flex gap-2 mt-auto">
            <Button 
              variant={showDetails ? "outline-secondary" : "outline-primary-custom"}
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
              className="flex-grow-1"
            >
              {showDetails ? 'Show Less' : 'View Details'}
            </Button>
            {project.link && (
              <Button 
                variant="primary-custom" 
                size="sm"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;