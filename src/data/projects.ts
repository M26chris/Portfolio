export interface Project {
  id: number;
  title: string;
  category: 'Lab' | 'Data' | 'Tech';
  description: string;
  details: string;
  technologies: string[];
  link?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Travel Health Certification System",
    category: "Lab",
    description: "99.7% Accuracy in High-Volume Health Certifications",
    details: "Managed 50+ daily patient samples at Essential Communications, implementing quality control protocols that reduced diagnostic errors by 15%. Secured sensitive health data using encryption, handling 10,000+ annual certifications.",
    technologies: ["Laboratory Diagnostics", "Quality Control", "Data Security", "Excel", "Access"],
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Community Health Data Management",
    category: "Data",
    description: "30% Data Accuracy Improvement in Community Health",
    details: "Designed and implemented a comprehensive data management system for Naguru Community Health Project, improving data accuracy by 30% through rigorous cleaning, validation, and Python automation scripts.",
    technologies: ["Excel", "Access", "Python", "Data Visualization", "Statistical Analysis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Cybersecurity & Database Development",
    category: "Tech",
    description: "Secure Database Systems with Cybersecurity Protocols",
    details: "Developed database-driven applications implementing cybersecurity best practices, providing remote technical support with detailed documentation and threat prevention measures.",
    technologies: ["Python", "SQL", "Cybersecurity", "Encryption", "Technical Support"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Medical Laboratory Quality Control",
    category: "Lab",
    description: "99.7% Diagnostic Accuracy Across Healthcare Facilities",
    details: "Maintained exceptional accuracy standards across multiple healthcare facilities including Glory Of Christ Medical Centre and Doctore Clinic, processing haematology, microbiology, and clinical chemistry tests.",
    technologies: ["Haematology", "Microbiology", "Clinical Chemistry", "Quality Assurance", "Diagnostic Reporting"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
  }
];