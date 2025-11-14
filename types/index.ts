export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  link?: string;
  github?: string;
  image?: string;
  images?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  upwork: string;
  location: string;
  bio: string;
}
