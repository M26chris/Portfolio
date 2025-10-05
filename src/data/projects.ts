export interface Project {
  id: number;
  title: string;
  category: 'Lab' | 'Data' | 'Tech';
  description: string;
  details: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  link?: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Travel Health Certification System",
    category: "Lab",
    description: "High-volume diagnostic testing with cybersecurity protocols",
    details: "Managed comprehensive testing for travel health certifications", // ADD THIS
    problem: "Manual processing of 50+ daily patient samples led to potential errors and data security risks in health certifications.",
    solution: "Implemented automated quality control protocols and cybersecurity measures including data encryption and access controls.",
    impact: "Achieved 99.7% accuracy rate, reduced diagnostic errors by 15%, secured 10,000+ annual certifications.",
    technologies: ["Laboratory Diagnostics", "Quality Control", "Data Encryption", "Excel", "Access"],
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop&auto=format",
    featured: true
  },
  {
    id: 2,
    title: "Community Health Data Management",
    category: "Data",
    description: "Data system improving community health project efficiency",
    details: "Designed comprehensive data management system", // ADD THIS
    problem: "Inaccurate and disorganized health data was affecting community health project outcomes and reporting.",
    solution: "Designed comprehensive data management system with Excel, Access, and Python automation scripts for data validation.",
    impact: "Improved data accuracy by 30%, enabled better health trend analysis, streamlined reporting processes.",
    technologies: ["Excel", "Access", "Python", "Data Validation", "Statistical Analysis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    featured: true
  },
  {
    id: 3,
    title: "Cybersecurity & Database Development",
    category: "Tech",
    description: "Secure database applications with threat prevention",
    details: "Developed secure database-driven applications", // ADD THIS
    problem: "Need for secure, reliable database systems with protection against data breaches in healthcare environments.",
    solution: "Developed database-driven applications implementing cybersecurity best practices, encryption, and access controls.",
    impact: "Enhanced data security, provided reliable technical support, implemented threat prevention measures.",
    technologies: ["Python", "SQL", "Cybersecurity", "Encryption", "Technical Documentation"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format",
    featured: true
  },
  {
    id: 4,
    title: "Medical Laboratory Quality Control",
    category: "Lab",
    description: "Multi-facility diagnostic accuracy excellence",
    details: "Maintained exceptional accuracy standards across healthcare facilities", // ADD THIS
    problem: "Maintaining consistent diagnostic accuracy across different healthcare facilities with varying protocols.",
    solution: "Implemented standardized quality control procedures and precision testing protocols for haematology, microbiology, and clinical chemistry.",
    impact: "Maintained 99.7% accuracy across multiple facilities, improved patient safety, enhanced diagnostic reliability.",
    technologies: ["Haematology", "Microbiology", "Clinical Chemistry", "Quality Assurance", "Diagnostic Precision"],
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop&auto=format",
    featured: false
  }
];