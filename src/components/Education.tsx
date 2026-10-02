import { motion } from 'framer-motion';
import { GraduationCap, Award, Users } from 'lucide-react';
import { education } from '@/data/education';
import { SectionHeader, SectionWrapper } from './SectionHeader';

export function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionHeader
        label="EDUCATION & ACHIEVEMENTS"
        title="Academic Background"
      />

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className="p-6 rounded-2xl"
            style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-xl shrink-0"
                style={{ backgroundColor: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)' }}
              >
                <GraduationCap size={22} style={{ color: 'var(--color-accent-cyan)' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold text-slate-100">{edu.institution}</h3>
                <p className="text-sm mt-1" style={{ color: 'var(--color-accent-cyan)' }}>
                  {edu.degree}, {edu.field}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  <span>{edu.period}</span>
                  {edu.cgpa && (
                    <>
                      <span>•</span>
                      <span style={{ color: 'var(--color-accent-yellow)', fontWeight: 600 }}>CGPA: {edu.cgpa}</span>
                    </>
                  )}
                </div>

                {edu.description && (
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {edu.description}
                  </p>
                )}

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {edu.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <Award size={14} style={{ color: 'var(--color-accent-yellow)' }} />
                        {ach}
                      </div>
                    ))}
                  </div>
                )}

                {/* Activities */}
                {edu.activities && edu.activities.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {edu.activities.map((act, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <Users size={14} style={{ color: 'var(--color-accent-cyan)' }} />
                        {act}
                      </div>
                    ))}
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
