import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Eye } from 'lucide-react';
import { profile } from '@/data/profile';
import { scrollToSelector } from '@/lib/scroll';
import { pulseOpacity, useAmbientMotion } from '@/lib/ambientMotion';

const pipelineSteps = [
  { label: 'VISION', icon: '◉' },
  { label: 'DETECTION', icon: '◧' },
  { label: 'TRACKING', icon: '↻' },
  { label: 'INTELLIGENCE', icon: '◈' },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const active = useAmbientMotion(sectionRef);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-cinematic bg-grid overflow-hidden"
    >
      {/* Subtle gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.3), transparent)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.2), transparent)' }}
      />

      <div className="container-max px-6 pt-20 pb-12 w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: 'var(--color-accent-cyan)' }}
              />
              <span
                className="font-heading text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {profile.location}
              </span>
            </div>

            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-slate-50 leading-[1.05]">
              YUVRAJ
              <br />
              TAK
            </h1>

            <p
              className="mt-4 font-heading text-lg md:text-xl font-medium"
              style={{ color: 'var(--color-accent-cyan)' }}
            >
              Computer Science &amp; AI Student
            </p>

            <p
              className="mt-4 text-base md:text-lg max-w-xl leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSelector('#work')}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg font-heading text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(34, 211, 238, 0.1)',
                  border: '1px solid rgba(34, 211, 238, 0.3)',
                  color: 'var(--color-accent-cyan)',
                }}
              >
                <Eye size={16} />
                VIEW WORK
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-heading text-sm font-semibold text-slate-300 transition-all duration-300 hover:text-cyan-300"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <Github size={16} />
                GITHUB
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-heading text-sm font-semibold text-slate-300 transition-all duration-300 hover:text-cyan-300"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <Linkedin size={16} />
                LINKEDIN
              </a>
            </div>
          </motion.div>

          {/* Right — AI Pipeline visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:flex flex-col items-center gap-0 py-4"
          >
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                  className="relative flex items-center gap-4 px-6 py-4 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(15, 24, 40, 0.8)',
                    border: '1px solid var(--color-border)',
                    minWidth: '200px',
                  }}
                >
                  <span
                    className="text-xl"
                    style={{ color: i === pipelineSteps.length - 1 ? 'var(--color-accent-yellow)' : 'var(--color-accent-cyan)' }}
                  >
                    {step.icon}
                  </span>
                  <span className="font-heading text-sm font-semibold tracking-wider text-slate-200">
                    {step.label}
                  </span>
                  <motion.span
                    className="absolute -left-1 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full"
                    style={{ backgroundColor: 'var(--color-accent-cyan)' }}
                    {...pulseOpacity(active, [0.3, 1, 0.3], { duration: 2, delay: i * 0.3 })}
                  />
                </motion.div>
                {i < pipelineSteps.length - 1 && (
                  <motion.div
                    className="h-8 w-px"
                    style={{ background: 'linear-gradient(to bottom, rgba(34,211,238,0.4), rgba(34,211,238,0.1))' }}
                    {...pulseOpacity(active, [0.3, 0.8, 0.3], { duration: 2, delay: i * 0.3 })}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
            Scroll
          </span>
          <motion.div
            className="h-8 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--color-text-muted), transparent)' }}
            {...pulseOpacity(active, [0.3, 1, 0.3], { duration: 2 })}
          />
        </motion.div>
      </div>
    </section>
  );
}
