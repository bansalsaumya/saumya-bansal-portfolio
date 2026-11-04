import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code2, Sparkles, Briefcase, Cpu } from 'lucide-react';
import { contactInfo } from '../data/services';
import DeveloperWorkspace3D from '../components/DeveloperWorkspace3D';

const badges = [
  { label: 'Next.js & React', icon: Code2 },
  { label: 'Three.js 3D & GSAP', icon: Sparkles },
  { label: 'JavaScript & Python', icon: Cpu },
  { label: 'Technical SEO (#1)', icon: Briefcase },
];

const stats = [
  { label: 'Live Client Businesses Scaled', value: '6+' },
  { label: 'Google Search & Map Rankings', value: '#1' },
  { label: '3D WebGL & Next.js Apps', value: '60 FPS' },
  { label: 'Community & Audience Growth', value: '12.8K+' },
];

function checkWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

export default function HeroSection() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setHasWebGL(checkWebGL());
  }, []);
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-accent)] rounded-full opacity-[0.06] blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--color-accent-secondary)] rounded-full opacity-[0.04] blur-[120px]" />

      <div className="container-max px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 badge mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for US / Global Remote Roles &amp; Freelance
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[var(--color-text-secondary)] text-base mb-2"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Saumya
              <br />
              <span className="gradient-text">Bansal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-[var(--color-text-secondary)] font-medium mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Full-Stack &amp; 3D Web Developer · Technical SEO Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[var(--color-text-muted)] text-base leading-relaxed max-w-lg mb-8"
            >
              I engineer high-converting Next.js &amp; React applications, 60 FPS Three.js 3D WebGL experiences, and #1 Google-ranked digital platforms for real businesses. Founder at{' '}
              <a
                href="https://growvia-solutions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-light)] underline decoration-[var(--color-accent)]/40 hover:decoration-[var(--color-accent)]"
              >
                Growvia Solutions
              </a>
              .
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a href="#projects" className="btn-primary">
                Explore 3D &amp; Web Apps <ArrowRight size={16} />
              </a>
              <a href="#clients" className="btn-secondary">
                View Client Track Record
              </a>
              <a
                href={contactInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Download size={16} /> Resume (PDF)
              </a>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {badges.map((b) => (
                <span key={b.label} className="badge">
                  <b.icon size={12} className="mr-1.5" />
                  {b.label}
                </span>
              ))}
            </motion.div>

            {/* Mobile Portrait Fallback (Visible on mobile/tablet, hidden on desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 lg:hidden flex justify-center"
            >
              <div className="w-64 h-80 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-2xl bg-[var(--color-bg-card)]">
                <img
                  src="/assets/saumya-portrait.png"
                  alt="Saumya Bansal"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>

          {/* Right — Interactive 3D Visual with CSS Fallback */}
          <div className="relative hidden lg:flex items-center justify-center">
            {hasWebGL ? (
              <DeveloperWorkspace3D />
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative flex items-center justify-center"
              >
                <div className="absolute w-[420px] h-[420px] rounded-full border border-[var(--color-border)] animate-spin-slow" />
                <div
                  className="absolute w-[340px] h-[340px] rounded-full border border-[var(--color-border)] opacity-50"
                  style={{
                    animationDirection: 'reverse',
                    animation: 'spin-slow 30s linear infinite reverse',
                  }}
                />

                <div className="relative w-80 glow-border rounded-2xl bg-[var(--color-bg-card)] p-6 animate-float">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    <span className="ml-2 text-xs text-[var(--color-text-muted)] font-mono">
                      saumya.dev
                    </span>
                  </div>
                  <div className="font-mono text-xs leading-6">
                    <p>
                      <span className="text-[var(--color-accent)]">const</span>{' '}
                      <span className="text-emerald-400">engineer</span> = {'{'}
                    </p>
                    <p className="ml-4">
                      <span className="text-[var(--color-text-muted)]">name:</span>{' '}
                      <span className="text-amber-300">&quot;Saumya Bansal&quot;</span>,
                    </p>
                    <p className="ml-4">
                      <span className="text-[var(--color-text-muted)]">stack:</span> [
                      <span className="text-emerald-400">&quot;Next.js&quot;</span>,{' '}
                      <span className="text-emerald-400">&quot;Three.js&quot;</span>],
                    </p>
                    <p className="ml-4">
                      <span className="text-[var(--color-text-muted)]">clients:</span>{' '}
                      <span className="text-amber-300">&quot;6+ Live Sites&quot;</span>,
                    </p>
                    <p className="ml-4">
                      <span className="text-[var(--color-text-muted)]">seoRank:</span>{' '}
                      <span className="text-emerald-400">&quot;#1 Google&quot;</span>
                    </p>
                    <p>{'}'}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-[var(--color-border)]"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-[var(--color-bg-card)]/50 border border-[var(--color-border)]">
              <p
                className="text-3xl md:text-4xl font-bold gradient-text"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1.5 uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
