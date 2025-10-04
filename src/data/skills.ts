export interface Skill {
  name: string;
  level: number;
  category: 'medical' | 'data' | 'technical' | 'analytical';
  description?: string;
}

export const skills: Skill[] = [
  // Medical Laboratory Skills
  { 
    name: "Medical Laboratory Techniques", 
    level: 95, 
    category: "medical",
    description: "Sample processing, diagnostics, quality control"
  },
  { 
    name: "Sample Processing & Analysis", 
    level: 92, 
    category: "medical",
    description: "Haematology, microbiology, clinical chemistry"
  },
  { 
    name: "Quality Control Procedures", 
    level: 90, 
    category: "medical",
    description: "99.7% accuracy in diagnostic reporting"
  },
  
  // Data Analysis Skills
  { 
    name: "Data Analysis with Excel", 
    level: 90, 
    category: "data",
    description: "Advanced functions, formulas, data visualization"
  },
  { 
    name: "Statistical Analysis", 
    level: 85, 
    category: "data",
    description: "Data interpretation, trend analysis, reporting"
  },
  { 
    name: "Data Management Systems", 
    level: 88, 
    category: "data",
    description: "Excel, Access, database design"
  },
  
  // Technical Skills
  { 
    name: "Python for Data Science", 
    level: 80, 
    category: "technical",
    description: "Data cleaning, analysis, automation scripts"
  },
  { 
    name: "Cybersecurity Fundamentals", 
    level: 85, 
    category: "technical",
    description: "Data security protocols, encryption, threat prevention"
  },
  { 
    name: "Database Management", 
    level: 75, 
    category: "technical",
    description: "SQL basics, database-driven applications"
  },
  { 
    name: "Technical Support", 
    level: 88, 
    category: "technical",
    description: "Remote support, troubleshooting, documentation"
  }
];

// Helper function to get skills by category
export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};