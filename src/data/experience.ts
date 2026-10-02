import type { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    id: 'watsoo',
    company: 'Watsoo Express Pvt. Ltd.',
    role: 'AI/ML Intern',
    dates: '25 June 2026 – 25 August 2026',
    location: 'Gurugram, Haryana, India',
    workMode: 'Remote',
    mentor: 'Ankit Gupta',
    current: false,
    description:
      'Completed AI/ML internship focused on computer vision, machine learning, and LLM applications across multiple project areas.',
    technologies: ['Python', 'YOLOv8', 'ByteTrack', 'OpenCV', 'Scikit-learn', 'FastAPI', 'LangChain', 'Chroma'],
    workAreas: [
      'Real-time traffic monitoring using YOLOv8 + ByteTrack',
      'Classical ML comparison / MNIST work',
      'Logistics and Order Intelligence chatbot (Text-to-SQL + RAG)',
      'Computer-vision tracking work',
    ],
    certificate: 'AI/ML Internship Completion Certificate — Watsoo Express',
  },
  {
    id: 'anand-ml-intern',
    company: 'Anand International College of Engineering',
    role: 'Machine Learning Intern (Academic Training)',
    dates: 'June 2025 – July 2025',
    location: 'Jaipur, Rajasthan, India',
    workMode: 'Remote',
    current: false,
    description:
      'Academic ML training program covering core concepts, workflows, and model evaluation.',
    technologies: ['Python', 'Scikit-learn'],
    workAreas: [
      'Learned and applied core ML concepts including classification and regression',
      'Built ML workflows using Python and Scikit-learn',
      'Performed preprocessing and feature engineering',
      'Trained and evaluated models',
      'Experimented with improving prediction accuracy',
    ],
  },
];
