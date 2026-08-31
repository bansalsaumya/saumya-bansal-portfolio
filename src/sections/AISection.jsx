import { motion } from 'framer-motion';
import { Sparkles, Cpu, Image, Video, FileText, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const aiCategories = [
  { icon: Cpu, title: 'AI-Assisted Development', description: 'Using AI tools to accelerate coding, debugging and architecture decisions.' },
  { icon: Sparkles, title: 'Prompt Engineering', description: 'Crafting effective prompts for LLMs to produce accurate, useful outputs.' },
  { icon: Image, title: 'AI Image Generation', description: 'Creating high-fidelity visual assets and mockups using AI generation tools.' },
  { icon: Video, title: 'AI Video Generation', description: 'Producing video content, reels and animations with AI-powered workflows.' },
  { icon: FileText, title: 'AI Content Creation', description: 'Generating copy, documentation and marketing content using AI tools.' },
  { icon: Zap, title: 'AI Workflow Automation', description: 'Building automated pipelines that leverage AI for repetitive tasks.' },
];

export default function AISection() {
  return (
    <section className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-max px-6">
        <SectionHeading
          label="AI × Development × Creativity"
          title="AI-Powered Workflow"
          description="I use modern AI tools to accelerate development, research, content creation, visual production and creative workflows."
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
          {aiCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative group p-3.5 sm:p-7 rounded-xl sm:rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] card-hover overflow-hidden flex flex-col justify-between"
            >
              {/* Gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[var(--color-accent-glow)] inline-flex mb-3 sm:mb-5 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <cat.icon size={16} className="sm:w-[22px] sm:h-[22px] text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xs sm:text-lg font-bold mb-1.5 sm:mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                  {cat.title}
                </h3>
                <p className="text-[0.65rem] sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-[var(--color-text-muted)] mt-10 max-w-md mx-auto"
        >
          I understand both technology and the business side of digital products — this is a major differentiator.
        </motion.p>
      </div>
    </section>
  );
}
