// src/data/personal.ts
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
}

export const personalInfo: PersonalInfo = {
  name: "Musasa Christopher",
  title: "Medical Lab Technician & Data Specialist",
  bio: "Versatile professional with expertise in medical laboratory technology, data management, and cybersecurity. Based in Kampala, Uganda.",
  email: "musasachristopher2@gmail.com",
  phone: "+256778129221",
  location: "Kampala, Uganda"
};