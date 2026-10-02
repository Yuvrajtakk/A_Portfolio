import { useCallback, useEffect, useRef, useState } from 'react';
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
  const pageRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const handleSelect = useCallback((project: Project, trigger: HTMLElement) => {
    openerRef.current = trigger;
    setSelectedProject(project);
  }, []);

  const handleClose = useCallback(() => setSelectedProject(null), []);

  // Make the page inert while the dialog is open; on close, return focus to the opener.
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    page.inert = selectedProject !== null;
    if (selectedProject === null && openerRef.current) {
      openerRef.current.focus();
      openerRef.current = null;
    }
  }, [selectedProject]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-cinematic">
      <div ref={pageRef}>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork onProjectSelect={handleSelect} />
        <TechnicalFocus />
        <Experience />
        <EducationSection />
        <About />
        <Lab />
        <Contact />
      </main>
      <Footer />
      </div>
      <ProjectCaseStudy project={selectedProject} onClose={handleClose} />
      </div>
    </MotionConfig>
  );
}

export default App;
