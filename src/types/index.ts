export interface NavLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  github: string;
  linkedin: string;
  email?: string;
  existingPortfolio?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface ProjectCaseStudy {
  overview?: string;
  problem?: string;
  approach?: string;
  architecture?: string[];
  technicalImplementation?: string[];
  results?: ProjectMetric[];
  challenges?: string[];
  limitations?: string[];
}

export type ProjectCategory =
  | 'Computer Vision'
  | 'LLM Applications'
  | 'Machine Learning'
  | 'Game Development';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  technologies: string[];
  metrics?: ProjectMetric[];
  github?: string;
  demo?: string;
  featured: boolean;
  status: 'active' | 'in-progress' | 'academic';
  caseStudy?: ProjectCaseStudy;
  visualId: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  workMode: string;
  mentor?: string;
  description: string;
  technologies: string[];
  current?: boolean;
  certificate?: string;
  workAreas: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  cgpa?: string;
  description?: string;
  activities?: string[];
  achievements?: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
  priority: 'primary' | 'secondary';
}

export type SkillCategory =
  | 'AI / ML'
  | 'Computer Vision'
  | 'LLM Applications'
  | 'Software Development'
  | 'Game Development';

export type LabStatus = 'EXPERIMENT' | 'ACADEMIC' | 'IN PROGRESS' | 'PROTOTYPE' | 'CONCEPT';

export interface LabExperiment {
  id: string;
  title: string;
  description: string;
  status: LabStatus;
  technologies: string[];
  github?: string;
  category: string;
}
