import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="py-4">
    <Container>
      <h2 className="mb-4">Contact & Services</h2>
      <p className="mb-4">Email: musasachristopher2@gmail.com | Phone: +256755281260</p>
      <h3 className="mb-2">Freelance Services</h3>
      <ul className="list-group list-group-flush mb-4">
        <li className="list-group-item">Data Cleaning: $50/project</li>
        <li className="list-group-item">Lab Consulting: $30/hr</li>
        <li className="list-group-item">Technical Support: $20/session</li>
      </ul>
      <ContactForm />
    </Container>
  </motion.section>
);

export default Contact;