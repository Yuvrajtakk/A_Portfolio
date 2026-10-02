import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionWrapper } from './SectionHeader';

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8" style={{ backgroundColor: 'var(--color-accent-cyan)' }} />
          <span
            className="font-heading text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--color-accent-cyan)' }}
          >
            CONTACT
          </span>
          <div className="h-px w-8" style={{ backgroundColor: 'var(--color-accent-cyan)' }} />
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-50 leading-tight">
          Let's build something
          <span style={{ color: 'var(--color-accent-cyan)' }}> useful.</span>
        </h2>

        <p className="mt-4 text-base md:text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
          Open to internships, collaborations, and technical conversations. Reach out through either platform below.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-heading text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: 'rgba(34,211,238,0.08)',
              border: '1px solid rgba(34,211,238,0.3)',
              color: 'var(--color-accent-cyan)',
            }}
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-heading text-sm font-semibold text-slate-300 transition-all duration-300 hover:scale-[1.03] hover:text-cyan-300"
            style={{ border: '1px solid var(--color-border)' }}
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
