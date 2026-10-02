import type { LabExperiment } from '@/types';

export const labExperiments: LabExperiment[] = [
  {
    id: 'mnist',
    title: 'MNIST Digit Recognizer',
    description:
      'Compared 7 classical ML algorithms on 1,797 8x8 MNIST images with 64 features and 10 classes. SVM achieved around 98% accuracy. Cross-validation was introduced after identifying test-set leakage in an earlier experiment.',
    status: 'ACADEMIC',
    technologies: ['Python', 'Scikit-learn', 'SVM', 'Cross-Validation'],
    github: 'https://github.com/Yuvrajtakk/mnist-digit-recognizer',
    category: 'Machine Learning',
  },
  {
    id: 'rock-et',
    title: 'Rock-et',
    description:
      'Unity game-development experiment featuring rocket movement, camera auto-scroll, cursor-based aiming, continuous shooting, and boss/laser AI experimentation.',
    status: 'PROTOTYPE',
    technologies: ['Unity', 'C#', 'Game Development'],
    github: undefined,
    category: 'Game Development',
  },
  {
    id: 'bharat-sanchar',
    title: 'Bharat Sanchar AI',
    description:
      'Government-scheme information assistant with SMS notification capability. Built with Node.js, Express, MongoDB, OpenAI API, and Twilio.',
    status: 'EXPERIMENT',
    technologies: ['Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Twilio', 'REST API'],
    github: 'https://github.com/Yuvrajtakk/code_for_bharat',
    category: 'LLM Applications',
  },
  {
    id: 'advisor',
    title: 'Advisor',
    description: 'Concept and design-stage AI platform. Implementation not confirmed complete — currently in design/documentation plus prototype work.',
    status: 'CONCEPT',
    technologies: ['AI Platform', 'Design'],
    github: undefined,
    category: 'AI / ML',
  },
  {
    id: 'galaxy-guardian',
    title: 'Galaxy Guardian',
    description: 'Unity game-development concept exploring gameplay systems and boss AI mechanics.',
    status: 'PROTOTYPE',
    technologies: ['Unity', 'C#', 'Game Development'],
    github: undefined,
    category: 'Game Development',
  },
  {
    id: 'reply',
    title: 'REPLY',
    description: 'Unity game-development concept with gameplay systems and interactive mechanics.',
    status: 'PROTOTYPE',
    technologies: ['Unity', 'C#', 'Game Development'],
    github: undefined,
    category: 'Game Development',
  },
];
