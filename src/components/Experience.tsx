import { motion } from 'framer-motion';
import { MapPin, Award, User } from 'lucide-react';
import { experience } from '@/data/experience';
import { SectionHeader, SectionWrapper } from './SectionHeader';

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        label="EXPERIENCE"
        title="Where I've Worked"
        description="Internships and training programs where I applied machine learning, computer vision, and LLM technologies to real problems."
      />

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
          style={{ background: 'linear-gradient(to bottom, var(--color-accent-cyan), var(--color-border) 30%, var(--color-border))' }}
        />

        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
            className={`relative flex flex-col md:flex-row gap-6 mb-10 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-10">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: 'var(--color-accent-cyan)',
                  boxShadow: '0 0 12px rgba(34,211,238,0.5)',
                }}
              />
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />

            {/* Content */}
            <div className="flex-1 pl-12 md:pl-0 md:px-8">
              <div
                className="p-5 md:p-6 rounded-xl transition-all hover:scale-[1.01]"
                style={{
                  backgroundColor: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-lg font-bold text-slate-100">{exp.role}</h3>
                  <span
                    className="font-heading text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded"
                    style={{ backgroundColor: 'rgba(56,89,138,0.15)', color: 'var(--color-text-secondary)' }}
                  >
                    {exp.workMode}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="font-heading text-sm font-semibold" style={{ color: 'var(--color-accent-cyan)' }}>
                    {exp.company}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  <span>{exp.dates}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  {exp.description}
                </p>

                {/* Work areas */}
                <ul className="space-y-1.5 mb-4">
                  {exp.workAreas.map((area, idx) => (
                    <li key={idx} className="text-sm flex gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: 'var(--color-accent-cyan)' }}>▸</span>
                      {area}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-medium"
                      style={{ backgroundColor: 'rgba(56,89,138,0.15)', color: 'var(--color-text-secondary)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Mentor */}
                {exp.mentor && (
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    <User size={12} />
                    <span>Mentor: {exp.mentor}</span>
                  </div>
                )}

                {/* Certificate */}
                {exp.certificate && (
                  <div className="mt-3 flex items-center gap-2 text-xs" style={{ color: 'var(--color-accent-yellow)' }}>
                    <Award size={14} />
                    <span>{exp.certificate}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
