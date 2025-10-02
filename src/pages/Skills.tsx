import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import SkillBar from '../components/SkillBar';
import { skills } from '../data/skills';

const Skills: React.FC = () => (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="py-4">
    <Container>
      <h2 className="mb-4">Skills</h2>
      {skills.map(skill => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </Container>
  </motion.section>
);

export default Skills;