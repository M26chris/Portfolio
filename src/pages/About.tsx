import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

const About: React.FC = () => (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="py-4">
    <Container>
      <h2 className="mb-4">About Me</h2>
      <p>Based in Kampala, Uganda, I hold a Diploma in Medical Laboratory Technology (Nsambya, 2021) and certifications in Data Science (Datamites, 2023) and Cybersecurity (Cisco, 2024). With 99.7% accuracy in lab diagnostics and a 30% improvement in data systems at Naguru Community Health, I deliver precision across healthcare and tech. Fluent in English, Luganda, and Acholi, I’m open to freelance and full-time roles in lab, data, and tech.</p>
      <h3 className="mt-4">Career Timeline</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">2023-Present: Lab Technician, Essential Communications (Travel Testing)</li>
        <li className="list-group-item">2023-Present: Freelance Technical Support (Remote)</li>
        <li className="list-group-item">2023: Data Analyst, Naguru Community Health Project</li>
        <li className="list-group-item">2021-2022: Lab Technician, Glory of Christ Medical Centre</li>
        <li className="list-group-item">2021: Lab Technician, Doctore Clinic</li>
        <li className="list-group-item">2021: Lab Intern, Kyambogo University Medical Centre</li>
      </ul>
    </Container>
  </motion.section>
);

export default About;