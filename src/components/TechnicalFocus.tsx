import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '@/data/skills';
import type { SkillCategory } from '@/types';
import { SectionHeader, SectionWrapper } from './SectionHeader';

export function TechnicalFocus() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('AI / ML');

  const filteredSkills = skills.filter((s) => s.category === activeCategory);
  const primarySkills = filteredSkills.filter((s) => s.priority === 'primary');
  const secondarySkills = filteredSkills.filter((s) => s.priority === 'secondary');

  const activeDescription = skillCategories.find((c) => c.name === activeCategory)?.description;

  return (
    <SectionWrapper id="skills">
      <SectionHeader
        label="TECHNICAL FOCUS"
        title="What I Work With"
        description="Select a category to explore the tools, frameworks, and concepts I use across different domains."
      />

      <div className="grid lg:grid-cols-[280px_1fr] gap-6 md:gap-8">
        {/* Category list */}
        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {skillCategories.map((cat) => {
            const isActive = cat.name === activeCategory;
            const count = skills.filter((s) => s.category === cat.name).length;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`group relative text-left px-4 py-3 rounded-xl transition-all duration-300 shrink-0 lg:w-full ${
                  isActive ? 'scale-100' : 'hover:scale-[1.01] opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: isActive ? 'rgba(34,211,238,0.08)' : 'var(--color-bg-elevated)',
                  border: `1px solid ${isActive ? 'rgba(34,211,238,0.3)' : 'var(--color-border)'}`,
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="font-heading text-sm font-semibold whitespace-nowrap"
                    style={{ color: isActive ? 'var(--color-accent-cyan)' : 'var(--color-text-secondary)' }}
                  >
                    {cat.name}
                  </span>
                  <span
                    className="font-heading text-[10px] font-bold px-1.5 py-0.5 rounded"
                    style={{
                      backgroundColor: isActive ? 'rgba(34,211,238,0.15)' : 'rgba(56,89,138,0.15)',
                      color: isActive ? 'var(--color-accent-cyan)' : 'var(--color-text-muted)',
                    }}
                  >
                    {count}
                  </span>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBar"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-0.5 rounded-full hidden lg:block"
                    style={{ backgroundColor: 'var(--color-accent-cyan)' }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills display */}
        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {activeDescription && (
                <p className="text-sm mb-5" style={{ color: 'var(--color-text-secondary)' }}>
                  {activeDescription}
                </p>
              )}

              {/* Primary skills */}
              <div className="flex flex-wrap gap-2.5">
                {primarySkills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className="px-4 py-2 rounded-xl text-sm font-heading font-medium transition-all hover:scale-[1.03] cursor-default"
                    style={{
                      backgroundColor: 'rgba(34,211,238,0.08)',
                      border: '1px solid rgba(34,211,238,0.2)',
                      color: '#c7d2fe',
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>

              {/* Secondary skills */}
              {secondarySkills.length > 0 && (
                <>
                  <div className="mt-5 mb-3 flex items-center gap-3">
                    <span className="font-heading text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                      Also working with
                    </span>
                    <div className="h-px flex-1" style={{ background: 'var(--color-border)' }} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {secondarySkills.map((skill, i) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.03, duration: 0.25 }}
                        className="px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all hover:scale-[1.03] cursor-default"
                        style={{
                          backgroundColor: 'var(--color-bg-elevated)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
