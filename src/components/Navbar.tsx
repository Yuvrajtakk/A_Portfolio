import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/data/profile';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-opacity-80 backdrop-blur-md border-b'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(7, 11, 20, 0.85)' : 'transparent',
          borderBottomColor: scrolled ? 'var(--color-border)' : 'transparent',
        }}
      >
        <nav className="container-max flex items-center justify-between px-6 h-16">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="font-heading font-bold text-lg tracking-tight text-slate-100 hover:text-cyan-300 transition-colors"
          >
            Yuvraj<span style={{ color: 'var(--color-accent-cyan)' }}>.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-heading text-sm font-medium tracking-wide text-slate-400 hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pl-2 border-l" style={{ borderColor: 'var(--color-border)' }}>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-cyan-300 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{ backgroundColor: 'rgba(7, 11, 20, 0.97)', borderBottom: '1px solid var(--color-border)' }}
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-heading text-base font-medium tracking-wide text-slate-300 hover:text-cyan-300 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
