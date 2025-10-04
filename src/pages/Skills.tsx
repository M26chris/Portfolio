import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SkillBar from '../components/SkillBar';
import { getSkillsByCategory } from '../data/skills';

const Skills: React.FC = () => {
  const medicalSkills = getSkillsByCategory('medical');
  const dataSkills = getSkillsByCategory('data');
  const technicalSkills = getSkillsByCategory('technical');

  return (
    <motion.section 
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
          Professional Skills
        </motion.h2>
        
        <Row className="g-4">
          {/* Medical Laboratory Skills */}
          <Col md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-primary-custom shadow-sm h-100">
                <Card.Header className="bg-primary-custom text-white">
                  <h3 className="h4 mb-0">🏥 Medical Laboratory</h3>
                </Card.Header>
                <Card.Body>
                  {medicalSkills.map(skill => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Data Analysis Skills */}
          <Col md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-primary-custom shadow-sm h-100">
                <Card.Header className="bg-primary-custom text-white">
                  <h3 className="h4 mb-0">📊 Data Analysis</h3>
                </Card.Header>
                <Card.Body>
                  {dataSkills.map(skill => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Technical Skills */}
          <Col md={12} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="border-primary-custom shadow-sm h-100">
                <Card.Header className="bg-primary-custom text-white">
                  <h3 className="h4 mb-0">💻 Technical</h3>
                </Card.Header>
                <Card.Body>
                  {technicalSkills.map(skill => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Skills;