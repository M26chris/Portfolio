// src/data/testimonials.ts
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Supervisor",
    role: "Laboratory Manager",
    company: "Essential Communications",
    text: "Musasa demonstrated exceptional attention to detail in laboratory diagnostics and data management. His 99.7% accuracy rate in health certifications was remarkable and his cybersecurity protocols significantly improved our data security.",
    avatar: "👨‍⚕️"
  },
  {
    id: 2,
    name: "Project Lead",
    role: "Community Health Coordinator", 
    company: "Naguru Community Health Project",
    text: "His data management system improved our community health project efficiency by 30%. Musasa's unique combination of medical and technical skills brought valuable insights to our data collection and analysis processes.",
    avatar: "👩‍💼"
  },
  {
    id: 3,
    name: "Healthcare Colleague",
    role: "Medical Practitioner",
    company: "Glory Of Christ Medical Centre",
    text: "Working with Musasa was exceptional. His precision in laboratory diagnostics and ability to explain complex data findings made him an invaluable team member. The quality control systems he implemented are still in use today.",
    avatar: "👨‍🔬"
  }
];