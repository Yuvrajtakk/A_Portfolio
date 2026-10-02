import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ArrowRight, AlertTriangle } from 'lucide-react';
import type { Project } from '@/types';
import { ProjectVisual } from './ProjectVisual';
import { useEffect } from 'react';

interface ProjectCaseStudyProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectCaseStudy({ project, onClose }: ProjectCaseStudyProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [project, onClose]);

  const cs = project?.caseStudy;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] overflow-y-auto"
          style={{ backgroundColor: 'rgba(7,11,20,0.9)', backdropFilter: 'blur(4px)' }}
          onClick={onClose}
        >
          <div className="min-h-full flex items-start justify-center p-4 md:p-8 pt-20 md:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg transition-colors"
                style={{ backgroundColor: 'rgba(7,11,20,0.6)', color: 'var(--color-text-secondary)' }}
                aria-label="Close case study"
              >
                <X size={20} />
              </button>

              {/* Visual header */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <ProjectVisual visualId={project.visualId} />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elevated)] via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                {/* Title + category */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className="px-2.5 py-1 rounded font-heading text-[10px] font-semibold tracking-wider"
                    style={{ backgroundColor: 'rgba(56,89,138,0.15)', color: 'var(--color-text-secondary)' }}
                  >
                    {project.category}
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-50">{project.title}</h2>
                <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {project.shortDescription}
                </p>

                {/* Links */}
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-heading text-sm font-semibold transition-all hover:scale-[1.02]"
                      style={{ backgroundColor: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)', color: 'var(--color-accent-cyan)' }}
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-heading text-sm font-semibold text-slate-300 transition-all hover:text-cyan-300"
                      style={{ border: '1px solid var(--color-border)' }}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Case study sections */}
                {cs && (
                  <div className="mt-8 space-y-7">
                    {cs.overview && <Section title="Overview" text={cs.overview} />}
                    {cs.problem && <Section title="Problem" text={cs.problem} />}
                    {cs.approach && <Section title="Approach" text={cs.approach} />}

                    {cs.architecture && cs.architecture.length > 0 && (
                      <ListSection title="Architecture / Workflow" items={cs.architecture} />
                    )}

                    {cs.technicalImplementation && cs.technicalImplementation.length > 0 && (
                      <ListSection title="Technical Implementation" items={cs.technicalImplementation} />
                    )}

                    {cs.results && cs.results.length > 0 && (
                      <div>
                        <SectionTitle>Results</SectionTitle>
                        <div className="grid sm:grid-cols-2 gap-3 mt-3">
                          {cs.results.map((r) => (
                            <div
                              key={r.label}
                              className="p-4 rounded-xl"
                              style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
                            >
                              <div className="font-heading text-xl font-bold" style={{ color: 'var(--color-accent-cyan)' }}>
                                {r.value}
                              </div>
                              <div className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                                {r.label}
                              </div>
                              {r.detail && (
                                <div className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                  {r.detail}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {cs.challenges && cs.challenges.length > 0 && (
                      <ListSection title="Challenges &amp; Engineering Decisions" items={cs.challenges} />
                    )}

                    {cs.limitations && cs.limitations.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <AlertTriangle size={16} style={{ color: 'var(--color-accent-yellow)' }} />
                          <SectionTitle>Limitations</SectionTitle>
                        </div>
                        <ul className="space-y-2">
                          {cs.limitations.map((l, i) => (
                            <li key={i} className="text-sm leading-relaxed flex gap-3" style={{ color: 'var(--color-text-secondary)' }}>
                              <span style={{ color: 'var(--color-accent-yellow)' }}>—</span>
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <SectionTitle>Technologies</SectionTitle>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium"
                        style={{ backgroundColor: 'rgba(56,89,138,0.15)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-300">
      {children}
    </h3>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {text}
      </p>
    </div>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed flex gap-3" style={{ color: 'var(--color-text-secondary)' }}>
            <ArrowRight size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--color-accent-cyan)' }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
