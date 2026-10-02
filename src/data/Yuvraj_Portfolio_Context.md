# Yuvraj Tak — Portfolio Context
Version: 1.0
Purpose: Source-of-truth context for an AI website builder. Use this file together with the master build prompt.

## 1. Core identity

Name: Yuvraj Tak
Location: Jaipur, Rajasthan, India
Current status: B.Tech Computer Science student specializing in Artificial Intelligence
College: Anand International College of Engineering, Jaipur
Degree: Bachelor of Technology (B.Tech)
Program period: 2023–2027
CGPA: 8.5
Academic distinction: Merit Scholarship recipient
Leadership: Robotics Club — Treasurer

Primary professional direction:
- Machine Learning
- Computer Vision
- LLM applications
- RAG
- Text-to-SQL
- Python/software development

Secondary direction:
- Game development
- Unity
- Interactive/AI-driven systems

Important positioning rule:
Do NOT describe Yuvraj as an established "AI/ML Engineer". He is a student and should be presented accurately as a Computer Science & AI student / developer building AI systems.

Suggested hero positioning:
"Computer Science & AI student building machine learning systems, computer vision applications, and LLM-powered software."

Suggested short tagline:
"Building intelligent systems, computer vision applications, and practical AI software."

## 2. Public links

GitHub:
https://github.com/Yuvrajtakk

LinkedIn:
https://www.linkedin.com/in/yuvraj-tak

Existing portfolio:
https://projects-ruby-five.vercel.app/
This is being rebuilt and should NOT be treated as the final portfolio.

## 3. Main portfolio projects

These are the four primary projects for the portfolio.

### Project 1 — Real-Time Traffic Monitoring & Analytics

GitHub:
https://github.com/Yuvrajtakk/Traffic_Analysis_YOLO_project

Technology:
Python, YOLOv8s, ByteTrack, OpenCV, Roboflow

Description:
Built a real-time traffic monitoring system using YOLOv8 and ByteTrack for object detection and tracking across 10 classes.

The dataset was rebuilt by merging 9 Roboflow sources, with class remapping and proportional dataset capping. The final dataset contained 10,329 images and 65,741 annotations across 10 classes.

Classes:
Bus, Car, Bike, Person, Animal, Fire, Smoke, Accident, Obj_On_Road, Truck

Analytics:
- Stationary vehicle detection
- Wrong-way movement
- Hazard detection
- Congestion detection

Additional work:
- ROI / zone calibration tool
- Wrong-way flow-vector logic correction
- Edge-triggered congestion events
- Smoke flicker tolerance using a rolling window
- Detection-only handling for Obj_On_Road and Animal

Measured results:
- Car mAP50 improved from 0.485 to 0.729 during dataset experimentation
- Final model: 0.721 mAP50
- Final model: 0.452 mAP50-95
- Best checkpoint was around epoch 66 of 100
- Training was performed on a Colab T4
- Local RTX 4050 was used for inference

Do not invent:
- FPS
- latency
- deployment/user counts
- production traffic statistics

### Project 2 — Logistics & Order Intelligence Chatbot

Repository name:
logistics_chatbot

GitHub URL:
[ADD ACTUAL LOGISTICS CHATBOT GITHUB URL IF AVAILABLE]

Status:
Portfolio project / internship project. Some implementation details may still be evolving, so do not claim features as production-complete unless they are verified.

Purpose:
Natural-language analytics assistant for the Olist Brazilian E-Commerce dataset.

Dataset:
- Approximately 100k orders
- 2016–2018
- 9 relational tables
- Approximately 41k customer reviews

Architecture:
- Text-to-SQL for structured data questions
- RAG for customer-review analysis
- FastAPI backend
- Next.js + TypeScript + Tailwind + Framer Motion web layer
- SQLite / Olist database
- Chroma vector database
- LangChain orchestration
- Runtime-selectable LLM providers including Groq and Ollama
- SQLGlot AST-based SQL validation
- Read-only SQL execution
- Categorical-value checking and fuzzy suggestions
- Conversation memory
- Google Drive MCP integration was explored/integrated in the broader project architecture

Important architecture principle:
The project is an analytics pipeline, not an autonomous agent.

Known engineering concerns from the development process:
- Multilingual review embeddings required further work
- Session isolation and review-history handling required fixes
- Some web/integration work was still evolving in the last recorded state

Do not present unresolved items as finished production features.

### Project 3 — Multi-Object Tracking — Sports Video

GitHub:
https://github.com/Yuvrajtakk/multi-object-tracking-assignment

Live demo:
https://sportstracking.streamlit.app/

Technology:
Python, YOLOv8m, ByteTrack, OpenCV, Supervision, Streamlit

Description:
Built a multi-object tracking system for football video using YOLOv8m and ByteTrack to detect players and maintain persistent identities across frames.

Video:
- 60 seconds
- 1,801 frames
- approximately 30 FPS source video

Tracking improvements:
- Increased activation threshold from 0.50 to 0.65
- Required multiple consecutive frames for confirmation
- Lost-track buffer
- Match threshold tuning
- Minimum area filtering
- Stationary-viewer suppression

Result:
Reduced unique track IDs from 79 to approximately 47, about a 40% reduction in spurious identities.

Processing:
Approximately 5.4 FPS on CPU.

Known limitations:
- Re-entry after a long disappearance can create a new ID
- Dense crowds can degrade IoU-based tracking
- No appearance-based ReID
- CPU processing is relatively slow

### Project 4 — Chronic Kidney Disease Prediction

GitHub:
https://github.com/Yuvrajtakk/CKD-Prediction-Project

Description:
Machine-learning project using patient clinical data for early CKD prediction.

Recorded implementation:
- Data cleaning
- Data-type correction
- Missing-value handling
- Categorical encoding
- Feature selection
- Train/test splitting
- Scikit-learn model training
- Saved trained model
- Web prediction interface

IMPORTANT:
There are conflicting historical records about the exact final model/deployment for this project. Do not invent or overstate the model, framework, deployment status, clinical validity, accuracy, or medical usefulness.

Safe portfolio wording:
"Developed a machine learning application for early Chronic Kidney Disease prediction using patient clinical data, with preprocessing, feature handling, model training, and a prediction interface."

Add a small academic-project disclaimer if needed:
"Academic machine-learning project; not a clinical diagnostic system."

## 4. Secondary / Lab projects

Use these in a "Lab", "Experiments", or "More Work" section rather than making them compete with the four main projects.

### MNIST Digit Recognizer
GitHub:
https://github.com/Yuvrajtakk/mnist-digit-recognizer

Details:
- 1,797 8x8 MNIST images
- 64 features
- 10 classes
- Compared 7 classical ML algorithms
- SVM performed around 98% accuracy in the recorded experiment
- Cross-validation was introduced after identifying test-set leakage in an earlier experiment

Position it as a learning/experimental ML project, not a flagship AI product.

### Rock-et
Unity game-development project.
Use as a game-development experiment / interactive project.
Do not invent features beyond what is actually implemented.

Known direction:
- Rocket movement
- Camera auto-scroll
- Cursor-based aiming
- Continuous shooting
- Boss/laser AI experimentation

### Bharat Sanchar AI
GitHub:
https://github.com/Yuvrajtakk/code_for_bharat

Recorded stack:
Node.js, Express, MongoDB, OpenAI API, Twilio, REST API

Purpose:
Government-scheme information assistant with SMS notification capability.

Important:
Yuvraj has said this is not a project he currently understands deeply enough to make a flagship portfolio item. Keep it secondary unless its implementation is reviewed again.

### Advisor
Concept/design-stage AI platform.
Status in the latest reliable record was design/documentation plus prototype work, with implementation not confirmed complete.
Do not present it as a finished product.

### Game development
Other Unity concepts include:
- Galaxy Guardian
- REPLY
- gameplay systems
- boss AI concepts
These are secondary and should not dominate the professional AI/ML portfolio.

## 5. Professional experience

### Watsoo Express Pvt. Ltd.
Role:
AI/ML Intern

Location:
Gurugram, Haryana, India
Work mode:
Remote

Dates:
25 June 2026 – 25 August 2026

Mentor:
Ankit Gupta

Status:
Completed

Work areas:
- Computer vision
- Machine learning
- LLM applications

Main internship work:
1. Real-time traffic monitoring using YOLOv8 + ByteTrack
2. Classical ML comparison / MNIST work
3. Logistics and Order Intelligence chatbot
4. Computer-vision tracking work, where applicable

Certificate:
AI/ML Internship Completion Certificate — Watsoo Express

Certificate description:
"Completion certificate for my AI/ML internship at Watsoo Express Pvt. Ltd., completed from 25 June 2026 to 25 August 2026."

Do not invent company responsibilities, user counts, business impact, or production deployment details.

### Anand International College of Engineering
Role:
Machine Learning Intern (Academic Training)

Dates:
June 2025 – July 2025

Location:
Jaipur, Rajasthan, India
Work mode:
Remote

Recorded responsibilities:
- Learned and applied core ML concepts including classification and regression
- Built ML workflows using Python and Scikit-learn
- Performed preprocessing and feature engineering
- Trained and evaluated models
- Experimented with improving prediction accuracy

## 6. Education

Anand International College of Engineering, Jaipur

B.Tech, Artificial Intelligence
2023–2027
CGPA: 8.5

Activities:
Robotics Club — Treasurer

Academic:
Merit Scholarship recipient

Suggested education description:
"Pursuing B.Tech in Computer Science with a specialization in Artificial Intelligence, with a focus on machine learning, computer vision, LLM applications, and software development.

Merit Scholarship recipient with an 8.5 CGPA. Treasurer of the Robotics Club, with involvement in technical projects, hackathons, and collaborative engineering activities."

## 7. Technical skills

Primary:
- Python
- Machine Learning
- Computer Vision
- Artificial Intelligence
- Deep Learning
- Object Detection
- Object Tracking
- Large Language Models (LLM)
- Retrieval-Augmented Generation (RAG)
- Generative AI
- Text-to-SQL
- SQL
- YOLO
- ByteTrack
- OpenCV
- Scikit-learn
- FastAPI
- Flask
- REST APIs
- Node.js

Additional:
- Data Preprocessing
- Data Analysis
- Object-Oriented Programming
- C++
- C#
- Unity
- Git
- GitHub
- Data Structures
- Problem Solving
- Software Development
- Prompt Engineering
- Data Visualization
- NumPy
- Matplotlib
- Game Development
- React
- Next.js
- TypeScript
- Tailwind CSS
- Streamlit
- Chroma
- LangChain

Coursework / learning:
- NLP
- HMMs
- POS tagging
- WordNet
- PCFG
- Semantic parsing
- LangGraph

Do not put every skill on the homepage. Show the strongest skills first and keep the rest discoverable.

## 8. Portfolio positioning

The site should communicate:

"Student developer who actually builds systems."

Not:
- generic AI enthusiast
- motivational personal brand
- fake startup founder
- overclaiming engineer
- template-style student portfolio

Emphasize:
- real projects
- measurable technical results
- engineering decisions
- experimentation
- debugging
- computer vision
- LLM/RAG applications
- practical software development

## 9. Visual direction

Style:
Dark, cinematic, premium, technical, modern.

Concept:
AI laboratory + developer portfolio + subtle game-development atmosphere.

Use:
- near-black / deep navy background
- restrained cyan/blue accents
- subtle warm yellow accent where useful
- high-quality typography
- clean grid
- generous spacing
- subtle gradients
- subtle motion
- technical diagrams / data-inspired visuals
- project-specific visuals

Avoid:
- excessive neon
- excessive glassmorphism
- giant floating AI brains
- generic stock images
- fake dashboards
- excessive particle effects
- noisy 3D scenes
- huge walls of text
- fake client logos
- fake testimonials
- fake metrics
- fake availability indicators

## 10. Desired information architecture

Home
- Hero
- Selected Work
- Technical Focus
- Experience snapshot
- Education / achievement snapshot
- Lab / experiments
- Contact

Projects
- Project grid
- Filters/categories
- Individual project case-study views

About
- concise personal/academic story
- technical interests
- working style
- education
- achievements

Lab
- secondary experiments
- Unity/game development
- ML experiments
- unfinished/experimental work clearly labeled

Contact
- GitHub
- LinkedIn
- email placeholder until verified
- simple contact CTA

## 11. Architecture requirements

The portfolio MUST be a normal portable codebase.

Preferred stack:
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

Do not require:
- backend
- database
- authentication
- proprietary CMS
- proprietary runtime
- vendor-specific APIs
- server-side services unless absolutely necessary

All portfolio content should live in clearly organized source files such as:
src/data/profile.ts
src/data/projects.ts
src/data/experience.ts
src/data/skills.ts

The site must remain deployable independently of the AI builder.

GitHub should be the source of truth.

The project must be buildable and deployable as a standard React/Vite project.

## 12. Content rules

Never invent:
- achievements
- statistics
- companies
- clients
- testimonials
- awards
- employment
- project metrics
- deployment status
- technologies not listed here
- email address
- phone number

If a field is missing, use a clearly marked placeholder rather than inventing it.

Do not claim "production-ready" unless explicitly supported.

Do not claim medical/clinical validity for the CKD project.

Do not describe planned projects as completed.

## 13. Maintenance goal

Future edits should be easy.

A future AI or developer should be able to:
- add a project
- remove a project
- update a project metric
- change skills
- update experience
- update social links
- change hero text
- add a new Lab experiment

without redesigning the whole site.

Keep content separate from presentation.

## 14. Portfolio personality

Professional but not corporate.
Technical but understandable.
Creative but not childish.
Confident but accurate.
Minimal but visually memorable.

The site should feel like a real developer's portfolio, not an AI-generated template.
