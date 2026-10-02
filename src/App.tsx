import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SelectedWork } from '@/components/SelectedWork';
import { TechnicalFocus } from '@/components/TechnicalFocus';
import { Experience } from '@/components/Experience';
import { EducationSection } from '@/components/Education';
import { Lab } from '@/components/Lab';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ProjectCaseStudy } from '@/components/ProjectCaseStudy';
import type { Project } from '@/types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-cinematic">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork onProjectSelect={setSelectedProject} />
        <TechnicalFocus />
        <Experience />
        <EducationSection />
        <About />
        <Lab />
        <Contact />
      </main>
      <Footer />
      <ProjectCaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </MotionConfig>
  );
}

export default App;
