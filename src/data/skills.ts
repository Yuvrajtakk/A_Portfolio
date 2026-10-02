import type { Skill } from '@/types';

export const skills: Skill[] = [
  // AI / ML — primary
  { name: 'Python', category: 'AI / ML', priority: 'primary' },
  { name: 'Machine Learning', category: 'AI / ML', priority: 'primary' },
  { name: 'Artificial Intelligence', category: 'AI / ML', priority: 'primary' },
  { name: 'Deep Learning', category: 'AI / ML', priority: 'primary' },
  { name: 'Scikit-learn', category: 'AI / ML', priority: 'primary' },
  { name: 'Generative AI', category: 'AI / ML', priority: 'primary' },
  // AI / ML — secondary
  { name: 'NumPy', category: 'AI / ML', priority: 'secondary' },
  { name: 'Matplotlib', category: 'AI / ML', priority: 'secondary' },
  { name: 'Data Analysis', category: 'AI / ML', priority: 'secondary' },
  { name: 'Data Preprocessing', category: 'AI / ML', priority: 'secondary' },
  { name: 'Data Visualization', category: 'AI / ML', priority: 'secondary' },

  // Computer Vision — primary
  { name: 'Computer Vision', category: 'Computer Vision', priority: 'primary' },
  { name: 'Object Detection', category: 'Computer Vision', priority: 'primary' },
  { name: 'Object Tracking', category: 'Computer Vision', priority: 'primary' },
  { name: 'YOLO', category: 'Computer Vision', priority: 'primary' },
  { name: 'ByteTrack', category: 'Computer Vision', priority: 'primary' },
  { name: 'OpenCV', category: 'Computer Vision', priority: 'primary' },
  // Computer Vision — secondary
  { name: 'Supervision', category: 'Computer Vision', priority: 'secondary' },

  // LLM Applications — primary
  { name: 'Large Language Models (LLM)', category: 'LLM Applications', priority: 'primary' },
  { name: 'Retrieval-Augmented Generation (RAG)', category: 'LLM Applications', priority: 'primary' },
  { name: 'Text-to-SQL', category: 'LLM Applications', priority: 'primary' },
  { name: 'LangChain', category: 'LLM Applications', priority: 'primary' },
  { name: 'Chroma', category: 'LLM Applications', priority: 'primary' },
  // LLM Applications — secondary
  { name: 'LangGraph', category: 'LLM Applications', priority: 'secondary' },
  { name: 'Prompt Engineering', category: 'LLM Applications', priority: 'secondary' },
  { name: 'NLP', category: 'LLM Applications', priority: 'secondary' },
  { name: 'HMMs', category: 'LLM Applications', priority: 'secondary' },
  { name: 'POS Tagging', category: 'LLM Applications', priority: 'secondary' },
  { name: 'WordNet', category: 'LLM Applications', priority: 'secondary' },
  { name: 'PCFG', category: 'LLM Applications', priority: 'secondary' },
  { name: 'Semantic Parsing', category: 'LLM Applications', priority: 'secondary' },

  // Software Development — primary
  { name: 'SQL', category: 'Software Development', priority: 'primary' },
  { name: 'FastAPI', category: 'Software Development', priority: 'primary' },
  { name: 'Flask', category: 'Software Development', priority: 'primary' },
  { name: 'REST APIs', category: 'Software Development', priority: 'primary' },
  { name: 'Node.js', category: 'Software Development', priority: 'primary' },
  // Software Development — secondary
  { name: 'React', category: 'Software Development', priority: 'secondary' },
  { name: 'Next.js', category: 'Software Development', priority: 'secondary' },
  { name: 'TypeScript', category: 'Software Development', priority: 'secondary' },
  { name: 'Tailwind CSS', category: 'Software Development', priority: 'secondary' },
  { name: 'Streamlit', category: 'Software Development', priority: 'secondary' },
  { name: 'Git', category: 'Software Development', priority: 'secondary' },
  { name: 'GitHub', category: 'Software Development', priority: 'secondary' },
  { name: 'C++', category: 'Software Development', priority: 'secondary' },
  { name: 'C#', category: 'Software Development', priority: 'secondary' },
  { name: 'Data Structures', category: 'Software Development', priority: 'secondary' },
  { name: 'Object-Oriented Programming', category: 'Software Development', priority: 'secondary' },
  { name: 'Problem Solving', category: 'Software Development', priority: 'secondary' },
  { name: 'Software Development', category: 'Software Development', priority: 'secondary' },
  { name: 'Express', category: 'Software Development', priority: 'secondary' },
  { name: 'MongoDB', category: 'Software Development', priority: 'secondary' },

  // Game Development — primary
  { name: 'Unity', category: 'Game Development', priority: 'primary' },
  { name: 'Game Development', category: 'Game Development', priority: 'primary' },
];

export const skillCategories: { name: Skill['category']; description: string }[] = [
  { name: 'AI / ML', description: 'Machine learning, deep learning, and applied AI systems.' },
  { name: 'Computer Vision', description: 'Object detection, tracking, and real-time video analysis.' },
  { name: 'LLM Applications', description: 'RAG, Text-to-SQL, and language model orchestration.' },
  { name: 'Software Development', description: 'APIs, web frameworks, and engineering tooling.' },
  { name: 'Game Development', description: 'Unity, interactive systems, and gameplay programming.' },
];
