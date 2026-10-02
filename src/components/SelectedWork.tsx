import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import type { Project } from '@/types';
import { projects } from '@/data/projects';
import { SectionHeader, SectionWrapper } from './SectionHeader';
import { ProjectVisual } from './ProjectVisual';

interface SelectedWorkProps {
  onProjectSelect: (project: Project, trigger: HTMLElement) => void;
}

export function SelectedWork({ onProjectSelect }: SelectedWorkProps) {
  return (
    <SectionWrapper id="work">
      <SectionHeader
        label="SELECTED WORK"
        title="Flagship Projects"
        description="Four projects spanning computer vision, LLM applications, and machine learning, with documented technical decisions, experiments, and implementation results."
      />

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onSelect={(trigger) => onProjectSelect(project, trigger)} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: (trigger: HTMLElement) => void }) {
  const statusLabel = {
    deployed: 'DEPLOYED',
    'in-progress': 'IN PROGRESS',
    academic: 'ACADEMIC',
  }[project.status];

  const statusColor = {
    deployed: 'var(--color-success)',
    'in-progress': 'var(--color-accent-yellow)',
    academic: 'var(--color-text-secondary)',
  }[project.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg-elevated)',
        border: '1px solid var(--color-border)',
      }}
      
    >
      {/* Visual header */}
      <div className="relative h-44 md:h-48 overflow-hidden">
        <ProjectVisual visualId={project.visualId} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elevated)] to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className="px-2.5 py-1 rounded font-heading text-[10px] font-semibold tracking-wider"
            style={{ backgroundColor: 'rgba(7,11,20,0.7)', color: statusColor, border: `1px solid ${statusColor}40` }}
          >
            {statusLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className="px-2.5 py-1 rounded font-heading text-[10px] font-semibold tracking-wider text-slate-400"
            style={{ backgroundColor: 'rgba(7,11,20,0.7)', border: '1px solid var(--color-border)' }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 md:p-6">
        <h3 className="font-heading text-lg md:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded text-[11px] font-medium"
              style={{ backgroundColor: 'rgba(56,89,138,0.15)', color: 'var(--color-text-secondary)' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key metric */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 pt-4 border-t flex items-center gap-4 flex-wrap" style={{ borderColor: 'var(--color-border)' }}>
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="font-heading text-base font-bold" style={{ color: 'var(--color-accent-cyan)' }}>
                  {metric.value}
                </span>
                <span className="text-[11px] uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={(e) => onSelect(e.currentTarget)}
            className="inline-flex items-center gap-1.5 font-heading text-sm font-medium text-cyan-300 group-hover:gap-2.5 transition-all"
          >
            View Case Study
            <ArrowRight size={14} />
          </button>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-500 hover:text-cyan-300 transition-colors"
                aria-label={`${project.title} on GitHub`}
              >
                <Github size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-500 hover:text-cyan-300 transition-colors"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
