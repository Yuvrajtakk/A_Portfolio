import { createContext, useContext, useRef } from 'react';
import { motion } from 'framer-motion';
import { pulseOpacity, useAmbientMotion } from '@/lib/ambientMotion';

const AmbientContext = createContext(false);

interface ProjectVisualProps {
  visualId: string;
}

export function ProjectVisual({ visualId }: ProjectVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useAmbientMotion(ref);
  return (
    <AmbientContext.Provider value={active}>
      <div ref={ref} className="w-full h-full">
        <VisualById visualId={visualId} />
      </div>
    </AmbientContext.Provider>
  );
}

function VisualById({ visualId }: ProjectVisualProps) {
  switch (visualId) {
    case 'traffic':
      return <TrafficVisual />;
    case 'logistics':
      return <LogisticsVisual />;
    case 'sports':
      return <SportsVisual />;
    case 'ckd':
      return <CKDVisual />;
    default:
      return <DefaultVisual />;
  }
}

function TrafficVisual() {
  const active = useContext(AmbientContext);
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1525, #0d1f35)' }}>
      {/* Road perspective */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a1525 0%, #0d1f35 40%, #111a2e 100%)',
        }}
      />
      {/* Road */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0"
        style={{
          borderLeft: '120px solid transparent',
          borderRight: '120px solid transparent',
          borderBottom: '200px solid #141e30',
          filter: 'blur(0.5px)',
        }}
      />
      {/* Lane lines */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-full" style={{ background: 'linear-gradient(to top, rgba(251,191,36,0.3), transparent 60%)' }} />

      {/* Bounding boxes */}
      <BoundingBox pos="left-[10%] top-[40%] md:left-[12%] md:top-[36%]" w="60px" h="40px" label="Car" color="cyan" delay={0} />
      <BoundingBox pos="left-[55%] top-[52%] md:left-[55%] md:top-[45%]" w="50px" h="35px" label="Truck" color="cyan" delay={0.5} />
      <BoundingBox pos="left-[36%] top-[46%] md:left-[30%] md:top-[52%]" w="35px" h="55px" label="Person" color="yellow" delay={1} />
      <BoundingBox pos="left-[76%] top-[42%] md:left-[72%] md:top-[36%]" w="45px" h="32px" label="Bus" color="cyan" delay={1.5} />

      {/* Tracking trails */}
      <motion.div
        className="absolute h-px left-[12%] top-[46%] md:left-[15%] md:top-[35%]"
        style={{ width: '80px', background: 'linear-gradient(to right, rgba(34,211,238,0.6), transparent)' }}
        {...pulseOpacity(active, [0.2, 0.7, 0.2], { duration: 3 })}
      />

      {/* Data tags */}
      <div className="absolute bottom-3 left-3 flex gap-2">
        <DataTag label="YOLOv8" />
        <DataTag label="ByteTrack" />
      </div>
      <div className="absolute bottom-3 right-3">
        <DataTag label="10 CLASSES" highlight />
      </div>
    </div>
  );
}

function LogisticsVisual() {
  const active = useContext(AmbientContext);
  const nodes = ['Orders', 'SQL', 'Reviews', 'RAG', 'LLM', 'Answer'];
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0a1525, #0d1a30)' }}>
      <div className="flex flex-wrap items-center justify-center gap-2 px-4 max-w-full">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="px-3 py-2 rounded-lg font-heading text-[11px] font-semibold tracking-wide whitespace-nowrap"
              style={{
                backgroundColor: i === 4 ? 'rgba(34,211,238,0.12)' : 'rgba(15,24,40,0.8)',
                border: `1px solid ${i === 4 ? 'rgba(34,211,238,0.4)' : 'var(--color-border)'}`,
                color: i === 4 ? 'var(--color-accent-cyan)' : '#94a3b8',
              }}
            >
              {node}
            </motion.div>
            {i < nodes.length - 1 && (
              <motion.div
                className="w-4 h-px mx-0.5"
                style={{ background: 'rgba(34,211,238,0.3)' }}
                {...pulseOpacity(active, [0.2, 0.7, 0.2], { duration: 1.5, delay: i * 0.2 })}
              />
            )}
          </div>
        ))}
      </div>
      {/* Pulsing data flow */}
      <div className="absolute bottom-3 left-3">
        <DataTag label="Text-to-SQL" />
      </div>
      <div className="absolute bottom-3 right-3">
        <DataTag label="RAG + Chroma" />
      </div>
    </div>
  );
}

function SportsVisual() {
  const active = useContext(AmbientContext);
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a1f15, #0d2818, #0a1f15)' }}>
      {/* Field lines */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent 48%, rgba(34,211,238,0.06) 48%, rgba(34,211,238,0.06) 52%, transparent 52%)' }} />
      <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: 'rgba(34,211,238,0.1)' }} />

      {/* Player dots with IDs */}
      <PlayerDot x="20%" y="35%" id="14" delay={0} />
      <PlayerDot x="45%" y="55%" id="22" delay={0.5} />
      <PlayerDot x="65%" y="40%" id="7" delay={1} />
      <PlayerDot x="30%" y="65%" id="31" delay={1.5} />
      <PlayerDot x="75%" y="60%" id="9" delay={2} />

      {/* Tracking trail */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
        <motion.path
          d="M80,70 Q120,90 180,110"
          fill="none"
          stroke="rgba(34,211,238,0.4)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 1 }}
          animate={{ pathLength: active ? [0, 1, 0] : 1 }}
          transition={active ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : undefined}
        />
        <motion.path
          d="M260,80 Q280,100 300,120"
          fill="none"
          stroke="rgba(251,191,36,0.3)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 1 }}
          animate={{ pathLength: active ? [0, 1, 0] : 1 }}
          transition={active ? { duration: 4, repeat: Infinity, delay: 1, ease: 'easeInOut' } : undefined}
        />
      </motion.svg>

      <div className="absolute bottom-3 left-3 flex gap-2">
        <DataTag label="YOLOv8m" />
        <DataTag label="ByteTrack" />
      </div>
      <div className="absolute bottom-3 right-3">
        <DataTag label="79 → 47 IDs" highlight />
      </div>
    </div>
  );
}

function CKDVisual() {
  const active = useContext(AmbientContext);
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d1015, #111827, #0d1015)' }}>
      {/* Feature grid */}
      <div className="grid grid-cols-6 gap-1.5 opacity-60">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-5 h-5 rounded-sm"
            style={{
              backgroundColor: i % 5 === 0 ? 'rgba(34,211,238,0.3)' : 'rgba(56,89,138,0.15)',
              border: '1px solid rgba(56,89,138,0.2)',
            }}
            {...pulseOpacity(active, [0.3, 0.7, 0.3], { duration: 2, delay: i * 0.08 })}
          />
        ))}
      </div>
      <div className="absolute bottom-3 left-3">
        <DataTag label="Scikit-learn" />
      </div>
      <div className="absolute bottom-3 right-3">
        <DataTag label="Clinical Data" />
      </div>
    </div>
  );
}

function DefaultVisual() {
  return (
    <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #0a1525, #0d1f35)' }} />
  );
}

function BoundingBox({ pos, w, h, label, color, delay }: { pos: string; w: string; h: string; label: string; color: string; delay: number }) {
  const active = useContext(AmbientContext);
  const borderColor = color === 'cyan' ? 'rgba(34,211,238,0.7)' : 'rgba(251,191,36,0.7)';
  return (
    <motion.div
      className={`absolute ${pos}`}
      style={{ width: w, height: h, border: `1.5px solid ${borderColor}` }}
      {...pulseOpacity(active, [0.4, 1, 0.4], { duration: 2.5, delay })}
    >
      <span
        className="absolute -top-5 left-0 font-heading text-[9px] font-semibold tracking-wide px-1 rounded-sm whitespace-nowrap"
        style={{ backgroundColor: borderColor, color: '#0a1525' }}
      >
        {label}
      </span>
    </motion.div>
  );
}

function PlayerDot({ x, y, id, delay }: { x: string; y: string; id: string; delay: number }) {
  const active = useContext(AmbientContext);
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      {...pulseOpacity(active, [0.5, 1, 0.5], { duration: 2, delay })}
    >
      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(34,211,238,0.7)', border: '2px solid rgba(34,211,238,0.9)' }} />
      <span
        className="absolute -top-5 left-1/2 -translate-x-1/2 font-heading text-[9px] font-bold px-1.5 rounded whitespace-nowrap"
        style={{ backgroundColor: 'rgba(34,211,238,0.9)', color: '#0a1f15' }}
      >
        #{id}
      </span>
    </motion.div>
  );
}

function DataTag({ label, highlight }: { label: string; highlight?: boolean }) {
  return (
    <span
      className="relative z-10 px-2 py-0.5 rounded font-heading text-[9px] font-semibold tracking-wider"
      style={{
        backgroundColor: 'rgba(7,11,20,0.7)',
        color: highlight ? 'var(--color-accent-yellow)' : 'var(--color-text-secondary)',
        border: `1px solid ${highlight ? 'rgba(251,191,36,0.3)' : 'var(--color-border)'}`,
      }}
    >
      {label}
    </span>
  );
}
