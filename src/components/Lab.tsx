import { motion } from 'framer-motion';
import { Github, ExternalLink, FlaskConical, Gamepad2, Cpu, Sparkles } from 'lucide-react';
import { labExperiments } from '@/data/lab';
import type { LabStatus } from '@/types';
import { SectionHeader, SectionWrapper } from './SectionHeader';

const statusConfig: Record<LabStatus, { color: string; bgColor: string }> = {
  EXPERIMENT: { color: 'var(--color-accent-cyan)', bgColor: 'rgba(34,211,238,0.08)' },
  ACADEMIC: { color: 'var(--color-text-secondary)', bgColor: 'rgba(56,89,138,0.15)' },
  'IN PROGRESS': { color: 'var(--color-accent-yellow)', bgColor: 'rgba(251,191,36,0.08)' },
  PROTOTYPE: { color: '#a78bfa', bgColor: 'rgba(167,139,250,0.08)' },
  CONCEPT: { color: 'var(--color-text-muted)', bgColor: 'rgba(100,116,139,0.1)' },
};

const categoryIcon: Record<string, typeof FlaskConical> = {
  'Machine Learning': Cpu,
  'Game Development': Gamepad2,
  'LLM Applications': Sparkles,
  'AI / ML': FlaskConical,
};

export function Lab() {
  return (
    <SectionWrapper id="lab">
      <SectionHeader
        label="LAB"
        title="Experiments & Secondary Work"
        description="Smaller projects, experiments, and game-development work that lives outside the main portfolio. Some are finished, some are in progress."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {labExperiments.map((exp, i) => {
          const status = statusConfig[exp.status];
          const Icon = categoryIcon[exp.category] || FlaskConical;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              className="group relative p-5 rounded-xl transition-all"
              style={{
                backgroundColor: 'var(--color-bg-elevated)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: status.bgColor }}
                >
                  <Icon size={16} style={{ color: status.color }} />
                </div>
                <span
                  className="px-2 py-0.5 rounded font-heading text-[9px] font-bold tracking-wider"
                  style={{ backgroundColor: status.bgColor, color: status.color, border: `1px solid ${status.color}30` }}
                >
                  {exp.status}
                </span>
              </div>

              <h3 className="font-heading text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                {exp.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {exp.description}
              </p>

              {/* Tech tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-medium"
                    style={{ backgroundColor: 'rgba(56,89,138,0.12)', color: 'var(--color-text-muted)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {exp.github && (
                <a
                  href={exp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-heading font-medium text-slate-500 hover:text-cyan-300 transition-colors"
                >
                  <Github size={13} />
                  View Code
                  <ExternalLink size={11} />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
