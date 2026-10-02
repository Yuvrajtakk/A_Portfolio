import { Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t"
      style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-sm text-slate-300">
            Yuvraj Tak
          </span>
          <span style={{ color: 'var(--color-text-muted)' }}>•</span>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Computer Science &amp; AI Student
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>

        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
