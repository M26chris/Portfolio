import { motion } from 'framer-motion';
import { Container, Button } from 'react-bootstrap';

const Resume: React.FC = () => (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="py-4">
    <Container>
      <h2 className="mb-4">Resume & Testimonials</h2>
      <a href="/cv.pdf" download>
        <Button variant="primary-custom" className="mb-4">Download CV</Button>
      </a>
      <h3 className="mb-2">Testimonials</h3>
      <p className="mb-2">"Musasa’s data system improved our efficiency by 30%." - Naguru Community Project Lead</p>
      <p>"His lab work ensured reliable diagnoses with 99.7% accuracy." - Glory of Christ Supervisor</p>
    </Container>
  </motion.section>
);

export default Resume;