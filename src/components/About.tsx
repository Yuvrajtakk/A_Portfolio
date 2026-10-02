import { motion } from 'framer-motion';
import { Cpu, Eye, Brain, Code2, Gamepad2, Wrench } from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionHeader, SectionWrapper } from './SectionHeader';

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="ABOUT"
        title="About Me"
      />

      <div className="grid lg:grid-cols-[1fr_1fr] gap-8 md:gap-12">
        {/* Left — narrative */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            I'm a Computer Science student specializing in Artificial Intelligence at Anand International College of Engineering, Jaipur. I build machine learning systems, computer vision applications, and LLM-powered software — and I care about the engineering decisions behind them, not just the results.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            My work ranges from training YOLOv8 models on merged datasets and tuning ByteTrack parameters to building Text-to-SQL pipelines with RAG for analytics. I also experiment with Unity game development as a secondary interest, exploring gameplay systems and boss AI mechanics. I learn by building, testing, and iterating.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-heading font-semibold"
              style={{ color: 'var(--color-accent-cyan)' }}
            >
              GitHub →
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-heading font-semibold"
              style={{ color: 'var(--color-accent-cyan)' }}
            >
              LinkedIn →
            </a>
          </div>
        </motion.div>

        {/* Right — focus cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="grid grid-cols-2 gap-3"
        >
          <FocusCard icon={Brain} title="Machine Learning" desc="Training, evaluating, and iterating on models with real datasets." />
          <FocusCard icon={Eye} title="Computer Vision" desc="Object detection, tracking, and real-time video analytics." />
          <FocusCard icon={Cpu} title="LLM Applications" desc="RAG, Text-to-SQL, and language model orchestration." />
          <FocusCard icon={Code2} title="Software Development" desc="Python, APIs, and building systems end-to-end." />
          <FocusCard icon={Gamepad2} title="Game Development" desc="Unity experiments with gameplay and AI mechanics." />
          <FocusCard icon={Wrench} title="Experimentation" desc="Testing ideas, debugging, and learning from failures." />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function FocusCard({ icon: Icon, title, desc }: { icon: typeof Cpu; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="p-4 rounded-xl transition-all"
      style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}
    >
      <Icon size={20} style={{ color: 'var(--color-accent-cyan)' }} />
      <h3 className="mt-3 font-heading text-sm font-bold text-slate-200">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {desc}
      </p>
    </motion.div>
  );
}
