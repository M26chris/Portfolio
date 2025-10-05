import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education' | 'certification';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2023 - Present",
    title: "Laboratory Technician",
    company: "Essential Communications, Travel Agency Testing Centre",
    description: "High-volume laboratory testing for travel health certifications with 99.7% accuracy. Implemented cybersecurity protocols for patient data security.",
    type: 'work'
  },
  {
    id: 2,
    year: "2023 - Present",
    title: "Technical Support Specialist",
    company: "Freelance Remote Projects",
    description: "Developed database-driven programs using Python and SQL. Provided remote technical support with detailed documentation.",
    type: 'work'
  },
  {
    id: 3,
    year: "2023",
    title: "Data Analyst",
    company: "Naguru Community Health Project",
    description: "Designed data management system improving accuracy by 30%. Created visualizations and reports for health trends.",
    type: 'work'
  },
  {
    id: 4,
    year: "2021",
    title: "Diploma in Medical Laboratory Technology",
    company: "Nsambya Hospital Training School",
    description: "Specialized in laboratory diagnostics, sample processing, and data recording in clinical environments.",
    type: 'education'
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="position-relative">
      {/* Timeline line */}
      <div 
        className="position-absolute start-0 top-0 h-100 bg-primary-custom" 
        style={{ width: '3px', left: '20px' }}
      ></div>
      
      {timelineData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="position-relative mb-4 ps-5"
        >
          {/* Timeline dot */}
          <div 
            className="position-absolute start-0 top-0 rounded-circle bg-primary-custom border border-3 border-white shadow"
            style={{ width: '15px', height: '15px', left: '13px' }}
          ></div>
          
          <Card className="border-primary-custom shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <span className="badge bg-primary-custom">{item.year}</span>
                <span className="badge bg-secondary">
                  {item.type === 'work' ? '💼 Work' : 
                   item.type === 'education' ? '🎓 Education' : '📜 Certification'}
                </span>
              </div>
              <h5 className="card-title text-primary-custom">{item.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.company}</h6>
              <p className="card-text">{item.description}</p>
            </Card.Body>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;