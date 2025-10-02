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
    description: "High-volume laboratory testing with 99.7% accuracy in health certifications",
    details: "Conducted comprehensive testing for travel-related health certifications, managing sample collection, processing, and analysis of biological specimens while implementing cybersecurity protocols to secure sensitive patient data.",
    technologies: ["Laboratory Diagnostics", "Excel", "Access", "Cybersecurity Protocols"],
    image: "/images/lab-project.jpg"
  },
  {
    id: 2,
    title: "Community Health Data Management",
    category: "Data",
    description: "Improved data accuracy by 30% through rigorous cleaning and validation",
    details: "Designed and implemented a data management system using Excel and Access for community health projects, utilizing Python scripts for data organization and creating visualizations to communicate health trends.",
    technologies: ["Excel", "Access", "Python", "Data Visualization"],
    image: "/images/data-project.jpg"
  },
  {
    id: 3,
    title: "Cybersecurity & Database Development",
    category: "Tech",
    description: "Secure database-driven programs with cybersecurity best practices",
    details: "Developed database-driven applications using Python and SQL basics, implementing cybersecurity protocols for data protection and providing remote technical support with detailed documentation.",
    technologies: ["Python", "SQL", "Cybersecurity", "Technical Support"],
    image: "/images/tech-project.jpg"
  },
  {
    id: 4,
    title: "Medical Laboratory Quality Control",
    category: "Lab",
    description: "Maintained 99.7% accuracy in diagnostic reporting across multiple healthcare facilities",
    details: "Processed and analyzed laboratory samples including haematology, microbiology, and clinical chemistry tests, ensuring precision in data entry and reporting while collaborating with healthcare teams on patient diagnosis.",
    technologies: ["Haematology", "Microbiology", "Clinical Chemistry", "Quality Control"],
    image: "/images/quality-project.jpg"
  }
];