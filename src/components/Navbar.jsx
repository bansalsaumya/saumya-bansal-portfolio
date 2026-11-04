import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X, Sun, Moon } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { contactInfo } from '../data/services';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Client Work', href: '#clients' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsDark(false);
      document.body.classList.add('light');
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'navbar-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="container-max flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex flex-col">
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Saumya Bansal
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Full-Stack &amp; 3D Developer
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] transition-colors rounded-lg hover:bg-[var(--color-accent-glow)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] hover:bg-[var(--color-accent-glow)] transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] hover:bg-[var(--color-accent-glow)] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] hover:bg-[var(--color-accent-glow)] transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={contactInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2 !px-4 !text-xs"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-primary)]/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent-light)] transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center gap-4 mt-10">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] transition-all"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] transition-all"
              >
                <LinkedInIcon size={20} />
              </a>
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] transition-all cursor-pointer"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
