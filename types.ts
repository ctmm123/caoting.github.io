export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  year: string;
  details: string;
}

export interface SkillMetric {
  subject: string;
  A: number; // Proficiency (0-100)
  fullMark: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}