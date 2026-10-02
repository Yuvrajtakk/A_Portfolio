import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'traffic-monitoring',
    title: 'Real-Time Traffic Monitoring & Analytics',
    category: 'Computer Vision',
    shortDescription:
      'Real-time traffic monitoring system using YOLOv8 and ByteTrack for object detection and tracking across 10 classes.',
    technologies: ['Python', 'YOLOv8s', 'ByteTrack', 'OpenCV', 'Roboflow'],
    metrics: [
      { label: 'mAP50 (Final)', value: '0.721' },
      { label: 'mAP50-95 (Final)', value: '0.452' },
      { label: 'Dataset', value: '10,329 images', detail: '65,741 annotations across 10 classes' },
    ],
    github: 'https://github.com/Yuvrajtakk/Traffic_Analysis_YOLO_project',
    featured: true,
    status: 'deployed',
    visualId: 'traffic',
    caseStudy: {
      overview:
        'Built a real-time traffic monitoring system using YOLOv8 and ByteTrack for object detection and tracking across 10 classes including vehicles, pedestrians, hazards, and road anomalies.',
      problem:
        'Monitoring traffic scenes in real-time requires detecting diverse object classes, maintaining stable tracking, and generating actionable analytics — all while handling noisy real-world video feeds with varying conditions.',
      approach:
        'The dataset was rebuilt by merging 9 Roboflow sources, with class remapping and proportional dataset capping. The final dataset contained 10,329 images and 65,741 annotations across 10 classes. Training was performed on a Colab T4, with local RTX 4050 used for inference.',
      architecture: [
        'YOLOv8s for object detection across 10 classes',
        'ByteTrack for multi-object tracking',
        'Zone/ROI calibration tool for region-based analytics',
        'Analytics pipeline: stationary detection, wrong-way movement, hazard detection, congestion detection',
      ],
      technicalImplementation: [
        'Merged 9 Roboflow datasets with class remapping and proportional capping',
        'Wrong-way flow-vector logic correction',
        'Edge-triggered congestion events to avoid repeated alerts',
        'Smoke flicker tolerance using a rolling window',
        'Detection-only handling for Obj_On_Road and Animal classes',
      ],
      results: [
        { label: 'Car mAP50 improvement', value: '0.485 → 0.729', detail: 'During dataset experimentation' },
        { label: 'Final mAP50', value: '0.721' },
        { label: 'Final mAP50-95', value: '0.452' },
        { label: 'Best checkpoint', value: 'Epoch ~66/100' },
      ],
      challenges: [
        'Reconciling 9 different Roboflow annotation schemas into a unified 10-class system',
        'Smoke flicker causing false-positive fire/smoke detection events',
        'Wrong-way detection requiring flow-vector logic correction to reduce false alarms',
      ],
      limitations: [
        'Trained on a specific dataset composition; generalization to unseen environments may vary',
        'Inference performance depends on hardware (Colab T4 for training, RTX 4050 for local inference)',
      ],
    },
  },
  {
    id: 'logistics-chatbot',
    title: 'Logistics & Order Intelligence Chatbot',
    category: 'LLM Applications',
    shortDescription:
      'Natural-language analytics assistant for the Olist Brazilian E-Commerce dataset, combining Text-to-SQL and RAG for structured and unstructured queries.',
    technologies: [
      'Python',
      'FastAPI',
      'LangChain',
      'Chroma',
      'SQLGlot',
      'Text-to-SQL',
      'RAG',
    ],
    metrics: [
      { label: 'Dataset', value: '~100k orders', detail: '2016–2018, 9 relational tables, ~41k reviews' },
    ],
    github: 'https://github.com/Yuvrajtakk/logistics_chatbot',
    featured: true,
    status: 'in-progress',
    visualId: 'logistics',
    caseStudy: {
      overview:
        'A natural-language analytics assistant for the Olist Brazilian E-Commerce dataset, combining Text-to-SQL for structured data queries with RAG for customer-review analysis.',
      problem:
        'Business users need to ask questions in natural language about order data and customer reviews without writing SQL or manually searching through thousands of reviews.',
      approach:
        'Built an analytics pipeline — not an autonomous agent — that routes questions to either a Text-to-SQL path or a RAG path depending on the query type.',
      architecture: [
        'Text-to-SQL for structured data questions',
        'RAG for customer-review analysis using Chroma vector database',
        'FastAPI backend with SQLite/Olist database',
        'LangChain orchestration',
        'Runtime-selectable LLM providers including Groq and Ollama',
        'Next.js + TypeScript + Tailwind + Framer Motion web layer',
      ],
      technicalImplementation: [
        'SQLGlot AST-based SQL validation with read-only execution',
        'Categorical-value checking and fuzzy suggestions',
        'Conversation memory for multi-turn queries',
        'Google Drive MCP integration explored in the broader project architecture',
      ],
      results: [
        { label: 'Dataset scope', value: '~100k orders', detail: '2016–2018, 9 relational tables, ~41k customer reviews' },
      ],
      challenges: [
        'Multilingual review embeddings required further work',
        'Session isolation and review-history handling required fixes',
        'Some web/integration work was still evolving',
      ],
      limitations: [
        'Some implementation details may still be evolving; not all features are production-complete',
        'Multilingual review embedding quality needs further improvement',
        'Session isolation fixes were in progress',
      ],
    },
  },
  {
    id: 'sports-tracking',
    title: 'Multi-Object Tracking — Sports Video',
    category: 'Computer Vision',
    shortDescription:
      'Multi-object tracking system for football video using YOLOv8m and ByteTrack to detect players and maintain persistent identities across frames.',
    technologies: ['Python', 'YOLOv8m', 'ByteTrack', 'OpenCV', 'Supervision', 'Streamlit'],
    metrics: [
      { label: 'ID reduction', value: '79 → ~47', detail: '~40% reduction in spurious identities' },
      { label: 'Processing', value: '~5.4 FPS', detail: 'CPU processing' },
    ],
    github: 'https://github.com/Yuvrajtakk/multi-object-tracking-assignment',
    demo: 'https://sportstracking.streamlit.app/',
    featured: true,
    status: 'deployed',
    visualId: 'sports',
    caseStudy: {
      overview:
        'Built a multi-object tracking system for football video using YOLOv8m and ByteTrack to detect players and maintain persistent identities across frames.',
      problem:
        'Naive tracking generates excessive spurious identities due to missed detections, occlusions, and player re-entries, making the output unreliable for analytics.',
      approach:
        'Tuned detection and tracking parameters to reduce identity switches while maintaining accurate detection. Used a 60-second, 1,801-frame (~30 FPS) source video.',
      architecture: [
        'YOLOv8m for player detection',
        'ByteTrack for multi-object tracking',
        'Supervision library for visualization and zone-based logic',
        'Streamlit for the interactive demo interface',
      ],
      technicalImplementation: [
        'Increased activation threshold from 0.50 to 0.65',
        'Required multiple consecutive frames for track confirmation',
        'Lost-track buffer to tolerate brief occlusions',
        'Match threshold tuning',
        'Minimum area filtering to exclude small false positives',
        'Stationary-viewer suppression to filter non-players',
      ],
      results: [
        { label: 'ID reduction', value: '79 → ~47', detail: '~40% reduction in spurious identities' },
        { label: 'Processing speed', value: '~5.4 FPS', detail: 'CPU processing' },
        { label: 'Video', value: '60 seconds', detail: '1,801 frames, ~30 FPS source' },
      ],
      challenges: [
        'Balancing detection sensitivity with tracking stability',
        'Suppressing spurious tracks from crowd scenes and stationary viewers',
      ],
      limitations: [
        'Re-entry after a long disappearance can create a new ID',
        'Dense crowds can degrade IoU-based tracking',
        'No appearance-based ReID',
        'CPU processing is relatively slow',
      ],
    },
  },
  {
    id: 'ckd-prediction',
    title: 'Chronic Kidney Disease Prediction',
    category: 'Machine Learning',
    shortDescription:
      'Academic machine-learning project for early CKD prediction using patient clinical data, with preprocessing, feature handling, model training, and a prediction interface.',
    technologies: ['Python', 'Scikit-learn', 'Data Preprocessing', 'Feature Selection'],
    featured: true,
    status: 'academic',
    visualId: 'ckd',
    github: 'https://github.com/Yuvrajtakk/CKD-Prediction-Project',
    caseStudy: {
      overview:
        'Academic machine-learning project for early Chronic Kidney Disease prediction using patient clinical data.',
      problem:
        'Early detection of chronic kidney disease from clinical data can support timely medical attention. This project explores applying machine learning to structured patient records.',
      approach:
        'Applied standard ML preprocessing and modeling techniques to a clinical dataset with patient records. The project was built as an academic machine-learning exercise, not as a clinical system.',
      technicalImplementation: [
        'Data cleaning and data-type correction',
        'Missing-value handling',
        'Categorical encoding',
        'Feature selection',
        'Train/test splitting',
        'Scikit-learn model training',
        'Saved trained model',
        'Web prediction interface',
      ],
      limitations: [
        'Academic machine-learning project; not a clinical diagnostic system',
        'No clinical validity or medical usefulness is claimed',
      ],
    },
  },
];
