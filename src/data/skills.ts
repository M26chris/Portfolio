export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'medical' | 'analytical';
  link?: string;
}

export const skills: Skill[] = [
  // Medical Skills
  { name: "Medical Laboratory Techniques", level: 95, category: "medical" },
  { name: "Sample Processing & Analysis", level: 92, category: "medical" },
  { name: "Quality Control Procedures", level: 90, category: "medical" },
  
  // Analytical Skills
  { name: "Data Analysis with Excel", level: 90, category: "analytical" },
  { name: "Statistical Analysis", level: 85, category: "analytical" },
  { name: "Data Visualization", level: 88, category: "analytical" },
  
  // Technical Skills
  { name: "Python for Data Science", level: 80, category: "technical" },
  { name: "Cybersecurity Fundamentals", level: 85, category: "technical" },
  { name: "Database Management", level: 75, category: "technical" },
  { name: "SQL Basics", level: 70, category: "technical" },
  { name: "Technical Support", level: 88, category: "technical" }
];