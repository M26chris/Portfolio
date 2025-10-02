import { motion } from 'framer-motion';
import { ProgressBar } from 'react-bootstrap';
interface Skill {
  name: string;
  level: number;
  link?: string;
}

const SkillBar: React.FC<Skill> = ({ name, level, link }) => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    transition={{ duration: 1 }}
    className="mb-3"
  >
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary-custom text-decoration-underline">
        {name}
      </a>
    ) : (
      <span className="text-primary-custom">{name}</span>
    )}
    <ProgressBar now={level} label={`${level}%`} variant="primary-custom" className="mt-1" />
  </motion.div>
);

export default SkillBar;