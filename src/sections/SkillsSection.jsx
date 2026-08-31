import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Wrench, Sparkles, TrendingUp } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/skills';

const iconMap = { Monitor, Server, Wrench, Sparkles, TrendingUp };

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('frontend');
  const active = skillCategories.find((c) => c.id === activeTab);
  const Icon = iconMap[active?.icon] || Monitor;

  return (
    <section id="skills" className="section-padding">
      <div className="container-max px-6">
        <SectionHeading
          label="Technical Skills"
          title="Technologies & Tools I Work With"
          align="center"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {skillCategories.map((cat) => {
            const CatIcon = iconMap[cat.icon] || Monitor;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/20'
                    : 'bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30'
                }`}
              >
                <CatIcon size={14} className="sm:w-4 sm:h-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glow-border rounded-2xl p-5 sm:p-8 bg-[var(--color-bg-card)]">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[var(--color-accent-glow)]">
                  <Icon size={18} className="sm:w-5 sm:h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  {active?.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                {active?.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="text-center sm:text-left px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent-glow)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Skills Grid — 2 columns on mobile, 3 on tablet, 5 on desktop */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {skillCategories.map((cat) => {
            const CatIcon = iconMap[cat.icon] || Monitor;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-3.5 sm:p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] card-hover flex flex-col justify-between"
              >
                <div>
                  <CatIcon size={16} className="sm:w-[18px] sm:h-[18px] text-[var(--color-accent)] mb-2 sm:mb-3" />
                  <h4 className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">{cat.title}</h4>
                </div>
                <p className="text-[0.65rem] sm:text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {cat.skills.slice(0, 3).join(' · ')}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
