import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-8 bg-accent-cyan" style={{ backgroundColor: 'var(--color-accent-cyan)' }} />
        <span
          className="font-heading text-xs font-medium uppercase tracking-[0.2em]"
          style={{ color: 'var(--color-accent-cyan)' }}
        >
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100">{title}</h2>
      {description && (
        <p className="mt-3 text-base md:text-lg max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding relative ${className}`}>
      <div className="container-max">{children}</div>
    </section>
  );
}
